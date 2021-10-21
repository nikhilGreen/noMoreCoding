import UserData from "../../../../models/userData";
import createHandler from "../../../../mongoose/createHandler";
import { userType, emailConfig, appName } from "../../../../components/global";
// import { absoluteUrl } from "../../../components/getAbsoluteUrl";
// import { encrypt } from "../../../components/encryption";
var fs = require('fs');
import { sendEmail } from '../../../../components/emailSend';

const handler = createHandler();

handler.post(async (req, res) => {
    console.log(req.body)
    try {

        UserData.findOne({ 'email': req.body.email }, function (err, user) {
            console.log('userData',user)
            if (user) {
                console.log('user already signed up')
                if (user.isEmailverified) {
                    console.log('user already signed up and verified')
                    res.status(200).send({ success: true, auth: true, user: user, message: 'Signup successful & Verified already.' });
                } else {
                    console.log('user already signed up but not verified')
                    res.status(200).send({ success: false, user: user, message: 'Already ! Signup please verify email address ' });
                }
  
            }
            else {     
                console.log('else condn')               
                var newUser = new UserData(req.body);
                console.log('working till here')
                console.log(newUser)
                newUser.save(function (err, userSaved) {
                    console.log('working till here 2',userSaved)
                    if (err) res.send(err);

                        // send verification email logic write here
                        var verificationLink = "<a style='font-weight: 500;padding:10px 16px;text-decoration:none;color:#fff; border-radius: 6px;background-color: #59b4de;border-color: #46b8da;'  href = '"
                        + "http://localhost:3000/signin" + "?id="
                        + userSaved._id + "" + "&vc="
                        + "'>Click here to verify email</a>";
                        

                        console.log('working till here 3')
                    //Email send
                    var emailSubject = "Welcome to Myapp";
                    var emailContent = fs.readFileSync('template/Confirmation.txt').toString();
              
                    emailContent = emailContent.replace("##url##", verificationLink);
                    emailContent = emailContent.replace("##logoLink##", emailConfig.logoUrl);
                    emailContent = emailContent.replace("##websiteHost##", emailConfig.websiteHost);
                    emailContent = emailContent.replace("##contactemail##", emailConfig.contactemail);
                    emailContent = emailContent.replace("##contactemail##", emailConfig.contactemail);
                    emailContent = emailContent.replace("##appname##", "appName");
                    emailContent = emailContent.replace("##appname##", "appName");
                    emailContent = emailContent.replace("##appname##", "appName");
                    emailContent = emailContent.replace("##appname##", "appName");
                    emailContent = emailContent.replace("##appname##", "appName");
                    sendEmail(req.body.email, emailSubject, emailContent);

                    res.status(200).send({ success: true, auth: true, user: userSaved, message: 'Signup successful.' });
                });
            }
        });

    }
    catch (error) {
        res.status(200).send({ success: false, code: -4, message: 'Something went wrong! Please try again.' });
    }
});

export default (req, res) => handler.run(req, res);


// import userData from "../../../models/userData";
// import createHandler from "../../../mongoose/createHandler";
// const handler = createHandler();

// handler.post(async (req, res) => {
//     await postUser(req, res)
// });

// const postUser = async (req, res) => {
//     const { firstName, lastName, email, password } = req.body
//     const user = await new userData({
//         firstName,
//         lastName,
//         email,
//         password
//     }).save()
//     res.status(201).json(user)
// }
// export default (req, res) => handler.run(req, res)