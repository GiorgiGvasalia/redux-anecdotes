import React from 'react'
import { useDispatch } from 'react-redux'

const AnecdotesForm = () => {
    function getId(){
        return Math.floor(Math.random() * 10000)
    }

    const dispatch = useDispatch()
    

    function handleAdd(event) {
        event.preventDefault()
    
        dispatch({
            type: 'NEW_ANECDOTE',
            payload: {
                content: event.target.anecdote.value,
                id: getId(),
                votes: 0
            }
        })
        event.target.anecdote.value = '';

    }


    return (
        <>
            <h2>create new</h2>
            <form onSubmit={handleAdd}>
                <div><input name='anecdote'/></div>
                <button type='submit'>create</button>
            </form>
        </>
    )
}

export default AnecdotesForm