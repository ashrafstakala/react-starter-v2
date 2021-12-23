import './ExpenseItem.css';

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>23 December 20201</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
      </div>
      <div className="expense-item__price">$299.99</div>
    </div>
  );
}

export default ExpenseItem;
