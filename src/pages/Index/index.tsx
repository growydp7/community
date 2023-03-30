import React from 'react'
import Counter from '@/features/counter/Counter'
import NameContext from '@/context/nameContext'

const Index: React.FC = () => {
  return (
    <div>
      <Counter />
      <NameContext />
    </div>
  )
}

export default Index