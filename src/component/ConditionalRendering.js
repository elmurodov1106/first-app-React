import React, {useState} from "react";

const ConditionalRendering = () => {
    let [isLoggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => {
        setLoggedIn(true);
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };

    return (
        <div>
            {isLoggedIn ? (
                <div>
                    <h1>Welcome G22</h1>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <h1>Welcome Guest</h1>
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
}

export default ConditionalRendering;