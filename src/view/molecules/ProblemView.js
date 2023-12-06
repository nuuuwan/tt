import { Box, Typography } from "@mui/material";
import { NumberView, AnswerView } from "../atoms";

const UNICODE_MULTIPLICATION_SYMBOL = "\u00D7";


export default function ProblemView({ onClickAnswer, problem }) {
  const [a,b] = problem.correctAnswer;
  const correctAnswer = a * b;

  return (
    <Box sx={{ m: 1, p: 1, marginTop: 4 }}>
      <Typography variant="h1">
        <NumberView n={a} /> {UNICODE_MULTIPLICATION_SYMBOL}{" "}
        <NumberView n={b} />
      </Typography>

      {problem.candidateAnswerList.map(function (answer, iAnswer) {
        return (
          <AnswerView
            key={"answer-" + iAnswer}
            answer={answer}
            correctAnswer={correctAnswer}
            onClickAnswer={onClickAnswer}
          />
        );
      })}
    </Box>
  );
}
