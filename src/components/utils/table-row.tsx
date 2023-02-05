import React, { useEffect, useState } from 'react'
import type { Character, CharacterTag, CharacterAbility } from '../../types'

interface RowProps {
  data: Character
}

const TableRow = ({ data }: RowProps) => {
  const [isChecked, setIsChecked] = useState(false)
  const [abilities, setAbilities] = useState({
    Power: 0,
    Mobility: 0,
    Technique: 0,
    Survivability: 0,
    Energy: 0,
  })

  let initialValues = {
    Power: 0,
    Mobility: 0,
    Technique: 0,
    Survivability: 0,
    Energy: 0,
  }

  const toggleCheck = () => {
    setIsChecked(!isChecked)
  }

  useEffect(() => {
    if (data) {
      const values = data.abilities.reduce(
        (acc, { abilityName, abilityScore }) => {
          acc[abilityName] = abilityScore
          return acc
        },
        initialValues
      )
      setAbilities(values)
    }
  }, [])

  return (
    <tr
      className={`${
        isChecked ? 'bg-primary bg-opacity-10' : 'bg-white'
      } cursor-pointer text-black`}
      onClick={toggleCheck}
    >
      <td
        scope="row"
        className="p-3 font-medium whitespace-nowrap flex justify-start items-center gap-5"
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={toggleCheck}
          className="w-4 h-4 cursor-pointer outline-none"
        />
        <img
          className="w-9 h-9 object-contain rounded-full border-2 border-primary"
          src={data.thumbnail ? data.thumbnail : data.image}
          alt="thumbnail"
        />
        <span className="text-lg">{data.name}</span>
      </td>
      <td className="p-3">
        <div className="flex justify-start items-center gap-2">
          {data &&
            data.tags?.map((tag: CharacterTag, index: number) => (
              <div
                key={index}
                className="bg-white text-primary border border-primary rounded-full px-2 py-1.5"
              >
                {tag.tag_name}
              </div>
            ))}
        </div>
      </td>
      <td
        className={`p-3 font-bold text-lg ${
          abilities.Power === 10 && 'text-[#FF0000]'
        }`}
      >
        {abilities.Power}
      </td>
      <td
        className={`p-3 font-bold text-lg ${
          abilities.Mobility === 10 && 'text-[#FF0000]'
        }`}
      >
        {abilities.Mobility}
      </td>
      <td
        className={`p-3 font-bold text-lg ${
          abilities.Technique === 10 && 'text-[#FF0000]'
        }`}
      >
        {abilities.Technique}
      </td>
      <td
        className={`p-3 font-bold text-lg ${
          abilities.Survivability === 10 && 'text-[#FF0000]'
        }`}
      >
        {abilities.Survivability}
      </td>
      <td
        className={`p-3 font-bold text-lg ${
          abilities.Energy === 10 && 'text-[#FF0000]'
        }`}
      >
        {abilities.Energy}
      </td>
    </tr>
  )
}

export default TableRow
