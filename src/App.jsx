import AnecdotesList from './components/AnecdotesList'
import AnecdotesForm from './components/AnecdotesForm'
import Filter from './components/Filter'


const App = () => {
  
  return (
    <div>
      <Filter />
      <AnecdotesList />
      <AnecdotesForm />
    </div>
  )
}

export default App