
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import {Label, InputFilter} from './Filter.styled'

const Filter = () => {
    const value = useSelector(selectFilter);
    const dispatch = useDispatch();

    return (<Label>Find contacts<InputFilter type="text"
        value={value}
        onChange={e => dispatch(setFilter(e.currentTarget.value))} />
    </Label>);
};

export default Filter;