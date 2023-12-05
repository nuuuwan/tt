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

  onClickAnswer(isCorrect) {
    let resultList = this.state.resultList;
    const newTimeStart = getUnixTime();
    const timeDelta = newTimeStart - this.state.timeStart;
    let result;
    if (!isCorrect) {
      result = 0;
    } else {
      if (timeDelta > MAX_TIME_DELTA * 2) {
        result = 1;
      } else if (timeDelta > MAX_TIME_DELTA) {
        result = 2;
      } else {
        result = 3;
      }
    }
    resultList.push(result);
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
