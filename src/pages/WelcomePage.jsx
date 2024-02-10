import React, { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col, Image } from "react-bootstrap";
import "../CSS/WelcomePage.css"
import layout4_1 from './comicBookPages';

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
                        <Col key={index} className="image-container" style={{ width: "50%" }}>
                            <Image src={image} className={index === 0 ? "mr-2" : ""} fluid style={{ marginRight: "10px" }} />
                        </Col>
                    ))}
                </Row>
                <Row>
                    {images.slice(2, 4).map((image, index) => (
                        <Col key={index} className="image-container" style={{ width: "50%" }}>
                            <Image src={image} className={index === 0 ? "mr-2" : ""} fluid style={{ marginRight: "10px" }} />
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
                    <h1>Welcome</h1>
                    <h6>
                        Please enter a prompt to get started.
                    </h6>
                    <Form>
                        <Form.Control
                            as="textarea"
                            rows={4} // Adjust the number of rows to make the area bigger
                            placeholder="prompt ..."
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            style={{ width: "300px", height: "150px" }} // Add width and height here
                        />
                    </Form>
                    {showButton && <Button onClick={handleSubmit} style={{ width: "200px", height: "50px" }}>Submit</Button>}
                </div>
            )}
            {isSubmitted && (
                <div>
                    <h1>Submitted Text</h1>
                    <Container className="screen-container">
                        {/* <Row>
                            <Col className="image-container">
                                <Image src="/images/img1.jpg" className="mr-2" fluid />
                                <Image src="/images/img2.jpg" className="mr-2" fluid/>
                            </Col>
                            <Col className="image-container">
                                <Image src="/images/img3.jpg" className="mr-2" fluid/>
                                <Image src="/images/img4.png" className="mr-2" fluid/>
                            </Col>
                        </Row> */}
                        {layout4_1()}
                        <Row>
                            <Col className="button-container">
                                <Button variant="light" className="mr-2">
                                    <img class="images/img-responsive" src="images/left-arrow.png" />
                                </Button>
                                
                            </Col>
                            <Col className="button-container">
                                <Button variant="light">
                                    <img src="images/right-arrow.png"/>
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            )}
        </Container>
    );
}