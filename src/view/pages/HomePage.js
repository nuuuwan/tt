import { Component } from "react";
import { Box } from "@mui/material";
import { ProblemView, ScoreView, VersionView } from "../molecules";
import { Time } from "../../nonview/core";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeStart: Time.getUnixTime(),
      totalPoints: 1_000,
      topScore: HomePage.getTopScore(),
    };
  }

  static getTopScore() {
    const topScore = localStorage.getItem("topScore") || 0;
    return parseInt(topScore);
  }

  static setTopScore(topScore) {
    localStorage.setItem("topScore", topScore);
  }

  onClickAnswer(isCorrect) {
    if (!isCorrect) {
      window.location.reload();
      return;
    }

    const { timeStart, totalPoints, topScore } = this.state;

    const newTimeStart = Time.getUnixTime();
    const deltaTime = newTimeStart - timeStart;
    const { actualPoints, _ } = Time.actualPoints(totalPoints, deltaTime); // eslint-disable-line no-unused-vars

    let newTopScore = topScore;
    if (actualPoints > topScore) {
      newTopScore = actualPoints;
      HomePage.setTopScore(newTopScore);
    }

    const newTotalPoints = actualPoints + 1_000;

    this.setState({
      timeStart: newTimeStart,
      totalPoints: newTotalPoints,
      topScore: newTopScore,
    });
  }

  render() {
    const { timeStart, totalPoints, topScore } = this.state;
    return (
      <Box>
        {" "}
        <ScoreView
          timeStart={timeStart}
          totalPoints={totalPoints}
          topScore={topScore}
        />
        <ProblemView onClickAnswer={this.onClickAnswer.bind(this)} />
        <VersionView />
      </Box>
    );
  }
}
