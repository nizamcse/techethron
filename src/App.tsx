import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Main from "./layout/Main";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
// import Grid from "./components/grid/Grid";
// import Posts from "./features/posts/Post";
// import Users from "./features/users/Users";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <div className="App">
        <Main />
        {/* <Grid spacing={2} container>
        <Grid cols={3} item>
          <h1>Lest of users</h1>
          <Users />
        </Grid>
        <Grid item>
          <h1>Lest of posts</h1>
          <Posts />
        </Grid>
        <Grid item>
          <h1>Lest of posts</h1>
          <Posts />
        </Grid>
      </Grid> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
