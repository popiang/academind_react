import { useState } from "react";

import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem(props) {
	const [title, setTitle] = useState(props.expense.title);

	const handleClick = () => {
		setTitle("Updated!!")
	}

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expense.date} />
            <div className="expense-item__description">
                {/* <h2>{props.expense.title}</h2> */}
                <h2>{title}</h2>
                <div className="expense-item__price">
                    RM{props.expense.amount}
                </div>
            </div>
            <button onClick={handleClick}>Change Title</button>
        </Card>
    );
}
