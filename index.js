const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/playground')
    .then(() => console.log('connected to mongodb....'))
    .catch((err) => console.log('could not connect to mongodb', err));

const courseSchema = mongoose.Schema({
    name: String,
    author: String,
    tags: [String],
    date: {type: Date, default: Date.now},
    isPublished: Boolean
});

const Course = mongoose.model('course',courseSchema);
const course = new Course({
    name: 'Angular course',
    author: 'mosh',
    tags: ['angular', 'frontend'],
    isPublished: true
});

async function createCourse(){
    const result = await course.save();
    console.log(result);
}

createCourse();