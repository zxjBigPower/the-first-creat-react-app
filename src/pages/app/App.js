import React, { Component } from 'react';
import Times from "./../../components/time"
import Click from "./../../components/click"
import logo from './../../logo.svg';
import './App.css';
import Addlist from "./../../components/add"
import List from "./../../components/list"
class App extends Component {
  //第一次加载
  componentDidMount (){
    setInterval(()=>{
      let time=new Date();
      time=JSON.stringify(time)
      this.setState({
        t:time
      })
    },1000)
  }
  constructor(props){
    super(props);
    let time=Date.parse(new Date());
    console.log(time)
    this.state={
      t:"",
      num:"",
      list:[
        {id:time,username:"fsdfsf",describe:"dafs地方我ear范文芳"},
        {id:time+1,username:"fsdd3434fsf",describe:"dafs地234方我23423423423ear范文芳"}
      ],
    }
  }

  // //设置初始值
  // getInitialState(){
  //   return {
  //     t:false
  //   };
  // }
  getFromSon=(e)=>{
    console.log(e);
    this.setState({num:e.num})
  }
  //提交
  sub=(e)=>{
    console.log(e);
    var a= this.state.list;
    a.push({"username":e.username,"describe":e.describe,id:e.id});
    // var a= this.state.list;
    // a.push({"username":this.state.username,"describe":this.state.describe})
    this.setState({
      list:a,
      username:"",
      describe:""
    },()=>{
      console.log(this.state.list)
    })
  }
  //删除
  del=(index)=>{
    console.log(index);
    var list=this.state.list;
    list.splice(index,1);
    this.setState({
      list:list
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.{this.state.t}
        </p>
        <Times time={this.state.t}/>
        <hr/>
        {/* 父传子为props 子传父为 事件 处理 */}
        <Click num="1" onChange1={this.getFromSon}/>
        ---{this.state.num}---

        <div className="todomvc">
          <h1>请发表对react的评论</h1>
          {/* onadd={this.add} */}
         <Addlist add={this.sub} ></Addlist>
          <div className="list">
            <List lists={this.state.list} del={this.del}></List>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
