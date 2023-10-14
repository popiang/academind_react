import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
import { useState } from "react";

export default function NewExpense({ onAddExpense }) {
	const [isShowForm, setIsShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString(),
        };
        onAddExpense(expenseData);
		handleShowForm(false)
    };

	const handleShowForm = (isShowFormInput) => {
		setIsShowForm(isShowFormInput);
	}

    return (
        <div className="new-expense">
			{!isShowForm && <button onClick={() => handleShowForm(true)}>Add New Expense</button>}
            {isShowForm && (
                <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelClick={handleShowForm} />
            )}
        </div>
    );
}
