import * as React from 'react';
import * as PropTypes from 'prop-types';

import { ToolHeader } from './tool-header';
import { UnorderedList } from './unordered-list';
import { ColorForm } from './color-form';

export class ColorTool extends React.Component {

  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      hexCode: PropTypes.string.isRequired,
    })).isRequired,
  };

  static defaultProps = {
    colors: [],
  };

  constructor(props) {
    super(props);

    this.state = { colors: props.colors.concat() };
  }

  saveColor = (newColor) => {
    this.setState({ colors: this.state.colors.concat(newColor) });
  }

  render() {
    console.log('Color Tool Rendered');
    return <div>
      <ToolHeader />
      <UnorderedList listItems={this.state.colors.map(c => c.name)} />
      <ColorForm onSubmitColor={this.saveColor} />
    </div>;
  }
}