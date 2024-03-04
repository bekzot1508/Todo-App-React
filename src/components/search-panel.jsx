import React from "react";

class SearchPanel extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            search: ""
        }
    }

    onChange = (e) => {
        const value = e.target.value

        this.setState({search: value})
        this.props.onUpdate(value)
    }

    render() {
        const  {search} = this.state
        return (
            <input 
               type="text" 
               className="search" 
               placeholder="Search..." 
               value={search}
               onChange={this.onChange}
            />
        )
    }
}

export default SearchPanel