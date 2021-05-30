import "./styles.css";
import React, { useState } from "react";
import items from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

export default function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filterItems = (category) => {
    const newItems = items.filter((item) => {
      return item.category === category;
    });
    setMenuItems(newItems);
  };
  const AllItems = () => {
    return setMenuItems(items);
  };

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>

        <Categories AllItems={AllItems} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
}
