import React ,{Component} from "react"
export default class ClickAdd extends Component {
    constructor(props) {
        super(props);
        this.state={
            num:""
        }
    }
     //第一次加载的数据
     componentDidMount (){
        this.setState({
            num:this.props.num
        })
    }
    // addOne=()=>{
    //     console.log(this.state)
    // }
    addOne=()=>{
        //var a=this.state.num-0;
       // a++;
        // this.setState({
        //     num:this.state.num-0+1
        // })
        this.setState({
            num:this.state.num-0+1
        },()=>{
            var newState={num:this.state.num}
            console.log(newState)
            this.props.onChange1(newState)
        })
        
    }
    render(){
        return(
            <div>
                <button onClick={this.addOne}>点击加一</button>
                <h3>{this.state.num}</h3>
            </div>
        )
    }
}