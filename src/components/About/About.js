import React, { useRef, useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "react-bootstrap/Alert";
import Badge from "react-bootstrap/Badge";
import Spinner from "react-bootstrap/Spinner";
import Fade from "react-reveal/Fade";

export default function About({
  resetData,
  exportData,
  importData,
  dark,
  setDark,
}) {
  const inputFile = useRef(null);
  let history = useHistory();
  const [importSpinnerState, setImportSpinnerState] = useState(false);
  const [exportSpinnerState, setExportSpinnerState] = useState(false);
  // About component takes resetData() from App <Component> to trigger DB data reset
  function handleChange(e) {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], "UTF-8");
    fileReader.onload = (e) => {
      const JSONData = JSON.parse(e.target.result);
      importData(JSONData, () => {
        setImportSpinnerState(false);
        history.push("/");
      });
    };
  }

  return (
    <>
      <div className="container-custom">
        <Fade duration={500}>
          <div className="container my-5">
            <h4 className="text-center">
              <strong>
                {" "}
                Level up your DSA skills with handpicked questions from top
                developers and playlists for every topic. Beginner or advanced,
                our user-friendly platform helps you practice and progress with
                ease!
              </strong>
            </h4>
            <section id="dev">
              <h1
                className="app-heading text-center mt-5 my-5"
                style={{ color: dark ? "#fff" : "" }}
              >
                Developers
              </h1>
              <div class="row">
                <div class=" col-lg-3 col-md-6">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src="https://avatars.githubusercontent.com/u/75061992?s=400&u=4453886991a1b9794887f1f2899d0b1954565086&v=4"
                      alt="Card image cap"
                      onError={(e) => {
                        this.onError = null;
                        this.src =
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD9tQeZmAwHJItv5GNmGNNF7T3tYCk4EWsa_M62olB2A&usqp=CAU&ec=48665701";
                      }}
                    />
                    <div class="card-body">
                      <h5
                        class="card-title"
                        style={{ color: dark ? "#fff" : "#000" }}
                      >
                        <b>Harsh Vardhan Jain</b>
                      </h5>

                      <div class="card-b">
                        <p
                          style={{
                            color: dark ? "#fff" : "#000",
                            textAlign: "left",
                            padding: "0",
                          }}
                        >
                          Reactjs Developer
                        </p>
                      </div>

                      <button
                        class="btn btn-lg btn-block btn-outline-dark"
                        type="button"
                        onClick={() =>
                          (window.location.href = "https://github.com/Sriver27")
                        }
                      >
                        Github
                      </button>

                      <button
                        class="btn btn-lg btn-block btn-dark"
                        type="button"
                        //give a onClick inline function to redirect to linkedin
                        onClick={() =>
                          (window.location.href =
                            "https://www.linkedin.com/in/harsh-vardhan-jain-9074551b7/")
                        }
                      >
                        Linkedin
                      </button>
                    </div>
                  </div>
                </div>
                <div class=" pricing-column col-lg-3 col-md-6">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src="https://avatars.githubusercontent.com/u/64702951?v=4"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5
                        class="card-title"
                        style={{ color: dark ? "#fff" : "#000" }}
                      >
                        <b>Pratyush</b>
                      </h5>
                      <div class="card-b">
                        <p
                          style={{
                            color: dark ? "#fff" : "#000",
                            textAlign: "left",
                            padding: "0",
                          }}
                        >
                          Frontend Developer{" "}
                        </p>
                      </div>

                      <button
                        class="btn btn-lg btn-block btn-outline-dark"
                        type="button"
                        onClick={() =>
                          (window.location.href =
                            "https://github.com/Pratyushp1906")
                        }
                      >
                        Github
                      </button>

                      <button
                        class="btn btn-lg btn-block btn-dark"
                        type="button"
                        onClick={() =>
                          (window.location.href =
                            "https://www.linkedin.com/in/pratyush-pandey-8b3130245/")
                        }
                      >
                        Linkedin
                      </button>
                    </div>
                  </div>
                </div>
                <div class=" pricing-column col-lg-3 col-md-6">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src="https://avatars.githubusercontent.com/u/75292115?v=4"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5
                        class="card-title"
                        style={{ color: dark ? "#fff" : "#000" }}
                      >
                        <b>Piyush Kumar</b>
                      </h5>
                      <div class="card-b">
                        <p
                          style={{
                            color: dark ? "#fff" : "#000",
                            textAlign: "left",
                            padding: "0",
                          }}
                        >
                          MERN Developer{"\n"}
                        </p>
                      </div>

                      <button
                        class="btn btn-lg btn-block btn-outline-dark"
                        type="button"
                        onClick={() =>
                          (window.location.href =
                            "https://github.com/KumarPiyush852002")
                        }
                      >
                        Github
                      </button>

                      <button
                        class="btn btn-lg btn-block btn-dark"
                        type="button"
                        onClick={() =>
                          (window.location.href =
                            "https://www.linkedin.com/in/piyush-kumar-28ba351ba/")
                        }
                      >
                        Linkedin
                      </button>
                    </div>
                  </div>
                </div>
                <div class=" pricing-column col-lg-3 col-md-6">
                  <div class="card">
                    <img
                      class="card-img-top"
                      src="https://avatars.githubusercontent.com/u/111695526?v=4"
                      alt="Card image cap"
                    />
                    <div class="card-body">
                      <h5
                        class="card-title"
                        style={{ color: dark ? "#fff" : "#000" }}
                      >
                        <b>Adarsh Kumar</b>
                      </h5>

                      <div class="card-b">
                        <p
                          style={{
                            color: dark ? "#fff" : "#000",
                            textAlign: "left",
                            padding: "0",
                          }}
                        >
                          Frontend Developer{"\n"}
                        </p>
                      </div>

                      <button
                        class="btn btn-lg btn-block btn-outline-dark"
                        type="button"
                        onClick={() =>
                          (window.location.href =
                            "https://github.com/Adarsh-Kumar21")
                        }
                      >
                        Github
                      </button>

                      <button
                        class="btn btn-lg btn-block btn-dark"
                        type="button"
                        onClick={() =>
                          (window.location.href =
                            "https://www.linkedin.com/in/adarsh-kumar-aaba36245/")
                        }
                      >
                        Linkedin
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <h5 className="text-center my-5">
              <Badge
                variant="danger"
                as="a"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  if (
                    window.confirm(
                      "Are you sure you want to reset the progress !"
                    )
                  ) {
                    setExportSpinnerState(true);
                    resetData();
                  }
                }}
              >
                Reset Progress
                <Spinner
                  animation="border"
                  variant="light"
                  size="sm"
                  style={exportSpinnerState ? {} : { display: "none" }}
                />
              </Badge>{" "}
              <Badge
                variant="warning"
                as="a"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setExportSpinnerState(true);
                  exportData(() => {
                    setExportSpinnerState(false);
                  });
                }}
              >
                Export Progress
              </Badge>{" "}
              <Badge
                variant="primary"
                as="a"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  setImportSpinnerState(true);
                  inputFile.current.click();
                }}
              >
                Import Progress{" "}
                <Spinner
                  animation="border"
                  variant="light"
                  size="sm"
                  style={importSpinnerState ? {} : { display: "none" }}
                />
              </Badge>
            </h5>
            <h3 className="text-center my-5">
              <Badge>
                For the{" "}
                <span
                  role="img"
                  aria-label="orange-hearth"
                  className="emojiFix"
                >
                  🧡
                </span>{" "}
                to code{" "}
                <span role="img" aria-label="victory" className="emojiFix">
                  ✌🏻
                </span>
              </Badge>{" "}
            </h3>
            <input
              type="file"
              id="file"
              ref={inputFile}
              style={{ display: "none" }}
              accept=".json"
              onChange={handleChange}
            />
          </div>
        </Fade>
      </div>
    </>
  );
}
