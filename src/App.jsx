import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import dic from './assets/dictionary.json';

import TextEditor from './components/TextEditor.jsx'

function getLatin(char) {
  let result = '';

  const match = dic.find(obj => {
    if (obj.kir.big === char) {
      result = obj.lat.big;

      return true;
    } else if (obj.kir.small === char) {
      result = obj.lat.small;

      return true;
    }
  });

  if (match) return result;

  return char;
}


function App() {

  return (
    <>
      <div className="container">
        <div className="inner">
          <h1 className="h1">
            Екзистенціальна українська латинка
          </h1>

          <div className="block">
            <TextEditor />
            <div className="button">Конвертувати</div>
            <TextEditor />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
