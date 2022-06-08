import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [formData, setFormData] = useState({name:'', category:'Produce'});

  function handleNewItemChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({
      ...formData,
      [name]:value
    });
  };

  const newItem = {
    id: uuid(),
    name: formData.name,
    category: formData.category
  };

  return (
    <form className="NewItem" onSubmit={(e) => {
      e.preventDefault();
      onItemFormSubmit(newItem);
    }}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleNewItemChange}/>
      </label>

      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleNewItemChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
