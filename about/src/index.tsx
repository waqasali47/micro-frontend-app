import * as React from 'react';
import { PiletApi } from 'appshell';
import {Count} from './count';
export function setup(app: PiletApi) {
  app.registerMenu(
        "",
        () => null,
        { type: 'general',
          icon:'faCoffee'
        }
      );
      app.registerPage('/about', () => (
        <div style={{margin:10}}>
          <h2>Hello from about page</h2>
            <p>The following button makes an API call to shared lib to get data.</p>
            <Count />
        </div>
      ));
}
