import { createSlice } from "@reduxjs/toolkit";

const anecdotesAtStart = [];


const initialState = anecdotesAtStart.map(anecdote => ({
  content: anecdote,
  votes: 0
}));

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    createAnecdote: (state, action) => {
      state.push(action.payload);
    },
    
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



export const { createAnecdote, plusVote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions;
export default anecdoteSlice.reducer;