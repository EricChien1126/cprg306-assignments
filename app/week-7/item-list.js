"use client";

import { useState } from 'react';
import Item from './item';

export default function ItemList({ items, onItemSelect }) {
  const [sortBy, setSortBy] = useState('name');

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = items.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div>
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setSortBy('name')}
          className={`px-4 py-2 rounded ${sortBy === 'name' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => setSortBy('category')}
          className={`px-4 py-2 rounded ${sortBy === 'category' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setSortBy('group')}
          className={`px-4 py-2 rounded ${sortBy === 'group' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          Group by Category
        </button>
      </div>
      {sortBy === 'group' ? (
        Object.keys(groupedItems).sort().map(category => (
          <div key={category}>
            <h2 className="font-bold capitalize">{category}</h2>
            <ul>
              {groupedItems[category].sort((a, b) => a.name.localeCompare(b.name)).map(item => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                  onSelect={onItemSelect}
                />
              ))}
            </ul>
          </div>
        ))
      ) : (
        <ul>
          {sortedItems.map(item => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              onSelect={onItemSelect}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
