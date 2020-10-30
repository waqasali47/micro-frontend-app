import * as React from 'react';
import './home.scss';
export function Home() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = React.useState(0);

    return (
        <div>
            <div>
                <h1>Hello, world!</h1>
                <p>Welcome to your new micro front end app, built with:</p>
                <ul>
                    <li><a href='https://piral.io/'>Piral</a></li>
                    <li><a href='https://facebook.github.io/react/'>React</a> for client-side code</li>
                    <li><a href='http://getbootstrap.com/'>Bootstrap</a> for layout and styling</li>
                </ul>
                <p>To help you get started, we have also set up:</p>
                <ul>
                    <li><strong>Micro frontend </strong>. Click counter which is rendered as a microfrontend.</li>
                    <li><strong>Micro frontend </strong>. Fetch </li>
                </ul>
            </div>
        </div>
    );
}