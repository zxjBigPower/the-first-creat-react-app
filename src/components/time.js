import React, { Component } from 'react';
export default class Times extends Component {
    constructor(props){
        super(props);
        this.state={
            name:""
        }
    }
    //第一次加载的数据
    componentDidMount (){
       // console.log(this.props)
    }

    render() {
        return (
            <div>
                times  {this.props.time}
            </div>
        )
    }
}