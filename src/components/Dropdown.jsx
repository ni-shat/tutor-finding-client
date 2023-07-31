import React, { useState, useEffect, useRef } from 'react';
import { FaAngleDown } from 'react-icons/fa';

const Dropdown = ({ itemArray, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('');
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

  return (
    <div className="dropdown dropdown-bottom dropdown-end bg-white w-full mt-2" ref={dropdownRef}>
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

      {(isOpen || searchText && opacity) && (
        <ul
          tabIndex={0}
          className="absolute dropdown text-sm text-gray-700  z-30 right-0 border shadow-sm shadow-black bg-base-100 rounded-box overflow-y-auto max-h-60 w-full"
        >
          {filteredItems.map((item, index) => (
            <li
              onClick={() => handleItemClick(item)}
              className={`py-3 px-4 hover:cursor-pointer hover:bg-blue-100 ${index === 0 ? 'bg-blue-100' : ''}`}
              key={index}>
              <a>{item}</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
