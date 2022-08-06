import { renderWithProviders } from '../utils/utils'
import { App } from "./App";
import { screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';

describe('App tests', () => {

    test('App to match snapshot', () => {
        renderWithProviders(<App />);

        const app = screen.getByTestId('app')

        expect(app).toMatchSnapshot();
    });

    test('Input in the doc', () => {
        renderWithProviders(<App />);

        const input = screen.getByRole('textbox');
        expect(input).toBeInTheDocument();
    });

    test('list in the doc', () => {
        renderWithProviders(<App />);

        const list = screen.getByTestId('list');
        expect(list).toBeInTheDocument();
    });

    test('The string sent through the form gets into the list', () => {
        const { store } = renderWithProviders(<App />);

        expect(store.getState().list.items).toEqual([]);

        const emptyList = screen.getByTestId('emptyList');
        expect(emptyList).toBeInTheDocument();

        const input = screen.getByRole('textbox');
        userEvent.type(input, 'apple');
        const submitButton = screen.getByTestId('inputButton');
        userEvent.click(submitButton);

        expect(store.getState().list.items).toEqual(['apple']);

        const apple = screen.getByText('apple');
        expect(apple).toBeInTheDocument();
    });
});