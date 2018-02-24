import * as React from 'react';
import * as PropTypes from 'prop-types';

import { ToolHeader } from './tool-header';
import { CarTable } from './car-table';
import { CarForm } from './car-form';

export class CarTool extends React.Component {

  static propTypes = {
    cars: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      make: PropTypes.string.isRequired,
      model: PropTypes.string.isRequired,
      year: PropTypes.number.isRequired,
      color: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })).isRequired,    
  };

  static defaultProps = {
    cars: [],
  };

  constructor(props) {
    super(props);

    this.state = {
      cars: props.cars.concat(),
    };
  }

  insertCar = car => {

    this.setState({
      cars: this.state.cars.concat({
        ...car,
        id: Math.max(...this.state.cars.map(c => c.id)) + 1,
      }),
    });

  };

  deleteCar = carId => {

    this.setState({
      cars: this.state.cars.filter(c => c.id !== carId),
    });

  }


  render() {
    return <div>
      <ToolHeader headerText="Car Tool" />
      <CarTable cars={this.state.cars} onDeleteCar={this.deleteCar} />
      <CarForm onSubmitCar={this.insertCar} />
    </div>;
  }


}