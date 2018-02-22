import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ColorTool } from './components/color-tool';

// array of objects
const colorList = [ 
  { id: 1, name: 'blue', hexCode: '#0000FF' },
  { id: 2, name: 'red', hexCode: '#FF0000' },
  { id: 3, name: 'green', hexCode: '#00FF00' },
];

ReactDOM.render(
  <div>
    <ColorTool colors={colorList} />
  </div>,
  document.querySelector('#root'),
);