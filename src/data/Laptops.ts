
export interface Laptop {
  id: number;
  model: string;
  price: number;
  colors: string[];
}

export const laptops: Laptop[] = [
  { id: 1, model: 'Dell XPS 13', price: 1200, colors: ['black', 'silver'] },
  { id: 2, model: 'MacBook Air', price: 1400, colors: ['silver', 'gray'] },
  { id: 3, model: 'HP Spectre', price: 1100, colors: ['blue', 'gold'] },
  { id: 4, model: 'Lenovo ThinkPad', price: 1000, colors: ['black'] },
  { id: 5, model: 'Asus ZenBook', price: 950, colors: ['silver', 'purple'] },
  { id: 6, model: 'Acer Swift', price: 870, colors: ['white'] },
  { id: 7, model: 'MSI Prestige', price: 1300, colors: ['gray', 'blue'] },
  { id: 8, model: 'Razer Blade', price: 1500, colors: ['black', 'green'] },
];
