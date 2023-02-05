import { cleanup, fireEvent, render } from '@testing-library/react';
import { MouseEventHandler } from 'react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { BtnQuantity } from '../components/Calculator/BtnQuantity';

describe('BtnQuantity', () => {
	afterEach(cleanup);

	it('Renders Content', (): void => {
		const clickHandler: MouseEventHandler = () => {};
		const direction: string = 'increment';

		const component = render(
			<BtnQuantity clickHandler={clickHandler} direction={direction} />
		);
		component.getByRole('button');
		const span = component.container.querySelector('span');
		const svg = component.container.querySelector('svg');
		const path = component.container.querySelector('path');

		expect(span).not.toBe(null);
		expect(svg).not.toBe(null);
		expect(path).not.toBe(null);
	});

	it('Increment counter once', () => {
		let count = 0;
		const mockHandler = vi.fn(() => count++);
		const direction: string = 'increment';

		const component = render(
			<BtnQuantity clickHandler={mockHandler} direction={direction} />
		);

		const button = component.getByRole('button');
		fireEvent.click(button);

		expect(mockHandler.mock.calls).toHaveLength(1);
		expect(count).toEqual(1);
	});

	it('Decrement counter once', () => {
		let count = 0;
		const mockHandler = vi.fn(() => count--);
		const direction: string = 'decrement';

		const component = render(
			<BtnQuantity clickHandler={mockHandler} direction={direction} />
		);

		const button = component.getByRole('button');
		fireEvent.click(button);

		expect(mockHandler.mock.calls).toHaveLength(1);
		expect(count).toEqual(-1);
	});

	it('Increment and Decrement Counter', () => {
		let count = 0;
		const incrementMockHandler = vi.fn(() => count++);
		const decrementMockHandler = vi.fn(() => count--);

		const component = render(
			<>
				<BtnQuantity
					clickHandler={incrementMockHandler}
					direction={'increment'}
				/>
				<BtnQuantity
					clickHandler={decrementMockHandler}
					direction={'decrement'}
				/>
			</>
		);

		const buttons = component.getAllByRole('button');
		fireEvent.click(buttons[0]);
		fireEvent.click(buttons[1]);

		expect(incrementMockHandler.mock.calls).toHaveLength(1);
		expect(decrementMockHandler.mock.calls).toHaveLength(1);
		expect(count).toEqual(0);
	});

	it('Increment counter 5 times', () => {
		let count = 0;
		const mockHandler = vi.fn(() => count++);
		const direction: string = 'increment';

		const component = render(
			<BtnQuantity clickHandler={mockHandler} direction={direction} />
		);

		const button = component.getByRole('button');
		fireEvent.click(button);
		fireEvent.click(button);
		fireEvent.click(button);
		fireEvent.click(button);
		fireEvent.click(button);

		expect(mockHandler.mock.calls).toHaveLength(5);
		expect(count).toEqual(5);
	});

	it('Decrement counter 5 times', () => {
		let count = 0;
		const mockHandler = vi.fn(() => count--);
		const direction: string = 'decrement';

		const component = render(
			<BtnQuantity clickHandler={mockHandler} direction={direction} />
		);

		const button = component.getByRole('button');
		fireEvent.click(button);
		fireEvent.click(button);
		fireEvent.click(button);
		fireEvent.click(button);
		fireEvent.click(button);

		expect(mockHandler.mock.calls).toHaveLength(5);
		expect(count).toEqual(-5);
	});
});
