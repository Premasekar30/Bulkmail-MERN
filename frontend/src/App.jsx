import { useState } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import Header from "./components/Header";
import BulkMail from "./components/BulkMail";

function App() {
  const [msg, setMsg] = useState("");
  const [status, setStatus] = useState(false);
  const [mailList, setMailList] = useState([]);

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
      const totalEmail = emailList.map((item) => { return item.A });
      console.log(totalEmail);
      setMailList(totalEmail)
    }
    reader.readAsArrayBuffer(file);
  }

  const send = () => {
    setStatus(true);
    axios.post("http://localhost:4000/sendmail", { msg: msg, mailList: mailList })
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
    <main>
      <Header />

      <BulkMail msg={msg} handleMsg={handleMsg} handleFile={handleFile} status={status} send={send} mailList={mailList} />

      <div className="bg-blue-300 text-white text-center p-8">

      </div>

      <div className="bg-blue-200 text-white text-center p-8">

      </div>
    </main>

  );
}

export default App;
