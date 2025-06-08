import React, { useState } from "react";
import { laptops as initialLaptops, Laptop } from "./data/Laptops";
import LaptopCard from "./components/LaptopCard";
import NewProduct from "./components/NewProduct";

const App = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const [laptops, setLaptops] = useState<Laptop[]>(initialLaptops);
  const selectedLaptops = laptops.filter((item) =>
    selectedIds.includes(item.id)
  );
  const totalPrice = selectedLaptops.reduce((sum, item) => sum + item.price, 0);
  ///////add new
  const [displayForm, setDisplayForm] = useState(false);
  const handleData = (data: Omit<Laptop, "id">) => {
    const newId =
      laptops.length > 0 ? Math.max(...laptops.map((l) => l.id)) : 0;
    const newLaptop: Laptop = {
      id: newId + 1,
      ...data,
    };
    setLaptops([...laptops, newLaptop]);
    setDisplayForm(false);
  };
  ///////
  const toggleAdd = (id: number) => {
    if (!selectedIds.includes(id)) {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const removeItem = (id: number) => {
    setSelectedIds(selectedIds.filter((itemId) => itemId !== id));
  };

  return (
    <div style={{ padding: "3rem" }}>
      <div style={{ textAlign: "center" }}>
        <h1>My Shop</h1>
        <p>Selected Items: {selectedLaptops.length}</p>
        <p>Total Price: ${totalPrice}</p>
        <button onClick={() => setDisplayForm(true)}>Add New Item</button>
      </div>

      {displayForm && (
        <NewProduct
          onSave={handleData}
          onCancel={() => setDisplayForm(false)}
        />
      )}

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {laptops.map((item) => (
          <LaptopCard
            key={item.id}
            laptop={item}
            isSelected={selectedIds.includes(item.id)}
            onAdd={() => toggleAdd(item.id)}
            onRemove={() => removeItem(item.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
