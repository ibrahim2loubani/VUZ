import type { CharacterAbility } from '../../types'

const SingleStat = ({ abilityName, abilityScore }: CharacterAbility) => {
  const abilityData =
    abilityName === 'Technique' ? (
      <div className="relative flex flex-col justify-center items-center gap-4 sm:before:content-[''] sm:before:w-[1px] sm:before:bg-divider sm:before:absolute sm:before:block sm:before:h-20 sm:before:left-[-0.9rem] sm:after:content-[''] sm:after:w-[1px] sm:after:bg-divider sm:after:absolute sm:after:block sm:after:h-20 sm:after:right-[-0.9rem]">
        <span className="font-medium">{abilityName}</span>
        <span className="font-black text-xl">
          {abilityScore ? abilityScore : '-'}
        </span>
      </div>
    ) : (
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="font-medium">{abilityName}</span>
        <span className="font-black text-xl">
          {abilityScore ? abilityScore : '-'}
        </span>
      </div>
    )

  return abilityData
}

export default SingleStat
