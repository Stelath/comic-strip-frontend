import React, { useState } from "react";
import {
  Form,
  Button,
  Alert,
  Container,
  Row,
  Col,
  Image,
  ProgressBar,
} from "react-bootstrap";
import "@/css/welcome-page.css";

import { ArrowLeft, ArrowRight } from "lucide-react";
import ComicPageFrames from "../components/comic-book";
import { sendPrompt, checkJobStatus } from "../services/comicStripApi";

export default function MainLandingPage() {
  const [showButton, setShowButton] = useState(true);
  const [prompt, setPrompt] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [title, setTitle] = useState("The Adventures of Superhero");
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false); //TODO: Set this to true while it is loading
  const [frameCount, setFrameCount] = useState(4); //TODO: Pass this variable to the backend
  const [page, setPage] = useState(0);
  const [frames, setFrames] = useState([
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.png",
    "/images/img5.png",
    "/images/img6.jpg",
    "/images/comic-strip-logo-2.webp",
    "/images/comic-strip-logo.webp",
    ]);

  const [jobID, setJobID] = useState("");

  const handleSubmit = () => {
      setShowButton(false);

      sendPrompt(prompt).then((data) => {
        console.log(data);
        setJobID(data.jobID);
        setIsSubmitted(true);
        setIsLoading(true);
        
        checkJobStatus(data.jobID).then((data) => {
          console.log(data);
          if (data.status === "completed") {
            setIsLoading(false);
            setTitle(data.title);
          } else {
            setProgress(data.progress);
          }
        });
      });
    };

    const handleChange = (event) => {
        const val = parseInt(event.target.value);  
        if (val >= 4) {
          setFrameCount(val);
        } else {
          setFrameCount(4); // Set a default value if the entered value is less than 4
        }
      };

  return (
    <div className="page">
      {!isSubmitted && (
          <div className="welcome-screen-container">
            <div className="welcome-screen-header">
            <img className="comic-strip-logo" src="/images/comic-strip-logo-2.webp" alt="logo" />
            </div>
            <div className="welcome-screen-body">
              <div className="ask-prompt-header">
                Please enter a prompt to get started.
              </div>
              <Form className="centered-form">
                <Form.Control
                  className="input-box"
                  as="textarea"
                  rows={5} // Adjust the number of rows to make the area bigger
                  placeholder="prompt ..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                />
              </Form>
              {showButton && (
                <div className="submit-button-centering">
                  <Button
                    class="submit-button"
                    onClick={handleSubmit}>
                    Submit
                  </Button>
                  <div className="frame-counter">
                      <label className="frame-counter-text">Frames:</label>
                      <input 
                        type="number" 
                        className="frame-counter-output" 
                        step="2" 
                        value={frameCount} 
                        onChange={handleChange}
                        />
                    </div>
                </div>
              )}
            </div>
        </div>
      )}
      {isSubmitted && isLoading && (
        <div className="container">
          <div className="progress progress-striped">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}
      {isSubmitted && !isLoading && (
        <div>
          <div className="title-text">{title}</div>
          <div id="comic-container">
            <div className="comic-page">
              <ComicPageFrames
                images={frames.slice(6 * page, 6 * page + 6)}
                layoutType={0}
              />
            </div>
            <div className="carousel-button-container">
                {page > 0 && (
              <button className="" onClick={() => setPage(page - 1)}>
                <ArrowLeft />
              </button>
              )}
              {6 * (page+1) < frames.length && (
              <button onClick={() => setPage(page + 1)}>
                <ArrowRight />
              </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
