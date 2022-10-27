export const getStudents =async (req,res)=>{
  try
  {
    const allStudents = await student.find();
    res.status(200).json(allStudents)
  }
  catch(error){
    res.status(404).json({message:error.message})
  }
}

export const createStudent=(req,res)=>{
  // here the student is the variable
  const student = req.body;
  // here the student is the collection 
  const newStudent = new student(student)

  try{
    newStudent.save();
    res.status(201).json(newStudent);
  }
  catch(error){
    res.status(409).json({message:error.message})
  }
}