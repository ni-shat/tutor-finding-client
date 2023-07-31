import React, { useState, useEffect, useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Dropdown = ({ itemArray, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
  const [hoveredItem, setHoveredItem] = useState(0);
  const [isKeyPressing, setIsKeyPressing] = useState(false);
  const [opacity, setOpacity] = useState(true);
  const [searchText, setSearchText] = useState('');
  const dropdownRef = useRef();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
    setSearchText(item);
    setOpacity(!opacity);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
    setOpacity(true);
    setHoveredItem(0)
  };

  const handleIconClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleInputClick = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };


  const handleOutsideClick = (event) => {
    const dropdownContainer = dropdownRef.current;

    if (dropdownContainer && !dropdownContainer.contains(event.target)) {
      const isScrollbarClicked = event.target.classList.contains('overflow-auto');
      console.log(isScrollbarClicked)
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

  // Filter the items based on the search text
  const filteredItems = itemArray.filter(
    (item) => item.toLowerCase().includes(searchText.toLowerCase())
  );









  const dropdownOptionsRef = useRef();

  const handleMouseEnter = (index) => {
    // if (!isKeyPressing) {
      setHoveredItem(index);
      console.log(hoveredItem)
    // }
  };

  // const handleMouseLeave = () => {
  //   setHoveredItem(null);
  // };
 

  const handleKeys = (event) => {  //it working
    console.log(event.key)
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
      handleItemClick(filteredItems[hoveredItem])
    }
  };


  // useEffect(() => {
  //   document.addEventListener('mousedown', handleOutsideClick);

  //   // Add keydown event listener for handling keyboard events on the dropdown options
  //   if (dropdownOptionsRef.current) {
  //     dropdownOptionsRef.current.addEventListener('keydown', handleKeyDown);
  //   }
  // }, [])

  // console.log(hoveredItem)

  const onKeyPressed = (e) => {
    console.log(e.type === 'keydown');
    console.log(dropdownOptionsRef.current)
  }



  return (
    <div  onKeyDown={handleKeys} className="dropdown dropdown-bottom dropdown-end bg-white w-full mt-2" ref={dropdownRef}>
      <div
       
        tabIndex={0}
        className="flex items-center border border-gray-300 hover:border-black"
        onClick={handleInputClick}
      >
        <input
          type="text"
          value={searchText}
          onChange={handleInputChange}
          onClick={handleInputClick}
          placeholder={'Select...        '}
          className={`hover:cursor-default focus:outline-0 w-full bg-white py-3.5 px-4 ml-0 text-sm ${selectedItem ? 'text-gray-600' : 'text-gray-400'
            } flex justify-between items-center`}
        />
        <div
          onClick={handleIconClick}
          className="mt-0 py-4   pr-3.5  hover:cursor-pointer"
        >
          <FaAngleDown />
        </div>
      </div>

      {/* opacity is added to remove the open dropdown after clicking os selecting an item. */}
      {(isOpen || searchText && opacity) && (

        <ul

          tabIndex={0}
          className="absolute dropdown text-sm text-gray-700  z-30 right-0 border shadow-sm shadow-black bg-base-100 rounded-box overflow-y-auto max-h-60 w-full"
        >
          {filteredItems.map((item, index) => (
            <li
              onMouseEnter={() => handleMouseEnter(index)}
              // onMouseLeave={handleMouseLeave}
              ref={dropdownOptionsRef}
              onClick={() => handleItemClick(item)}
              className={`py-3 px-4   ${index === hoveredItem ? 'bg-blue-100' : ''}`}
              key={index}>
              {item}
            </li>
          ))}
        </ul>

      )}
    </div>
  );
};

export default Dropdown;
