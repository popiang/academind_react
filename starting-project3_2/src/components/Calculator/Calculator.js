import { useState } from "react";
import styles from "./Calculator.module.css";

let initialData = {
    "current-savings": 10000,
    "yearly-contribution": 500,
    "expected-return": 7,
    duration: 5,
};

export default function Calculator({ onCalculate }) {
    const [userInput, setUserInput] = useState(initialData);

    const handleResetClick = () => {
        setUserInput(initialData);
		onCalculate(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
		onCalculate(userInput);
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles["input-group"]}>
                <p>
                    <label htmlFor="current-savings">Current Savings ($)</label>
                    <input
                        type="number"
                        id="current-savings"
                        onChange={(e) =>
                            setUserInput({
                                ...userInput,
                                "current-savings": e.target.value,
                            })
                        }
                        value={userInput["current-savings"]}
                    />
                </p>
                <p>
                    <label htmlFor="yearly-contribution">
                        Yearly Savings ($)
                    </label>
                    <input
                        type="number"
                        id="yearly-contribution"
                        onChange={(e) =>
                            setUserInput({
                                ...userInput,
                                "yearly-contribution": e.target.value,
                            })
                        }
                        value={userInput["yearly-contribution"]}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                        Expected Interest (%, per year)
                    </label>
                    <input
                        type="number"
                        id="expected-return"
                        onChange={(e) =>
                            setUserInput({
                                ...userInput,
                                "expected-return": e.target.value,
                            })
                        }
                        value={userInput["expected-return"]}
                    />
                </p>
                <p>
                    <label htmlFor="duration">
                        Investment Duration (years)
                    </label>
                    <input
                        type="number"
                        id="duration"
                        onChange={(e) =>
                            setUserInput({
                                ...userInput,
                                duration: e.target.value,
                            })
                        }
                        value={userInput.duration}
                    />
                </p>
            </div>
            <p className={styles.actions}>
                <button
                    type="reset"
                    className={styles.buttonAlt}
                    onClick={handleResetClick}
                >
                    Reset
                </button>
                <button type="submit" className={styles.button}>
                    Calculate
                </button>
            </p>
        </form>
    );
}
