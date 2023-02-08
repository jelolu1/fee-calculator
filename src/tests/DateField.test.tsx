import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { DateField } from '../components/Calculator/Field/DateField';
import { fieldValueObject } from '../constants';

describe('DateField', () => {
	it('Renders Content', (): void => {
		const id = 'test';
		const setValue = vi.fn();
		const fieldValue: fieldValueObject = {
			value: { day: '', time: '' },
			modified: false,
		};

		const component = render(
			<DateField id={id} setValue={setValue} fieldValue={fieldValue} />
		);
		const divs = component.container.querySelectorAll('div');
		const input = component.container.querySelectorAll('input');

		expect(divs).not.toBe(null);
		expect(input).not.toBe(null);
	});
});
