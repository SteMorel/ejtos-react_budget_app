import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { budget, dispatch,expenses, currency } = useContext(AppContext);

	const handleBudgetChange = (val)=>{
		const totalExpenses = expenses.reduce((total, item) => {
			return (total += item.cost);
		}, 0);

		
		if(val<totalExpenses) {
			alert("You cannot reduce the budget that is already allocated!");
		} else {
			dispatch({
				type: 'SET_BUDGET',
				payload: val,
			})
			}
            if(val>20000) {
                alert("You cannot increase Budget more than 20000!");
            } else {
                dispatch({
                    type: 'SET_BUDGET',
                    payload: val,
                })
                }
	}
	
	return (
		<div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
			<input type="number" step="10" value={budget} onInput={(event)=>handleBudgetChange(event.target.value)}></input>
		</div>
	);
};

export default Budget;