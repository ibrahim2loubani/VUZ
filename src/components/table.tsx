import React from 'react'
import type { Character } from '../types'
import './table.css'

interface TableProps {
  data: Character[]
}

const Table = ({ data }: TableProps) => {
  console.log('🚀 ~ file: table.tsx:9 ~ Table ~ data', data)
  data.map((item: any) => {
    console.log('🚀 ~ file: table.tsx:11 ~ data.map ~ item', item)
  })
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
    // <div className="w-full flex justify-center items-center rounded-md pt-4 pb-10">
    //   <table className="">
    //     <thead className="border-collapse">
    //       <tr className="">
    //         {columns.map((name: string, index: number) => (
    //           <th key={index} scope="col">
    //             <div className="w-full flex justify-start items-center gap-2">
    //               <div className="pb-4">{name}</div>
    //             </div>
    //           </th>
    //         ))}
    //       </tr>
    //     </thead>
    //     <tbody className="block w-full shadow-table h-[500px] max-h-[500px] overflow-auto rounded-lg">
    //       {data &&
    //         data.length &&
    //         data.map((value: Character, index: number) => (
    //           <tr
    //             key={index}
    //             className="border-b last:border-b-0 border-[#777777]"
    //           >
    //             {columns.map(
    //               (name: string, index1: number) =>
    //                 name === 'Character' && (
    //                   <td
    //                     key={index1}
    //                     data-label={name}
    //                     className="flex justify-start items-center gap-5 p-3"
    //                   >
    //                     <input type="checkbox" className="w-4 h-4" />
    //                     <img
    //                       className="w-8 h-8 object-contain rounded-full border-2 border-primary"
    //                       src={value.thumbnail}
    //                       alt="thumbnail"
    //                     />
    //                     <span>{value.name}</span>
    //                   </td>
    //                 )
    //             )}
    //           </tr>
    //         ))}
    //     </tbody>
    //   </table>
    // </div>
    <div className="w-full px-5">
      <div className="w-full border border-transparent overflow-x-auto pb-0 flex justify-center items-center sm:pb-5">
        <table>
          <thead>
            <tr>
              {columns.map((name: string, index: number) => (
                <th key={index} scope="col">
                  <div className="w-full flex justify-center items-center gap-2">
                    <div>{name}</div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="rounded-md shadow-table">
            {data &&
              data.length &&
              data.map((value: any, index: number) => (
                <tr key={index}>
                  {columns?.map((name: string, index1: number) => (
                    <td key={index1} data-label={name}>
                      value[name]
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Table
