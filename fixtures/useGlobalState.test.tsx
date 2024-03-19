import React from 'react'
import { test, expect, beforeAll } from 'vitest'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ParentComponent } from './components/ParentComponent'

beforeAll(() => {
    render(<ParentComponent />)    
})

test('useGlobalState -> initial state', () => {
    expect(screen.getByTestId('parent-count').innerText).toEqual('Count: 0')
})

test('useGlobalState -> initial state 2', () => {
    expect(screen.getByTestId('parent-count2').innerText).toEqual('Count: 0')
})

test('useGlobalState -> child component', () => {
    expect(screen.getByTestId('child-count').innerText).toEqual('Count: 0')
})

test('useGlobalState -> child component 2', () => {
    expect(screen.getByTestId('child-count2').innerText).toEqual('Count: 0')
})

test('useGlobalState -> increment count', async () => {
    const user = userEvent.setup()
    await user.click(screen.getByTestId('parent-button-increment'))
    expect(screen.getByTestId('parent-count').innerText).toEqual('Count: 1')
})

test('useGlobalState -> increment count 2', async () => {
    const user = userEvent.setup()
    await user.click(screen.getByTestId('parent-button-increment2'))
    expect(screen.getByTestId('parent-count2').innerText).toEqual('Count: 1')
})

test('useGlobalState -> read new count (child component)', async () => {
    expect(screen.getByTestId('child-count').innerText).toEqual('Count: 1')
})

test('useGlobalState -> read new count (child component 2)', async () => {
    expect(screen.getByTestId('child-count2').innerText).toEqual('Count: 1')
})

test('useGlobalState -> increment count (child component)', async () => {
    const user = userEvent.setup()
    await user.click(screen.getByTestId('child-button-increment'))
    expect(screen.getByTestId('child-count').innerText).toEqual('Count: 2')
})

test('useGlobalState -> increment count (child component 2)', async () => {
    const user = userEvent.setup()
    await user.click(screen.getByTestId('child-button-increment2'))
    expect(screen.getByTestId('child-count2').innerText).toEqual('Count: 2')
})

test('useGlobalState -> snapshot', async () => {
    expect(screen.getByTestId('parent-container')).toMatchSnapshot()
})