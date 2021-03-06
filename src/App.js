import "./styles.css";
import React, { useState } from "react";
import items from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const newCategories = [
  "all",
  ...new Set(
    items.map((item) => {
      return item.category;
    })
  )
];

export default function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(newCategories);
  
  const filterItems = (category) => {

    if(category === 'all'){
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => {
      return item.category === category
    });
    setMenuItems(newItems);
    
   
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>

        <Categories categories={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}
