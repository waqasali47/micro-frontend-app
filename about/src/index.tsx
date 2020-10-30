import * as React from 'react';
import { PiletApi } from 'appshell';

export function setup(app: PiletApi) {
  app.registerMenu(
        "",
        () => null,
        { type: 'general',
        }
      );
      app.registerPage('/about', () => (
        <div style={{margin:10}}>
          <h2>Hello from my about</h2>
        </div>
      ));
}
