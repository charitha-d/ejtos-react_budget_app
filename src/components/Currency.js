import React,{useContext,useState} from 'react'
import { AppContext } from '../context/AppContext'

const Currency = () => {
    const { currency , dispatch }=useContext(AppContext);
    const [newCurrency,setNewCurrency]=useState(currency);
    const currencyChange=(event)=>{
        
        setNewCurrency(event.target.value);
        dispatch({
            type:'CHG_CURRENCY',
            payload:event.target.value
        })
    }
    const getCurrencyLabel = (currency) => {
        switch (currency) {
            case '$':
                return 'Currency ($ Dollar)';
            case '€':
                return 'Currency (€ Euro)';
            case '£':
                return 'Currency (£ Pound)';
            case '₹':
                return 'Currency (₹ Rupee)';
            default:
                return 'Select Currency';
        }
    };

  return (
    <div className="alert alert-danger">
        <div>
            <span>{getCurrencyLabel(newCurrency)}</span>
        </div>
      <select className="custom-select"  id="currency" value={newCurrency} onChange={currencyChange} >
     
        <option value="$">Dollars</option>
        <option value="£">Pounds</option>
        <option value="€">Euro</option>
        <option value="₹">Ruppee</option>
       </select>
    </div>
  )
}
export default Currency
