import React, { Component } from "react"
import ListItem from "./item"
class List extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }
    componentDidMount() {
        console.log(this.props.lists);
        //console.log(this.props.del)
    }
    render() {
        return (
            <div>
                {
                    this.props.lists.map((res,index) => {
                        return (
                           <ListItem items={res} key={index} index={index} del={this.props.del}/>
                        )
                    }

                    )}
            </div>
        )
    }
}
export default List