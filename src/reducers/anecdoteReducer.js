import { createSlice } from "@reduxjs/toolkit";
import anecdoteService from "../services/anecdoteService";

const anecdotesAtStart = [];


const initialState = anecdotesAtStart.map(anecdote => ({
  content: anecdote,
  votes: 0
}));

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    
    plusVote: (state, action) => {
      const anecdote = state.find(item => item.id === action.payload.id);
      if (anecdote) {
        anecdote.votes++;
      }
    },
    appendAnecdote: (state, action) => {
      state.push(action.payload)
    },
    setAnecdotes: (state, action) => {
      return action.payload
    }
  }
});



export const { plusVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions;

// redux thunk library

export const initialiseAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.addNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export default anecdoteSlice.reducer;