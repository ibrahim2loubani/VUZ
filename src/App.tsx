import { Fragment, useState } from 'react'
import './App.css'
import Flowbite from './components/flowbite'
import Header from './components/header'
import Heroes from './components/heroes'
import Table from './components/table'
import Tags from './components/tags'
import Search from './components/utils/search'

import jsonData from './data/characters.json'
import type { Character, CharacterTag } from './types'
const data: Character[] = jsonData as Character[]

const App = () => {
  console.log(data[0])
  const heroesTest = data.slice(0, 6)
  const [heroes, setHeroes] = useState<Character[]>()
  const [search, setSearch] = useState<string>()

  // const searchHeroes = (name: string) => {
  //   const filteredHeroes = data.filter((hero) => hero.name.includes(name))
  //   setIsSearch(filteredHeroes)
  // }

  const filterHeroes = (type: string, filterBy: string) => {
    switch (type) {
      case 'search': {
        const filteredArray = data.filter((hero) => {
          return hero.name.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1
        })
        setHeroes(filteredArray)
        break
      }
      case 'tag': {
        const filteredArray = data.filter((hero) => {
          hero.tags.map((tag: CharacterTag) => {
            if (tag.tag_name === filterBy) return hero
          })
        })
        setHeroes(filteredArray)
        break
      }
      default: {
      }
    }
  }

  return (
    <Fragment>
      <Header />
      <Heroes data={heroesTest} />
      <Search search={filterHeroes} />
      <Tags data={heroes ? heroes : data} />
      {/* <Table data={data} /> */}
      <Flowbite data={heroes ? heroes : data} />
    </Fragment>
  )
}

export default App
