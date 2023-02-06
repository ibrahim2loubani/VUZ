import { Fragment, useState, useEffect } from 'react'
import './App.css'
import Table from './components/table'
import Header from './components/header'
import Heroes from './components/heroes'
import Tags from './components/tags'
import Search from './components/utils/search'

import jsonData from './data/characters.json'
import type { Character } from './types'
const data: Character[] = jsonData as Character[]

const App = () => {
  const [heroes, setHeroes] = useState<Character[]>(data)
  const [champions, setChampions] = useState<Character[]>([])
  const [search, setSearch] = useState<string>()
  const [activeFilters, setActiveFilters] = useState(false)
  const [clearFilters, setClearFilters] = useState(false)
  const [clearSearch, setClearSearch] = useState(false)

  const manageChampions = (champ: Character, type: string) => {
    if (type === 'remove') {
      const array = champions?.filter((champion) => champion.id !== champ.id)
      setChampions(array)
    } else {
      setChampions([...champions, champ])
    }
  }

  const manageTags = (filtered: Character[], isActive: boolean) => {
    if (filtered.length) {
      setActiveFilters(true)
      setHeroes(filtered)
    } else {
      if (!isActive) {
        setActiveFilters(false)
        setHeroes(data)
      }
    }
  }

  const manageSearch = (filterBy: string) => {
    const filteredArray = data.filter((hero) => {
      return hero.name.toLowerCase().indexOf(filterBy.toLowerCase()) !== -1
    })
    setHeroes(filteredArray)
    setSearch(filterBy)
  }

  useEffect(() => {
    if (activeFilters) setClearFilters(true)
  }, [search])

  useEffect(() => {
    if (search) setClearSearch(true)
  }, [activeFilters])

  return (
    <Fragment>
      <Header />
      <Heroes data={champions} champion={manageChampions} />
      <Search search={manageSearch} clear={clearSearch} />
      <Tags
        data={data}
        filter={manageTags}
        search={search}
        clearAll={clearFilters}
      />
      <Table
        data={heroes}
        champion={manageChampions}
        count={champions?.length ? champions.length : 0}
        selected={champions}
      />
    </Fragment>
  )
}

export default App
