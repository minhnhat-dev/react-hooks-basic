import React from 'react';
import PropTypes from 'prop-types';

function Pagination(props) {
    const { totalPage = 1, changePages = null } = props;

    function handleClickPage(page) {
        changePages(page);
    }

    return (
        <>
            {[...Array(totalPage).keys()].map((page, index) => <button key={index.toString()} onClick={() => handleClickPage(page + 1)} type="button">{`Page ${page + 1}`}</button>)}
        </>
    );
}

Pagination.propTypes = {

};

export default Pagination;
