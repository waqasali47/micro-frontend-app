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
            <Count />
        </div>
      ));
}
