import { Fragment, useState } from 'react'
import './App.css'
import Header from './components/header'

import jsonData from './data/characters.json'
import type { Character } from './types'
const data: Character[] = jsonData as Character[]

const App = () => {
  console.log(data)
  return (
    <Fragment>
      <Header />
    </Fragment>
  )
}

export default App
