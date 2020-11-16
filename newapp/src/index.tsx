import * as React from 'react';
import { PiletApi } from 'appshell';
import { Scrabble } from './scrabble';
import './index.scss';
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
            <h2>Lets Play</h2>
             <Scrabble />
          </div>
      ));
}
