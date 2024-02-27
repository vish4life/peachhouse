import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Reserve from '../Components/Reservepage';

test('Checking for Reservepage Heading',()=>{
    render(<Reserve />);
    const headElement = screen.getByText(/Welcome to the Reservation page/i);
    expect(headElement).toBeInTheDocument();
});

test('Reservation submit without inputs',()=>{
    const reserveSubmit = jest.fn();
    render(<Reserve onClick={() => { handleSubmit() }} />);
    const nameElement = screen.getByText("Name");
    fireEvent.input(nameElement,"Sh");
    const reserveButton = screen.getByText("Reserve");
    fireEvent.click(reserveButton);
    expect(reserveSubmit).not.toHaveBeenCalled();
});