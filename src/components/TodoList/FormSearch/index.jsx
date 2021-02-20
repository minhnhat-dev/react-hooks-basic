import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function FormSearch(props) {
    const { onSubmit = null } = props;
    const timeoutClause = useRef(null);

    function handleOnChangeSearch(e) {
        const text = e.target.value || '';

        if (timeoutClause.current) {
            clearTimeout(timeoutClause.current);
        }

        const timeoutSubmit = setTimeout(() => {
            if (onSubmit) {
                onSubmit(text);
            }
        }, 1000);
        timeoutClause.current = timeoutSubmit;
    }

    return (
        <>
            <input type="text" placeholder="Tim kiem" onChange={handleOnChangeSearch} />
        </>
    );
}

FormSearch.propTypes = {

};

export default FormSearch;
