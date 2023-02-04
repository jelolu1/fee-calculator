import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18next
	.use(initReactI18next)
	.use(LanguageDetector)
	.init({
		fallbackLng: 'en',
		resources: {
			en: {
				translation: {
					cartValue: 'Cart Value',
					deliveryDistance: 'Delivery Distance',
					numberOfItems: 'Number of Items',
					orderTime: 'Time',
					calculateFee: 'Calculate Fee',
					errorMsgNumber: 'Must be higher than 0',
					errorMsgDate: 'Invalid Date / Time',
					instructionsModal: {
						title: 'Fee Calculator Instructions',
						subtitle:
							'To calculate the delivery fee, you must enter the following data:',
						cartValueInstructions: 'Value of the shopping cart in euros.',
						deliveryDistanceInstructions:
							'The distance between the store and customer’s location in meters.',
						numberOfItemsInstructions:
							'The number of items in the shopping cart.',
						orderTimeInstructions:
							'The day and time at which the order is placed.',
					},
					resultModal: {
						title: 'Calculated Fee',
						display: 'Display Details',
						minimumFee: 'Fee to reach the minimum:',
						distanceFee: 'Distance Fee:',
						itemsFee: 'Number of Items Fee:',
						rushHourFee: 'Rush Hour Fee:',
						excedingFee: 'Fee Exceeding 15 €?',
						cartSuperiorOneHundred: 'Cart Value superior to 100 €?',
						feeReduction: 'Fee Reduction:',
					},
				},
			},
			de: {
				translation: {
					cartValue: 'Warenkorbwert',
					deliveryDistance: 'Entfernung der Lieferung',
					numberOfItems: 'Anzahl der Artikel',
					orderTime: 'Zeit',
					calculateFee: 'Gebühren berechnen',
					errorMsgNumber: 'Muss größer als 0 sein',
					errorMsgDate: 'Ungültiges Datum / Zeit',
					instructionsModal: {
						title: 'Anleitung zum Gebührenrechner',
						subtitle:
							'Zur Berechnung der Zustellgebühr müssen Sie die folgenden Daten eingeben:',
						cartValueInstructions: 'Wert des Warenkorbs in Euro.',
						deliveryDistanceInstructions:
							'Die Entfernung zwischen dem Geschäft und dem Standort des Kunden in Metern.',
						numberOfItemsInstructions:
							'Die Anzahl der Artikel im Einkaufswagen.',
						orderTimeInstructions:
							'Der Tag und die Uhrzeit, zu der die Bestellung getätigt wird.',
					},
					resultModal: {
						title: 'Berechnete Gebühr',
						display: 'Details Anzeigen',
						minimumFee: 'Gebühr für das Erreichen des Minimums:',
						distanceFee: 'Gebühr für die Entfernung:',
						itemsFee: 'Anzahl der Artikel Gebühr:',
						rushHourFee: 'Rush Hour-Gebühr:',
						excedingFee: 'Gebühr von mehr als 15 €?',
						cartSuperiorOneHundred: 'Warenkorbwert höher als 100 €?',
						feeReduction: 'Gebührenermäßigung:',
					},
				},
			},
			sp: {
				translation: {
					cartValue: 'Valor de la cesta',
					deliveryDistance: 'Distancia de entrega',
					numberOfItems: 'Número de productos',
					orderTime: 'Fecha y Hora',
					errorMsgNumber: 'Debe ser superior a 0',
					errorMsgDate: 'Fecha / Hora inválida',
					calculateFee: 'Calcular Tasa',
					instructionsModal: {
						title: 'Instrucciones de la Calculatora',
						subtitle:
							'Para calcular los gastos de envío, debe introducir los siguientes datos:',
						cartValueInstructions: 'Valor de la cesta de la compra en euros.',
						deliveryDistanceInstructions:
							'La distancia entre la tienda y la ubicación del cliente en metros.',
						numberOfItemsInstructions:
							'El número de artículos de la cesta de la compra.',
						orderTimeInstructions:
							'El día y la hora en que se realiza el pedido.',
					},
					resultModal: {
						title: 'Tasa de envío calculada',
						display: 'Mostrar Detalles',
						minimumFee: 'Tasa para alcanzar el mínimo:',
						distanceFee: 'Tasa por distancia:',
						itemsFee: 'Tasa por número de artículos:',
						rushHourFee: 'Tasa por hora punta:',
						excedingFee: '¿Tasa superior a 15 €?',
						cartSuperiorOneHundred: '¿Valor del carrito superior a 100 €?',
						feeReduction: 'Reducción de tarifa:',
					},
				},
			},
		},
	});
