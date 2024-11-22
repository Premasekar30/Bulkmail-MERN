const BulkMail = (props) => {
    const msg = props.msg;
    const handleMsg = props.handleMsg;
    const handleFile = props.handleFile;
    const status = props.status;
    const send = props.send;
    const mailList = props.mailList;

    return (
        <section className="bg-blue-400 flex flex-col items-center text-black px-5 py-3">
            <textarea value={msg} onChange={handleMsg} className="w-4/5 h-32 py-2 outline-none px-2 border border-black rounded-md" placeholder="Enter the email text..."></textarea>
            <div>
                <input type="file" onChange={handleFile} className="border-4 border-dashed p-4 my-5" />
            </div>
            <p>Total Emails in the file: {mailList.length}</p>
            <button onClick={send} className="mt-2 bg-blue-950 p-2 text-white font-medium rounded-md w-fit">{status ? "Sending..." : "Send"}</button>
        </section>
    )
}

export default BulkMail;