import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm({ onSaveExpenseData, onCancelClick }) {
    const [title, setTitle] = useState("");
    const [amount, setAmount] = useState("");
    const [date, setDate] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const expenseData = {
            title,
            amount: +amount,
            date: new Date(date),
        };

        onSaveExpenseData(expenseData);
        setTitle("");
        setAmount("");
        setDate("");
    };

    const handleCancelClick = () => {
        onCancelClick(false);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input
                        type="number"
                        min="0.01"
                        step="0.01"
                        onChange={(e) => setAmount(e.target.value)}
                        value={amount}
                    />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input
                        type="date"
                        min="2019-01-01"
                        max="2023-11-30"
                        onChange={(e) => setDate(e.target.value)}
                        value={date}
                    />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={handleCancelClick}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}
