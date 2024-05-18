import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';

const AnecdotesForm = () => {
    const [content, setContent] = useState(''); 
    const dispatch = useDispatch();
    
    function getId() {
        return Math.floor(Math.random() * 10000)
    }
    
    function handleAdd(event) {
        event.preventDefault();
    
        dispatch(createAnecdote({
            content: content, 
            id: getId(),
            votes: 0
        }));
        setContent(''); 
    }

    return (
        <>
            <h2>create new</h2>
            <form onSubmit={handleAdd}>
                <div>
                    <input 
                        name='anecdote' 
                        value={content} 
                        onChange={(e) => setContent(e.target.value)} 
                    />
                </div>
                <button type='submit'>create</button>
            </form>
        </>
    );
}

export default AnecdotesForm;
