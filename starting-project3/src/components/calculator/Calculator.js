import { useState } from "react";
import styles from "./Calculator.module.css";

export default function Calculator({ onHandleSubmit }) {
    const [currentSavings, setCurrentSavings] = useState("");
    const [yearlyContribution, setYearlyContribution] = useState("");
    const [expectedInterest, setExpectedInterest] = useState("");
    const [duration, setDuration] = useState("");

    const handleResetClick = () => {
        setCurrentSavings("");
        setYearlyContribution("");
        setExpectedInterest("");
        setDuration("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
		onHandleSubmit({
			"current-savings": currentSavings,
			"yearly-contribution": yearlyContribution,
			"expected-return": expectedInterest,
			"duration": duration
		});
    };

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles["input-group"]}>
                    <p>
                        <label htmlFor="current-savings">
                            Current Savings ($)
                        </label>
                        <input
                            type="number"
                            id="current-savings"
                            onChange={(e) => setCurrentSavings(e.target.value)}
                            value={currentSavings}
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
                                setYearlyContribution(e.target.value)
                            }
                            value={yearlyContribution}
                        />
                    </p>
                </div>
                <div className={styles["input-group"]}>
                    <p>
                        <label htmlFor="expected-return">
                            Expected Interest (%, per year)
                        </label>
                        <input
                            type="number"
                            id="expected-return"
                            onChange={(e) =>
                                setExpectedInterest(e.target.value)
                            }
                            value={expectedInterest}
                        />
                    </p>
                    <p>
                        <label htmlFor="duration">
                            Investment Duration (years)
                        </label>
                        <input
                            type="number"
                            id="duration"
                            onChange={(e) => setDuration(e.target.value)}
                            value={duration}
                        />
                    </p>
                </div>
                <p className={styles.actions}>
                    <button
                        type="reset"
                        className="buttonAlt"
                        onClick={handleResetClick}
                    >
                        Reset
                    </button>
                    <button type="submit" className="button">
                        Calculate
                    </button>
                </p>
            </form>
        </div>
    );
}
