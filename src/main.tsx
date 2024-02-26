import React from 'react'
import ReactDOM from 'react-dom/client'
import { Sparkle } from 'phosphor-react'

import './global.css'

import { Tweet } from './components/Tweet'
import { Sidebar } from './components/Sidebar'
import { Header } from './components/Header'
import { Separator } from './components/Separator'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <div className='layout'>

      <Sidebar />

      <div className='content'>
        <main className="timeline">
          <Header title='Home' />
          <form className="new-tweet-form">
            <label htmlFor='tweet'>
              <img src="https://github.com/osGoiabas.png" alt="Vítor Canônico" />
              <textarea id="tweet" placeholder="What's happenning?" />
            </label>

            <button type='submit'>Tweet</button>
          </form>
          <Separator />
          <Tweet />
          <Tweet />
        </main>
      </div>
    </div>
  </React.StrictMode>,
)
