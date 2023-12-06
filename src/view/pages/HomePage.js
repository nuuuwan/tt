import { Component } from "react";
import { Box } from "@mui/material";
import { ProblemView, ScoreView, VersionView } from "../molecules";
import { Time, Problem } from "../../nonview/core";

export default class HomePage extends Component {
  static T_TIMER_INTERVAL_MS = 1000;
  constructor(props) {
    super(props);
    this.state = {
      timeStart: Time.getUnixTime(),
      totalPoints: 0,
      pointsForCurrentProblem: Problem.POINTS_PER_PROBLEM,
      topScore: HomePage.getTopScore(),
      problem: Problem.gen(),
    };
  }

  componentDidMount() {
    setInterval(this.onTimer.bind(this), HomePage.T_TIMER_INTERVAL_MS);
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
    const pointsForCurrentProblem = Problem.getPointsForCurrent(deltaTime);
    if (pointsForCurrentProblem + totalPoints < 0) {
      window.location.reload();
      return;
    }
    this.setState({ pointsForCurrentProblem });
  }

  onClickAnswer(isCorrect) {
    if (!isCorrect) {
      window.location.reload();
      return;
    }

    let { topScore, totalPoints, pointsForCurrentProblem } = this.state;
    totalPoints = totalPoints + pointsForCurrentProblem;
    pointsForCurrentProblem = Problem.POINTS_PER_PROBLEM;
    const problem = Problem.gen();
    const timeStart = Time.getUnixTime();

    if (totalPoints > topScore) {
      topScore = totalPoints;
      HomePage.setTopScore(topScore);
    }

    this.setState({
      topScore,
      totalPoints,
      pointsForCurrentProblem,
      problem,
      timeStart,
    });
  }

  render() {
    const { totalPoints, pointsForCurrentProblem, topScore, problem } =
      this.state;

    return (
      <Box>
        <ScoreView
          key={"score-view-" + totalPoints + "-" + pointsForCurrentProblem}
          totalPoints={totalPoints}
          pointsForCurrentProblem={pointsForCurrentProblem}
          topScore={topScore}
        />
        <ProblemView
          problem={problem}
          onClickAnswer={this.onClickAnswer.bind(this)}
        />
        <VersionView />
      </Box>
    );
  }
}
