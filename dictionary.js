'use strict';

//data to be displayed
const data = {
  "1": {
    "number": 1,
    "emailaddress": "bob@fais.org",
    "approved": "Yes",
    "category": "",
    "frenchword": "Symmetrique",
    "frenchdescription": "la meme chose",
    "englishword": "Symmetrical",
    "englishdescription": "same on both sides",
    "image": "image1"
  },
  "2": {
    "number": 2,
    "emailaddress": "alice@fais.org",
    "approved": "Yes",
    "category": "",
    "frenchword": "l'axe",
    "frenchdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "englishword": "axis",
    "englishdescription": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "image": "image2"
  },
  "3": {
    "number": 3,
    "emailaddress": "randolph@fais.org",
    "approved": "Yes",
    "category": "",
    "frenchword": "égalité",
    "frenchdescription": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    "englishword": "equality",
    "englishdescription": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "image": "image3"
  },
  "4": {
    "number": 4,
    "emailaddress": "larry@fais.org",
    "approved": "Yes",
    "category": "",
    "frenchword": "multiplication",
    "frenchdescription": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    "englishword": "multiplication",
    "englishdescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    "image": "image4"
  },
  "5": {
    "number": 5,
    "emailaddress": "anna@fais.org",
    "approved": "Yes",
    "category": "",
    "frenchword": "soustraction",
    "frenchdescription": "Et harum quidem rerum facilis est et expedita distinctio.",
    "englishword": "substraction",
    "englishdescription": "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    "image": "image5"
  },
  "6": {
    "number": 6,
    "emailaddress": "billy@fais.org",
    "approved": "Yes",
    "category": "",
    "frenchword": "superficie",
    "frenchdescription": "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
    "englishword": "area",
    "englishdescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "image": "image6"
  },
  "7": {
    "number": 7,
    "emailaddress": "sally@fais.org",
    "approved": "Yes",
    "category": "",
    "frenchword": "volume",
    "frenchdescription": "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    "englishword": "volume",
    "englishdescription": "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    "image": "image7"
  },
  "8": {
    "number": 8,
    "emailaddress": "sally@fais.org",
    "approved": "Yes",
    "category": "",
    "frenchword": "racine carrée",
    "frenchdescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    "englishword": "square root",
    "englishdescription": "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    "image": "image8"
  },
  "9": {
    "number": 9,
    "emailaddress": "lizzie@fais.org",
    "approved": "Yes",
    "category": "",
    "frenchword": "longeur",
    "frenchdescription": "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    "englishword": "length",
    "englishdescription": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    "image": "image9"
  },
  "10": {
    "number": 10,
    "emailaddress": "bob@fais.org",
    "approved": "Yes",
    "category": "",
    "frenchword": "largeur",
    "frenchdescription": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    "englishword": "width",
    "englishdescription": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "image": "image10"
  },
  "11": {
    "number": 11,
    "emailaddress": "sean@fais.org",
    "approved": "Yes",
    "category": "",
    "frenchword": "hauteur",
    "frenchdescription": "Et harum quidem rerum facilis est et expedita distinctio.",
    "englishword": "height",
    "englishdescription": "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    "image": "image11"
  },
  "12": {
    "number": 12,
    "emailaddress": "charlotte@fais.org",
    "approved": "Yes",
    "category": "",
    "frenchword": "multiples",
    "frenchdescription": "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.",
    "englishword": "multiples",
    "englishdescription": "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    "image": "image12"
  },
  "13": {
    "number": 13,
    "emailaddress": "henry@fais.org",
    "approved": "Yes",
    "category": "",
    "frenchword": "facteur",
    "frenchdescription": "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
    "englishword": "factor",
    "englishdescription": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
    "image": "image13"
  }
}

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
        <button className="languageButton" onClick={this.clickFrench}>français</button>
        <button className="languageButton" onClick={this.clickEnglish}>English</button>
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
