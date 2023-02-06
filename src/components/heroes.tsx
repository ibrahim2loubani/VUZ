import type { Character, CharacterAbility } from '../types'
import Avatars from './utils/avatars'
import SingleStat from './utils/single-stat'

interface HeroesProps {
  data: Character[]
  champion: (champ: Character, type: string) => void
}

const Heroes = ({ data, champion }: HeroesProps) => {
  const abilities = data.reduce(
    (abilitiesArray: CharacterAbility[], hero: Character) => {
      hero.abilities.forEach((heroAbility) => {
        const index = abilitiesArray.findIndex(
          (ability) => ability.abilityName === heroAbility.abilityName
        )
        if (index === -1) {
          abilitiesArray.push({
            ...heroAbility,
            abilityScore: heroAbility.abilityScore / 2,
          })
        } else {
          abilitiesArray[index].abilityScore += heroAbility.abilityScore / 2
        }
      })
      return abilitiesArray
    },
    []
  )
  const desiredOrder = [
    'Power',
    'Mobility',
    'Technique',
    'Survivability',
    'Energy',
  ]

  abilities.sort(
    (a, b) =>
      desiredOrder.indexOf(a.abilityName) - desiredOrder.indexOf(b.abilityName)
  )

  return (
    <div className="w-full pt-36 flex flex-col justify-center items-center">
      <h1 className="font-bold text-center sm:text-2xl">
        {data && data.length === 6
          ? 'Your champions!'
          : 'Select your squad to defend earthrealm'}
      </h1>

      {data && data.length ? <Avatars data={data} champion={champion} /> : null}

      <div className="w-full flex flex-wrap justify-center items-center gap-7">
        {abilities.map((ability: CharacterAbility, index: number) => (
          <SingleStat
            key={index}
            abilityName={ability.abilityName}
            abilityScore={ability.abilityScore}
          />
        ))}
      </div>
      <span className="text-[#666666] text-sm pt-5 w-full whitespace-nowrap sm:w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5">
        * Totals as average for squad
      </span>
    </div>
  )
}

export default Heroes
