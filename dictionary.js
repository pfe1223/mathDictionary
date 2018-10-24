'use strict';

//data to be displayed
const data = [
  {
    "frenchword": "Symmetrique",
    "frenchdescription": "la meme chose",
    "englishword": "Symmetrical",
    "englishdescription": "same on both sides",
    "image": "image1"
  },
  {
    "frenchword": "l'axe",
    "frenchdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "englishword": "axis",
    "englishdescription": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "image": "image2"
  },
  {
    "frenchword": "égalité",
    "frenchdescription": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    "englishword": "equality",
    "englishdescription": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "image": "image3"
  },
  {
    "frenchword": "multiplication",
    "frenchdescription": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    "englishword": "multiplication",
    "englishdescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    "image": "image4"
  },
  {
    "frenchword": "soustraction",
    "frenchdescription": "Et harum quidem rerum facilis est et expedita distinctio.",
    "englishword": "substraction",
    "englishdescription": "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    "image": "image5"
  },
  {
    "frenchword": "superficie",
    "frenchdescription": "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
    "englishword": "area",
    "englishdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "image": "image6"
  },
  {
    "frenchword": "volume",
    "frenchdescription": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    "englishword": "volume",
    "englishdescription": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    "image": "image7"
  },
  {
    "frenchword": "racine carrée",
    "frenchdescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    "englishword": "square root",
    "englishdescription": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "image": "image8"
  },
  {
    "frenchword": "longeur",
    "frenchdescription": "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    "englishword": "length",
    "englishdescription": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "image": "image9"
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

// console.log(data.map(obj => {
//   if(obj.frenchword !== null) {
//     return obj.frenchword
//   }
// }))

class MathDictionary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: "french", //choice between "engligh" and "french"
      view: "list" //choice betwen "list" and "definition"
    };

    this.clickFrench = this.clickFrench.bind(this)
    this.clickEnglish = this.clickEnglish.bind(this)
    this.getWords = this.getWords.bind(this)
    this.showDefinition = this.showDefinition.bind(this)
    this.listView = this.listView.bind(this)
    this.wordView = this.wordView.bind(this)
    this.clickWord = this.clickWord.bind(this)
    this.goHome = this.goHome.bind(this)
  }

  clickFrench() {
    this.setState(state => ({
      language: "french"
    }))
  }

  clickEnglish() {
    this.setState(state => ({
      language: "english"
    }))
  }

  getWords() {
    let words
    if(this.state.language === "french"){
      words = data.map(word => word.frenchword.toLowerCase()  )
    } else if(this.state.language === "english") {
      words = data.map(word => word.englishword.toLowerCase())
    }
    return words.sort()
  }

  showDefinition(props) {
    this.setState(state => ({
      view: "definition"
    }))
    const word = props.word
  }

  listView() {
    return (
      <div>
        <div className="buttonArea">
          <button className="languageButton" onClick={this.clickFrench}>français</button>
          <button className="languageButton" onClick={this.clickEnglish}>English</button>
        </div>

        <div>
          {this.getWords().map((word, index) => <button className="wordButton" key={index} onClick={this.clickWord}>{word}</button>)}
        </div>
      </div>
    )
  }

  clickWord() {
    this.setState(state => ({
      view: "definition"
    }))
  }

  wordView() {
    return (
      <div>
        <div className="navArea">
          <button>Back</button>
          <button onClick={this.goHome}>Home</button>
          <button>Next</button>
        </div>

        <div className="wordTitle">
          Word
        </div>

        <div className="wordImage">

        </div>

        <div className="wordDefinition">

        </div>
      </div>
    )
  }

  goHome() {
    this.setState(state => ({
      view: "list"
    }))
  }

  render() {
    //console.log(this.getWords())
    if (this.state.view === "list") {
        return this.listView()
    } else if (this.state.view === "definition") {
        return this.wordView()
    }
  }
}

ReactDOM.render(
  <MathDictionary />,
  document.getElementById('dictionaryArea')
);
