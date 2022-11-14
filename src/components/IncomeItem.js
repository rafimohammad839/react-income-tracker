import React from "react";

const IncomeItem = ({ income, index, removeIncome }) => {
  const date = new Date(income.date);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  const removeHandler = i => {
    removeIncome(i);
  }

  return (
    <div className="income-item">
      <button className="remove-item" onClick={() => removeHandler(index)}>x</button>
      <div className="desc">{income.desc}</div>
      <div className="price">£{income.price}</div>
      <div className="date">{day + "/" + month + "/" + year}</div>
    </div>
  );
};

export default IncomeItem;
