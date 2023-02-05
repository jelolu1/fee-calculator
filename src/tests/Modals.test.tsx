import { cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { InstructionsModal } from '../components/Modals/InstructionsModal';
import { ResultModal } from '../components/Modals/ResultModal';
import { Modal } from '../components/UI/Modal';
import { calculatedFeeInterface } from '../constants';

describe('Modal, InstructionModal and ResultModal', () => {
	afterEach(cleanup);
	it('Renders Content Empty', (): void => {
		const component = render(
			<Modal setShowModal={() => {}}>
				<></>
			</Modal>
		);

		const div = component.container.querySelectorAll('div');
		const header = component.container.querySelector('header');
		const button = component.container.querySelector('button');

		expect(div).not.toBe(null);
		expect(header).not.toBe(null);
		expect(button).not.toBe(null);
	});

	it('Renders Content Title and Paragraph', (): void => {
		const component = render(
			<Modal setShowModal={() => {}}>
				<>
					<h1>title</h1>
					<p>paragraph</p>
				</>
			</Modal>
		);

		const div = component.container.querySelectorAll('div');
		const header = component.container.querySelector('header');
		const button = component.container.querySelector('button');
		const h1 = component.container.querySelector('h1');
		const p = component.container.querySelector('p');

		expect(div).not.toBe(null);
		expect(header).not.toBe(null);
		expect(button).not.toBe(null);
		expect(h1).not.toBe(null);
		expect(p).not.toBe(null);

		component.getByText('title');
		component.getByText('paragraph');
	});

	it('Renders Content of Instruction Modal inside Modal', (): void => {
		const mockShowInstructionModal = vi.fn();
		const t = vi.fn((text: string): string => text);
		const component = render(
			<Modal setShowModal={() => {}}>
				<InstructionsModal
					setShowInstructionsModal={mockShowInstructionModal}
					t={t}
				/>
			</Modal>
		);

		const div = component.container.querySelectorAll('div');
		const header = component.container.querySelectorAll('header');
		const ul = component.container.querySelector('ul');
		const li = component.container.querySelector('li');
		const span = component.container.querySelector('span');
		const p = component.container.querySelector('p');

		expect(div).not.toBe(null);
		expect(header).not.toBe(null);
		expect(ul).not.toBe(null);
		expect(li).not.toBe(null);
		expect(span).not.toBe(null);
		expect(p).not.toBe(null);

		component.getByText('instructionsModal.title'.toUpperCase());
		component.getByText('instructionsModal.subtitle');
		component.getByText('cartValueTitle');
		component.getByText('instructionsModal.cartValueInstructions');
		component.getByText('deliveryDistance');
		component.getByText('instructionsModal.deliveryDistanceInstructions');
		component.getByText('numberOfItems');
		component.getByText('instructionsModal.numberOfItemsInstructions');
		component.getByText('orderTime');
		component.getByText('instructionsModal.orderTimeInstructions');
	});

	it('Renders Content of Result Modal inside Modal - Display Closed', (): void => {
		const mockShowResultModal = vi.fn();
		const calculatedFee: calculatedFeeInterface = {
			minimumFee: 0,
			distanceFee: 0,
			itemsFee: 0,
			rushHourFee: 0,
			exceedingFeeReduction: 0,
			totalFee: 0,
			totalFeeReduction: 0,
		};
		const t = vi.fn((text: string): string => text);
		const component = render(
			<Modal setShowModal={() => {}}>
				<ResultModal
					setShowResultModal={mockShowResultModal}
					calculatedFee={calculatedFee}
					t={t}
				/>
			</Modal>
		);

		const div = component.container.querySelectorAll('div');
		const header = component.container.querySelectorAll('header');
		const ul = component.container.querySelector('ul');
		const li = component.container.querySelector('li');
		const span = component.container.querySelector('span');
		const p = component.container.querySelector('p');
		const button = component.container.querySelector('button');
		const svg = component.container.querySelector('svg');
		const path = component.container.querySelector('path');

		expect(div).not.toBe(null);
		expect(header).not.toBe(null);
		expect(span).not.toBe(null);
		expect(button).not.toBe(null);
		expect(svg).not.toBe(null);
		expect(path).not.toBe(null);
		expect(ul).toBe(null);
		expect(li).toBe(null);
		expect(p).toBe(null);

		component.getByText('resultModal.title'.toUpperCase());
		component.getByText('resultModal.display'.toUpperCase());
	});

	it('Renders Content of Result Modal inside Modal - Display Opened', (): void => {
		const mockShowResultModal = vi.fn();
		const calculatedFee: calculatedFeeInterface = {
			minimumFee: 0,
			distanceFee: 0,
			itemsFee: 0,
			rushHourFee: 0,
			exceedingFeeReduction: 0,
			totalFee: 0,
			totalFeeReduction: 0,
		};
		const t = vi.fn((text: string): string => text);
		const component = render(
			<Modal setShowModal={() => {}}>
				<ResultModal
					setShowResultModal={mockShowResultModal}
					calculatedFee={calculatedFee}
					t={t}
				/>
			</Modal>
		);

		const button = component.getAllByRole('button');
		fireEvent.click(button[2]);

		const div = component.container.querySelectorAll('div');
		const header = component.container.querySelectorAll('header');
		const ul = component.container.querySelector('ul');
		const li = component.container.querySelector('li');
		const span = component.container.querySelector('span');
		const p = component.container.querySelector('p');
		const svg = component.container.querySelector('svg');
		const path = component.container.querySelector('path');

		expect(button).not.toBe(null);
		expect(div).not.toBe(null);
		expect(header).not.toBe(null);
		expect(ul).not.toBe(null);
		expect(li).not.toBe(null);
		expect(span).not.toBe(null);
		expect(p).toBe(null);
		expect(svg).not.toBe(null);
		expect(path).not.toBe(null);

		component.getByText('resultModal.title'.toUpperCase());
		component.getByText('resultModal.display'.toUpperCase());
	});

	it('Renders Content of Result Modal inside Modal - Display Opened + Fee Reduction', (): void => {
		const mockShowResultModal = vi.fn();
		const calculatedFee: calculatedFeeInterface = {
			minimumFee: 8,
			distanceFee: 2,
			itemsFee: 10,
			rushHourFee: 0,
			exceedingFeeReduction: -5,
			totalFee: 0,
			totalFeeReduction: 0,
		};
		const t = vi.fn((text: string): string => text);
		const component = render(
			<Modal setShowModal={() => {}}>
				<ResultModal
					setShowResultModal={mockShowResultModal}
					calculatedFee={calculatedFee}
					t={t}
				/>
			</Modal>
		);

		const button = component.getAllByRole('button');
		fireEvent.click(button[2]);

		const div = component.container.querySelectorAll('div');
		const header = component.container.querySelectorAll('header');
		const ul = component.container.querySelector('ul');
		const li = component.container.querySelector('li');
		const span = component.container.querySelector('span');
		const p = component.container.querySelector('p');
		const svg = component.container.querySelector('svg');
		const path = component.container.querySelector('path');

		expect(button).not.toBe(null);
		expect(div).not.toBe(null);
		expect(header).not.toBe(null);
		expect(ul).not.toBe(null);
		expect(li).not.toBe(null);
		expect(span).not.toBe(null);
		expect(p).not.toBe(null);
		expect(svg).not.toBe(null);
		expect(path).not.toBe(null);

		component.getByText('resultModal.title'.toUpperCase());
		component.getByText('resultModal.display'.toUpperCase());
	});
});
