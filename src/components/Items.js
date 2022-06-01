const Items = ({ items, deleteItem, togglePurchased }) => {

  return (
    <div>
      {
        items.map((item) => (
          <h3
            key={item.id}
            style={{
              textDecoration: item.purchased ? 'line-through' : 'none',
              cursor: 'pointer'
            }}
            onClick={() => togglePurchased(item.id)}
            onDoubleClick={() => deleteItem(item.id)}
          >
              {item.text}
          </h3>
        ))
      }
    </div>
  )
}

export default Items