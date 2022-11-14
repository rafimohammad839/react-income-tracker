import React from 'react'

const Header = ({totalIncome}) => {
  return (
    <header>
      <h1>Total Income</h1>
      <div className="total-income">£{totalIncome}</div>
    </header>
  )
}

export default Header