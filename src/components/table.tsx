import type { Character } from '../types'
import TableRow from './utils/table-row'

interface TableProps {
  data: Character[]
  count: number
  champion: (champ: Character, type: string) => void
  selected: Character[]
}

const Table = ({ data, champion, count, selected }: TableProps) => {
  const columns = [
    'Character',
    'Tags',
    'Power',
    'Mobility',
    'Technique',
    'Survivability',
    'Energy',
  ]

  return (
    <div className="w-full flex justify-center items-center pt-5 pb-32">
      <div className="relative overflow-x-auto shadow-table h-96 rounded-md mx-10">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-gray-900 border-b">
            <tr>
              {columns.map((name: string, index: number) => (
                <th
                  key={index}
                  scope="col"
                  className={`p-3 text-lg ${
                    (name === 'Character' || name === 'Tags') &&
                    'text-left min-w-[270px]'
                  }`}
                >
                  {name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data && data.length ? (
              data.map((hero: Character, index: number) => (
                <TableRow
                  key={index}
                  data={hero}
                  champion={champion}
                  count={count}
                  selected={selected}
                />
              ))
            ) : (
              <tr></tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
