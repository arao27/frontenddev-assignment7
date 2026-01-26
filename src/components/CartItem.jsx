import "./CartItem.css";

function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <span>{item.name}</span>
      <span>${item.price.toFixed(2)}</span>
      <button onClick={onRemove}>Remove</button>
    </div>
  );
}

export default CartItem;