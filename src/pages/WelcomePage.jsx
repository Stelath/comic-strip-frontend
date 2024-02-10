import React, { useState } from "react";
import {
  Form,
  Button,
  Alert,
  Container,
  Row,
  Col,
  Image,
} from "react-bootstrap";
import "../CSS/WelcomePage.css";

import { ArrowLeft, ArrowRight } from "lucide-react";
import ComicPageFrames from "./comicBookPages";

export default function MainLandingPage() {
  const [showButton, setShowButton] = useState(true);
  const [prompt, setPrompt] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setShowButton(false);
    setIsSubmitted(true);
  };

  const makePage = (images) => {
    return (
      <div>
        <Row>
          {images.slice(0, 2).map((image, index) => (
            <Col
              key={index}
              className="image-container"
              style={{ width: "50%" }}
            >
              <Image
                src={image}
                className={index === 0 ? "mr-2" : ""}
                fluid
                style={{ marginRight: "10px" }}
              />
            </Col>
          ))}
        </Row>
        <Row>
          {images.slice(2, 4).map((image, index) => (
            <Col
              key={index}
              className="image-container"
              style={{ width: "50%" }}
            >
              <Image
                src={image}
                className={index === 0 ? "mr-2" : ""}
                fluid
                style={{ marginRight: "10px" }}
              />
            </Col>
          ))}
        </Row>
      </div>
    );
  };

  return (
    // <div>
    //     <img class="img-responsive" src="/images/img1.jpg"/>
    // </div>
    <Container>
      {!isSubmitted && (
        <div>
          <Container className="welcome-screen-container">
            <h1 className="comic-strip-header">COMIC STRIP</h1>
            <h5 className="ask-prompt-header" style={{ marginTop: "20px" }}>
              Please enter a prompt to get started.
            </h5>
            <Form>
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
              <Button
                onClick={handleSubmit}
                style={{ width: "200px", height: "50px" }}
              >
                Submit
              </Button>
            )}
          </Container>
        </div>
      )}
      {isSubmitted && (
        <div>
          <h1>Submitted Text</h1>
          <div id="comic-container">
            <div className="comic-page">
                <ComicPageFrames images={["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg", "/images/img4.png"]} layoutNumber={1} />
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
    </Container>
  );
}
