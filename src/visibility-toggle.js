
let visibility = false;

const toggleVisibility = () => {
    if (visibility) {
        visibility = false;
    } else {
        visibility = true;
    }

    render();
}

const render = () => {
    const template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={toggleVisibility}>{visibility ? 'Hide Details': 'Show Details'}</button>
            {visibility && <p>details</p>}
        </div>
    );
    ReactDOM.render(template, document.getElementById("app"));
}

render();