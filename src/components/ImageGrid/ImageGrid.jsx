import ImageCard from "../ImageCard/ImageCard";
import img1 from '../../assets/images/d01.jpg'
import Button from "../Button/Button";

const ImageGrid = () => {
  return (
    <div>
      <ImageCard imgUrl={img1} info='自分の記録' />
      <Button handleClick={() => {}} text='Click me' />
    </div>
  )
}

export default ImageGrid
