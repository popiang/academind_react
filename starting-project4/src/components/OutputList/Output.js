import styles from "./Output.module.css";

export default function Output({ userList }) {
    return (
        <ul className={styles.list}>
            {userList.map((user) => (
                <li key={user.username}>
                    <p>{user.username} ({user.age} years old)</p>
                </li>
            ))}
        </ul>
    );
}
