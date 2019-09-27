import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';

const SearchBar = props => {
    const [searchQuery, setSearchQuery] = React.useState('')
    const handleChange = e => { 
        const newQuery = e.target.value;
        setSearchQuery(newQuery);
        props.onQueryChanged(newQuery);
    }
    return (
        <TextField 
            onChange={handleChange}
            label='Search Lyrics'
            value={searchQuery}
        />
    );
};

SearchBar.propTypes ={
    onQueryChanged: PropTypes.func
}

export default SearchBar;