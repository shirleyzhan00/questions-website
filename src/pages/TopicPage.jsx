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

/* What I want to add:
   1. A field to select how many questions are rendered in a page(1 - 20)
   2. A button to just see all the questions and their answers
   3. A select to select based on topic or random 
   4. A field to select how many questions in total(number 1's field - max)
   5. A button to go through questions(this brings up questions number 1, 3, 4)
 */
const TopicPage = () => {
  const { topic } = useParams();
  const [optionField, setOptionField] = useState("");
  const [questionNumPerPage, setQuestionNumPerPage] = useState(1);
  const [questionTopic, setQuestionTopic] = useState("");

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
        {optionField === "Answer Questions" ? (
          <>
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
                  value={questionNumPerPage}
                  onChange={(e) => {
                    setQuestionNumPerPage(e.target.value);
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
                  value={questionTopic}
                  onChange={(e) => {
                    setQuestionTopic(e.target.value);
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
          </>
        ) : optionField === "View Questions" ? (
          <></>
        ) : (
          <></>
        )}
      </Container>
    </Box>
  );
};

export default TopicPage;
