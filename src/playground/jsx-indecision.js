// babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
// This allows the file become compiled into ES5

// Create app object with title/subtitle
// use title/subtitle in the template
// render template

// only render the subtitle (and the p tag) only if subtitle exists
// render new p tag - if options.length > 0 -> here are your options else -> no options

const app = {
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: []
}

const onFormSubmit = (event) => {
    event.preventDefault();

    const option = event.target.elements["option"].value;

    if (option) {
        app.options.push(option);
        event.target.elements["option"].value = "";
    }

    renderTemplate();
}

const removeAll = () => {
    if (app.options.length > 0) {
        app.options.length = 0;
    }

    renderTemplate();
}

const onMakeDecision = () => {
    const randNum = Math.floor((Math.random() * app.options.length));
    const option = app.options[randNum];
    alert(option);
}

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {
                    app.options.map((value, index) => {
                        return <li key={index}>{value}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>);
    
    ReactDOM.render(template, document.getElementById("app"));
}

renderTemplate();