"use client"
import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sumar } from '@/app/store/reducers';



const ReduxToolkitTest: FC = ()=>{

	const dispatch = useDispatch();
	const value = useSelector((state) => state.currenciesExchange.value);

	console.log('value', value)


	const handleSumar = () => {
		dispatch(sumar());
	};


	return(
		<div>
			<button onClick={handleSumar}>
				Sumar 5: {value}
			</button>
		</div>
	)
}


export default ReduxToolkitTest