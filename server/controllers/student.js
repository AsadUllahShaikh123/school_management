import studentData from "../models/student.js";

export const getStudents =async (req,res)=>{
  try
  {
    const allStudents = await studentData.find();
    res.status(200).json(allStudents)
  }
  catch(error){
    res.status(404).json({message:error.message})
  }
}

export const createStudent=(req,res)=>{
  // here the student is the variable
  const student = req.body;
  // here the studentData is the collection 
  const newStudent = new studentData(student)

  try{
    newStudent.save();
    res.status(201).json(newStudent);
  }
  catch(error){
    res.status(409).json({message:error.message})
  }
}
  export const deleteStudent= async(req,res)=>{
  const id = req.params.id;
  try {
    await studentData.findByIdAndRemove(id).exec();
    res.send('Successfully Deleted');
  }
  catch(error){
    console.log(error,'error');
  }

}