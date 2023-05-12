
import { useLoaderData } from 'react-router-dom'
import './App.css'
import Coffeecard from './conponents/Coffeecard';

function App() {
  const coffees = useLoaderData();
   

  return (
    <> 
      <h1 className='text-3xl text-purple-400 font-bold text-center mt-6'>HOt HOT cool coffee: {coffees.length}</h1> 
      <div className=''>
      {
        coffees.map(coffee => <Coffeecard
        key={coffee._id}
        coffeInfo = {coffee}
        ></Coffeecard>)
      }
      </div>
    </>
  )
}

export default App
