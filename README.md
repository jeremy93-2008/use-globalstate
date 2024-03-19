![useGlobalState](./logo.svg)
# useGlobalState Hook
![npm](https://img.shields.io/npm/v/use-globalstate)
![npm](https://img.shields.io/npm/dt/use-globalstate)
![NPM](https://img.shields.io/npm/l/use-globalstate)

The `useGlobalState` hook is a custom React hook that allows you to manage global state in your application. It provides a simple and efficient way to share data between components without the need for prop drilling or complex state management libraries. Inspired by the `useState` composable from Nuxt.js.

## Installation

To use the `useGlobalState` hook in your project, you can install it via npm or yarn:

```bash
npm install use-globalstate
```


## Usage

To use the `useGlobalState` hook in your components, you need to provide an initial state value and a unique key to identify the global state value. You can then use the returned value and setter function to access and update the global state.

Here's an example of how you can use the `useGlobalState` hook in your components:

```jsx
import React from 'react';
import { useGlobalState } from 'use-globalstate';

const Counter = () => {
  const [count, setCount] = useGlobalState('count', 0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default Counter;
```

In this example, we define a `Counter` component that uses the `useGlobalState` hook to access and update the global state. We pass the key `'count'` and the initial value `0` to the `useGlobalState` hook, which returns the current value of the state and a function to update it.

## API

The `useGlobalState` hook takes two arguments:

1. `key` (string): The key of the global state value.
2. `initialValue` (any): The initial value of the global state.

The `useGlobalState` hook returns an array with two elements:

1. `value` (any): The current value of the global state.
2. `setValue` (function): A function to update the global state.

## License

MIT