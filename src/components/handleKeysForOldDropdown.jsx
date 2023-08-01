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
      if (filteredItems[hoveredItem]) {
        handleItemClick(filteredItems[hoveredItem])
      }
    }
  };