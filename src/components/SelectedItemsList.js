import ImageComponent from '@/components/ImageComponent'
import Rating from './Rating'

const SelectedItemsList = ({selectedItems, deleteItem}) => {

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    selectedItems.forEach(item => {
      const price = parseFloat(item.price.replace('AED', '').trim());
      totalPrice += price;
    });
    return totalPrice;
  };

  const totalPrice = calculateTotalPrice(selectedItems)

  return (
    <div className='w-[27%] h-full flex-col hidden lg:flex'>
      <div className="bg-white rounded-t-xl border-b-[1px] shadow">
        <ImageComponent
          styles="rounded-t-lg" 
          src="/assets/RestaurantSeating.jpg"
          width={50}
          height={50} 
          alt="img"
          layout='responsive'
        />
        <div className="p-4 flex flex-col items-center gap-1 pb-6">
          <h5 className="text-sm font-bold flex gap-3 items-center">
            Jawharat Esham Restaurent
            <span className="text-xs font-normal">
              <Rating ratingValue={4.7}/>
            </span>
          </h5>
          <p className="text-xs flex items-center gap-2">
            Wafi Mall, First Floor, Horus, Phase 5, Dubai
            <i className="fi fi-rr-marker flex p-[5px] text-white bg-black rounded-md"></i>
          </p>
          <a href="#" className="mt-1 px-3 py-1 text-sm text-center text-white bg-[#020A05] rounded-md">
            Arabic Restaurent
          </a>
        </div>
      </div>  
      <div className='bg-white overflow-auto'>
        {selectedItems?.map((item, index) => (
          <div 
            key={index} 
            className='flex items-center p-2 border-b-[1px]'
          >
            <ImageComponent 
              src={item.img} 
              alt='img' 
              height={60} 
              width={60}
              styles='rounded-md'
            />
            <div className='flex flex-col gap-1 pl-2 grow'>
              <div className='text-[14px] font-bold text-darkPurple'>
                {item.name}
              </div>
              <span className='text-[12px] font-bold'>{item.price}</span>
            </div>
            <i className="fi fi-rr-trash flex cursor-pointer" onClick={() => deleteItem(item)}></i>
          </div>
        ))}
      </div>
      <div className='bg-white relative pt-7 flex items-center'>
        <ImageComponent src='/assets/RoundedBorder.png' width={100} height={100} alt='rounded'/>
        <div className='p-2 pt-4 text-[#2F3333A6] text-[11px] absolute top-0'>
          Total Price <span className='text-black text-[13px] font-bold pl-1'>{`AED ${totalPrice}`}</span>
        </div>
      </div>
    </div>
  )
}

export default SelectedItemsList