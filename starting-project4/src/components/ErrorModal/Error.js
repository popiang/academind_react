import styles from "./Error.module.css";

export default function Error({ errorMessage, onHandleErrorClose }) {
    return (
        <div className={styles.error}>
            <div className={styles.card}>
                <h3 className={styles.title}>Invalid Input</h3>
                <p className={styles.message}>{errorMessage}</p>
                <div className={styles["button-wrapper"]}>
                    <button onClick={() => onHandleErrorClose()}>Close</button>
                </div>
            </div>
        </div>
    );
}
