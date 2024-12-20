import { useRouter } from "next/navigation"
import { useState } from "react"

interface FilterProps {
  filterList: string[]
  onClickFilter: (filter?: string) => void
}

export const Filter = ({
  filterList,
  onClickFilter
}: FilterProps) => {
  const router = useRouter()
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => {
    setIsOpen(true)
  }

  const handleSelect = (filter: string) => {
    if (filter === selectedFilter) {
      setSelectedFilter('All')
      // onClickFilter('All')
      router.push('/')
    } else {
      onClickFilter(filter)
      setSelectedFilter(filter)
      router.push('/?genre=' + filter)
    }
    setIsOpen(false)
  }


  return (
    <div className="flex text-xl h-[56px] gap-6 relative">
      <p className="font-bold">Genre</p>
      <p>|</p>
      <div className="w-[237px]" onClick={handleOpen}>
        <p>{selectedFilter}</p>
      </div>
      {isOpen && (
        <div className="bg-white w-[237px] overflow-hidden absolute mt-[30px] rounded-md border z-20 right-0">
          {filterList.map((filter) => {
            return (
              <p key={filter} onClick={() => handleSelect(filter)}  className="hover:bg-gray-200 p-2 text-right cursor-default">{filter}</p>
            )
          })}
        </div>
      )}
    </div>
  )
}