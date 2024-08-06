export default function Item({ name, quantity, category, onSelect }) {
  return (
    <li
      className="flex justify-between items-center p-2 border-b cursor-pointer"
      onClick={() => onSelect(name)}
    >
      <span>{name}</span>
      <span>{quantity}</span>
      <span className="capitalize">{category}</span>
    </li>
  );
}
