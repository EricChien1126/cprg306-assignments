"use client";

import { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  const fetchMealIdeas = async (ingredient) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
  };

  const loadMealIdeas = async () => {
    if (ingredient) {
      const fetchedMeals = await fetchMealIdeas(ingredient);
      setMeals(fetchedMeals || []);
    }
  };

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Meal Ideas</h2>
      <ul>
        {meals.map(meal => (
          <li key={meal.idMeal} className="mb-2">
            <img src={meal.strMealThumb} alt={meal.strMeal} className="w-16 h-16 inline-block mr-4"/>
            <span>{meal.strMeal}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
