import React, { useState, useEffect } from 'react'
import type { Character } from '../types'
import Tag from './utils/tag'

interface TagsProps {
  data: Character[]
}

const Tags = ({ data }: TagsProps) => {
  const [tagNames, setTagNames] = useState<string[]>([])
  const [activeTags, setActiveTags] = useState<string[]>([])

  const handleTagClick = (name: string) => {
    const isActive = activeTags.includes(name)
    setActiveTags(
      isActive ? activeTags.filter((t) => t !== name) : [...activeTags, name]
    )
  }

  const filterBy = (name: string) => {
    const isActive = activeTags.includes(name)
    setActiveTags(
      isActive ? activeTags.filter((t) => t !== name) : [...activeTags, name]
    )
    const filteredTags = data.filter((hero) =>
      hero.tags?.some((tag) => activeTags.includes(tag.tag_name))
    )
    console.log(
      '🚀 ~ file: tags.tsx:28 ~ filterBy ~ filteredTags',
      filteredTags
    )
  }

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
          tagName && <Tag key={tagName} tagName={tagName} filter={filterBy} />
      )}
      <span className="underline text-[#999999] cursor-pointer hover:text-primary pl-2">
        Clear all
      </span>
    </div>
  )
}

export default Tags
