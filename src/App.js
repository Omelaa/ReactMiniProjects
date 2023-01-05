import './index.scss';
import {useState} from "react";

function App() {
    const [count, setCount] = useState(0);

    const isInc = () => {
        setCount((prev) => prev + 1);
    };

    const isDec = () => {
        setCount((prev) => prev - 1);
    };

    return (
        <div className="App">
            <div>
                <h2>Counter:</h2>
                <h1>{count}</h1>
                <button className={count === 0 ? "minus minus__disabled" : "minus"} onClick={isDec}
                        disabled={count === 0}>- Minus
                </button>
                <button className="plus" onClick={isInc}>Plus +</button>
            </div>
        </div>
    );
}

export default App;
