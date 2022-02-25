import { useEffect, useState } from 'react';
import './App.css';
import Loading from './components/Loading';
import Tours from './components/Tours'
import getTours from './api/tours';

function App() {

  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const getToursData = async () => {
    const tours = await getTours()
    setLoading(false)
    setTours(tours)
  }

  useEffect(() => {
    getToursData()
  }, [])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id)
    setTours(newTours)
  }

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>no tours left</h2>
          <button className='btn' onClick={() => {
            getToursData()
          }}>refresh</button>
        </div>
      </main>
    )
  }
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;
