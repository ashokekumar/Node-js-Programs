
const express = require('express');
const Joi = require('joi');

const app = express();
app.use(express.json());

const courses = [
    {id: 1, name:'Phys'},
    {id: 2, name:'Phys2'},
    {id: 3, name:'Phys3'}
];

app.get('/', (req, res) => { 
    res.send('Hello World.');
});

app.get('/api/courses' , (req, res) => {
res.send(courses);
});


app.get('/api/courses/:id',(req, res) => {
const course = courses.find( s => s.id === parseInt(req.params.id));
if (!course) res.status(404).send('course not found');
else res.send(course);
});




app.post('/api/courses',(req, res) => {

    const {error} = validateCourse(req.body);
    if(error)  return res.status(400).send(error.details[0].message);

    const course = {
        id: courses.length +1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
});


function validateCourse(course){

    const schema = {
        name: Joi.string().min(3).required()
    };
    
    return Joi.validate(course, schema);
    
}

const port =process.env.PORT || 3000; 
app.listen(port, () => console.log(`listning on ${port}...`));