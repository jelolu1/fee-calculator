import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { CalculatorField } from '../components/Calculator/CalculatorField';
import { fieldValueObject } from '../constants';

describe('CalculatorField', () => {
	afterEach(cleanup);
	it('Renders Content', (): void => {
		const id = 'test';
		const title = 'test';
		const inputType = 'number';
		const unit = 'm';
		const setValue = vi.fn();
		const fieldValue: fieldValueObject = { value: 0, modified: false };
		const t = vi.fn((text: string) => text);

		const component = render(
			<CalculatorField
				id={id}
				title={title}
				inputType={inputType}
				unit={unit}
				setValue={setValue}
				fieldValue={fieldValue}
				t={t}
			/>
		);
		const divs = component.container.querySelectorAll('div');
		const label = component.container.querySelector('label');
		const input = component.container.querySelectorAll('input');
		const button = component.container.querySelectorAll('button');

		expect(divs).not.toBe(null);
		expect(label).not.toBe(null);
		expect(input).not.toBe(null);
		expect(button).not.toBe(null);

		component.getByText('test');
		component.getByText('m');
	});

	it('Try to Increment Field Value but it is not a valid field so should be 0', (): void => {
		const id = 'test';
		const title = 'test';
		const inputType = 'number';
		const unit = 'm';
		let fieldValue: fieldValueObject = { value: 0, modified: false };
		const setValue = vi.fn(
			(handlerFunction) => (fieldValue = handlerFunction(fieldValue))
		);
		const t = vi.fn((text: string) => text);

		const component = render(
			<CalculatorField
				id={id}
				title={title}
				inputType={inputType}
				unit={unit}
				setValue={setValue}
				fieldValue={fieldValue}
				t={t}
			/>
		);
		const divs = component.container.querySelectorAll('div');
		const label = component.container.querySelector('label');
		const input = component.container.querySelectorAll('input');
		const button = component.container.querySelectorAll('button');

		expect(divs).not.toBe(null);
		expect(label).not.toBe(null);
		expect(input).not.toBe(null);
		expect(button).not.toBe(null);

		component.getByText('test');
		component.getByText('m');

		fireEvent.click(button[1]);
		expect(fieldValue.value).toBe(0);
		fireEvent.click(button[0]);
		expect(fieldValue.value).toBe(0);
	});

	it('Increment Cart Field Value', (): void => {
		const id = 'cart';
		const title = 'cart';
		const inputType = 'number';
		const unit = 'm';
		let fieldValue: fieldValueObject = { value: 0, modified: false };
		const setValue = vi.fn(
			(handlerFunction) => (fieldValue = handlerFunction(fieldValue))
		);
		const t = vi.fn((text: string) => text);

		const component = render(
			<CalculatorField
				id={id}
				title={title}
				inputType={inputType}
				unit={unit}
				setValue={setValue}
				fieldValue={fieldValue}
				t={t}
			/>
		);
		const divs = component.container.querySelectorAll('div');
		const label = component.container.querySelector('label');
		const input = component.container.querySelectorAll('input');
		const button = component.container.querySelectorAll('button');

		expect(divs).not.toBe(null);
		expect(label).not.toBe(null);
		expect(input).not.toBe(null);
		expect(button).not.toBe(null);

		component.getByText('cart');
		component.getByText('m');

		fireEvent.click(button[1]);
		expect(fieldValue.value).toBe(1);
		fireEvent.click(button[0]);
		expect(fieldValue.value).toBe(0);
	});
});
