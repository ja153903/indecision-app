import React from 'react';
import Option from './option';

const Options = (props) => {
    return (
        <div>
            Here are your options
            <ol>
                {
                    props.options.map((option, index) => <Option key={index} optionText={option} handleDeleteOption={props.handleDeleteOption}/>)       
                }
            </ol>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
        </div>
    )
}

export default Options;