import AnecdotesList from './components/AnecdotesList'
import AnecdotesForm from './components/AnecdotesForm'
import Filter from './components/Filter'
import { useEffect } from 'react'
import { setAnecdotes } from './reducers/anecdoteReducer'
import { useDispatch } from 'react-redux'
import anecdoteService from './services/anecdoteService'



const App = () => {

  const dispatch = useDispatch()
  useEffect(() => {
    
    anecdoteService.getAll().then(anecdotes => dispatch(setAnecdotes(anecdotes)))

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