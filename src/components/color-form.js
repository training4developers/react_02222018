import * as React from 'react';

export class ColorForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colorName: '',
      colorHexCode: '',
    };
  }

  onChange = (e) => {
    this.setState({
      [ e.target.name ]: e.target.value,
    });
  }

  submitColor = () => {

    this.props.onSubmitColor({
      name: this.state.colorName,
      hexCode: this.state.colorHexCode,
    });

    this.setState({
      colorName: '',
      colorHexCode: '',
    });

  }

  componentDidMount() {
    this.colorNameInput.focus();
  }

  render() {
    console.log('Color Form Rendered');
    return <form>
      <div>
        <label htmlFor="color-name-input">Color Name:</label>
        <input type="text" id="color-name-input" name="colorName"
          ref={ input => this.colorNameInput = input }
          value={this.state.colorName} onChange={this.onChange}  />
      </div>
      <div>
        <label htmlFor="color-hexcode-input">Color HexCode:</label>
        <input type="color" id="color-hexcode-input" name="colorHexCode"
          value={this.state.colorHexCode} onChange={this.onChange}  />
      </div>

      <button type="button" onClick={this.submitColor}>Submit Color</button>

    </form>;
  }
}