import * as React from 'react';

export class UnorderedList extends React.Component {

  render() {

    return <ul>
      {this.props.listItems.map(listItem => <li>{listItem}</li>)}
    </ul>;
  }

}