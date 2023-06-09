import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import ProgressBar from "react-bootstrap/ProgressBar";
import Badge from "react-bootstrap/Badge";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../App";

import "./topicCard.css";

export default function TopicCard({ questionData }) {
  const dark = useContext(ThemeContext);

  // This component takes all the topicsData(here questionData ) and renders a TopicCard Component

  // Utility func() to find the progress in percentage
  const findPercentage = (doneQuestions, totalQuestions) => {
    return Math.round((doneQuestions / totalQuestions) * 100);
  };

  let totalSolved = 0;
  let totalQuestions = 0;
  // Mapping questionData to topicCard array
  let topicCard = questionData.map((topic, index) => {
    let { topicName, doneQuestions, questions, started } = topic;
    let percentDone = findPercentage(doneQuestions, questions.length);
    let questionsRemainig = questions.length - doneQuestions;
    //adding solved questions of every topic to totalSolved
    totalSolved += doneQuestions;
    totalQuestions += questions.length;
    if (started) {
      return (
        <Fade duration={500 + index * 0.4} key={index}>
          <div className="col mb-4">
            <Link
              to={`/${topic.topicName
                .replace(/[^A-Z0-9]+/gi, "_")
                .toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                className={`mb-3 inprogress-card animate__slideInDown hvr-grow ${dark ? "darkCard" : ""
                  }`}
              >
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title className="topicName">
                        {topic.topicName}
                      </Card.Title>
                    </Col>
                    <Col>
                      <h4>
                        <Badge
                          pill
                          variant="success"
                          className="float-right"
                          style={{ fontWeight: "500", cursor: "pointer" }}
                        >
                          {questionsRemainig === 0 ? "Done 👏🏻" : "Solve Now 🙇🏻‍♂️"}
                        </Badge>
                      </h4>
                    </Col>
                  </Row>
                  <Card.Text className="totalQuestion">
                    Total Questions {topic.questions.length} <br />
                    {`${questionsRemainig}`} More to go
                  </Card.Text>
                  <p className="percentDone mb-1">
                    <b>{percentDone}% Done</b>
                  </p>
                  <ProgressBar
                    animated={percentDone === 100 ? false : true}
                    variant="success"
                    now={percentDone}
                  />
                </Card.Body>
              </Card>
            </Link>
          </div>
        </Fade>
      );
    } else {
      return (
        <Fade duration={500 + index * 50} key={index}>
          <div className="col mb-4">
            <Link
              to={`/${topic.topicName
                .replace(/[^A-Z0-9]+/gi, "_")
                .toLowerCase()}`}
              style={{ textDecoration: "none" }}
            >
              <Card
                className={`mb-3 notstarted-card hvr-grow ${dark ? "darkCard" : ""
                  }`}
              >
                <Card.Body>
                  <Row>
                    <Col>
                      <Card.Title className="topicName">
                        {" "}
                        {topicName}{" "}
                      </Card.Title>
                    </Col>
                    <Col style={{ flexGrow: 0.5, paddingLeft: "5px" }}>
                      <h4>
                        <Badge
                          pill
                          variant="primary"
                          className="float-right"
                          style={{ fontWeight: "500", cursor: "pointer" }}
                        >
                          Kickstart Now
                        </Badge>
                      </h4>
                    </Col>
                  </Row>
                  <Card.Text className="totalQuestion">
                    Total Questions {questions.length}
                  </Card.Text>
                  <p className="percentDone mb-1">
                    <b>
                      <i>Not yet started</i>
                    </b>
                  </p>
                </Card.Body>
              </Card>
            </Link>
          </div>
        </Fade>
      );
    }
  });

  const placementPrepTile = (
    <Fade duration={500 + 1 * 50} key={-1}>
      <div className="col mb-4">
        <Link
          to={{
            pathname:
              "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/",
          }}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Card
            className={`mb-3 promotional-card hvr-grow ${dark ? "darkCard" : ""
              }`}
          >
            <Card.Body>
              <Row style={{ justifyContent: "center" }}>
                <Card.Title className="promotional-heading">
                  {" "}
                  {"CodeRush ⚡"}{" "}
                </Card.Title>
              </Row>
              <Card.Text className="promotional-subtext">
                Unlock the secrets to acing coding interviews with
                <br></br>
                <span style={{ fontWeight: 700 }}>
                  Striver's SDE Sheet -
                </span>
                <br></br>

                <span style={{ fontWeight: 700 }}>the ultimate 30-day prep companion!</span>
              </Card.Text>
              <h4 className="promotional-cta mb-1">
                <Badge
                  pill
                  variant="primary"
                  style={{
                    fontWeight: "700",
                    cursor: "pointer",
                    backgroundColor: "#FF6D60",
                  }}
                >
                  Make It Happen
                </Badge>
              </h4>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </Fade>
  );

  const promotionTile = (
    <Fade duration={500 + 1 * 50} key={-1}>
      <div className="col mb-4">
        <Link
          to={{
            pathname:
              "https://leetcode.com/problem-list/top-interview-questions/",
          }}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Card
            className={`mb-3 promotional-card hvr-grow ${dark ? "darkCard" : ""
              }`}
          >
            <Card.Body>
              <Row style={{ justifyContent: "center" }}>
                <Card.Title className="promotional-heading">
                  {" "}
                  {"Top Interview Questions 💻"}{" "}
                </Card.Title>
              </Row>
              <Card.Text className="promotional-subtext">
                <span style={{ fontWeight: 700 }}>
                  Crack the Interview code with our
                </span>
                <br></br>
                high-frequency problems
                <br></br>
                and land your{" "}
                <span style={{ fontWeight: 700 }}>dream job!</span>
              </Card.Text>
              <h4 className="promotional-cta mb-1">
                <Badge
                  pill
                  variant="primary"
                  style={{
                    fontWeight: "700",
                    cursor: "pointer",
                    backgroundColor: "#FF6D60",
                  }}
                >
                  Kickstart Now
                </Badge>
              </h4>
            </Card.Body>
          </Card>
        </Link>
      </div>
    </Fade>
  );

  topicCard.splice(1, 0, promotionTile);
  topicCard.splice(2, 0, placementPrepTile);

  return (
    <>
      <h3 className="app-heading2 text-center mb-3">
        <span style={{ fontWeight: 700 }}>
          Your DSA Game Changer{" "}
          <span role="img" aria-label="fire">
            🔥
          </span>
        </span>

      </h3>

      <h4 className="text-center mb-4">
        {totalSolved
          ? `Total Questions Solved : ${totalSolved} (${(
            (totalSolved / totalQuestions) *
            100
          ).toFixed(2)}% Done)`
          : "Start Solving"}
        <p className="percentDone container mt-1">
          {totalSolved ? (
            <ProgressBar
              animated={
                ((totalSolved / totalQuestions) * 100).toFixed(2) === "100"
                  ? false
                  : true
              }
              variant="success"
              now={((totalSolved / totalQuestions) * 100).toFixed(2)}
              style={{ margin: "0.2em 5em" }}
            />
          ) : null}
        </p>
      </h4>
      <div className="container container-custom">
        <div className="row row-cols-1 row-cols-md-3 mt-3 grids">
          {topicCard}
        </div>
      </div>
    </>
  );
}
