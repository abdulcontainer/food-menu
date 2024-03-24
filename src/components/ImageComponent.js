import Image from 'next/image'

const ImageComponent = (props) => {
  return (
    <Image
      src={props.src} 
      alt={props.alt}
      layout={props.layout ? props.layout : ''}
      height={props.height} 
      width={props.width}
      className={props.styles}
    />
  )
}

export default ImageComponent