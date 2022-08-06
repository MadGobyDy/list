import React from 'react'
import { render } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
// As a basic setup, import your same slice reducers
import listReducer from '../store/listSlice'

export function renderWithProviders(
  ui,
  {
    preloadedState = {list: {items: []}},
    store = configureStore({ reducer: { list: listReducer }, preloadedState }),
    ...renderOptions
  } = {}
) {
  function Wrapper({ children }) {
    return <Provider store={store}>{children}</Provider>
  }

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) }
}