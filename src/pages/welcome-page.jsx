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
import "@/css/welcome-page.css";

import { ArrowLeft, ArrowRight } from "lucide-react";
import ComicPageFrames from "../components/comic-book";

export default function MainLandingPage() {
  const [showButton, setShowButton] = useState(true);
  const [prompt, setPrompt] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setShowButton(false);
    setIsSubmitted(true);
  };

  // const makePage = (images) => {
  //   return (
  //     <div>
  //       <Row>
  //         {images.slice(0, 2).map((image, index) => (
  //           <Col
  //             key={index}
  //             className="image-container"
  //             style={{ width: "50%" }}
  //           >
  //             <Image
  //               src={image}
  //               className={index === 0 ? "mr-2" : ""}
  //               fluid
  //               style={{ marginRight: "10px" }}
  //             />
  //           </Col>
  //         ))}
  //       </Row>
  //       <Row>
  //         {images.slice(2, 4).map((image, index) => (
  //           <Col
  //             key={index}
  //             className="image-container"
  //             style={{ width: "50%" }}
  //           >
  //             <Image
  //               src={image}
  //               className={index === 0 ? "mr-2" : ""}
  //               fluid
  //               style={{ marginRight: "10px" }}
  //             />
  //           </Col>
  //         ))}
  //       </Row>
  //     </div>
  //   );
  // };

  return (
    // <div>
    //     <img class="img-responsive" src="/images/img1.jpg"/>
    // </div>
    <Container>
      {!isSubmitted && (
        <div className="welcome-screen">
          <div class="box" className="background-box">
          {/* <Container className="welcome-screen-container"> */}
            <h1 className="comic-strip-header"><span className="strip-header-span">COMIC STRIP</span></h1>
            <h5 className="ask-prompt-header">
              <span className="prompt-header-span">
              Please enter a prompt to get started.
              </span>
            </h5>
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
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          )}
        {/* </Container> */}
            </div>
      )}
      {isSubmitted && (
        <div>
          <h1 className="title-text">Sample Title</h1>
          <div id="comic-container">
            <div className="comic-page">
                <ComicPageFrames images={["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg", "/images/img5.png", "/images/img4.png", "images/img6.jpg"]} layoutNumber={0} />
            </div>
            <div className="carousel-button-container center">
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
