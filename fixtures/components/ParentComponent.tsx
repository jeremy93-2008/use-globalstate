import React from "react";
import { useGlobalState } from "../../src/useGlobalState";
import { ChildComponent } from "./ChildComponent";

export function ParentComponent() {
    const [count, setCount] = useGlobalState('count', 0);
    const [count2, setCount2] = useGlobalState('count2', 0);

    return (
        <div data-testid='parent-container'>
            <h1>Parent Component</h1>
            <p data-testid="parent-count">Count: {count}</p>
            <p data-testid="parent-count2">Count: {count2}</p>
            <button onClick={() => setCount(count + 1)} data-testid='parent-button-increment'>Increment</button>
            <button onClick={() => setCount2(count2 + 1)} data-testid='parent-button-increment2'>Increment</button>
            <ChildComponent />
        </div>
    );
}