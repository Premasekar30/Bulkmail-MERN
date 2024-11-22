import express, { json } from "express";
import cors from "cors";
import { createTransport } from "nodemailer";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(json());

mongoose.connect("mongodb+srv://muthupandim5799:ArchanAMu2@cluster0.rahi7.mongodb.net/passkey?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log("Connected to DB");
}).catch(() => {
    console.log("Failed to connect");
});

const credential = mongoose.model("credential", {}, "bulkmail");

app.post("/sendmail", (req, res) => {
    let msg = req.body.msg;
    let emailList = req.body.mailList;

    credential.find().then((data) => {
        const transporter = createTransport({
            service: "gmail",
            auth: {
                user: data[0].toJSON().user,
                pass: data[0].toJSON().pass,
            },
        });

        new Promise(async (resolve, reject) => {
            try {
                for (let index = 0; index < emailList.length; index++) {
                    await transporter.sendMail(
                        {
                            from: "smartmu2muthu@gmail.com",
                            to: emailList[index],
                            subject: "A message from Mu2",
                            text: msg
                        }
                    )
                }
                resolve("Success");
            } catch (error) {
                reject("Fail");
            }
        }).then(() => {
            res.send(true);
        }).catch(() => {
            res.send(false);
        });
    }).catch((error) => {
        console.log(error);
    });
});

app.listen(4000, () => {
    console.log(`Server started at port 4000...`);
});