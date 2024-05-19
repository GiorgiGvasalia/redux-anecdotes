import AnecdotesList from './components/AnecdotesList'
import AnecdotesForm from './components/AnecdotesForm'
import Filter from './components/Filter'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initialiseAnecdotes } from './reducers/anecdoteReducer'




const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initialiseAnecdotes())

  }, [])

  return (
    <div>
      <Filter />
      <AnecdotesList />
      <AnecdotesForm />
    </div>
  )
}

export default App