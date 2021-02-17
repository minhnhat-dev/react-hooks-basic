import React, { useState } from 'react';

function FormInput(props) {
    const { onSubmit = null } = props;
    const [value, setValue] = useState('');

    function handleOnChange(e) {
        setValue(e.target.value);
    }

    function handleOnSubmit(e) {
        e.preventDefault();
        const todo = {
            title: value
        };
        onSubmit(todo);
        setValue('');
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" value={value} onChange={handleOnChange} />
            </form>
        </div>
    );
}

export default FormInput;
