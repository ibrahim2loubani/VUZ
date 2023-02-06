import { useState, useEffect } from 'react'
import type { Character } from '../types'
import Tag from './utils/tag'

interface TagsProps {
  data: Character[]
  filter: (filtered: Character[], isActive: boolean) => void
  search?: string
  clearAll: boolean
}

const Tags = ({ data, filter, search, clearAll }: TagsProps) => {
  const [tagNames, setTagNames] = useState<string[]>([])
  const [activeTags, setActiveTags] = useState<string[]>([])

  const filterBy = (name: string) => {
    const isActive = activeTags.includes(name)
    setActiveTags(
      isActive ? activeTags.filter((t) => t !== name) : [...activeTags, name]
    )
  }

  useEffect(() => {
    if (activeTags.length) {
      let filteredTags
      if (search) {
        filteredTags = data.filter((hero) => {
          return hero.name.toLowerCase().indexOf(search.toLowerCase()) !== -1
        })
      }
      filteredTags = data.filter((hero) =>
        activeTags?.every((tag) =>
          hero.tags?.some((heroTag) => heroTag.tag_name === tag)
        )
      )
      filter(filteredTags, true)
    } else {
      filter([], false)
    }
  }, [activeTags])

  useEffect(() => {
    if (clearAll) setActiveTags([])
  }, [clearAll])

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
            <Tag
              key={tagName}
              tagName={tagName}
              filter={filterBy}
              clearAll={!activeTags.length ? true : false}
            />
          )
      )}
      <span
        className="underline text-[#999999] cursor-pointer hover:text-primary pl-2"
        onClick={() => setActiveTags([])}
      >
        Clear all
      </span>
    </div>
  )
}

export default Tags
