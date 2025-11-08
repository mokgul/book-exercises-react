import * as React from "react";

export default function Task01() {
    const [counter, setCounter] = React.useState(42);

    return (
        <div>
            <button onClick={() => setCounter(counter + 1)}>
                Increase
            </button>
            <button onClick={() => setCounter(counter - 1)}>
                Decrease
            </button>
            <p>{counter}</p>
        </div>
    );
}