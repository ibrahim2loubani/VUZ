import { Fragment, useState } from 'react'
import './App.css'
import Header from './components/header'
import Heroes from './components/heroes'
import Table from './components/table'
import Tags from './components/tags'
import Search from './components/utils/search'

import jsonData from './data/characters.json'
import type { Character } from './types'
const data: Character[] = jsonData as Character[]

const App = () => {
  // console.log(data)
  const heroes = data.slice(0, 6)
  return (
    <Fragment>
      <Header />
      <Heroes data={heroes} />
      <Search />
      <Tags data={data} />
      <Table data={data} />
    </Fragment>
  )
}

export default App
