import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { TranslationInterface } from '../components/UI/TranslationInterface';
import '../i18n';

describe('#BtnQuantity', () => {
	afterEach(cleanup);
	it('Renders Content', (): void => {
		let currentLng = 'en';
		const i18n = {
			changeLanguage: vi.fn((newLng: string) => {
				currentLng = newLng;
			}),
		};

		const component = render(<TranslationInterface i18n={i18n} />);

		const div = component.container.querySelector('div');
		const buttons = component.getAllByRole('button');

		expect(div).not.toBe(null);
		expect(buttons).not.toBe(null);
	});

	it('Change Languages', (): void => {
		let currentLng = 'en';
		const i18n = {
			changeLanguage: vi.fn((newLng: string) => {
				currentLng = newLng;
			}),
		};

		const component = render(<TranslationInterface i18n={i18n} />);

		const div = component.container.querySelector('div');
		const buttons = component.getAllByRole('button');

		expect(div).not.toBe(null);
		expect(buttons).not.toBe(null);

		expect(currentLng).toBe('en');
		fireEvent.click(buttons[1]);
		expect(currentLng).toBe('de');
		fireEvent.click(buttons[2]);
		expect(currentLng).toBe('sp');
		fireEvent.click(buttons[2]);
		expect(currentLng).toBe('sp');
		fireEvent.click(buttons[0]);
		expect(currentLng).toBe('en');
		fireEvent.click(buttons[0]);
		expect(currentLng).toBe('en');
		fireEvent.click(buttons[1]);
		expect(currentLng).toBe('de');
		fireEvent.click(buttons[1]);
		expect(currentLng).toBe('de');
	});
});
