import * as React from 'react';

export class UnorderedObjectList extends React.Component {

  render() {

    return <ul>
      {this.props.listItems.map(listItem => <li key={listItem[this.props.keyField]}>
        {listItem[this.props.labelField]}
      </li>)}
    </ul>;
  }

}