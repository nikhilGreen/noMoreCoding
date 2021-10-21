import userData from "../../../models/userData";
import createHandler from "../../../mongoose/createHandler";
import { loginType } from "../../../components/global";
import jwt from 'jsonwebtoken';
const handler = createHandler();

handler.post(async (req, res) => {
    try {
        if (loginType.socialSite == req.body.loginType) {
            console.log('social login');
            let userfind = await userData.findOne({ 'email': req.body.email });
            if (userfind) { 
                var token = jwt.sign({ id: userfind._id }, 'nikhilapp', { expiresIn: '999 years' });
                res.status(200).send({success: true, auth: true ,token: token,user: userfind, message: 'Login successful.'})
            }else{
                req.body.isEmailverified = true;
                var newUser = new userData(req.body);
                console.log(newUser)
                newUser.save(function (err, userSaved) {
                    if (err) res.send(err);
                    var token = jwt.sign({ id: userSaved._id }, 'nikhilapp', { expiresIn: '999 years' });
                    res.status(200).send({ success: true, auth: true,token: token, user: userSaved, message: 'Signup successful.' });
                })
            }
            return
        } 
        
        
        else {
        let userfind = await userData.findOne({ 'email': req.body.email });
        console.log(userfind)
        console.log(req.body.password)
        console.log(userfind.password)
        if (userfind) {
            if (userfind.password == req.body.password) {
                console.log('password matched');
                if (userfind.isEmailverified) {
                    console.log('Email verified');
                    var token = jwt.sign({ id: userfind._id }, 'nikhilapp', { expiresIn: '999 years' });
                    res.status(200).send({success: true, auth: true ,token: token,user: userfind, message: 'Login successful.'})
                }else{
                    console.log('Email not verified');
                    res.status(200).send({ success: false, code: -1, message: 'Please verify your email' });
                    
                } 
            }else{
                console.log('password not matched');
                res.status(200).send({ success: false, code: -2, message: 'Invalid Password' });
            }
        } else {
            console.log('user not present');
            res.status(200).send({ success: false, code: -3, message: 'Invalid Email' });
        }
        return
    }
    } catch (error) {
        console.log(error)
    }
})

export default (req, res) => handler.run(req, res);