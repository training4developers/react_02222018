import * as React from 'react';

// import { ListItem } from './list-item';

export class UnorderedList extends React.Component {

  render() {
    // console.log('Unordered List Rendered');
    // return <ul>
    //   {this.props.listItems.map( (listItem, index) =>
    //     <ListItem key={listItem.id} listItem={listItem}></ListItem>)}
    // </ul>;
    return this.props.listItems.map(listItem => <li key={listItem}>{listItem}</li>);
  }

}