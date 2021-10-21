import UserData from "../../../models/userData";
import createHandler from "../../../mongoose/createHandler";
import { emailConfig, appName } from "../../../components/global";
// import { decrypt } from "../../../components/encryption";
import fs from 'fs';
import { sendEmail } from '../../../components/emailSend';

const handler = createHandler();

handler.post(async (req, res) => {
    try {
        UserData.findOne({ 'email': req.body.email }, function (err, user) {
            if (user) {
                    if (user.isEmailverified == true) {
                        //Email send
                        var emailSubject = "NikhilApp - Forgot Password";
                        var emailContent = fs.readFileSync('template/resetpwd.txt').toString();
                        emailContent = emailContent.replace("##websiteHost##", emailConfig.websiteHost);
                        emailContent = emailContent.replace("##websiteHost##", emailConfig.websiteHost);
                        emailContent = emailContent.replace("##websiteHost##", emailConfig.websiteHost);
                        emailContent = emailContent.replace("##websiteHost##", emailConfig.websiteHost);
                        emailContent = emailContent.replace("##contactemail##", emailConfig.contactemail);
                        emailContent = emailContent.replace("##contactemail##", emailConfig.contactemail);
                        emailContent = emailContent.replace("##appname##", appName);
                        emailContent = emailContent.replace("##appname##", appName);
                        emailContent = emailContent.replace("##appname##", appName);
                        emailContent = emailContent.replace("##email##", req.body.email);
                        emailContent = emailContent.replace("##password##", user.password);
                        emailContent = emailContent.replace("##logoLink##", emailConfig.logoUrl);

                        sendEmail(req.body.email, emailSubject, emailContent);
                        res.status(200).send({ success: true, message: 'Email sent successful.' });
                    }
                    else if (user.isEmailverified != true) {
                        res.json({ success: false, code: -2, message: 'Your email is not verified. Please check your mail.' });
                    }
       
            }
            else {
                res.json({ success: false, code: -1, message: 'Email is not registered. Please sign up first.' });
            }
        });
    }
    catch (error) {
        res.status(200).send({ success: false, code: -4, message: 'Something went wrong! Please try again.' });
    }
});

export default (req, res) => handler.run(req, res);