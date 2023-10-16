import styles from "./Result.module.css";

export default function Result({ yearlyData }) {

	let finalListContent = <p>No data to display!!</p>;

	if (yearlyData.length > 0) {
		finalListContent = yearlyData.map((data) => (
            <tr>
                <td>{data.year}</td>
                <td>{data.savingsEndOfYear}</td>
                <td>{data.yearlyInterest}</td>
                <td>{data.savingsEndOfYear + data.yearlyInterest}</td>
                <td>TOTAL INVESTED CAPITAL</td>
            </tr>
        ));
	}

    return (
        <div>
            {/* Todo: Show below table conditionally (only once result data is available) */}
            {/* Show fallback text if no data is available */}

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
                    {finalListContent}
                </tbody>
            </table>
        </div>
    );
}
