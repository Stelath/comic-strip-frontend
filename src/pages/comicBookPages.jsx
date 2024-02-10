import { Form, Button, Alert, Container, Row, Col, Image } from "react-bootstrap";
import "../CSS/pages.css"

// export default function ComicBookPage() {

//     return (
//         <div className="grid-container">
//             <div className="grid-item">
//                 <img src="picture1.jpg" alt="Picture 1" />
//             </div>
//             <div className="grid-item">
//                 <img src="picture2.jpg" alt="Picture 2" />
//             </div>
//             <div className="grid-item">
//                 <img src="picture3.jpg" alt="Picture 3" />
//             </div>
//             <div className="grid-item">
//                 <img src="picture4.jpg" alt="Picture 4" />
//             </div>
//         </div>
//     );
    

// }



export default function layout4_1() {
    const images = ["/images/img1.jpg", "/images/img2.jpg", "/images/img3.jpg", "/images/img4.png"];

    return (
        <div>
            <Container className="screen-container">
                <Row>
                    <Col className="image-container-2">
                        <Image className="image-type-1" src={images[0]}  />
                        <Image className="image-type-2" src={images[1]}  />
                    </Col>
                    <Col className="image-container-2">
                        <Image className="image-type-3" src={images[2]} fluid />
                        <Image className="image-type-4" src={images[3]} fluid />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const layout4_2 = ({ images }) => {
    return (
        <div>
            <Row>
                <Col className="image-container" style={{ width: "25%" }}>
                    <Image src="/images/img1.jpg" className="mr-2" fluid style={{ height: "300px" }} />
                    <Image src="/images/img2.jpg" className="mr-2" fluid />
                </Col>
                <Col className="image-container" style={{ width: "25%" }}>
                    <Image src="/images/img3.jpg" className="mr-2" fluid style={{ height: "300px"  }}/>
                    <Image src="/images/img4.png" className="mr-2" fluid />
                </Col>
            </Row>
        </div>
    );
};

const layout4_3 = ({ images }) => {
    return (
        <div>
            <Row>
                <Col className="image-container" style={{ width: "25%" }}>
                    <Image src="/images/img1.jpg" className="mr-2" fluid style={{ height: "300px" }} />
                    <Image src="/images/img2.jpg" className="mr-2" fluid />
                </Col>
                <Col className="image-container" style={{ width: "25%" }}>
                    <Image src="/images/img3.jpg" className="mr-2" fluid />
                    <Image src="/images/img4.png" className="mr-2" fluid style={{ height: "300px"  }}/>
                </Col>
        </Row>
        </div>
    );
};

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
