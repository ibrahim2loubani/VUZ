import React from 'react'
import type { Character } from '../../types'

interface AvatarsProps {
  data: Character[]
}

const Avatars = ({ data }: AvatarsProps) => {
  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-3 py-7">
      {data.map((avatar: Character, index: number) => (
        <div
          key={index}
          className="relative w-20 h-20 cursor-pointer hover:before:content-['remove'] hover:before:absolute hover:before:w-full hover:before:h-full hover:before:bg-primary hover:before:text-white hover:before:font-bold hover:before:rounded-full hover:before:z-10 hover:before:flex hover:before:justify-center hover:before:items-center hover:before:bg-opacity-50"
        >
          <img
            className="w-20 h-20 object-contain rounded-full border-2 border-primary"
            src={avatar.image}
            alt="avatar"
          />
        </div>
      ))}
    </div>
  )
}

export default Avatars
