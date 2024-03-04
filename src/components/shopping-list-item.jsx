import React from "react"

const ShoppingListItem = (props) =>{

    const {item, onDeleteItem, onToggleActiveItem} = props

        return (
            <div className={`list-item ${item.active && "active"}`} key={item.id}>
            <div className="item-info">
               <span>{item.size}</span>
               <p>{item.title}</p>
            </div>
            <div className="item-action">
               <span className="check" onClick={onToggleActiveItem}>&#10003;</span>
               <span className="times" onClick={onDeleteItem}>&times;</span>
            </div>
          </div>
        )
}
 

export default ShoppingListItem