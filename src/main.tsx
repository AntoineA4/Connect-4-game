import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GameMachine, GameModel } from './machine/GameMachine.ts'
import {interpret} from 'xstate'

const machine = interpret(GameMachine).start()
machine.send(GameModel.events.join('1', '1'))
console.log(machine.send(GameModel.events.join('1', '1')).changed)
/*
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
