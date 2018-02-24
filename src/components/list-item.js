import * as React from 'react';

let listItemCounter = 0;

export class ListItem extends React.Component {

  constructor(props) {

    super(props);

    this.counter = listItemCounter++;

    console.log('constructor for list item ' + this.counter);

    this.state = {
      listItem: props.listItem,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ listItem: nextProps.listItem });
  }

  componentDidMount() {
    console.log('component did mount, ready to go, list item ' + this.counter);
  }

  componentWillUnmount() {
    console.log('component will unmount, list item ' + this.counter);
  }

  componentWillUpdate() {
    console.log('component will update, list item ' + this.counter);
  }

  componentDidUpdate() {
    console.log('component did update, list item ' + this.counter);
  }

  render() {

    console.log('render for list item ' + this.counter);
    
    return <li>
      props: {this.props.listItem},
      state: {this.state.listItem}
    </li>;
  }


}