import { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import "./ExpensesFilter";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
    const [year, setYear] = useState("2020");

    const filterByYear = (year) => {
        setYear(year);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selectedYear={year}
                    onFilterByYear={filterByYear}
                />
                {props.expenses &&
                    props.expenses.map((expense) => (
                        <ExpenseItem key={expense.id} expense={expense} />
                    ))}
            </Card>
        </div>
    );
}
