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
/*
async function getCourses(){
    return await Course
        .find({isPublished: true});
}

async function run(){
    const courses = await getCourses(); 
    console.log(courses);
}

run();
*/