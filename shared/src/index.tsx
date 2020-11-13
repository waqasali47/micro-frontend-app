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
    app.registerPage("/shared", () => {
    
      app
        .helperService.someHelper('api-helper')
        .then(() => console.log("called helper service in appshell "));
      return (
        <div style={{ margin: 10 }}>
          <h2>Hello from Shared Page </h2>
          <button onClick={() => app.Do()}>Click me!</button>
        </div>
      );
    });
}
