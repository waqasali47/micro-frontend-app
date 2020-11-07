import * as React from 'react';
import { _getSampleUserInfo } from '../../src/helpers/api-helper';
import { _sum } from '../../src/helpers/calculator';
import './home.scss';
export function Home() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = React.useState(0);
    const [url, setUrl] = React.useState('');
function test(){
     _getSampleUserInfo().then(function(result) {
         let s = JSON.stringify(result);
         setUrl(s);
        console.log(s) // "Some User token"
     });
    let sum = _sum(1,2);
    setCount(count + sum);
    console.log(count);
}
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
                <button className="btn btn-primary" onClick={test}>Call helper</button>
                <p>{url}</p>
                {count}
            
            </div>
        </div>
    );
}