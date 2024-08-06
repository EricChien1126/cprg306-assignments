export default function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between p-2 border-b border-gray-200">
      <span>{name}</span>
      <span>{quantity}</span>
      <span>{category}</span>
    </li>
  );
}
