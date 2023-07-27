import Carousel from "react-bootstrap/Carousel";
import a from "../../assests/a.jpg";
import b from "../../assests/b.jpg";
import c from "../../assests/c.jpg";
export const CustomeCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className=" w-100" src={a} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={b} alt="Third slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={c} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
};
