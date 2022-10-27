import React from "react";
import { AppBar, Container, Grid, Grow, Typography } from "@mui/material";
import { Student } from "./components/showStudent/showStudent";
import { Create } from "./components/createStudent/createStudent";
const App = () => {
  let appBar = {
    borderRadius: "15px",
    margin: "30px 0 ",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className="App">
      <Container maxWidth="lg" sx={{border:'2px solid black'}}>
        <AppBar sx={appBar} color="inherit" position="static">
          <Typography variant="h2" align="center">
            Students Create and Show
          </Typography>
        </AppBar>
        <Grow in>
          <Grid container justifyContent="space-between" alignItems="stretch">
            <Grid item xs={12} sm={7}>
              <AppBar sx={appBar} position="static" color="inherit">
                <Student />
              </AppBar>
            </Grid>
            <Grid item xs={12} sm={4}>
              <AppBar sx={appBar} position="static" color="inherit">
                <Create />
              </AppBar>
            </Grid>
          </Grid>
        </Grow>
      </Container>
    </div>
  );
};

export default App;
