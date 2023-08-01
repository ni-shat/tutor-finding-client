import React, { useState, useEffect, useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa';




// TODO: when clicking in cross I want the dropdown keeps open. DOn't get closed. 



const Dropdown = ({ itemObject, placeholder, setAllData, allData, propertyName }) => {

  const [isOpen, setIsOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState({});
  const [selectedItem, setSelectedItem] = useState(''); //old
  // const [objectItem, setobjectItem] = useState(itemObject);
  const [objectItems, setObjectItems] = useState(itemObject);
  const [hoveredItem, setHoveredItem] = useState([0, Object.keys(itemObject)[0]]);
  const [isKeyPressing, setIsKeyPressing] = useState(false);
  const [opacity, setOpacity] = useState(true);
  const [searchText, setSearchText] = useState('');
  const dropdownRef = useRef();
  const inputRef = useRef(null);


  const handleItemCrossClick = (key, item) => {
    inputRef.current.focus();
    console.log("key, item:", key, item)

    if (key in selectedItems) {
      selectedItems[key] = selectedItems[key].filter(it => it !== item); // removed item from specific key from selectedItems
      // console.log(selectedItems[key] )
    }

    if (key in objectItems) {
      const tmpArrayValues = objectItems[key];
      objectItems[key] = [item, ...tmpArrayValues];
    }

    /********-----OLD APPROACH------ */
    // const updatedSelectedItems = selectedItems.filter(it => it !== item); //old
    // setSelectedItems([...updatedSelectedItems]);
    /********-----OLD APPROACH------ */

    /*/ set all selected data in parent state  // old
    const objectTmp = {
      [propertyName]: [...updatedSelectedItems]     
    }
    setAllData({ ...allData, ...objectTmp });
    // end setting all selected data in parent state */

    // setSelectedItems([...updatedSelectedItems]); //old
    // setObjectItems([item, ...objectItems]); //old

  }

  const handleItemClick = (key, item) => {
    inputRef.current.focus(); console.log(key, item)

    /***  / set all selected data in parent state ---------- OLD
    const objectTmp = {
      [propertyName]: [...selectedItems, item] // I have wrap the propertyName in thirdBracket to set property name dynamically. 
    }
    setAllData({ ...allData, ...objectTmp });
    // end setting all selected data in parent state  *///

    /**setting selected items objects keywise */
    // console.log(selectedItems)
    const tmpObj = selectedItems;
    if (key in tmpObj) {
      console.log("tmpObj[key]", tmpObj);
      const temp = [...tmpObj[key]]
      tmpObj[key] = [...temp, item];
    } else {
      tmpObj[key] = [item];
    }
    setSelectedItems(tmpObj)


    /**************** ------------- OLD
     * const selectedObjTmp = { key: [...selectedItems, item] }
       setSelectedItems(selectedObjTmp); console.log("selectedObjTmp", selectedObjTmp)
     * *** */

    /**END setting selected items objects keywise */

    // setSelectedItems([...selectedItems, item]); //old

    // It updates the object items after selecting an item, thus this item from dropdown gets removed
    if (key in objectItems) {
      const filteredArrayValues = objectItems[key].filter(it => it !== item);
      objectItems[key] = filteredArrayValues;
    }

    // const filteredobjectItem = objectItems.filter(it => it !== item); //old
    // setObjectItems(filteredobjectItem) //old

    // setSelectedItem(""); //old
    // setIsOpen(false); //old
    setSearchText("");
    setOpacity(!opacity);
  };

  // useEffect(() => {
  //   let filteredItems = {}; //this functions filters the object based on search text
  //   //search text filter chalaw shob key er jonno, key hocche property name, and objectItem[key] hocche arrays value oi pperty name er.


  // }, [searchText])
  /***searching works without the below for ! */
  // for (const propertyName in itemObject) {
  //   objectItems[propertyName] = itemObject[propertyName].filter(item => item.toLowerCase().includes(searchText.toLowerCase()));
  // }


  // console.log("filteredItems", filteredItems)
  // setObjectItems(filteredItems);
  // const filteredItems = objectItem.filter(
  //   item => item.toLowerCase().includes(searchText.toLowerCase())
  // );



  const handleInputChange = (event) => {
    console.log('nishat')
    event.stopPropagation();
    setSearchText(event.target.value);
    // console.log(searchText)
    setOpacity(true); 
    setHoveredItem([0, Object.keys(itemObject)[0]])
    // console.log(event.target.value) 
    for (const propertyName in itemObject) {
      objectItems[propertyName] = itemObject[propertyName].filter(item => item.toLowerCase().includes(event.target.value.toLowerCase()));
    }
    // setObjectItems(tmpObj)
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
  };


  const handleOutsideClick = (event) => {
    // console.log('outside')
    const dropdownContainer = dropdownRef.current; //if I keep moving mouse, it will execute
    console.log(dropdownContainer) // it is used in the div
    console.log(event.target) 
    console.log(dropdownContainer.contains(event.target))
    if (dropdownContainer && !dropdownContainer.contains(event.target)) {
      const isScrollbarClicked = event.target.classList.contains('overflow-auto');
      // console.log(isScrollbarClicked)
      // const isExcludedElement = event.target.closest('.exclude-dropdown-close');

      // if (!isScrollbarClicked && !isExcludedElement) {
      if (!isScrollbarClicked) {
        setIsOpen(false);
        setSearchText("") // It solved the problem of opening dropdown box even when clicking outside, if user writes something in the input
      } 
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, []);



  const dropdownOptionsRef = useRef();

  const handleMouseEnter = (index, key) => {
    // if (!isKeyPressing) {
      console.log("index", index)
    setHoveredItem([index, key]);
    // }
  };
  // const handleMouseLeave = () => {
  //   setHoveredItem(null);
  // };

  const [focusedIndex, setFocusedIndex] = useState(null);
  const handleKeys = (event) => {  //it working
    console.log(event.key)
    

    if (event.key === 'ArrowDown') {
      console.log("arrow down clicked")
      event.preventDefault();

    
    }
   
  };



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
              // selectedItems.map((item, index) =>
              //   <p key={index} className=' text-[13px] w-fit border border-[#1e326e] rounded-full whitespace-nowrap pb-1.5 pt-1 px-2' >{item}
              //     <p onClick={() => handleItemCrossClick(item)} className='text-white hover:cursor-pointer ml-1.5 inline-flex font-semibold  justify-center pb-1 items-center bg-blue-600 rounded-full w-3.5 h-3.5'>x</p>
              //   </p>
              // )
              Object.entries(selectedItems).map(([key, value]) => (
                <>
                  {
                    value.map((item, index) => (
                      <p key={index} className=' text-[13px] w-fit border border-[#1e326e] rounded-full whitespace-nowrap pb-1.5 pt-1 px-2' >{item}
                        <p onClick={() => handleItemCrossClick(key, item)} className='text-white hover:cursor-pointer ml-1.5 inline-flex font-semibold  justify-center pb-1 items-center bg-blue-600 rounded-full w-3.5 h-3.5'>x</p>
                      </p>
                    ))
                  }

                </>
              ))
            }
            {/* <div className=''> */}
            <input
              type="text" ref={inputRef}
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
                      onMouseEnter={() => handleMouseEnter(index, key)}
                      // onMouseLeave={handleMouseLeave}
                      ref={dropdownOptionsRef}
                      onClick={() => handleItemClick(key, item)}
                      className={`py-3 px-4   ${(index === hoveredItem[0] && key === hoveredItem[1]) ? 'bg-blue-100' : ''}`}
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
