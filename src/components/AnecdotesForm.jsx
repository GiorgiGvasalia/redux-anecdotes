import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';

const AnecdotesForm = () => {

    const dispatch = useDispatch();


    const addAnecdote = async (event) => {
        event.preventDefault();
        const content = event.target.anecdote.value;
        dispatch(createAnecdote(content))
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
