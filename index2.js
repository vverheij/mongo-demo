const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mongo-exercises');

const courseSchema = new mongoose.Schema({
  name: String,
  author: String, 
  tags: [ String ],
  date: Date, 
  isPublished: Boolean,
  price: Number
});

const Course = mongoose.model('Course', courseSchema);

async function getCourses() {
    const pageNumber = 1;
    const pageSize = 20;

    const courses = await Course
    .find({author:'Mosh'})
    .skip((pageNumber -1) * pageSize)
    .limit(pageSize)
    .select('name isPublished');
    return courses;
}

async function updateCourse() {

}

// async function run() {
//     const courses = await getCourses();
//     console.log(courses);
// }

// run();

updateCourse();