import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom";
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";
// import marked from "https://cdnjs.cloudflare.com/ajax/libs/marked/14.1.2/marked.min.js";
// import React from "https://cdnjs.cloudflare.com/ajax/libs/react/17.0.0/cjs/react.production.min.js";
// import ReactDOM from "https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.0/cjs/react-dom.production.min.js";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomNum: Math.floor(Math.random() * 4),
      result: "# React Markdown Previewer!\n\n ## sub-heading...\n ### and sub-sub-heading:\n\n Code: `<div></div>` \n\n ```\n// multi-line code (Python): \n\n function f1(LineOne, LineTwo) {\n  if (LineOne == '```' && LineTwo == '```') {\n    return \"Hello World\";\n  }\n}\n```\n\n some **bold** text (only the font is bold) \n Some _italic_ (from Italy) \n And **_mix_** fo them \n And if you make a mistake  ~~cross it out~~.\n \n Some [links](https://www.freecodecamp.org), and \n> block quotes \n \n - Lists.\n - with levels \n     - and levels \n        - and levels \n\n\n1. numbered lists \n1. sometimes with the same number \n1. over and over again ... \nembedded images: \n\n![What freeCodeCamp looks like](https://www.freecodecamp.org/static/landing-page-b-fbde8347137e86f06699459f3afdbce1.svg)\n"
    }
    this.handleChange = this.handleChange.bind(this);
  }
    // <div id="preview">{marked.parse(this.state.startText)}</div>
  // <iframe id="preview" srcdoc={result} height="500" width="500" title="Iframe Example"></iframe>
  
  handleChange(e) {
    this.setState({ result: e.target.value });
  }
  
  render(){
    // let result = `<html><body>${marked.parse(this.state.startText)}</body></html>`;
    return (
    <div id={"quote-box"}>
      <textarea id="editor" rows="40" cols="50" onChange={this.handleChange}>{this.state.result}</textarea>
      <br></br>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked.parse(this.state.result) }}></div>
    </div>
    );
  }
}
ReactDOM.render(<App/>,document.getElementById('root'));









// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 
