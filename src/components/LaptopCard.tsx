
import React from 'react';
import { Laptop } from '../data/Laptops';

interface Props {
  laptop: Laptop;
  isSelected: boolean;
  onAdd: () => void;
  onRemove: () => void;
}

const LaptopCard =  ({ laptop, isSelected, onAdd, onRemove }: Props) => {
  return (
    <div style={{ border: '1px solid gray', padding: '1rem', margin: '0.5rem' }}>
      <h3>{laptop.model}</h3>
      <p>Price: ${laptop.price}</p>
      <p>Colors: {laptop.colors.join(', ')}</p>
      {!isSelected ? (
        <button onClick={onAdd}>Add</button>
      ) : (
        <button onClick={onRemove}>Remove</button>
      )}
    </div>
  );
};

export default LaptopCard;
