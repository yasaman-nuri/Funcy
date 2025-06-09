import { useState } from "react";
import { Laptop } from "../data/Laptops";

interface Props {
  laptop: Laptop;
  isSelected: boolean;
  onAdd: () => void;
  onRemove: () => void;
  onEdit: (updatedLaptop: Laptop) => void;
}

const LaptopCard = ({ laptop, isSelected, onAdd, onRemove, onEdit }: Props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedModel, setEditedModel] = useState(laptop.model);
  const [editedPrice, setEditedPrice] = useState(laptop.price.toString());
  const [editedColors, setEditedColors] = useState(laptop.colors.join(", "));

  const handleSave = () => {
    const updatedLaptop = {
      ...laptop,
      model: editedModel,
      price: parseFloat(editedPrice),
      colors: editedColors.split(",").map((color) => color.trim()),
    };
    onEdit(updatedLaptop);
    setIsEditing(false);
  };

  return (
    <div
      style={{ border: "1px solid gray", padding: "1rem", margin: "0.5rem" }}
    >
      {!isEditing ? (
        <>
          <h3>{laptop.model}</h3>
          <p>Price: ${laptop.price}</p>
          <p>Colors: {laptop.colors.join(", ")}</p>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            {!isSelected ? (
              <button onClick={onAdd}>Add</button>
            ) : (
              <button onClick={onRemove}>Remove</button>
            )}
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </div>
        </>
      ) : (
        <>
          <input
            value={editedModel}
            onChange={(e) => setEditedModel(e.target.value)}
          />
          <input
            type="number"
            value={editedPrice}
            onChange={(e) => setEditedPrice(e.target.value)}
          />
          <input
            value={editedColors}
            onChange={(e) => setEditedColors(e.target.value)}
          />
          <div>
            <button onClick={handleSave}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </>
      )}
    </div>
  );
};

export default LaptopCard;
