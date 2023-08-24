
import React from 'react';
import './FoodMenuBar.css'; // Import the CSS file
import NavigationBar from './NavigationBar';

const foodItems = [
  {
    name: 'Pasta',
    image: 'https://th.bing.com/th?id=OIP.dxFnJKfMGgi7b_dztN0xoAHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', // Replace with actual image URL
    price: 200,},
  {
    name: 'Burger',
    image: 'https://th.bing.com/th?id=OIP.H07SGPpx-swRy0WfmnDIdwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', // Replace with actual image URL
    price: 100,},
  {
    name: 'Pizza',
    image: 'https://th.bing.com/th?id=OIP.zNsLu3Hwfbi3vsU4SaWBpQHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', // Replace with actual image URL
    price: 300, },

  {
    name: 'SouaChaap',
    image: 'https://th.bing.com/th?id=OIP.8-Wb04aFOlueUyDUtgXFuQHaFj&w=288&h=216&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', // Replace with actual image URL
    price: 400, },
  {
    name: 'ChickenChangezi',
    image: 'https://www.bing.com/th?id=OIP.ayv5vn7tgvtQnUaBwzvRiQHaE6&w=146&h=120&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', // Replace with actual image URL
    price: 500, },
  {
    name: 'Biryani',
    image: 'https://th.bing.com/th?id=OIP.66m2ALTzCezwXo9CJsiBtgHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2', // Replace with actual image URL
    price: 500, },
  // Add more food items as needed
];

const FoodMenuBar = () => {
  return (
        
        <div className="food-menu-bar">
            <NavigationBar></NavigationBar>
          <div className="food-menu-title">
            <h2>Food Menu</h2>
          </div>
          <div className="food-items">
            {foodItems.map((food, index) => (
              <div className="food-item" key={index}>
                <img src={food.image} alt={food.name} />
                <h3>{food.name}</h3>
                <p className="food-price">${food.price.toFixed(2)}</p>
                <button className="select-button">Select</button>
              </div>
            ))}
          </div>
        </div>
      );
};

export default FoodMenuBar;
