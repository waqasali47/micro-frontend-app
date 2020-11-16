import * as React from 'react';
import { _getSampleUserInfo } from 'shared-lib/helpers/api-helper';
import { _sum } from 'shared-lib/helpers/calculator';
import './home.scss';
export function Home() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = React.useState(0);
    
function test(){
   
    let sum = _sum(1,2);
    setCount(count + sum);
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
            </div>
        </div>
    );
}