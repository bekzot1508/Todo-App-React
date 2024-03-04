import ShoppingListItem from "./shopping-list-item"

const ShoppingList = ({data, onDelete, onToggleActive}) => {
    return (
        <div className="shpping-list">
            {data.map(item => (
              <ShoppingListItem 
                 item={item} 
                 key={item.id} 
                 onDeleteItem = {() => onDelete(item.id)}
                 onToggleActiveItem = {() => onToggleActive(item.id)}
               />
            ))}
        </div>
    )
}

export default ShoppingList