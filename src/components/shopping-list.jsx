import ShoppingListItem from "./shopping-list-item"

const ShoppingList = ({data, onDelete, onToggleActive}) => {
    return (
        <div className="shpping-list">
            {data.length ? data.map(item => (
              <ShoppingListItem 
                 item={item} 
                 key={item.id} 
                 onDeleteItem = {() => onDelete(item.id)}
                 onToggleActiveItem = {() => onToggleActive(item.id)}
               />
            )):(
                <h1 style={{textAlign: "center", color:"white", marginTop:"40px"}}>
                   Not Found Data
                </h1>
            )}
        </div>
    )
}

export default ShoppingList