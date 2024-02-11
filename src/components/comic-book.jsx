import { Row, Col, Image } from "react-bootstrap";
import "@/css/pages.css";

const ComicFrame = ({ image, type }) => {
  return (
    <div>
    {/* className={`comic-frame-wrapper type-${type}`}> */}
      <img
        alt="Comic Frame"
        className={`comic-frame type-${type}`}
        src={image}
      />
    </div>
  );
};

export default function ComicPageFrames({images, layoutType}) {
  const layoutNumber = images.length;
  console.log(images);
  console.log(layoutType);
  if (layoutType<=6) {
    switch (layoutType) {
      case 0:
        return (<LayoutSixZero images={images} layoutNumber={layoutNumber} />);
      case 1:
        return (<LayoutFourOne images={images} />);
      case 2:
        return (<LayoutFourTwo images={images} />);
      default:
        return <div>
          
        </div>;
    }
  }
}

const LayoutSixZero = ({images, layoutNumber}) => {
  const comicFrames = [];
  for (let i = 0; i < layoutNumber; i++) {
    comicFrames.push(<ComicFrame key={i} image={images[i]} type={0} />);
  }
  
  if (layoutNumber < 6) {
    const emptyFrames = 6 - layoutNumber;
    for (let i = 0; i < emptyFrames; i++) {
      comicFrames.push(<div key={layoutNumber + i} className="empty-frame" />);
    }
  }
  
  return (
    <div className="screen-container">
      {comicFrames}
    </div>
  );
};

const LayoutFourOne = ({images}) => (
  <div className="screen-container">
    <ComicFrame image={images[0]} type={1} />
    <ComicFrame image={images[1]} type={2} />
    <ComicFrame image={images[2]} type={3} />
    <ComicFrame image={images[3]} type={4} />
  </div>
);

const LayoutFourTwo = ({images}) => (
  <div className="screen-container">
    <ComicFrame image={images[0]} type={0} />
    <ComicFrame image={images[1]} type={0} />
    <ComicFrame image={images[2]} type={5} />
    <ComicFrame image={images[3]} type={6} />
  </div>

  //     <div>
  //         <Image src={images[0]} style={{ height: "300px" }} />
  //         <Image className="image-type-5" src={images[1]} />
  //         </Col>
  //         <Col className="image-container" style={{ width: "25%" }}>
  //           <Image className="image-type-6" src={images[2]} fluid />
  //           <Image src={images[3]} fluid style={{ height: "300px" }} />
  //         </Col>
  //       </Row>
  //     </div>
  //   );
);

export const layout4_3 = ({ images }) => {
  return (
    <div>
      <Row>
        <Col className="image-container" style={{ width: "25%" }}>
          <Image
            src={images[0]}
            className="mr-2"
            fluid
            style={{ height: "300px" }}
          />
          <Image src={images[1]} className="mr-2" fluid />
        </Col>
        <Col className="image-container" style={{ width: "25%" }}>
          <Image src={images[2]} className="mr-2" fluid />
          <Image
            src={images[3]}
            className="mr-2"
            fluid
            style={{ height: "300px" }}
          />
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
          <Image
            src="/images/img1.jpg"
            className="mr-2"
            fluid
            style={{ height: "300px" }}
          />
          <Image src="/images/img2.jpg" className="mr-2" fluid />
        </Col>
        <Col className="image-container" style={{ width: "15%" }}>
          <Image src="/images/img3.jpg" className="mr-2" fluid />
          <Image
            src="/images/img4.png"
            className="mr-2"
            fluid
            style={{ height: "300px" }}
          />
        </Col>
        <Col className="image-container" style={{ width: "15%" }}>
          <Image src="/images/img5.png" className="mr-2" fluid />
        </Col>
      </Row>
    </div>
  );
};
