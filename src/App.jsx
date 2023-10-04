import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import TextEditor from './components/TextEditor.jsx'

import { getLatin } from './modules/transcribe.js';


function App() {
  const [content, setContent] = useState('');
  const [latinContent, setLatinContent] = useState('');

  const changeContent = (e) => setContent(e.target.value);
  const convertContent = () => {
    let newContent = '';

    for (let i = 0; i < content.length; ++i) {
      const char = content[i];

      newContent += getLatin(char);
    }

    setLatinContent(newContent);
  }
  return (
    <>
      <div className="container">
        <div className="inner">
          <h1 className="h1">
            Екзистенціальна українська латинка
          </h1>

          <div className="block">
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
