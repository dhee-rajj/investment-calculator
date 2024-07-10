export default function UserInput({userInput, onSelect}) {
    // const [userInput, setUserInput] = useState({
    //     initialInvestment: 1000,
    //     annualInvestment: 100,
    //     expectedReturn: 90,
    //     duration: 10,
    // });

    // function handleChange(inputIdentifier, newValue) {
    //     setUserInput((prevUserInput) => {
    //         return { ...prevUserInput, [inputIdentifier]: newValue };
    //     });
    // }

    return (<>
        <section className="input-group">
            <p>
                <label>Initial Invenstment</label>
                <input
                    type="number"
                    required
                    value={userInput.initialInvestment}
                    onChange={(event) => {
                        onSelect("initialInvestment", event.target.value);
                    }}
                />
            </p>
            <p>
                <label>Annual Investment</label>
                <input
                    type="number"
                    required
                    value={userInput.annualInvestment}
                    onChange={(event) => {
                        onSelect("annualInvestment", event.target.value);
                    }}
                />
            </p>
            </section>
            <section className="input-group">
            <p>
                <label>Expected Return</label>
                <input
                    type="number"
                    required
                    value={userInput.expectedReturn}
                    onChange={(event) => {
                        onSelect("expectedReturn", event.target.value);
                    }}
                />
            </p>
            <p>               
                <label>Duration</label>
                <input
                    type="number"
                    required
                    value={userInput.duration}
                    onChange={(event) => {
                        onSelect("duration", event.target.value);
                    }}
                />
            </p>
        </section>
        </>
    );
}
