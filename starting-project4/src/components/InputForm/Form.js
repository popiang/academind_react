import { useState } from "react";
import styles from "./Form.module.css";

export default function Form({ onHandleAddUser, onHandleError }) {
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === "" || age === "") {
            onHandleError("Please fill in your username and age!!");
        } else if (age < 0) {
            onHandleError("Please enter a valid age!!");
        } else {
            onHandleAddUser(username, age);
            setUsername("");
            setAge("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles["input-form"]}>
            <label>Username</label>
            <input
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
            />

            <label>Age (Years)</label>
            <input
                type="text"
                onChange={(e) => setAge(e.target.value)}
                value={age}
            />

            <button>Add User</button>
        </form>
    );
}
