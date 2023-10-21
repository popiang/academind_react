import { useState } from "react";
import Form from "./components/InputForm/Form";
import Output from "./components/OutputList/Output";
import Error from "./components/ErrorModal/Error";

function App() {
    const [userList, setUserList] = useState([]);
    const [error, setError] = useState("");

    const handleAddUser = (username, age) => {
        setError("");
        setUserList((prevUserList) => {
            return [...prevUserList, { username, age }];
        });
    };

    const handleError = (errorMessage) => {
        setError(errorMessage);
    };

    const handleErrorClose = () => {
        setError("");
    };

    return (
        <div>
            <Form onHandleAddUser={handleAddUser} onHandleError={handleError} />
            {userList && <Output userList={userList} />}
            {error && (
                <Error
                    errorMessage={error}
                    onHandleErrorClose={handleErrorClose}
                />
            )}
        </div>
    );
}

export default App;
