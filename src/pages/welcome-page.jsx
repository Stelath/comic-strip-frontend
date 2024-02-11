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

export default function MainLandingPage() {
  const [showButton, setShowButton] = useState(true);
  const [prompt, setPrompt] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [title, setTitle] = useState("The Adventures of Superhero");
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false); //TODO: Set this to true while it is loading

  const [jobID, setJobID] = useState("");

  const handleSubmit = () => {
    setShowButton(false);

        // Send a post API request to "/api/prompt" with the content of the "prompt" variable
        fetch("http://127.0.0.1:5000/api/prompt", {
          method: "POST",
          body: JSON.stringify({ prompt }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response data
            console.log(data);
          })
          .catch((error) => {
            // Handle the error
            console.error(error);
          });

        setIsSubmitted(true);
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
                </div>
              )}
            </div>
        </div>
      )}
      {isSubmitted && isLoading && (
        <div className="progress-bar-container">
          <ProgressBar now={progress} label={`${progress}%`} />
        </div>
      )}
      {isSubmitted && (
        <div>
          <div className="title-text">{title}</div>
          <div id="comic-container">
            <div className="comic-page">
              <ComicPageFrames
                images={[
                  "/images/img1.jpg",
                  "/images/img2.jpg",
                  "/images/img3.jpg",
                  "/images/img4.png",
                  "/images/img4.png",
                  "images/img6.jpg",
                ]}
                layoutNumber={0}
              />
            </div>
            <div className="carousel-button-container">
              <button className="">
                <ArrowLeft />
              </button>
              <button>
                <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
