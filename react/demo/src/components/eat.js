import React, { Component,Fragment } from 'react'
import EatItem from './eatitem'
import '../style/eat.css'
import axios from 'axios'

class Eat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: 'hello',
      list: ['蛋炒饭','饭炒蛋','蛋炒蛋']
    }
  }

  inputChange(e) {
    // console.log(e.target.value);
    // this.state.inputValue = e.target.value;
    // this.input.value
    this.setState({
      inputValue: e.target.value
    })
  }

  addList() {
    this.setState({
      list: [...this.state.list, this.state.inputValue]
    })
    this.state.inputValue = '';
  }

  deleteItem(index) {
    console.log(index);
    let list = this.state.list;
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }

  componentDidMount() {
    axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda')
      .then(res => {
      console.log(res);
    })
  }
  render() {
    return (
      <Fragment>
        <div>
          {/* <label for="addGoods">加菜：</label> */}
          <input id="addGoods"
            className="input"
            value={this.state.inputValue}
            ref={(input) => { this.input = input }}
            onChange={this.inputChange.bind(this)}>
            
            </input>
          <button onClick={this.addList.bind(this)}>下单</button>
        </div>
        <ul>
          {/* return <li key={index + item} onClick={this.deleteItem.bind(this, index)} dangerouslySetInnerHTML={{__html: item}}></li> */}
          {
            this.state.list.map((item, index) => {
              return (
                  <EatItem key={index + item} deleteItem={this.deleteItem.bind(this)} content={item} index={index}></EatItem>
              )
            })
          }
        </ul>
      </Fragment>
    )
  }
}

export default Eat