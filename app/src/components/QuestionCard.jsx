import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/system";

const OptionButton = styled(Button)(({ theme, isSelected, isCorrect }) => ({
  width: "100%",
  padding: theme.spacing(1),
  backgroundColor: isSelected
    ? isCorrect
      ? "#388e3c"
      : "#d32f2f"
    : "transparent",
  color: isSelected ? "white" : "inherit", // White text for selected option, inherit text color for others
  "&:hover": {
    backgroundColor: isSelected ? "inherit" : "#eeeeee", // Light gray on hover for non-selected options
  },
}));

const QuestionCard = ({ question, options, correctAnswer, explanation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (index) => {
    if (selectedOption === null) {
      setSelectedOption(index);
    }
  };

  const renderOptions = () => {
    return options.map((option, index) => {
      const isSelected = selectedOption === index;
      const isCorrect = index === correctAnswer;

      return (
        <Grid item xs={6} key={index}>
          <OptionButton
            variant="outlined"
            fullWidth
            onClick={() => handleOptionClick(index)}
            isSelected={isSelected}
            isCorrect={isCorrect}
          >
            {option}
          </OptionButton>
        </Grid>
      );
    });
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {question}
        </Typography>
        <Grid container spacing={2}>
          {renderOptions()}
        </Grid>
        {selectedOption !== null && (
          <Typography variant="body1">
            {selectedOption === correctAnswer
              ? `That's correct! ${explanation}`
              : `That's incorrect. ${explanation}`}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
