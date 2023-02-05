import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { BubbleBackground } from '../components/UI/BubbleBackground';

describe('BubbleBackground', () => {
	it('Renders Content', (): void => {
		const component = render(<BubbleBackground />);

		const divs = component.container.querySelectorAll('div');
		const svg = component.container.querySelector('svg');
		const path = component.container.querySelector('path');

		expect(divs).not.toBe(null);
		expect(svg).not.toBe(null);
		expect(path).not.toBe(null);
	});
});
