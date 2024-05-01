import './App.css';
import React, {useState} from "react";
import Todos from "./Todos";

const App = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount((c) => c + 1);
    };

    return (
        <>
            <Todos />
            <hr/>
            <div>
                Count: {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    );
};

export default App;
