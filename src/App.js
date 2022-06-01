import Header from './components/Header'
import NewItem from './components/NewItem'
import Items from './components/Items'
import { useState } from 'react'
import { nanoid } from 'nanoid'

function App() {

  const [items, setItems] = useState([
    {
      text: 'Milk',
      purchased: false,
      id: 1
    },
    {
      text: 'Eggs',
      purchased: false,
      id: 2
    }
  ])

  const addItem = (text) => {
    setItems([...items, { text, id: nanoid() }])
  }

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const togglePurchased = (id) => {
    setItems(items.map(item => item.id === id ? {...item, purchased: !item.purchased} : item ))
  }

  return (
    <div className="container">
      <Header />
      <NewItem addItem={addItem} />
      <Items
        items={items}
        deleteItem={deleteItem}
        togglePurchased={togglePurchased}
      />
    </div>
  );
}

export default App
