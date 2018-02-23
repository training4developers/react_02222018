import React from 'react';

import { CarRow } from './car-row';

export class CarTable extends React.Component {

  render() {

    return <table>
      <thead>
        <tr>
          <td>Make</td>
          <td>Model</td>
          <td>Year</td>
          <td>Color</td>
          <td>Price</td>
        </tr>
      </thead>
      <tbody>
        {this.props.cars.map(car => <CarRow car={car} />)}
      </tbody>
    </table>;


  }


}