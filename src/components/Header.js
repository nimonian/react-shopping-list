import { useEffect, useState } from 'react'

const Header = () => {

  const [title, setTitle] = useState('Shopping List')

  useEffect(() => {
    setTitle('Shopping List')
  }, [])

  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default Header
