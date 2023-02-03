import React from 'react'
import type { Character, AbilityName } from '../types'
import Avatars from './utils/avatars'
import SingleStat from './utils/single-stat'
import Stats from './utils/stats'

interface HeroesProps {
  data: Character[]
}

const Heroes = ({ data }: HeroesProps) => {
  return (
    <div className="w-full pt-36 flex flex-col justify-center items-center">
      <h1 className="font-bold text-center sm:text-2xl">
        {data && data.length === 6
          ? 'Your champions!'
          : 'Select your squad to defend earthrealm'}
      </h1>

      {data && data.length ? <Avatars data={data} /> : null}

      <div className="w-full flex flex-wrap justify-center items-center gap-7">
        <SingleStat abilityName="Power" abilityScore={6} />
      </div>
    </div>
  )
}

export default Heroes
