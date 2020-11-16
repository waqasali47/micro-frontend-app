import * as React from 'react';
import { PiletApi } from 'appshell';

export function setup(app: PiletApi) {
  app.registerMenu(
        "",
        () => null,
        { type: 'general',
          icon:'faCoffee'
        }
      );
      app.registerPage('/newapp', () => (
        <div style={{margin:10}}>
          <h2>Hello from new app</h2>
            
        </div>
      ));
}
