import { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
    const [year, setYear] = useState("2020");

    const filterByYear = (year) => {
        setYear(year);
    };

    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === year;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter
                    selectedYear={year}
                    onFilterByYear={filterByYear}
                />
				<ExpensesChart expenses={filteredExpenses} />
				<ExpensesList expenses={filteredExpenses}/>
            </Card>
        </div>
    );
}
