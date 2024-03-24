const Rating = ({ratingValue, detail}) => {
  return (
    <span className={`text-[#79E003] flex items-center gap-[2px] ${detail ? 'hidden md:flex': ''}`}>
      <span>{ratingValue}</span>
      <span><i className="fi fi-ss-star flex"></i></span>
    </span>
  )
}

export default Rating