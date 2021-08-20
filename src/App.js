import './App.css';
import { useState } from 'react';

function App() {
	const [initialPrice, setInitialPrice] = useState('');
	const [quantity, setQuantity] = useState('');
	const [currentPrice, setCurrentPrice] = useState('');
	const [result, setResult] = useState('');
	const [isProfitOrLoss, setIsProfitOrLoss] = useState('none');

	const calculateProfitOrLoss = () => {
		if (!initialPrice || initialPrice <= 0) {
			setResult('Invalid Initial Price');
			setIsProfitOrLoss('none');
			return;
		}

		if (!quantity || quantity <= 0) {
			setResult('Invalid Quantity');
			setIsProfitOrLoss('none');
			return;
		}

		if (!currentPrice || currentPrice <= 0) {
			setResult('Invalid Current Price');
			setIsProfitOrLoss('none');
			return;
		}

		let netProfitOrLoss = Math.abs(initialPrice - currentPrice) * quantity;
		let percentage = (netProfitOrLoss / initialPrice) * 100;

		netProfitOrLoss = netProfitOrLoss.toFixed(2);
		percentage = percentage.toFixed(2);

		if (currentPrice < initialPrice) {
			setResult(
				`The loss is ${netProfitOrLoss}, and the loss percentage is ${percentage}%`
			);
			setIsProfitOrLoss('loss');
		} else if (currentPrice > initialPrice) {
			setResult(
				`The profit is ${netProfitOrLoss}, and the profit percentage is ${percentage}%`
			);
			setIsProfitOrLoss('profit');
		} else {
			setResult('Neither Loss nor Profit.');
			setIsProfitOrLoss('none');
		}
	};

	return (
		<main>
			<h1>Stocks Profit OR Loss Calculator</h1>
			<label htmlFor='initialPrice'>Intial price of stocks</label>
			<input
				onChange={(event) => setInitialPrice(event.target.value)}
				type='number'
				id='initialPrice'
			/>
			<label htmlFor='quantity'>Quantity of stocks</label>
			<input
				onChange={(event) => setQuantity(event.target.value)}
				type='number'
				id='quantity'
			/>
			<label htmlFor='currentPrice'>Current price of stocks</label>
			<input
				onChange={(event) => setCurrentPrice(event.target.value)}
				type='number'
				id='currentPrice'
			/>
			<button onClick={calculateProfitOrLoss}>
				Calculate Profit or Loss
			</button>
			<div className={isProfitOrLoss}>{result}</div>
		</main>
	);
}

export default App;
