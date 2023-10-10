import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Stack,
  FormControl,
  MenuItem,
  Button,
  InputLabel,
  Select,
} from "@mui/material";

const TopicPage = () => {
  const { topic } = useParams();
  const [optionField, setOptionField] = useState("Answer Questions");
  const [qsNumPerPage, setQsNumPerPage] = useState(1);
  const [qsTopic, setQsTopic] = useState(""); //Replace with array[0]

  const options = ["Answer Questions", "View Questions"];
  const questionsPerPageNum = [1, 5, 10, 20];
  const handleClickConfirm = (event) => {};

  return (
    <Box
      sx={{
        bgcolor: "background.paper",
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Typography
            component="h5"
            variant="h5"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Pick Your Options
          </Typography>

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Options</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={optionField}
              onChange={(e) => {
                setOptionField(e.target.value);
              }}
              label="Age"
            >
              {options.map((element, i) => {
                return (
                  <MenuItem key={i} value={element}>
                    {element}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Stack>

        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Typography
            component="h5"
            variant="h5"
            align="center"
            color="text.primary"
          >
            Questions Per Page
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Amount</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={qsNumPerPage}
              onChange={(e) => {
                setQsNumPerPage(e.target.value);
              }}
              label="Age"
            >
              {questionsPerPageNum.map((element, i) => {
                return (
                  <MenuItem key={i} value={element}>
                    {element}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Stack>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Typography
            component="h5"
            variant="h5"
            align="center"
            color="text.primary"
          >
            Topic
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Topic</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={qsTopic}
              onChange={(e) => {
                setQsTopic(e.target.value);
              }}
              label="Age"
            >
              {questionsPerPageNum.map((element, i) => {
                return (
                  <MenuItem key={i} value={element}>
                    {element}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Stack>
        <Stack
          sx={{ pt: 4 }}
          direction="row"
          spacing={2}
          justifyContent="center"
        >
          <Button variant="contained" onClick={handleClickConfirm}>
            Confirm
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default TopicPage;
