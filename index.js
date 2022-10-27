const express =require('express');
const app =express();
const port = process.env.PORT || 5000;
const cors = require('cors');
const categories = require('./data/categories.json');
const courses=require('./data/courses.json');
app.use(cors());

app.get('/',(req,res)=>{
    res.send('hlw from server')
})
app.get('/categories',(req,res)=>{
    res.send(categories)
})

app.get('/courses',(req,res)=>{
    res.send(courses)
})
app.get('/courses/:id',(req,res)=>{
    const id = req.params.id;
    const courseId = courses.filter(course=>course.category_id==id)
    res.send(courseId)
})
app.get('/categories/:id',(req,res)=>{
    const id = req.params.id;
    const courseId = courses.filter(course=>course.category_id==id)
    res.send(courseId)
})
app.get('/cours',(req,res)=>{
    res.send(courses)
})
app.get('/cours/:id',(req,res)=>{
    const id = req.params.id;
    const courId = courses.find(c=>c._id==id)
    res.send(courId)
})


app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})