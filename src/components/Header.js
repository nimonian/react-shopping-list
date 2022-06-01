import axios from 'axios'
import { useEffect, useState } from 'react'

const Header = () => {

  const [title, setTitle] = useState('Shopping List')

  useEffect(() => {
    const fetchName = async () => {
      const res = await axios.get('http://localhost:5000/name')
      const name = res.data
      setTitle(`${name}'s Shopping List`)
    }
    fetchName()
  }, [])

  return (
    <div>
      <h1>{title}</h1>
    </div>
  )
}

export default Header
