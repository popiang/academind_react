import styles from "./Result.module.css";

const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
});

export default function Result({ yearlyData, initialInvestment }) {
    return (
        <table className={styles.result}>
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {yearlyData.map((data) => (
                    <tr key={data.year}>
                        <td>{data.year}</td>
                        <td>{formatter.format(data.savingsEndOfYear)}</td>
                        <td>{formatter.format(data.yearlyInterest)}</td>
                        <td>
                            {formatter.format(
                                data.savingsEndOfYear -
                                    initialInvestment -
                                    data.yearlyContribution * data.year
                            )}
                        </td>
                        <td>
                            {formatter.format(
                                initialInvestment +
                                    data.yearlyContribution * data.year
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
