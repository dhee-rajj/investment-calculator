import Result from "./Components/Result.jsx";
import UserInput from "./Components/UserInput.jsx";

import { useState } from "react";

function App() {
    const [userInput, setUserInput] = useState({
        initialInvestment: 1000,
        annualInvestment: 100,
        expectedReturn: 90,
        duration: 10,
    });

    function handleChange(inputIdentifier, newValue) {
        setUserInput((prevUserInput) => {
            return { ...prevUserInput, [inputIdentifier]: +newValue };
        });
    }
    return (
        <>
            <div id="user-input">
                <UserInput userInput={userInput} onSelect={handleChange}/>
            </div>
            
            <Result className="result" userInput={userInput}/>
        </>
    );
}

export default App;
