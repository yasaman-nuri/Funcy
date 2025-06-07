import React, { useState } from "react";
import { laptops, Laptop } from "./data/Laptops";
import LaptopCard from "./components/LaptopCard";

const App = () => {
  const [selectedIds, setSelectedIds] = useState<number[]>([]);
  const selectedLaptops = laptops.filter((item) =>
    selectedIds.includes(item.id)
  );
  const totalPrice = selectedLaptops.reduce((sum, item) => sum + item.price, 0);

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
      </div>

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
