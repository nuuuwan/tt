import { Box, Typography } from "@mui/material";
import { NumberView, AnswerView } from "../atoms";

const LIMIT_TIMES_TABLE = 4;
const UNICODE_MULTIPLICATION_SYMBOL = "\u00D7";
function getRandomNumber(minNumber, maxNumber) {
  return Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber);
}

function shuffleArr(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function genAnswerArr(a, b) {
  const c = getRandomNumber(2, 3);
  return shuffleArr([
    a * b,
    a * (b + 1),
    (a + 1) * b,
    a * (b - 1),
    (a - 1) * b,
    a * (10 + b),
    a * (b + 5),
    (a + 10) * b,
    (a + 5) * b,
    a * b - c,
    a * b + c,
    Math.floor((a * b) / c),
    a * b * c,
  ]);
}

export default function ProblemView({ onClickAnswer }) {
  const a = getRandomNumber(1, LIMIT_TIMES_TABLE);
  const b = getRandomNumber(1, LIMIT_TIMES_TABLE);

  const answers = genAnswerArr(a, b);
  const correctAnswer = a * b;

  return (
    <Box sx={{ m: 1, p: 1 }}>
      <Typography variant="h1">
        <NumberView n={a} /> {UNICODE_MULTIPLICATION_SYMBOL}{" "}
        <NumberView n={b} />
      </Typography>

      {answers.map(function (answer, iAnswer) {
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
