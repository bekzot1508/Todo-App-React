import React from "react"

class ShoppingAddForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "buy",
            number: ""
        }
    }

    onchangeToggle = (e) => {
        this.setState({
            [e.target.name]: e.target.value  // es 6 da [] orqali qilinadi
        })
    }

    onAdd = () => {
    const data = {
        title: this.state.title,
        number: this.state.number
    }

      if (!data.number.length || !data.title.length) {
          alert("All fields should be completed, please!")
      } else{
          this.props.onAdd(data)
      }
    }

   
  render() {

    const {title, number} = this.state

    return (
        <div className="form">
            <input type="text" 
                className="title" 
                name="title"
                placeholder="title..." 
                onChange={this.onchangeToggle}
                value={title} // boshqarib bo'ladigan formalar
            />
            <input type="number" 
                className="number"  
                name="number"
                placeholder="14" 
                onChange={this.onchangeToggle} 
                value={number} // boshqarib bo'ladigan formalar
            />
            <button onClick={this.onAdd}>Add</button>
        </div>
    )
  }
}

export default ShoppingAddForm