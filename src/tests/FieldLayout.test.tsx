import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { FieldLayout } from '../components/Calculator/Field/FieldLayout';
import { fieldValueObject } from '../constants';

describe('FieldLayout', () => {
	afterEach(cleanup);

	it('Render Content', (): void => {
		const id = 'cart';
		const title = 'test';
		let fieldValue: fieldValueObject = { value: 0, modified: false };
		const inputType = 'number';
		const t = vi.fn((text: string) => text);

		const component = render(
			<FieldLayout
				key={id}
				title={title}
				fieldValue={fieldValue}
				inputType={inputType}
				t={t}
			>
				<></>
			</FieldLayout>
		);
		const divs = component.container.querySelectorAll('div');
		const label = component.container.querySelector('label');
		const span = component.container.querySelector('span');

		expect(divs).not.toBe(null);
		expect(label).not.toBe(null);
		expect(span).toBe(null);

		component.getByText('test');
	});

	it('Render Content including input missing msg', (): void => {
		const id = 'cart';
		const title = 'test';
		let fieldValue: fieldValueObject = { value: 0, modified: true };
		const inputType = 'number';
		const t = vi.fn((text: string) => text);

		const component = render(
			<FieldLayout
				key={id}
				title={title}
				fieldValue={fieldValue}
				inputType={inputType}
				t={t}
			>
				<></>
			</FieldLayout>
		);
		const divs = component.container.querySelectorAll('div');
		const label = component.container.querySelector('label');
		const span = component.container.querySelector('span');

		expect(divs).not.toBe(null);
		expect(label).not.toBe(null);
		expect(span).not.toBe(null);

		component.getByText('test');
		component.getByText('errorMsgNumber');
	});
});
