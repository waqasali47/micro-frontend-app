import * as React from 'react';
import { _getSampleUserInfo } from 'shared-lib/helpers/api-helper';

export function Count() {
    const [count, setCount] = React.useState(0);
    const [url, setUrl] = React.useState('');

    function getNames(){
        _getSampleUserInfo().then(function(result) {
            let s = result.words[0];
            setUrl(s);
        });
     
   }
    return (
        <div>
            <button onClick={getNames} type="button" className="btn btn-primary">
                    Call Shared Lib <span className="badge badge-light"> {url}</span>
                </button>
        </div>
    );
}