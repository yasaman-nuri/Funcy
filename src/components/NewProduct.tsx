import React, { useState } from "react";
import { laptops, Laptop } from "../data/Laptops";

interface Props {
  onSave: (laptop: { model: string; price: number; colors: string[] }) => void;
  onCancel: () => void;
}
const NewProduct = ({ onSave, onCancel }: Props) => {
  const [model, setModel] = useState("");
  const [price, setPrice] = useState("");
  const [colors, setColors] = useState("");
  const handleSubmit = () => {
    onSave({
      model: model,
      price: parseFloat(price),
      colors: colors.split(","),
    });
    setModel("");
    setPrice("");
    setColors("");
  };
  return (
    <div style={{ marginTop: "1rem", padding: "1rem" }}>
      <input
        placeholder="model"
        type="text"
        value={model}
        onChange={(e) => setModel(e.target.value)}
      />
      <input
        placeholder="price"
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        placeholder="colors(seprate with comma)"
        type="text"
        value={colors}
        onChange={(e) => setColors(e.target.value)}
      />
      <button onClick={handleSubmit} style={{ marginRight: "1rem" }}>
        Save
      </button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default NewProduct;
