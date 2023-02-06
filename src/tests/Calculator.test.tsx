import { cleanup, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { Calculator } from '../components/Calculator/Calculator';

describe('Calculator', () => {
	afterEach(cleanup);
	it('Renders Content', (): void => {
		const setShowInstructionsModal = vi.fn();
		const setShowResultModal = vi.fn();
		const setCalculatedFee = vi.fn();
		const t = vi.fn((text: string) => text);
		const component = render(
			<Calculator
				setShowInstructionsModal={setShowInstructionsModal}
				setShowResultModal={setShowResultModal}
				setCalculatedFee={setCalculatedFee}
				t={t}
			/>
		);
		const main = component.container.querySelector('main');
		const divs = component.container.querySelectorAll('div');
		const button = component.container.querySelectorAll('button');
		const form = component.container.querySelector('form');
		expect(main).not.toBe(null);
		expect(divs).not.toBe(null);
		expect(button).not.toBe(null);
		expect(form).not.toBe(null);
		component.getByText('i');
	});
});
