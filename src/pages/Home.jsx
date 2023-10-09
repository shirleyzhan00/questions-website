import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const topics = ["Javascript", "AWS", "Java"];
// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

const Home = () => {
  const [topic, setTopic] = useState("");

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  const handleTopicChangeClick = (event) => {
    window.location.href = `/topic/${topic}`;
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            CS Questions Website
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              CS Questions Website
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
            >
              This is a website dedicated to refresh your memories on the
              concepts on various subjects in the computer science and
              programming field.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Topic</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={topic}
                  label="Age"
                  onChange={handleTopicChange}
                >
                  {topics.map((element) => {
                    return <MenuItem value={element}>{element}</MenuItem>;
                  })}
                </Select>
              </FormControl>
              <Button variant="outlined" onClick={handleTopicChangeClick}>
                Confirm
              </Button>
            </Stack>
          </Container>
        </Box>
      </main>
    </ThemeProvider>
  );
};

export default Home;
