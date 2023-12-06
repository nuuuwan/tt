import { Button } from "@mui/material";
import { NumberView } from "../atoms";

export default function AnswerView({ answer, correctAnswer, onClickAnswer }) {
  const isCorrect = answer === correctAnswer;

  const onClickAnswerInner = function () {
    onClickAnswer(isCorrect);
  };
  return (
    <Button variant="outlined" sx={{ m: 1, p: 1 }} onClick={onClickAnswerInner}>
      <NumberView n={answer} variant={"h4"} />
    </Button>
  );
}
