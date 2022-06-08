import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, setItems }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  };

  function handleSearchChange(event) {
    setSearch(event.target.value);
  };

  const itemsToDisplay = items
    .filter(item => (selectedCategory === "All") ? true : item.category === selectedCategory)
    .filter(item => (item.name.toLowerCase().includes(search.toLowerCase())) ? true : false);

  function handleNewItem(newItem) {
    const newItemList = [...items, newItem];
    setItems(newItemList);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleNewItem}/>
      <Filter 
        onCategoryChange={handleCategoryChange} 
        selectedCategory={selectedCategory} 
        onSearchChange={handleSearchChange}
        search={search}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
