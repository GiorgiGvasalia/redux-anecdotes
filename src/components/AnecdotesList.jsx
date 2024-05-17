import React from 'react';
import { useSelector, useDispatch } from 'react-redux';


const AnecdotesList = () => {
   
    const dispatch = useDispatch();

    const vote = (id) => {
        dispatch({ type: 'PLUS_VOTE', payload: { id } });
    };

    const anecdotes = useSelector(state => {
        if(state.filter === 'ALL'){
            return state.anecdotes;
        }
        return state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter)); 
    });

    return (
        <>
            <h2>Anecdotes</h2>
            {anecdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </>
    );
};

export default AnecdotesList;
