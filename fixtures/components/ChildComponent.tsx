import React from "react";
import { useGlobalState } from "../../src/useGlobalState";

export function ChildComponent() {
    const [count, setCount] = useGlobalState<number>('count');
    const [count2, setCount2] = useGlobalState('count2', 0);

    return (
        <div>
            <h1>Child Component</h1>
            <button onClick={() => setCount(count + 1)} data-testid='child-button-increment'>Increment</button>
            <p data-testid="child-count">Count: {count}</p>
            <button onClick={() => setCount2(count2 + 1)} data-testid='child-button-increment2'>Increment</button>
            <p data-testid="child-count2">Count: {count2}</p>
        </div>
    );
}