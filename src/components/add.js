import React, { Component } from "react"
export default class AddList extends Component {
    constructor(props){
        super(props);
        this.state={
            getusername:"",
            getDistribution:"",
            time:""
        }
    }
    sub=()=>{
        console.log(111);
        var time =Date.parse(new Date());
        this.props.add({"username":this.state.username,"describe":this.state.describe,id:time});
        this.setState({
            username:"",
            describe:"",
            id:time
        })
    }
    //获取用户输入的值
  getusername=(e)=>{
    console.log(e.target.value)
    this.setState({
      username:e.target.value
    })
  }
  getDistribution=(e)=>{
    this.setState({
      describe:e.target.value
    })
  }
    render() {
        return (
            <div className="add">
                <p><span>用户名：</span>
                    <input type="text" placeholder="请输入用户名" onBlur={this.getusername} /></p>
                <p><span>评价：</span>
                    <textarea name="请填写评价" onChange={this.getDistribution} cols="30" rows="10"></textarea></p>
                <button onClick={this.sub}>提交</button>
            </div>
        )
    }
}


