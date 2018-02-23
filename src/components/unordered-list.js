import * as React from 'react';

export class UnorderedList extends React.Component {

  render() {
    console.log('Unordered List Rendered');
    return <ul>
      {this.props.listItems.map(listItem => <li>{listItem}</li>)}
    </ul>;
  }

}