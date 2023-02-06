import { useState, useEffect } from 'react'

interface TagPros {
  tagName: string
  filter: (name: string) => void
  clearAll: boolean
}

const Tag = ({ tagName, filter, clearAll }: TagPros) => {
  const [active, setActive] = useState(false)

  const tagStyle =
    'flex justify-center items-center gap-1 text-primary border border-primary rounded-full cursor-pointer px-3 py-1.5 hover:bg-primary hover:text-white duration-150'
  const activeTagStyle =
    'flex justify-center items-center gap-2 text-white border border-primary rounded-full cursor-pointer px-3 py-1.5 bg-primary flex justify-center items-center gap-2'

  const toggleTag = (name: string) => {
    setActive(!active)
    filter(name)
  }

  useEffect(() => {
    if (clearAll) setActive(false)
  }, [clearAll])

  return (
    <div
      onClick={() => toggleTag(tagName)}
      className={`${active ? activeTagStyle : tagStyle}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`w-4 h-4 ${!active && 'hidden'}`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
      {tagName}
    </div>
  )
}

export default Tag
