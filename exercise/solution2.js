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

// async function getCourses(){
//     return await Course
//         .find({isPublished: true, tags: 'backend'})
//         .sort({name: 1})
//         .select({name: 1 , isPublished: 1, backend: 1});
// }

// async function getCourses(){
//     return await Course
//         .find({isPublished: true, tags: {$in:['frontend','backend']}} )
//         .sort('-price')
//         .select('name author price');
// }

async function getCourses(){
    return await Course
        .find({isPublished: true, tags: {$in:['frontend','backend']}, price: {$gt: 10} })
        .or({price: {$gt: 10}},
            {name: /.*by.*/i })
        .sort('-price')
        .select('name author price');
}
async function run(){
    const courses = await getCourses(); 
    console.log(courses);
}

run();
