import React from 'react';

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

// literally what it says it is: a default prop
Header.defaultProps = {
    title: 'some default'
};

export default Header;