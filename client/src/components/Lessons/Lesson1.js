import React, { Component } from 'react';
import './Lessons.css';

class Lesson1 extends Component {
    render() {
        return (
            <div>
                <div className="ui container">
                <div className="ui equal width center aligned padded grid">
      <div className="column"></div>
      <div className="lesson-header"><h1>Lesson 1: Arrays</h1></div>
         <div className="lesson-container">    
         <img className="lesson-pics" src="../../assets/images/Num6.png" style={{ width: 600 }}/>
      <iframe className="editor-container" src="https://stackblitz.com/edit/js-5orkrc?embed=1&file=index.js" view="Editor" title="code editor"></iframe>
                </div>
                </div>
            </div>
            </div>

      
    
        );
    }
}


export default Lesson1;