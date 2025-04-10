
import React, { useState } from "react";
import { laptops } from "./laptops";
import './index.css';

function App() {
  const [search, setSearch] = useState("");

  const filteredLaptops = laptops.filter((item) =>
    item.Description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Lambert's Laptop Price List</h1>
      <p>All items include a 1% markup and are updated as of April 9, 2025.</p>
      <input
        type="text"
        placeholder="Search by description..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>MPN</th>
            <th>Description</th>
            <th>Qty</th>
            <th>Cash</th>
            <th>+1%</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {filteredLaptops.map((item, idx) => (
            <tr key={idx}>
              <td>{item.MPN}</td>
              <td>{item.Description}</td>
              <td>{item.QTY}</td>
              <td>${item.CASH.toFixed(2)}</td>
              <td>${item.PricePlus1.toFixed(2)}</td>
              <td>{item.Location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
