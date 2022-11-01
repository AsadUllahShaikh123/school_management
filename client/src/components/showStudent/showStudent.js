import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export function Student() {
  const [studentList, setStudentList] = React.useState([]);

  const deleteStudent=(id)=>{
    axios.delete(`http://localhost:5000/students/${id}`)
    .then(()=> {
      window.location.reload(false)
    })
    .catch((error)=> console.log(error.message,'error from delete'))
  }
  React.useEffect(() => {
    axios
      .get("http://localhost:5000/students")
      .then((allStudents) => setStudentList(allStudents.data))
      .catch((error) => console.log(error.message, "error"));
  }, []);
  console.log(studentList, "studetnList");
  return (
    <>
      <h2>All Students</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Registeration Number</TableCell>
              <TableCell align="right">Grade&nbsp;(g)</TableCell>
              <TableCell align="right">Section&nbsp;(g)</TableCell>
              <TableCell align="right">Action&nbsp;</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentList.map((row, key) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.regNo}</TableCell>
                <TableCell align="right">{row.grade}</TableCell>
                <TableCell align="right">{row.section}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete" onClick={()=> deleteStudent(row._id)}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
