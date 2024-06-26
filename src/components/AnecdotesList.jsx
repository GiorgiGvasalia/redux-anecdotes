// AnecdotesList.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { plusVote } from '../reducers/anecdoteReducer';

const AnecdotesList = () => {

   
    const dispatch = useDispatch();

    const vote = (id) => {
        dispatch(plusVote({ id }));
    };

    const anecdotes = useSelector((state => {
        if(state.filter === 'ALL'){
            return state.anecdotes;
        }
        return state.anecdotes.filter(anecdote => anecdote.content.includes(state.filter)); 
    }));

    if (anecdotes.length === 0) {
        return <p>No anecdotes.</p>;
    }
    


    return (
        <>
            <h2>Anecdotes</h2>
            {anecdotes.map((anecdote, index) =>
                <div key={index}>
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
