import { useSelector, useDispatch } from 'react-redux'
import { Button } from '@mui/material'
import { counterActions, counterSelectors } from '../store/counter.slice'

const Counter = () => {
	const counterValue = useSelector(counterSelectors.getCounterValue)
	const dispatch = useDispatch()

	return (
		<div>
			<div>
				<Button
					aria-label="Increment value"
					onClick={() => dispatch(counterActions.increment())}
				>
					Increment
				</Button>
				<span>{counterValue}</span>
				<Button
					aria-label="Decrement value"
					onClick={() => dispatch(counterActions.decrement())}
				>
					Decrement
				</Button>
				<Button
					variant="contained"
					onClick={() =>
						dispatch(
							counterActions.fetchRandomNumber({
								min: 1,
								max: 100
							})
						)
					}
				>
					Random number
				</Button>
			</div>
		</div>
	)
}

export default Counter
