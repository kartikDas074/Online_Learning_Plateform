import courses from '../../Data/CourseListAll.json'
export const FeatchCourse= async ()=>{
    let course=await courses;
    return course;
} 