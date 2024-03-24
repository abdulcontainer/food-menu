import Layout from '../layout/index';
import menuData from '../data/MenuData';
import { useEffect, useRef, useState } from 'react';
import CategoryItems from '@/components/CategoryItems'
import SelectedItemsList from '@/components/SelectedItemsList';

const Home = () => {

  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(menuData[0].id);

  const scrollContainerRef = useRef(null);
  const categoryItemsContainerRef = useRef(null);

  useEffect(() => {
    itemsScroll(selectedCategory)
    categoryScroll(selectedCategory)
  },[selectedCategory])

  const itemsScroll = (categoryId) => {
    if (categoryItemsContainerRef.current) {
      const selectedCategoryElement = categoryItemsContainerRef.current.querySelector(`[data-category-id="${categoryId}"]`);
      if (selectedCategoryElement) {
        selectedCategoryElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
      }
    }
  }

  // select next category
  const selectNextCategory = () => {
    const currentIndex = menuData.findIndex(category => category.id === selectedCategory);
    if (currentIndex !== -1) setSelectedCategory(menuData[(currentIndex + 1) % menuData.length]?.id);
  };

  // Function to select the previous category
  const selectPreviousCategory = () => {
    const currentIndex = menuData.findIndex(category => category.id === selectedCategory);
    if (currentIndex !== -1) setSelectedCategory(menuData[(currentIndex - 1 + menuData.length) % menuData.length]?.id);
  };
  
  // category scroll
  const categoryScroll = (categoryId) => {
    if (scrollContainerRef.current) {
      const selectedCategoryElement = scrollContainerRef.current.querySelector(`[data-category-id="${categoryId}"]`);
      if (selectedCategoryElement) {
        selectedCategoryElement.scrollIntoView({ inline: 'start', behavior: 'smooth' });
      }
    }
  }

  // add Items
  const addItem = (item) => {
    const alreadySelected = selectedItems?.filter(selected => selected.name == item.name)
    if (alreadySelected?.length) {
      deleteItem(item)
    } else {
      setSelectedItems(prev => [...prev, item])
    }
  }

  // select all Items of the category
  const toggleSelectAllItems = (categoryId) => {
    const categoryItems = menuData.find(category => category.id === categoryId)?.items || [];
    const allSelected = categoryItems.every(item => selectedItems.some(selectedItem => selectedItem.name === item.name));

    if (allSelected) {
      const newSelectedItems = selectedItems.filter(selectedItem => !categoryItems.some(item => item.name === selectedItem.name));
      setSelectedItems(newSelectedItems);
    } else {
      const remainingItems = categoryItems.filter(item => !selectedItems.some(selectedItem => selectedItem.name === item.name));
      setSelectedItems(prev => [...prev, ...remainingItems]);
    }
  };

  // delete Item
  const deleteItem = (item) => {
    setSelectedItems(selectedItems?.filter(selected => selected.name !== item.name))
  }

  return (
    <Layout>
      <div className='flex gap-5 h-full justify-between'>
        <div className='flex flex-col w-full lg:w-[70%] h-full bg-white rounded-t-xl relative'>
          <div className='p-5 border-b-[1px'>
            <div 
              className='flex items-center gap-4 overflow-auto overflow-y-hidden pb-2 px-4 w-full'
              ref={scrollContainerRef}
            >
            { selectedCategory != menuData[0]?.id && 
              <i 
                className="fi fi-rr-arrow-left flex absolute left-0 bg-white border-1 p-2 rounded-full shadow cursor-pointer"
                onClick={selectPreviousCategory}
              >
              </i>
            }
            {selectedCategory != menuData[menuData.length - 1]?.id && 
              <i 
                className="fi fi-rr-arrow-right flex absolute right-0 bg-white border-1 p-2 rounded-full shadow cursor-pointer"
                onClick={selectNextCategory}
              >
              </i>
            }  
              {menuData.map((category) => (
                <button 
                  key={category.id} 
                  className={`cursor-pointer whitespace-nowrap px-3 py-1 rounded-full border border-darkPurple ${
                    selectedCategory === category.id ? 'bg-darkPurple text-white' : 'text-darkPurple'
                  }`} 
                  onClick={() => {itemsScroll(category.id); categoryScroll(category.id); setSelectedCategory(category.id)}}
                  data-category-id={category.id}
                >
                  {category.categoryName}
                </button>
              ))}
            </div>
          </div>
          <CategoryItems 
            menuData={menuData} 
            categoryItemsContainerRef={categoryItemsContainerRef} 
            addItem={addItem}
            selectedItems={selectedItems}
            toggleSelectAllItems={toggleSelectAllItems}
          />
        </div>
        <SelectedItemsList 
          selectedItems={selectedItems}
          deleteItem={deleteItem}
        />
      </div>
    </Layout>
  );
}

export default Home