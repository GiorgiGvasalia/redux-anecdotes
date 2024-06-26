import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../reducers/filterReducer';

const Filter = () => {
    const dispatch = useDispatch();

    const handleFilterChange = (event) => {
        dispatch(setFilter(event.target.value));
    };

    const style = {
        marginBottom: 10
    };

    return (
        <div style={style}>
            filter <input type="text" name="filter" onChange={handleFilterChange} />
        </div>
    );
};

export default Filter;
