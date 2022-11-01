import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";



export function Student() {

  const [studentList,setStudentList] = React.useState([]);

  React.useEffect(()=>{
    axios.get('https://localhost:5000/students')
    .then((allStudents)=> setStudentList(allStudents.data))
  },[])
  console.log(studentList,'studetnList')
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
            </TableRow>
          </TableHead>
          <TableBody>
            {studentList.map((row,key) => (
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
