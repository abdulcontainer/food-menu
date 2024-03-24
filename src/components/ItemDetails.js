import ImageComponent from "./ImageComponent"
import Rating from "./Rating"

const ItemDetails = ({item, showItem, setShowItem}) => {
  return (
    <div className='relative'>
      <i
        className="fi fi-rr-eye flex text-[16px]"
        onClick={() => setShowItem(prevShowItem => prevShowItem === item.name ? null : item.name)}
      >
      </i>
      {showItem == item.name &&
      <div className="bg-white rounded-xl border-b-[1px] shadow absolute right-5 top-[-60px]">
        <ImageComponent
          styles="rounded-t-lg" 
          src={item.img} 
          width={120}
          height={120} 
          alt="img"
        />
        <div className="p-1 flex flex-col items-center gap-1">
          <h5 className="font-bold flex gap-3 items-center text-[11px]">
            {item.name}
            <span className="font-normal text-[11px]">
              <Rating ratingValue={4.7}/>
              <span className='font-bold text-[9px]'>{item.price}</span>
            </span>
          </h5>
        </div>
      </div>
    }
    </div>
  )
}

export default ItemDetails