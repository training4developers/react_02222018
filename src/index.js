import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { ColorTool } from './components/color-tool';
import { CarTool } from './components/car-tool';

const colorList = [ 
  { id: 1, name: 'blue', hexCode: '#0000FF' },
  { id: 2, name: 'red', hexCode: '#FF0000' },
  { id: 3, name: 'green', hexCode: '#00FF00' },
];

const carList = [
  { id: 1, make: 'Chevrolet', model: 'Volt', year: 2016, color: 'blue', price: 45000 },
  { id: 2, make: 'Chevrolet', model: 'Bolt', year: 2017, color: 'red', price: 34000 },
  { id: 3, make: 'Ford', model: 'Fusion', year: 2018, color: 'orange', price: 55000 },
];

ReactDOM.render(
  <div>
    <ColorTool colors={colorList} />
    <CarTool cars={carList} />
  </div>,
  document.querySelector('#root'),
);

// setTimeout(() => {
  
//   console.log('timeout expired');

//   colorList.splice(1, 1);

//   ReactDOM.render(
//     <div>
//       <ColorTool colors={colorList} />
//       <CarTool cars={carList} />
//     </div>,
//     document.querySelector('#root'),
//   );

// }, 4000)