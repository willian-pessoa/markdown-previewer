import './App.css';
import Form from 'react-bootstrap/Form'
import FormGroup from 'react-bootstrap/esm/FormGroup';
import { useState } from "react";

const showdown  = require('showdown');
const converter = new showdown.Converter();

function App() {
  const [markdown, setMarkdown] = useState(placeholder);

  const updateMarkdown = (markdown) => {
    setMarkdown(markdown);
  }
  
  return (

    <div className="App container">
      <div className="editor">
        <FormGroup controlId="formControlsTextarea">
          <Form.Label><h2>Markdown Input</h2></Form.Label>
          <Form.Control id="editor" as="textarea" placeholder="Enter Markdown" value={markdown} onChange={(event)=>updateMarkdown(event.target.value)}></Form.Control>
        </FormGroup>
      </div>
      <div className="preview">
        <h2>Markdown Output</h2>
        <div id="preview" dangerouslySetInnerHTML={{__html: converter.makeHtml(markdown)}}></div>
      </div>
    </div>
  );
}

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!

`;

export default App;
