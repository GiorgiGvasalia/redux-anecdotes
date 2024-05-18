import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import anecdoteService from '../services/anecdoteService';

const AnecdotesForm = () => {

    const dispatch = useDispatch();


    const addAnecdote = async (event) => {
        event.preventDefault();
    
        const content = event.target.anecdote.value;
        const newAnecdote = await anecdoteService.addNew(content);
        dispatch(createAnecdote({
            id: newAnecdote.id,
            content: newAnecdote.content,
            votes: newAnecdote.votes
        }));
        event.target.anecdote.value = '';
    }
    




    return (
        <>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div>
                    <input
                        name='anecdote'
                    />
                </div>
                <button type='submit'>create</button>
            </form>
        </>
    );
}

export default AnecdotesForm;
