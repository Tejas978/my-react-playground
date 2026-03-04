import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { decrement, increment } from './features/counter/counterSlice';


function App() {
  // const [count, setCount] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  function handleclickIN(){
    dispatch(increment())
    
  }
  function handleclickDEC(){
    dispatch(decrement())

  }

  return (
    <div className='container'>
      <button onClick={handleclickIN}>+</button>
      <button onClick={handleclickDEC}>-</button>
    </div>
  );
}

export default App;

