import Header from "./components/header/Header";
import Calculator from "./components/calculator/Calculator";
import Result from "./components/result/Result";
import { useState } from "react";

function App() {
    const [userInput, setUserInput] = useState(null);

    const calculateHandler = (userInputFromForm) => {
        setUserInput(userInputFromForm);
    };

    const yearlyData = [];

    if (userInput) {
        let currentSavings = +userInput["current-savings"];
        const yearlyContribution = +userInput["yearly-contribution"];
        const expectedReturn = +userInput["expected-return"] / 100;
        const duration = +userInput["duration"];

        for (let i = 0; i < duration; i++) {
            const yearlyInterest = currentSavings * expectedReturn;
            currentSavings += yearlyInterest + yearlyContribution;
            yearlyData.push({
                year: i + 1,
                yearlyInterest: yearlyInterest,
                savingsEndOfYear: currentSavings,
                yearlyContribution: yearlyContribution,
            });
        }
    }

    console.log("From App.js", userInput);
    console.log(yearlyData);

    return (
        <div>
            <Header />
            <Calculator onCalculate={calculateHandler} />
            {!userInput && (
                <p style={{ textAlign: "center" }}>
                    No investment to calculate yet!
                </p>
            )}
            {userInput && (
                <Result
                    yearlyData={yearlyData}
                    initialInvestment={userInput["current-savings"]}
                />
            )}
        </div>
    );
}

export default App;
