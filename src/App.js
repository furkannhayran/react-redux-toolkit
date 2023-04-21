import './App.css';
import { useDispatch, useSelector } from "react-redux"
import { decrement, decrementCustom } from './redux/features/counter/CounterSlice';
import { useEffect } from 'react';
import { getCountry } from './redux/features/country/CountrySlice';
function App() {
  const dispatch = useDispatch()
  const { counter } = useSelector(state => state.counter)
  const { country ,loading} = useSelector(state => state.country)
  console.log(country)
  useEffect(() => {
      dispatch(getCountry())
  }, [])
  return (
    <div className="App">
      <span onClick={() => dispatch(decrement())}>-</span>
      <span>{counter}</span>
      <span onClick={() => dispatch(decrementCustom(5))}>+</span>
    </div>
  );
}

export default App;
