import React, { useState, useReducer, useEffect, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";

const emailReducer = (state, action) => {
    switch (action.type) {
        case "SET_EMAIL":
            return {
                value: action.payload,
                isValid: action.payload.includes("@"),
            };
        case "INPUT_BLUR":
            return {
                value: state.value,
                isValid: state.value.includes("@"),
            };
        default:
            return state;
    }
};

const passwordReducer = (state, action) => {
    switch (action.type) {
        case "SET_PASSWORD":
            return {
                value: action.payload.trim(),
                isValid: action.payload.trim().length > 6,
            };
        case "INPUT_BLUE":
            return {
                value: state.value,
                isValid: state.value.length > 6,
            };
        default:
            return state;
    }
};

const Login = () => {
	const ctx = useContext(AuthContext);
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
    });

    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: null,
    });

    useEffect(() => {
        const timerIndentifier = setTimeout(() => {
            setFormIsValid(emailState.isValid && passwordState.isValid);
        }, 500);

        // cleanup process
        // it runs before useEffect execute the function in the next time
        return () => {
            clearTimeout(timerIndentifier);
        };
    }, [emailState.isValid, passwordState.isValid]);

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: "SET_EMAIL", payload: event.target.value });
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: "SET_PASSWORD", payload: event.target.value });
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: "INPUT_BLUR" });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: "INPUT_BLUR" });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        ctx.onLogin(emailState.value, passwordState.value);
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <div
                    className={`${classes.control} ${
                        emailState.isValid === false ? classes.invalid : ""
                    }`}
                >
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        id="email"
                        value={emailState.value}
                        onChange={emailChangeHandler}
                        onBlur={validateEmailHandler}
                    />
                </div>
                <div
                    className={`${classes.control} ${
                        passwordState.isValid === false ? classes.invalid : ""
                    }`}
                >
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={passwordState.value}
                        onChange={passwordChangeHandler}
                        onBlur={validatePasswordHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <Button
                        type="submit"
                        className={classes.btn}
                        disabled={!formIsValid}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default Login;
