import React from 'react';
import GooglePayButton from '@google-pay/button-react';
const Gpay = (props) => {
	const price = props.price;
	console.log(price);
	return (
		<>
			<GooglePayButton
				environment="TEST"
				paymentRequest={{
					apiVersion: 2,
					apiVersionMinor: 0,
					allowedPaymentMethods: [
						{
							type: 'CARD',
							parameters: {
								allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
								allowedCardNetworks: [
									'AMEX',
									'DISCOVER',
									'INTERAC',
									'JCB',
									'MASTERCARD',
									'VISA',
								],
							},
							tokenizationSpecification: {
								type: 'PAYMENT_GATEWAY',
								parameters: {
									gateway: 'example',
									gatewayMerchantId: 'exampleGatewayMerchantId',
								},
							},
						},
					],
					merchantInfo: {
						merchantId: '12345678901234567890',
						merchantName: 'Demo Merchant',
					},
					transactionInfo: {
						totalPriceStatus: 'FINAL',
						totalPriceLabel: 'Total',
						totalPrice: price.toString(),
						currencyCode: 'USD',
						countryCode: 'US',
					},
					callbackIntents: ['PAYMENT_AUTHORIZATION'],
				}}
				onLoadPaymentData={(paymentRequest) => {
					console.log('load payment data', paymentRequest);
				}}
				onPaymentAuthorized={(paymentData) => {
					console.log('Payment Authorized Success', paymentData);
					return { transactionState: 'SUCCESS' };
				}}
				buttonType="short"
				buttonSizeMode="static"
				buttonColor="black"
			/>
		</>
	);
};

export default Gpay;
