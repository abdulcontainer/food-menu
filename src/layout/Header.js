import ImageComponent from '@/components/ImageComponent';

const Header = () => {
  return (
    <div className='flex justify-between items-center px-[2%] lg:px-[10%] py-3 h-[auto] lg:h-[55px]'>
      <div className='flex gap-2 sm:gap-6 items-center'>
        <ImageComponent 
          src='/assets/icons/close.png' 
          alt='close-icon' 
          width={26}
          height={26}
          styles='bg-[#F3F3F3] p-[7px] rounded-full cursor-pointer'
        />
        <div className='font-bold text-[12px] md-text-[16px]'>
          Select your meals
        </div>
      </div>
      <div className='flex gap-2 sm:gap-5 border px-3 py-1 text-[12px] text-darkPurple font-bold rounded-3xl'>
        <span>Step 1/3</span>
        <div className='flex gap-1 items-center'>
          {[1, 2, 3].map((item, index) => (
            <span 
              key={index} 
              className={`h-2 w-2 ${item==1 ? 'bg-darkPurple' : 'bg-[#E0E8E4]'}  rounded-full`}
            >
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header