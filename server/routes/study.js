/**
 * Created by jgb on 2016-07-28.
 */
import express from 'express';
import colors from 'colors';

export default function study(data) {
    const router = express.Router();

    router.post('/', (req,res)=>{

        return res.json([{title: "post title",topic:"post content",id:"post member"}]);
    });

    router.get('/', (req,res)=>{

        return res.json({title:data.title,topic:data.topic,member:data.id});
    });

    return router;
}
