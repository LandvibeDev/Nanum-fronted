import express from 'express';


//라우트 예제 코드
const router = express.Router();

router.get('/', (req, res)=>{
  res.send('posts');
})

router.get('/read/:id',(req,res) => {
  res.send('You are reading post ' + req.params.id);
});

export default router;