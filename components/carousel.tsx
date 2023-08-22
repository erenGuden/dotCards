import { FC } from "react";
import { Carousel } from "react-carousel-minimal";
import styles from "../app/page.module.css";

interface Props {
  images: string[];
}

const isMobile = window.innerWidth <= 768;

const CarouselComponent: FC<Props> = (props: Props) => {
  const { images } = props;
  const data = images?.map((item: string) => {
    return { image: item };
  });

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };

  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div className={styles.carousel}>
      <div>
        <Carousel
          data={data}
          width={isMobile ? "350px" : "546px"}
          height={isMobile ? "240px" : "443px"}
          captionStyle={captionStyle}
          radius="20px"
          automatic={true}
          dots={true}
          slideImageFit="cover"
          thumbnails={false}
        />
      </div>
    </div>
  );
};

export default CarouselComponent;
