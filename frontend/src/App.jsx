import { useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";

function App() {
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState(false);
  const [mailList,setMailList] = useState([]);

  const handleMsg = (e) => {
    setMsg(e.target.value);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader()
    reader.onload = (e) => {
      const data = e.target.result;
      const workBook = XLSX.read(data, { type: 'binary' });
      const sheetName = workBook.SheetNames[0];
      const worksheet = workBook.Sheets[sheetName];
      const emailList = XLSX.utils.sheet_to_json(worksheet, { header: 'A' });
      const totalEmail = emailList.map((item)=>{return item.A});
      console.log(totalEmail);
      setMailList(totalEmail)
    }
    reader.readAsArrayBuffer(file);
  }

  const send = () => {
    setStatus(true);
    axios.post("http://localhost:4000/sendmail", { msg: msg, mailList:mailList })
      .then((data) => {
        if (data.data === true) {
          alert("Email Sent Successfully!");
          setStatus(false);
        } else {
          alert("Failed to Send");
        }
      });
  };

  return (
    <div>
      <div className="bg-blue-950 text-white text-center">
        <h1 className="text-2xl font-medium px-5 py-3">BulkMail</h1>
      </div>

      <div className="bg-blue-800 text-white text-center">
        <h3 className="font-medium px-5 py-3">We can help your business with sending multiple emails at once</h3>
      </div>

      <div className="bg-blue-600 text-white text-center">
        <h3 className="font-medium px-5 py-3">Drag and Drop</h3>
      </div>

      <div className="bg-blue-400 flex flex-col items-center text-black px-5 py-3">
        <textarea value={msg} onChange={handleMsg} className="w-4/5 h-32 py-2 outline-none px-2 border border-black rounded-md" placeholder="Enter the email text..."></textarea>
        <div>
          <input type="file" onChange={handleFile} className="border-4 border-dashed p-4 my-5" />
        </div>
        <p>Total Emails in the file: {mailList.length}</p>
        <button onClick={send} className="mt-2 bg-blue-950 p-2 text-white font-medium rounded-md w-fit">{status ? "Sending..." : "Send"}</button>
      </div>

      <div className="bg-blue-300 text-white text-center p-8">

      </div>

      <div className="bg-blue-200 text-white text-center p-8">

      </div>
    </div>

  );
}

export default App;
