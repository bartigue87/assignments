import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function Ingredients(props) {
  const { id } = useParams();
  useEffect(() => {
    fetchItems();
  }, []);

  const [item, setItems] = useState("");

  const fetchItems = () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setItems(data);
      });
  };

  return (
    <div>
      <h1>Item</h1>
    </div>
  );
}

export default Ingredients;
