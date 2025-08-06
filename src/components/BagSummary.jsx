import "../../src/css/bag.css";
import { useSelector } from "react-redux";
const BagSummary = () => {
  let bagItemId = useSelector((store) => store.bag);
  const items = useSelector((store) => store.items);
  const finalItem = items.filter((item) => {
    const itemIndex = bagItemId.indexOf(item.id);
    return itemIndex >= 0;
  });
  let totalItem = items.length;
  let totalMRP = 0;
  let totalDiscount = 0;
  let finalPayment = 0;
  const Convenience = 99;

  finalItem.forEach((item) => {
    totalMRP += item.original_price;
    totalDiscount += item.original_price - item.current_price;
  });
  finalPayment = totalMRP - totalDiscount + Convenience;
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAI{totalItem} </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{totalDiscount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{finalPayment}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};
export default BagSummary;
