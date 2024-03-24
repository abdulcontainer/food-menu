import Rating from '@/components/Rating'
import ImageComponent from './ImageComponent';
import ItemDetails from './ItemDetails';
import { Fragment, useState } from 'react';

const CategoryItems = ({
  menuData, 
  categoryItemsContainerRef, 
  addItem, 
  selectedItems, 
  toggleSelectAllItems
}) => {

  const [showItem, setShowItem] = useState();
  
  return (
    <div className='flex flex-col gap-10 overflow-auto px-2 md:px-5 my-4' ref={categoryItemsContainerRef}>
      {menuData.map((item, index) => (
        <div key={index} data-category-id={item.id}>
          <div className='flex justify-between items-center'>
            <div className='flex gap-2 items-center'>
              <span>{item.categoryName}</span>
              <span className='bg-[#020A05] text-white rounded-full text-[11px] w-[18px] h-[18px] flex justify-center items-center'>
                {item?.items?.length}
              </span>
            </div>
            <span className='text-[#2F3333A6] text-[14px] cursor-pointer' onClick={() => toggleSelectAllItems(item.id)}>select</span>
          </div>
          <div className='flex flex-col gap-5 md:gap-2 pt-3'>
            {item?.items?.map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center p-2 border cursor-pointer flex-row-reverse md:flex-row gap-2
                  ${selectedItems.some(selectedItem => selectedItem.name === item.name) ? 'border-darkPurple rounded-xl' : 'border-white border-b-white md:border-b-[#D3DBDA] rounded-none'}
                `}
              >
              <div className='relative flex justify-center'>
                <ImageComponent
                  src={item.img} 
                  alt='img' 
                  height={60} 
                  width={60}
                  styles='rounded-md'
                />
                <button 
                  className='absolute bottom-[-14px] bg-white p-1 px-2 rounded-md border cursor-pointer border-pink-600 text-pink-600 text-xs flex md:hidden'
                  onClick={() => addItem(item)}
                >
                  Add
                </button>
                </div>

                <div className='flex flex-col  gap-1 md:gap-2  grow'>
                  <div className='text-[14px] font-bold'>
                    {item.name}
                  </div>
                  <div className='flex gap-3 text-[12px]'>
                    <span className='font-bold'>{item.price}</span>
                    <Rating ratingValue={item.rating} detail/>
                    <span className='text-[#2F3333A6] text-[11px] hidden md:flex'>{item.description}</span>
                    <div className='flex justify-end grow items-center gap-2'>
                      <ItemDetails 
                        item={item}
                        showItem={showItem}
                        setShowItem={setShowItem}
                      />
                      { selectedItems.some(selectedItem => selectedItem.name == item.name) 
                        ? 
                        <i 
                          className="fi fi-rr-check hidden md:flex bg-darkPurple text-white p-[4px] text-[8px] rounded-full"
                          onClick={() => addItem(item)}
                        >
                        </i>
                        : 
                        <i 
                          className="fi fi-rr-circle hidden md:flex text-[#020A05] text-[16px]"
                          onClick={() => addItem(item)}
                        >
                        </i>
                      }
                    </div>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default CategoryItems