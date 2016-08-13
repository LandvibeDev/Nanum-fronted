/**
 * Created by jgb on 2016-08-09.
 */
import express from 'express';

export default function login() {
    const router = express.Router();

    router.post('/', (req,res)=>{
        console.log(req.body);
       // if(req.body.id == "admin" && req.body.password == "1234"){
            let session = req.session;
            session.loginInfo = {
                id: req.body.id
            };

            // RETURN SUCCESS
            return res.json({success:true});
       // }else{
       //     return res.json({success:false});
        //}

    });

    router.get('/getinfo', (req, res) => {
        if(typeof req.session.loginInfo === "undefined") {
            return res.json({success:false});
        }

        res.json({ info: req.session.loginInfo });
    });

    router.post('/logout', (req, res) => {
        req.session.destroy(err => { if(err) throw err; });
        return true;
    });

    return router;
}