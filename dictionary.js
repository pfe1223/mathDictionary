'use strict';

//data to be displayed
const data = [
  {
    "frenchword": "Symmetrique",
    "frenchdescription": "la meme chose",
    "englishword": "Symmetrical",
    "englishdescription": "same on both sides",
    "image": "image01"
  },
  {
    "frenchword": "l'axe",
    "frenchdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "englishword": "axis",
    "englishdescription": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "image": "image02"
  },
  {
    "frenchword": "égalité",
    "frenchdescription": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    "englishword": "equality",
    "englishdescription": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "image": "image03"
  },
  {
    "frenchword": "multiplication",
    "frenchdescription": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    "englishword": "multiplication",
    "englishdescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    "image": "image04"
  },
  {
    "frenchword": "soustraction",
    "frenchdescription": "Et harum quidem rerum facilis est et expedita distinctio.",
    "englishword": "substraction",
    "englishdescription": "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    "image": "image05"
  },
  {
    "frenchword": "superficie",
    "frenchdescription": "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
    "englishword": "area",
    "englishdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "image": "image06"
  },
  {
    "frenchword": "volume",
    "frenchdescription": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    "englishword": "volume",
    "englishdescription": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    "image": "image07"
  },
  {
    "frenchword": "racine carrée",
    "frenchdescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    "englishword": "square root",
    "englishdescription": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "image": "image08"
  },
  {
    "frenchword": "longeur",
    "frenchdescription": "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    "englishword": "length",
    "englishdescription": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "image": "image09"
  },
  {
    "frenchword": "largeur",
    "frenchdescription": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    "englishword": "width",
    "englishdescription": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "image": "image10"
  },
  {
    "frenchword": "hauteur",
    "frenchdescription": "Et harum quidem rerum facilis est et expedita distinctio.",
    "englishword": "height",
    "englishdescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    "image": "image11"
  },
  {
    "frenchword": "multiples",
    "frenchdescription": "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    "englishword": "multiples",
    "englishdescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    "image": "image12"
  },
  {
    "frenchword": "facteur",
    "frenchdescription": "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    "englishword": "factor",
    "englishdescription": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    "image": "image13"
  }
]

class MathDictionary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word: "Word",
      language: "french", //choice between "engligh" and "french"
      view: "list" //choice betwen "list" and "definition"
    };

    this.clickFrench = this.clickFrench.bind(this)
    this.clickEnglish = this.clickEnglish.bind(this)
    this.getWords = this.getWords.bind(this)
    //this.showDefinition = this.showDefinition.bind(this)
    this.listView = this.listView.bind(this)
    this.wordView = this.wordView.bind(this)
    this.clickWord = this.clickWord.bind(this)
    this.goHome = this.goHome.bind(this)
  }

  //sets the stat variable "language" to "french"
  clickFrench() {
    this.setState(state => ({
      language: "french"
    }))
  }

  //sets the stat variable "language" to "english"
  clickEnglish() {
    this.setState(state => ({
      language: "english"
    }))
  }

  //returns a list of words based on the language selected
  getWords() {
    let words
    if(this.state.language === "french"){
      words = data.map(word => word.frenchword.toLowerCase()  )
    } else if(this.state.language === "english") {
      words = data.map(word => word.englishword.toLowerCase())
    }
    return words.sort()
  }

  //displays the language buttons and list of words
  listView() {
    return (
      <div>
        <div className="buttonArea">
          <button className="languageButton" onClick={this.clickFrench}>français</button>
          <button className="languageButton" onClick={this.clickEnglish}>English</button>
        </div>

        <div>
          {this.getWords().map((word, index) => <input type="button" className="wordButton" key={index} value={word} onClick={this.clickWord}></input>)}
        </div>
      </div>
    )
  }

  //changes state variable "view" to "definition"
  clickWord(event) {
    const newWord = event.target.value
    this.setState(state => ({
      word: newWord,
      view: "definition"
    }))
  }

  //displays the word, its definitions, and a visual aid
  wordView() {
    return (
      <div>
        <div id="navArea">
          <button className="navButton"> <img className="backButton" src="assets/backButtonBlue.png"></img> </button>
          <button className="navButton" onClick={this.goHome}> <img className="backButton" src="assets/homeButtonBlue.png"></img> </button>
          <button className="navButton"> <img className="backButton" src="assets/forwardButtonBlue.png"></img> </button>
        </div>

        <div id="wordTitle">
          {this.state.word}
        </div>

        <div id="wordImage">

        </div>

        <div id="wordDefinition">

        </div>
      </div>
    )
  }

  //sets the state variable "view" back to "list"
  goHome() {
    this.setState(state => ({
      view: "list"
    }))
  }

  render() {
    if (this.state.view === "list") {
        return this.listView() //show the list of words
    } else if (this.state.view === "definition") {
        return this.wordView() //show the definition of the word
    }
  }
}

ReactDOM.render(
  <MathDictionary />,
  document.getElementById('dictionaryArea')
);
