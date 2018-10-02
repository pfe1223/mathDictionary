'use strict';

class MathDictionary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      french: false,
      english: false
    };

    this.clickFrench = this.clickFrench.bind(this);
    this.clickEnglish = this.clickEnglish.bind(this);
  }

  clickFrench() {
    this.setState(state => ({
      french: true,
      english: false
    }))
  }

  clickEnglish() {
    this.setState(state => ({
      french: false,
      english: true
    }))
  }

  render() {
    return (
      <div>
        <button id="frenchButton" onClick={this.clickFrench}>français</button>
        <button id="englishButton" onClick={this.clickEnglish}>English</button>
        <div>
          <p>
            French: {this.state.french.toString()}
            <br />
            English: {this.state.english.toString()}
          </p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <MathDictionary />,
  document.getElementById('dictionaryArea')
);
