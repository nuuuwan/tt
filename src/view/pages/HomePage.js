import { Component } from "react";
import { Box } from "@mui/material";
import { ProblemView, ScoreView, VersionView } from "../molecules";

const MAX_TIME_DELTA = 5;

function getUnixTime() {
  return Math.floor(Date.now() / 1000);
}

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { resultList: [], timeStart: getUnixTime() };
  }

  onClickAnswer(isCorrect, correctAnswer) {
    let resultList = this.state.resultList;
    const newTimeStart = getUnixTime();
    const timeDelta = newTimeStart - this.state.timeStart;
    if (!isCorrect) {
      resultList = [];
    } else {
      let level;
      if (timeDelta > MAX_TIME_DELTA * 2) {
        level = 0;
      } else if (timeDelta > MAX_TIME_DELTA) {
        level = 1;
      } else {
        level = 2;
      }
      const mult = 10 ** level;
      const points = correctAnswer * mult;
      resultList.push({ level, points });
    }
    this.setState({ resultList, timeStart: newTimeStart });
  }

  render() {
    return (
      <Box>
        {" "}
        <ScoreView resultList={this.state.resultList} />
        <ProblemView onClickAnswer={this.onClickAnswer.bind(this)} />
        <VersionView />
      </Box>
    );
  }
}
