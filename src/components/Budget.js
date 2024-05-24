import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, currencies, selectedCurrency, changeCurrency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
        dispatch({
            type: 'SET_BUDGET',
            payload: Number(event.target.value),
        })
        
    };
    const handleCurrencyChange = (event) => {
        changeCurrency(event.target.value);
    };
    return (
    <div className='alert alert-secondary'>
        <span>Budget: {selectedCurrency}</span>
        <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        {/* <select value={selectedCurrency} onChange={handleCurrencyChange}>
            {currencies.map((currency, index) => (
            <option key={index} value={currency}>{currency}</option>))}
        </select> */}
    </div>
    );
};
export default Budget;
