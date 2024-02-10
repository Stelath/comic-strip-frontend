import { Form, Button, Alert, Container, Row, Col, Image } from "react-bootstrap";
import "../CSS/pages.css"

export default function layout4_1() {

    const images = ["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg", "/images/img4.png"];

    return (
        <div>
            <div className="screen-container">
                <Image className="comic-frame type-1" src={images[0]}  />
                <Image className="comic-frame type-2" src={images[1]}  />
                
                <Image className="comic-frame type-3" src={images[2]} />
                <Image className="comic-frame type-4" src={images[3]} />
            </div>
            {/* <layout4_2 images={images} /> 
            <layout4_3 images={images} /> */}
        </div>
    );

}

export const layout4_2 = ({ images }) => {
    return (
        <div>
            <Row>
                <Col className="image-container" style={{ width: "25%" }}>
                    <Image src={images[0]} style={{ height: "300px" }}/>
                    <Image className="image-type-5" src={images[1]}  />
                </Col>
                <Col className="image-container" style={{ width: "25%" }}>
                    <Image className="image-type-6" src={images[2]} fluid />
                    <Image src={images[3]} fluid style={{ height: "300px"  }}/>
                </Col>
            </Row>
        </div>
    );
}

export const layout4_3 = ({ images }) => {
    return (
        <div>
            <Row>
                <Col className="image-container" style={{ width: "25%" }}>
                    <Image src={images[0]} className="mr-2" fluid style={{ height: "300px" }} />
                    <Image src={images[1]} className="mr-2" fluid />
                </Col>
                <Col className="image-container" style={{ width: "25%" }}>
                    <Image src={images[2]} className="mr-2" fluid />
                    <Image src={images[3]} className="mr-2" fluid style={{ height: "300px"  }}/>
                </Col>
            </Row>
        </div>
    );
}


const layout5_3 = ({ images }) => {

    return (
        <div>
            <Row>
                <Col className="image-container" style={{ width: "15%" }}>
                    <Image src="/images/img1.jpg" className="mr-2" fluid style={{ height: "300px" }} />
                    <Image src="/images/img2.jpg" className="mr-2" fluid />
                </Col>
                <Col className="image-container" style={{ width: "15%" }}>
                    <Image src="/images/img3.jpg" className="mr-2" fluid />
                    <Image src="/images/img4.png" className="mr-2" fluid style={{ height: "300px"  }}/>
                </Col>
                <Col className="image-container" style={{ width: "15%" }}>
                    <Image src="/images/img5.png" className="mr-2" fluid />
                </Col>
            </Row>
        </div>
    );
}
