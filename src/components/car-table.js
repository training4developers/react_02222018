import * as React from 'react';
import * as PropTypes from 'prop-types';

import { CarRow } from './car-row';

export const CarTable = props => <table>
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
    {props.cars.map(car => <CarRow key={car.id} car={car} onDeleteCar={props.onDeleteCar} />)}
  </tbody>
</table>;

CarTable.propTypes = {
  cars: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    make: PropTypes.string.isRequired,
    model: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,  
  onDeleteCar: PropTypes.func.isRequired,
};

CarTable.defaultProps = {
  cars: [],
};