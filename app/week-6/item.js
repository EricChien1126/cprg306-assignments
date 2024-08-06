export default function Item({ name, quantity, category }) {
  return (
    <li className="flex justify-between items-center p-2 border-b">
      <span>{name}</span>
      <span>{quantity}</span>
      <span className="capitalize">{category}</span>
    </li>
  );
}
