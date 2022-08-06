import React from 'react';
import { List } from './List';
import { renderWithProviders } from '../../utils/utils';
import { screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event';

const withAppleStore = {
    preloadedState: {
        list: {
            items: ['apple']
        }
    } 
}

describe('list of elements', () => {
    test('list is empty', () => {
        renderWithProviders(<List />);
        
        const emptyListElement = screen.getByText('Список фруктов пуст');
        expect(emptyListElement).toBeInTheDocument();
    });

    test('Apple in the list', () => {
        renderWithProviders(<List />, withAppleStore);
        
        const apple = screen.getByText('apple');
        expect(apple).toBeInTheDocument();
    });

    test('Apple can be removed', () => {
        renderWithProviders(<List />, withAppleStore);
        
        const apple = screen.getByText('apple');
        expect(apple).toBeInTheDocument();
        const appleRemoveButton = screen.getByTestId('deleteButton');
        userEvent.click(appleRemoveButton);
        expect(apple).not.toBeInTheDocument();
    });
});
