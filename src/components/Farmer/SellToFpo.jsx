import React from 'react'
import Card from './Card'

const SellToFpo = () => {
  return (
    <div>
        <div className="flex justify-center items-center py-4">
          <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
    </div>
  )
}

export default SellToFpo