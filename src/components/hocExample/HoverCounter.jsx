import React from 'react'
import withCounter from './withCounter'

const HoverCounter = ({count, setCount}) => {
  return (
    <div className="flex flex-col justify-center h-48 items-center gap-4">
      <button
        type="button"
        className="border-2 m-2 p-1"
        onMouseOver={() => setCount()}
      >
        Hover over me
      </button>
      <div>Hovered {count} times</div>
    </div>
  )
}

export default withCounter(HoverCounter, 10)