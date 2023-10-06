import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TextEditor from './components/TextEditor.jsx'
import Alphabet from './components/Alphabet.jsx';

import { getLatin, dictionaries } from 'latinize-ua';

console.log(dictionaries)

function App() {
  const [content, setContent] = useState('');
  const [latinContent, setLatinContent] = useState('');
  const [mode, setMode] = useState(1);

  const changeContent = (e) => setContent(e.target.value);
  const convertContent = () => {
    let newContent = '';

    for (let i = 0; i < content.length; ++i) {
      const char = content[i];

      newContent += getLatin(char, mode);
    }

    setLatinContent(newContent);
  }

  return (
    <>
      <div className="container">
        <div className="inner">
          <h1 className="h1">
            Екзистенційна українська латинка
          </h1>

          <div className="block">

          <Alphabet dictionary={dictionaries[`dic${ mode }`]} />

            <div className="buttons">
              <div 
              className={ (mode == 1) ? "button is-dark": "button" }
              onClick={ () => { setMode(1) } }>Екз</div>
              <div
              className={ (mode == 2) ? "button is-dark": "button" }
              onClick={ () => { setMode(2) } }>Пру</div>
              <div
              className={ (mode == 3) ? "button is-dark": "button" }
              onClick={ () => { setMode(3) } }>Скр</div>
            </div>
            <TextEditor
            content={content}
            changeContent={changeContent} />
            <div
            className="button"
            onClick={convertContent}>Конвертувати</div>
            <TextEditor
            content={latinContent}
            changeContent={() => {}}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
