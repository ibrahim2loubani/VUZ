import React, { useState, useEffect } from 'react'
import type { Character } from '../types'

interface TagsProps {
  data: Character[]
}

const Tags = ({ data }: TagsProps) => {
  const [tagNames, setTagNames] = useState<string[]>([])
  const [activeTags, setActiveTags] = useState<string[]>([])
  const tagStyle =
    'text-primary border border-primary rounded-full cursor-pointer px-3 p-1.5 hover:bg-primary hover:text-white duration-150'
  const activeTagStyle =
    'text-white border border-primary rounded-full cursor-pointer px-3 p-1.5 bg-primary flex justify-center items-center gap-2'

  useEffect(() => {
    const uniqueTagNames = Array.from(
      new Set(data.map((obj) => obj.tags?.map((tag) => tag.tag_name)).flat())
    )
    setTagNames(uniqueTagNames)
  }, [])

  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-2 py-4">
      {tagNames.map(
        (tagName: string) =>
          tagName && (
            <div key={tagName} className={tagStyle}>
              {tagName}
            </div>
          )
      )}
      <span className="underline text-[#999999] cursor-pointer hover:text-primary pl-2">
        Clear all
      </span>
    </div>
  )
}

export default Tags
