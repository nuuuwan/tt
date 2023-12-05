import { Button, Typography } from "@mui/material";

export default function AnswerView({ answer, correctAnswer, onClickAnswer }) {
  const isCorrect = answer === correctAnswer;

  const onClickAnswerInner = function () {
    onClickAnswer(isCorrect, correctAnswer);
  };
  return (
    <Button variant="outlined" sx={{ m: 1, p: 1 }} onClick={onClickAnswerInner}>
      <Typography variant="h4">{answer}</Typography>
    </Button>
  );
}
