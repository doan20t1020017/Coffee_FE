import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({
  item = { id: 1, name: "Bạc xỉu", quantity: 2, totalPrice: 200 },
}) {
  const { name, quantity, unitPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">
          {formatCurrency(quantity * unitPrice)}
        </p>
        <Button type="small">Xóa</Button>
      </div>
    </li>
  );
}

export default CartItem;
