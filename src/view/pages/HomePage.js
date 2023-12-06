import { Component } from "react";
import { Box } from "@mui/material";
import { ProblemView, ScoreView, VersionView } from "../molecules";
import { Time } from "../../nonview/core";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    const totalPoints = 1_000;
    this.state = {
      timeStart: Time.getUnixTime(),
      totalPoints,
      actualPoints: totalPoints,
      topScore: HomePage.getTopScore(),
      problem: Problem.gen(),
    };
  }

  componentDidMount() {
    setInterval(this.onTimer.bind(this), 1000);
  }

  static getTopScore() {
    const topScore = localStorage.getItem("topScore") || 0;
    return parseInt(topScore);
  }

  static setTopScore(topScore) {
    localStorage.setItem("topScore", topScore);
  }

  onTimer() {
    const { timeStart, totalPoints } = this.state;
    const deltaTime = Time.getUnixTime() - timeStart;
    const actualPoints = Time.actualPoints(totalPoints, deltaTime); // eslint-disable-line no-unused-vars
    this.setState({ actualPoints });
  }

  onClickAnswer(isCorrect) {
    if (!isCorrect) {
      window.location.reload();
      return;
    }

    const { topScore, actualPoints, problemId } = this.state;

    let newTopScore = topScore;
    if (actualPoints > topScore) {
      newTopScore = actualPoints;
      HomePage.setTopScore(newTopScore);
    }

    const newTotalPoints = actualPoints + 1_000;
    const newTimeStart = Time.getUnixTime();
    const newProblemId = problemId + 1;

    this.setState({
      timeStart: newTimeStart,
      totalPoints: newTotalPoints,
      topScore: newTopScore,
      problemId: newProblemId,
    });
  }

  render() {
    const { actualPoints, topScore, problemId } = this.state;
    console.debug("problem-view-" + problemId);
    return (
      <Box>
        <ScoreView
          key={"score-view-" + actualPoints + "-" + topScore}
          actualPoints={actualPoints}
          topScore={topScore}
        />
        <ProblemView
          key={"problem-view-" + problemId}
          onClickAnswer={this.onClickAnswer.bind(this)}
        />
        <VersionView />
      </Box>
    );
  }
}
