import { afterEach, describe, expect, it, vi } from 'vitest';
import { calculateFee } from '../components/Calculator/calculateFee';
import { calculatedFeeInterface, DateObject } from '../constants';

describe('calculateFee', () => {
	it('Check fee calculation when all is 0', (): void => {
		let calculatedFee: calculatedFeeInterface = {
			minimumFee: 0,
			distanceFee: 0,
			itemsFee: 0,
			rushHourFee: 0,
			exceedingFeeReduction: 0,
			totalFeeReduction: 0,
			totalFee: 0,
		};

		const cartValue = 0;
		const deliveryDistance = 0;
		const numberItems = 0;
		const orderDate: DateObject = new DateObject('', '');
		const setShowResultModal = vi.fn(() => {});
		const setCalculatedFee = vi.fn((newFee) => {
			calculatedFee = newFee;
		});

		calculateFee(
			cartValue,
			deliveryDistance,
			numberItems,
			orderDate,
			setShowResultModal,
			setCalculatedFee
		);

		expect(calculatedFee.minimumFee).toBe(0);
		expect(calculatedFee.distanceFee).toBe(0);
		expect(calculatedFee.itemsFee).toBe(0);
		expect(calculatedFee.rushHourFee).toBe(0);
		expect(calculatedFee.exceedingFeeReduction).toBe(0);
		expect(calculatedFee.totalFeeReduction).toBe(0);
		expect(calculatedFee.totalFee).toBe(0);
	});

	it('Check fee calculation 1', (): void => {
		let calculatedFee: calculatedFeeInterface = {
			minimumFee: 0,
			distanceFee: 0,
			itemsFee: 0,
			rushHourFee: 0,
			exceedingFeeReduction: 0,
			totalFeeReduction: 0,
			totalFee: 0,
		};

		const cartValue = 1;
		const deliveryDistance = 1;
		const numberItems = 1;
		const orderDate: DateObject = new DateObject('02/03/2023', '12:00');
		const setShowResultModal = vi.fn(() => {});
		const setCalculatedFee = vi.fn((newFee) => {
			calculatedFee = newFee;
		});

		calculateFee(
			cartValue,
			deliveryDistance,
			numberItems,
			orderDate,
			setShowResultModal,
			setCalculatedFee
		);

		expect(calculatedFee.minimumFee).toBe(9);
		expect(calculatedFee.distanceFee).toBe(2);
		expect(calculatedFee.itemsFee).toBe(0);
		expect(calculatedFee.rushHourFee).toBe(0);
		expect(calculatedFee.exceedingFeeReduction).toBe(0);
		expect(calculatedFee.totalFeeReduction).toBe(0);
		expect(calculatedFee.totalFee).toBe(11);
	});

	it('Check fee calculation 2', (): void => {
		let calculatedFee: calculatedFeeInterface = {
			minimumFee: 0,
			distanceFee: 0,
			itemsFee: 0,
			rushHourFee: 0,
			exceedingFeeReduction: 0,
			totalFeeReduction: 0,
			totalFee: 0,
		};

		const cartValue = 10;
		const deliveryDistance = 1;
		const numberItems = 1;
		const orderDate: DateObject = new DateObject('02/03/2023', '12:00');
		const setShowResultModal = vi.fn(() => {});
		const setCalculatedFee = vi.fn((newFee) => {
			calculatedFee = newFee;
		});

		calculateFee(
			cartValue,
			deliveryDistance,
			numberItems,
			orderDate,
			setShowResultModal,
			setCalculatedFee
		);

		expect(calculatedFee.minimumFee).toBe(0);
		expect(calculatedFee.distanceFee).toBe(2);
		expect(calculatedFee.itemsFee).toBe(0);
		expect(calculatedFee.rushHourFee).toBe(0);
		expect(calculatedFee.exceedingFeeReduction).toBe(0);
		expect(calculatedFee.totalFeeReduction).toBe(0);
		expect(calculatedFee.totalFee).toBe(2);
	});

	it('Check fee calculation 3', (): void => {
		let calculatedFee: calculatedFeeInterface = {
			minimumFee: 0,
			distanceFee: 0,
			itemsFee: 0,
			rushHourFee: 0,
			exceedingFeeReduction: 0,
			totalFeeReduction: 0,
			totalFee: 0,
		};

		const cartValue = 100;
		const deliveryDistance = 1;
		const numberItems = 1;
		const orderDate: DateObject = new DateObject('02/03/2023', '12:00');
		const setShowResultModal = vi.fn(() => {});
		const setCalculatedFee = vi.fn((newFee) => {
			calculatedFee = newFee;
		});

		calculateFee(
			cartValue,
			deliveryDistance,
			numberItems,
			orderDate,
			setShowResultModal,
			setCalculatedFee
		);

		expect(calculatedFee.minimumFee).toBe(0);
		expect(calculatedFee.distanceFee).toBe(2);
		expect(calculatedFee.itemsFee).toBe(0);
		expect(calculatedFee.rushHourFee).toBe(0);
		expect(calculatedFee.exceedingFeeReduction).toBe(0);
		expect(calculatedFee.totalFeeReduction).toBe(-2);
		expect(calculatedFee.totalFee).toBe(0);
	});

	it('Check fee calculation 4', (): void => {
		let calculatedFee: calculatedFeeInterface = {
			minimumFee: 0,
			distanceFee: 0,
			itemsFee: 0,
			rushHourFee: 0,
			exceedingFeeReduction: 0,
			totalFeeReduction: 0,
			totalFee: 0,
		};

		const cartValue = 5;
		const deliveryDistance = 999;
		const numberItems = 1;
		const orderDate: DateObject = new DateObject('02/03/2023', '12:00');
		const setShowResultModal = vi.fn(() => {});
		const setCalculatedFee = vi.fn((newFee) => {
			calculatedFee = newFee;
		});

		calculateFee(
			cartValue,
			deliveryDistance,
			numberItems,
			orderDate,
			setShowResultModal,
			setCalculatedFee
		);

		expect(calculatedFee.minimumFee).toBe(5);
		expect(calculatedFee.distanceFee).toBe(2);
		expect(calculatedFee.itemsFee).toBe(0);
		expect(calculatedFee.rushHourFee).toBe(0);
		expect(calculatedFee.exceedingFeeReduction).toBe(0);
		expect(calculatedFee.totalFeeReduction).toBe(0);
		expect(calculatedFee.totalFee).toBe(7);
	});

	it('Check fee calculation 5', (): void => {
		let calculatedFee: calculatedFeeInterface = {
			minimumFee: 0,
			distanceFee: 0,
			itemsFee: 0,
			rushHourFee: 0,
			exceedingFeeReduction: 0,
			totalFeeReduction: 0,
			totalFee: 0,
		};

		const cartValue = 5;
		const deliveryDistance = 1000;
		const numberItems = 1;
		const orderDate: DateObject = new DateObject('02/03/2023', '12:00');
		const setShowResultModal = vi.fn(() => {});
		const setCalculatedFee = vi.fn((newFee) => {
			calculatedFee = newFee;
		});

		calculateFee(
			cartValue,
			deliveryDistance,
			numberItems,
			orderDate,
			setShowResultModal,
			setCalculatedFee
		);

		expect(calculatedFee.minimumFee).toBe(5);
		expect(calculatedFee.distanceFee).toBe(2);
		expect(calculatedFee.itemsFee).toBe(0);
		expect(calculatedFee.rushHourFee).toBe(0);
		expect(calculatedFee.exceedingFeeReduction).toBe(0);
		expect(calculatedFee.totalFeeReduction).toBe(0);
		expect(calculatedFee.totalFee).toBe(7);
	});

	it('Check fee calculation 6', (): void => {
		let calculatedFee: calculatedFeeInterface = {
			minimumFee: 0,
			distanceFee: 0,
			itemsFee: 0,
			rushHourFee: 0,
			exceedingFeeReduction: 0,
			totalFeeReduction: 0,
			totalFee: 0,
		};

		const cartValue = 5;
		const deliveryDistance = 1001;
		const numberItems = 1;
		const orderDate: DateObject = new DateObject('02/03/2023', '12:00');
		const setShowResultModal = vi.fn(() => {});
		const setCalculatedFee = vi.fn((newFee) => {
			calculatedFee = newFee;
		});

		calculateFee(
			cartValue,
			deliveryDistance,
			numberItems,
			orderDate,
			setShowResultModal,
			setCalculatedFee
		);

		expect(calculatedFee.minimumFee).toBe(5);
		expect(calculatedFee.distanceFee).toBe(3);
		expect(calculatedFee.itemsFee).toBe(0);
		expect(calculatedFee.rushHourFee).toBe(0);
		expect(calculatedFee.exceedingFeeReduction).toBe(0);
		expect(calculatedFee.totalFeeReduction).toBe(0);
		expect(calculatedFee.totalFee).toBe(8);
	});

	it('Check fee calculation 7', (): void => {
		let calculatedFee: calculatedFeeInterface = {
			minimumFee: 0,
			distanceFee: 0,
			itemsFee: 0,
			rushHourFee: 0,
			exceedingFeeReduction: 0,
			totalFeeReduction: 0,
			totalFee: 0,
		};

		const cartValue = 5;
		const deliveryDistance = 1499;
		const numberItems = 1;
		const orderDate: DateObject = new DateObject('02/03/2023', '12:00');
		const setShowResultModal = vi.fn(() => {});
		const setCalculatedFee = vi.fn((newFee) => {
			calculatedFee = newFee;
		});

		calculateFee(
			cartValue,
			deliveryDistance,
			numberItems,
			orderDate,
			setShowResultModal,
			setCalculatedFee
		);

		expect(calculatedFee.minimumFee).toBe(5);
		expect(calculatedFee.distanceFee).toBe(3);
		expect(calculatedFee.itemsFee).toBe(0);
		expect(calculatedFee.rushHourFee).toBe(0);
		expect(calculatedFee.exceedingFeeReduction).toBe(0);
		expect(calculatedFee.totalFeeReduction).toBe(0);
		expect(calculatedFee.totalFee).toBe(8);
	});

	it('Check fee calculation 8', (): void => {
		let calculatedFee: calculatedFeeInterface = {
			minimumFee: 0,
			distanceFee: 0,
			itemsFee: 0,
			rushHourFee: 0,
			exceedingFeeReduction: 0,
			totalFeeReduction: 0,
			totalFee: 0,
		};

		const cartValue = 5;
		const deliveryDistance = 1500;
		const numberItems = 1;
		const orderDate: DateObject = new DateObject('02/03/2023', '12:00');
		const setShowResultModal = vi.fn(() => {});
		const setCalculatedFee = vi.fn((newFee) => {
			calculatedFee = newFee;
		});

		calculateFee(
			cartValue,
			deliveryDistance,
			numberItems,
			orderDate,
			setShowResultModal,
			setCalculatedFee
		);

		expect(calculatedFee.minimumFee).toBe(5);
		expect(calculatedFee.distanceFee).toBe(3);
		expect(calculatedFee.itemsFee).toBe(0);
		expect(calculatedFee.rushHourFee).toBe(0);
		expect(calculatedFee.exceedingFeeReduction).toBe(0);
		expect(calculatedFee.totalFeeReduction).toBe(0);
		expect(calculatedFee.totalFee).toBe(8);
	});
	it('Check fee calculation 9', (): void => {
		let calculatedFee: calculatedFeeInterface = {
			minimumFee: 0,
			distanceFee: 0,
			itemsFee: 0,
			rushHourFee: 0,
			exceedingFeeReduction: 0,
			totalFeeReduction: 0,
			totalFee: 0,
		};

		const cartValue = 5;
		const deliveryDistance = 1501;
		const numberItems = 1;
		const orderDate: DateObject = new DateObject('02/03/2023', '12:00');
		const setShowResultModal = vi.fn(() => {});
		const setCalculatedFee = vi.fn((newFee) => {
			calculatedFee = newFee;
		});

		calculateFee(
			cartValue,
			deliveryDistance,
			numberItems,
			orderDate,
			setShowResultModal,
			setCalculatedFee
		);

		expect(calculatedFee.minimumFee).toBe(5);
		expect(calculatedFee.distanceFee).toBe(4);
		expect(calculatedFee.itemsFee).toBe(0);
		expect(calculatedFee.rushHourFee).toBe(0);
		expect(calculatedFee.exceedingFeeReduction).toBe(0);
		expect(calculatedFee.totalFeeReduction).toBe(0);
		expect(calculatedFee.totalFee).toBe(9);
	});

	it('Check fee calculation 10', (): void => {
		let calculatedFee: calculatedFeeInterface = {
			minimumFee: 0,
			distanceFee: 0,
			itemsFee: 0,
			rushHourFee: 0,
			exceedingFeeReduction: 0,
			totalFeeReduction: 0,
			totalFee: 0,
		};

		const cartValue = 5;
		const deliveryDistance = 1;
		const numberItems = 4;
		const orderDate: DateObject = new DateObject('02/03/2023', '12:00');
		const setShowResultModal = vi.fn(() => {});
		const setCalculatedFee = vi.fn((newFee) => {
			calculatedFee = newFee;
		});

		calculateFee(
			cartValue,
			deliveryDistance,
			numberItems,
			orderDate,
			setShowResultModal,
			setCalculatedFee
		);

		expect(calculatedFee.minimumFee).toBe(5);
		expect(calculatedFee.distanceFee).toBe(2);
		expect(calculatedFee.itemsFee).toBe(0);
		expect(calculatedFee.rushHourFee).toBe(0);
		expect(calculatedFee.exceedingFeeReduction).toBe(0);
		expect(calculatedFee.totalFeeReduction).toBe(0);
		expect(calculatedFee.totalFee).toBe(7);
	});

	it('Check fee calculation 11', (): void => {
		let calculatedFee: calculatedFeeInterface = {
			minimumFee: 0,
			distanceFee: 0,
			itemsFee: 0,
			rushHourFee: 0,
			exceedingFeeReduction: 0,
			totalFeeReduction: 0,
			totalFee: 0,
		};

		const cartValue = 5;
		const deliveryDistance = 1;
		const numberItems = 5;
		const orderDate: DateObject = new DateObject('02/03/2023', '12:00');
		const setShowResultModal = vi.fn(() => {});
		const setCalculatedFee = vi.fn((newFee) => {
			calculatedFee = newFee;
		});

		calculateFee(
			cartValue,
			deliveryDistance,
			numberItems,
			orderDate,
			setShowResultModal,
			setCalculatedFee
		);

		expect(calculatedFee.minimumFee).toBe(5);
		expect(calculatedFee.distanceFee).toBe(2);
		expect(calculatedFee.itemsFee).toBe(0.5);
		expect(calculatedFee.rushHourFee).toBe(0);
		expect(calculatedFee.exceedingFeeReduction).toBe(0);
		expect(calculatedFee.totalFeeReduction).toBe(0);
		expect(calculatedFee.totalFee).toBe(7.5);
	});

	it('Check fee calculation 12', (): void => {
		let calculatedFee: calculatedFeeInterface = {
			minimumFee: 0,
			distanceFee: 0,
			itemsFee: 0,
			rushHourFee: 0,
			exceedingFeeReduction: 0,
			totalFeeReduction: 0,
			totalFee: 0,
		};

		const cartValue = 5;
		const deliveryDistance = 1;
		const numberItems = 6;
		const orderDate: DateObject = new DateObject('02/03/2023', '12:00');
		const setShowResultModal = vi.fn(() => {});
		const setCalculatedFee = vi.fn((newFee) => {
			calculatedFee = newFee;
		});

		calculateFee(
			cartValue,
			deliveryDistance,
			numberItems,
			orderDate,
			setShowResultModal,
			setCalculatedFee
		);

		expect(calculatedFee.minimumFee).toBe(5);
		expect(calculatedFee.distanceFee).toBe(2);
		expect(calculatedFee.itemsFee).toBe(1);
		expect(calculatedFee.rushHourFee).toBe(0);
		expect(calculatedFee.exceedingFeeReduction).toBe(0);
		expect(calculatedFee.totalFeeReduction).toBe(0);
		expect(calculatedFee.totalFee).toBe(8);
	});

	it('Check fee calculation 13', (): void => {
		let calculatedFee: calculatedFeeInterface = {
			minimumFee: 0,
			distanceFee: 0,
			itemsFee: 0,
			rushHourFee: 0,
			exceedingFeeReduction: 0,
			totalFeeReduction: 0,
			totalFee: 0,
		};

		const cartValue = 5;
		const deliveryDistance = 1;
		const numberItems = 12;
		const orderDate: DateObject = new DateObject('02/03/2023', '12:00');
		const setShowResultModal = vi.fn(() => {});
		const setCalculatedFee = vi.fn((newFee) => {
			calculatedFee = newFee;
		});

		calculateFee(
			cartValue,
			deliveryDistance,
			numberItems,
			orderDate,
			setShowResultModal,
			setCalculatedFee
		);

		expect(calculatedFee.minimumFee).toBe(5);
		expect(calculatedFee.distanceFee).toBe(2);
		expect(calculatedFee.itemsFee).toBe(4);
		expect(calculatedFee.rushHourFee).toBe(0);
		expect(calculatedFee.exceedingFeeReduction).toBe(0);
		expect(calculatedFee.totalFeeReduction).toBe(0);
		expect(calculatedFee.totalFee).toBe(11);
	});

	it('Check fee calculation 14', (): void => {
		let calculatedFee: calculatedFeeInterface = {
			minimumFee: 0,
			distanceFee: 0,
			itemsFee: 0,
			rushHourFee: 0,
			exceedingFeeReduction: 0,
			totalFeeReduction: 0,
			totalFee: 0,
		};

		const cartValue = 5;
		const deliveryDistance = 1;
		const numberItems = 13;
		const orderDate: DateObject = new DateObject('02/03/2023', '12:00');
		const setShowResultModal = vi.fn(() => {});
		const setCalculatedFee = vi.fn((newFee) => {
			calculatedFee = newFee;
		});

		calculateFee(
			cartValue,
			deliveryDistance,
			numberItems,
			orderDate,
			setShowResultModal,
			setCalculatedFee
		);

		expect(calculatedFee.minimumFee).toBe(5);
		expect(calculatedFee.distanceFee).toBe(2);
		expect(calculatedFee.itemsFee).toBe(5.7);
		expect(calculatedFee.rushHourFee).toBe(0);
		expect(calculatedFee.exceedingFeeReduction).toBe(0);
		expect(calculatedFee.totalFeeReduction).toBe(0);
		expect(calculatedFee.totalFee).toBe(12.7);
	});

	it('Check fee calculation 15', (): void => {
		let calculatedFee: calculatedFeeInterface = {
			minimumFee: 0,
			distanceFee: 0,
			itemsFee: 0,
			rushHourFee: 0,
			exceedingFeeReduction: 0,
			totalFeeReduction: 0,
			totalFee: 0,
		};

		const cartValue = 5;
		const deliveryDistance = 1;
		const numberItems = 1;
		const orderDate: DateObject = new DateObject('02/03/2023', '14:59');
		const setShowResultModal = vi.fn(() => {});
		const setCalculatedFee = vi.fn((newFee) => {
			calculatedFee = newFee;
		});

		calculateFee(
			cartValue,
			deliveryDistance,
			numberItems,
			orderDate,
			setShowResultModal,
			setCalculatedFee
		);

		expect(calculatedFee.minimumFee).toBe(5);
		expect(calculatedFee.distanceFee).toBe(2);
		expect(calculatedFee.itemsFee).toBe(0);
		expect(calculatedFee.rushHourFee).toBe(0);
		expect(calculatedFee.exceedingFeeReduction).toBe(0);
		expect(calculatedFee.totalFeeReduction).toBe(0);
		expect(calculatedFee.totalFee).toBe(7);
	});

	it('Check fee calculation 15', (): void => {
		let calculatedFee: calculatedFeeInterface = {
			minimumFee: 0,
			distanceFee: 0,
			itemsFee: 0,
			rushHourFee: 0,
			exceedingFeeReduction: 0,
			totalFeeReduction: 0,
			totalFee: 0,
		};

		const cartValue = 5;
		const deliveryDistance = 1;
		const numberItems = 1;
		const orderDate: DateObject = new DateObject('02/03/2023', '15:00');
		const setShowResultModal = vi.fn(() => {});
		const setCalculatedFee = vi.fn((newFee) => {
			calculatedFee = newFee;
		});

		calculateFee(
			cartValue,
			deliveryDistance,
			numberItems,
			orderDate,
			setShowResultModal,
			setCalculatedFee
		);

		expect(calculatedFee.minimumFee).toBe(5);
		expect(calculatedFee.distanceFee).toBe(2);
		expect(calculatedFee.itemsFee).toBe(0);
		expect(calculatedFee.rushHourFee).toBe(1.4);
		expect(calculatedFee.exceedingFeeReduction).toBe(0);
		expect(calculatedFee.totalFeeReduction).toBe(0);
		expect(calculatedFee.totalFee).toBe(8.4);
	});

	it('Check fee calculation 16', (): void => {
		let calculatedFee: calculatedFeeInterface = {
			minimumFee: 0,
			distanceFee: 0,
			itemsFee: 0,
			rushHourFee: 0,
			exceedingFeeReduction: 0,
			totalFeeReduction: 0,
			totalFee: 0,
		};

		const cartValue = 5;
		const deliveryDistance = 1;
		const numberItems = 1;
		const orderDate: DateObject = new DateObject('02/03/2023', '19:00');
		const setShowResultModal = vi.fn(() => {});
		const setCalculatedFee = vi.fn((newFee) => {
			calculatedFee = newFee;
		});

		calculateFee(
			cartValue,
			deliveryDistance,
			numberItems,
			orderDate,
			setShowResultModal,
			setCalculatedFee
		);

		expect(calculatedFee.minimumFee).toBe(5);
		expect(calculatedFee.distanceFee).toBe(2);
		expect(calculatedFee.itemsFee).toBe(0);
		expect(calculatedFee.rushHourFee).toBe(1.4);
		expect(calculatedFee.exceedingFeeReduction).toBe(0);
		expect(calculatedFee.totalFeeReduction).toBe(0);
		expect(calculatedFee.totalFee).toBe(8.4);
	});

	it('Check fee calculation 17', (): void => {
		let calculatedFee: calculatedFeeInterface = {
			minimumFee: 0,
			distanceFee: 0,
			itemsFee: 0,
			rushHourFee: 0,
			exceedingFeeReduction: 0,
			totalFeeReduction: 0,
			totalFee: 0,
		};

		const cartValue = 5;
		const deliveryDistance = 1;
		const numberItems = 1;
		const orderDate: DateObject = new DateObject('02/03/2023', '19:01');
		const setShowResultModal = vi.fn(() => {});
		const setCalculatedFee = vi.fn((newFee) => {
			calculatedFee = newFee;
		});

		calculateFee(
			cartValue,
			deliveryDistance,
			numberItems,
			orderDate,
			setShowResultModal,
			setCalculatedFee
		);

		expect(calculatedFee.minimumFee).toBe(5);
		expect(calculatedFee.distanceFee).toBe(2);
		expect(calculatedFee.itemsFee).toBe(0);
		expect(calculatedFee.rushHourFee).toBe(0);
		expect(calculatedFee.exceedingFeeReduction).toBe(0);
		expect(calculatedFee.totalFeeReduction).toBe(0);
		expect(calculatedFee.totalFee).toBe(7);
	});

	it('Check fee calculation 18', (): void => {
		let calculatedFee: calculatedFeeInterface = {
			minimumFee: 0,
			distanceFee: 0,
			itemsFee: 0,
			rushHourFee: 0,
			exceedingFeeReduction: 0,
			totalFeeReduction: 0,
			totalFee: 0,
		};

		const cartValue = 5;
		const deliveryDistance = 1;
		const numberItems = 100;
		const orderDate: DateObject = new DateObject('02/03/2023', '12');
		const setShowResultModal = vi.fn(() => {});
		const setCalculatedFee = vi.fn((newFee) => {
			calculatedFee = newFee;
		});

		calculateFee(
			cartValue,
			deliveryDistance,
			numberItems,
			orderDate,
			setShowResultModal,
			setCalculatedFee
		);

		expect(calculatedFee.minimumFee).toBe(5);
		expect(calculatedFee.distanceFee).toBe(2);
		expect(calculatedFee.itemsFee).toBe(49.2);
		expect(calculatedFee.rushHourFee).toBe(0);
		expect(calculatedFee.exceedingFeeReduction).toBe(-41.2);
		expect(calculatedFee.totalFeeReduction).toBe(0);
		expect(calculatedFee.totalFee).toBe(15);
	});
});
