import * as React from 'react';

export class ColorTool extends React.Component {

  render() {

    // array of objects
    const colors = [ 
      { id: 1, name: 'blue', hexCode: '#0000FF' },
      { id: 2, name: 'red', hexCode: '#FF0000' },
      { id: 3, name: 'green', hexCode: '#00FF00' },
    ];

    return <div>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {colors.map(color => <li>{color.name}</li>)}
      </ul>
    </div>;
  }
}