import { Box, Button, TextField } from "@mui/material";
import { useState } from "react";
import axios from 'axios';
export let Create = () => {
  const [student, setStudent] = useState({
    regNo: 0,
    name: "",
    grade: "",
    section: "",
  });

  let handleChange = (event) => {
    let key = event.target.name;
    let value = event.target.value;
    console.log(value,'value')
    setStudent({...student,[key]:value})
    console.log(student.regNo);
  };
  let createStudent=()=>{
    axios.post('http://localhost:5000/students',student);
  }
  return (
    <>
      <h1>Create Student</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          label="Registeration No."
          variant="outlined"
          name='regNo'
          value={student.regNo}
          onChange={(event) => handleChange(event)}
        />
        <TextField
          label="Name"
          name="name"
          variant="outlined"
          value={student.name}
          onChange={(event) => handleChange(event)}
        />
        <TextField
          label="Grade"
          name="grade"
          variant="outlined"
          value={student.grade}
          onChange={(event) => handleChange(event)}
        />
        <TextField
          label="Secion"
          variant="outlined"
          name="section"
          value={student.section}
          onChange={(event) => handleChange(event)}
        />
        <Button variant="contained" color="primary" onClick={()=> createStudent()}>
          Create
        </Button>
      </Box>
    </>
  );
};
