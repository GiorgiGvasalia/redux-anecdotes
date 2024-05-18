import { createSlice } from "@reduxjs/toolkit";

const anecdotesAtStart = [];

function getId() {
  return (100000 * Math.random()).toFixed(0);
}


const initialState = anecdotesAtStart.map(anecdote => ({
  content: anecdote,
  id: getId(),
  votes: 0
}));

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    createAnecdote: (state, action) => {
      const { content, id } = action.payload;
      state.push({ content, id, votes: 0 });
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