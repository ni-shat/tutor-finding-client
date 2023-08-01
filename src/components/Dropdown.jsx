import React, { useState, useEffect, useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa';




// TODO: when clicking in cross I want the dropdown keeps open. DOn't get closed. 



const Dropdown = ({ itemArray, placeholder, setAllData, allData, propertyName }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(''); //old
  const [arrayItems, setArrayItems] = useState(itemArray);
  const [hoveredItem, setHoveredItem] = useState(0);
  const [isKeyPressing, setIsKeyPressing] = useState(false);
  const [opacity, setOpacity] = useState(true);
  const [searchText, setSearchText] = useState('');
  const dropdownRef = useRef();
  const inputRef = useRef(null);  console.log(itemArray)


  const handleItemCrossClick = (item) => {
    inputRef.current.focus();
    const updatedSelectedItems = selectedItems.filter(it => it !== item);
    // set all selected data in parent state
    const objectTmp = {
      [propertyName]: [...updatedSelectedItems]
    }
    setAllData({ ...allData, ...objectTmp });
    // end setting all selected data in parent state
    setSelectedItems([...updatedSelectedItems]);
    setArrayItems([item, ...arrayItems]);
    setIsOpen(true)
  }


  const handleItemClick = (item) => {
    console.log(inputRef.current)
    inputRef.current.focus();
    console.log(document.activeElement === inputRef.current)
    // set all selected data in parent state
    const objectTmp = {
      [propertyName]: [...selectedItems, item] // I have wrap the propertyName in thirdBracket to set property name dynamically. 
    }
    setAllData({ ...allData, ...objectTmp });
    // end setting all selected data in parent state
    setSelectedItems([...selectedItems, item]);
    const filteredArrayItems = arrayItems.filter(it => it !== item);
    setArrayItems(filteredArrayItems)

    // setSelectedItem(""); //old
    // setIsOpen(false); //old
    setSearchText("");
    setOpacity(!opacity);
  };



  const handleInputChange = (event) => {
    event.stopPropagation();
    setSearchText(event.target.value);
    setOpacity(true);
    setHoveredItem(0)
    console.log(event.target.value)
  };

  const handleIconClick = (e) => {
    e.stopPropagation();
    inputRef.current.focus();
    setIsOpen(!isOpen);
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
    inputRef.current.focus();
     inputRef.current.focus();
  };


  const handleOutsideClick = (event) => {
    const dropdownContainer = dropdownRef.current;
    if (dropdownContainer && !dropdownContainer.contains(event.target)) {
      const isScrollbarClicked = event.target.classList.contains('overflow-auto');
      // console.log(isScrollbarClicked)
      const isExcludedElement = event.target.closest('.exclude-dropdown-close');

      if (!isScrollbarClicked && !isExcludedElement) {
        setIsOpen(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);


  const [objectItems, setObjectItems] = useState({}); // that's my title of dropdown items

  useEffect(() => {
    let filteredItems = {};
    //search text filter chalaw shob key er jonno, key hocche property name, and arrayItems[key] hocche arrays value oi pperty name er.
    for (const propertyName in arrayItems) {
      filteredItems[propertyName] = arrayItems[propertyName].filter(item => item.toLowerCase().includes(searchText.toLowerCase()));
    }
    console.log("filteredItems", filteredItems)
    setObjectItems(filteredItems);
    // const filteredItems = arrayItems.filter(
    //   item => item.toLowerCase().includes(searchText.toLowerCase())
    // );

  }, [searchText])

  // console.log(objectItems)
  // console.log(searchText)


  const dropdownOptionsRef = useRef();

  const handleMouseEnter = (index) => {
    // if (!isKeyPressing) {
    setHoveredItem(index);
    // }
  };
  // const handleMouseLeave = () => {
  //   setHoveredItem(null);
  // };

  
  const handleKeys = (event) => {  //it working
    // console.log(event.key)
    // setIsKeyPressing(true);

    if (event.key === 'ArrowDown') {
      console.log("arrow down clicked")
      event.preventDefault();
      // const currentIndex = filteredItems.findIndex((item) => indexOf(item) === hoveredItem);
      console.log(filteredItems.indexOf('Uni Help'))
      const nextIndex = hoveredItem === filteredItems.length - 1 ? 0 : hoveredItem + 1;
      // Set the next item as the selected item
      setHoveredItem(nextIndex);
      console.log(hoveredItem)
    }
    else if (event.key === 'ArrowUp') {
      console.log("arrow up clicked")
      event.preventDefault();
      const prevIndex = hoveredItem === 0 ? filteredItems.length - 1 : hoveredItem - 1;
      setHoveredItem(prevIndex);
      console.log(hoveredItem)
    }
    else if (event.key === 'Enter') {
      console.log("Enter clicked")
      event.preventDefault();
      console.log(filteredItems[hoveredItem]);
      if (filteredItems[hoveredItem]) {
        handleItemClick(filteredItems[hoveredItem])
      }
    }
  };

  const itemArrDropdownCategories =
    ["Bangla Medium", "English Medium", "English Version", "Uni Help", "Language Learning", "Madrasha Medium", "IELTS Preparation", "Test Preparation"]


  return (
    <div onKeyDown={handleKeys} className="dropdown dropdown-bottom dropdown-end  bg--100 w-full mt-2 " ref={dropdownRef}>
      <div

        tabIndex={0}
        className="flex flex-wra w-full border- gap-1 px-1 items-center border hover:border-black whitespace-normal  max-h-40 "
        onClick={handleInputClick}
      >
        <div className='flex w-full items-center '>
          <div className=' flex-wrap gap-1.5 flex w-[100%] py-2.5 mt-0.5 px-1'>
            {
              selectedItems.map((item, index) =>
                <p key={index} className=' text-[13px] w-fit border border-[#1e326e] rounded-full whitespace-nowrap pb-1.5 pt-1 px-2' >{item}
                  <p onClick={() => handleItemCrossClick(item)} className='text-white hover:cursor-pointer ml-1.5 inline-flex font-semibold  justify-center pb-1 items-center bg-blue-600 rounded-full w-3.5 h-3.5'>x</p>
                </p>
              )
            }
            {/* <div className=''> */}
              <input
                type="text"  ref={inputRef}
                value={searchText}
                onChange={handleInputChange}
                onClick={handleInputClick}
                placeholder={'Select...        '}
                className={`hover:cursor-default focus:outline-0 bg--100 pb-1.5 pt-1 pl-2 ml-0 text-sm ${selectedItems ? 'text-gray-600' : 'text-gray-400'
                  } flex justify-between items-center`}
              />

            {/* </div> */}
          </div>


          <div
            onClick={handleIconClick}
            className="mt-0 py-4  pr-3.5  hover:cursor-pointer"
          >
            <FaAngleDown />
          </div>

        </div>
      </div>

      {/* opacity is added to remove the open dropdown after clicking os selecting an item. */}
      {(isOpen || searchText && opacity) && (

        <ul

          tabIndex={0}
          className="absolute dropdown text-sm text-gray-700  z-30 right-0 border shadow-sm shadow-black bg-base-100 rounded-box overflow-y-auto max-h-60 w-full"
        >


          {
            Object.entries(objectItems).map(([key, value]) => (
              <>
                <p className='uppercase flex justify-between text-blue-800 px-4 font-medium pt-3 py-2 text-xs ' key={key}>
                  {key} <span className='rounded-full p-1 font-medium bg-gray-200 text-[11px] w-5 h-5 flex justify-center items-center'>
                    {value.length}</span>
                </p>
                {/*  border-blue-600 */}
                <hr className='w-[95%] -mt-1 mx-auto' />

                {

                  value.map((item, index) => (
                    <li
                      onMouseEnter={() => handleMouseEnter(index)}
                      // onMouseLeave={handleMouseLeave}
                      ref={dropdownOptionsRef}
                      onClick={() => handleItemClick(item)}
                      className={`py-3 px-4   ${index === hoveredItem ? 'bg-blue-100' : ''}`}
                      key={index}>
                      {item}
                    </li>
                  ))
                }
                <p className='my-2.5'></p>

              </>
            ))

          }


        </ul>

      )}
    </div>
  );
};

export default Dropdown;
