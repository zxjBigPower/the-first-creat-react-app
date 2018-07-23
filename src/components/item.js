import React, { Component } from "react"
class ListItem extends Component {
    del=(res)=>{
        //console.log(111);
        //console.log(this.props.index);
        //console.log(this.props.del);
        this.props.del(this.props.index)
    }
    render() {
        return (
            <div>
                <p><span>姓名：</span>{this.props.items.username}</p>
                <p><span>描述：</span>{this.props.items.describe}</p>
                <button onClick={this.del}>删除</button>
            </div>
        )
    }
}
export default ListItem