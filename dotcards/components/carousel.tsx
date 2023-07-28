import { FC } from "react";
import { Carousel } from "react-carousel-minimal";

interface Props {
  images: string[];
}

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
    <div style={{ padding: 0, width: "546px", height: "500px", marginTop: 32 }}>
      <div
        style={{
          padding: "0 20px",
        }}
      >
        <Carousel
          data={data}
          width="546px"
          height="500px"
          captionStyle={captionStyle}
          radius="10px"
          automatic={false}
          dots={true}
          slideImageFit="cover"
          thumbnails={false}
          style={{
            maxWidth: "900px",
            maxHeight: "600px",
          }}
        />
      </div>
    </div>
  );
};

export default CarouselComponent;
