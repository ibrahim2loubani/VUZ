import React from 'react'
import type { Character } from '../types'
import TableRow from './utils/table-row'
import './table.css'

interface TableProps {
  data: Character[]
}

const Flowbite = ({ data }: TableProps) => {
  // console.log('🚀 ~ file: flowbite.tsx:11 ~ Flowbite ~ data', data)
  const columns = [
    'Character',
    'Tags',
    'Power',
    'Mobility',
    'Technique',
    'Survivability',
    'Energy',
  ]

  if (!data.length) {
  }

  return (
    <div className="w-full flex justify-center items-center py-5">
      <div className="relative overflow-x-auto shadow-table h-80 rounded-md mx-10">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-gray-900 border-b">
            <tr>
              {columns.map((name: string, index: number) => (
                <th
                  key={index}
                  scope="col"
                  className={`p-3 ${
                    (name === 'Character' || name === 'Tags') && 'text-left'
                  }`}
                >
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="edit-scroll">
            {data &&
              data.length &&
              data.map((hero: Character, index: number) => (
                <TableRow key={index} data={hero} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Flowbite
