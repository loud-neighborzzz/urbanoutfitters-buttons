import React from 'react';
import axios from 'axios';
import Items from './Items.jsx';
import AddToBag from './AddToBag.jsx';
import style from '../style.css'

// let baseUrl = `http://localhost:5152/data/${window.location.pathname.slice(1)}`;
let baseUrl = `http://ec2-52-15-33-213.us-east-2.compute.amazonaws.com:5152/data/${window.location.pathname.slice(1)}`;


class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
        selectedSize: '',
        selectedColor: '',
        selectedQty: 1,
        isEmptyState : true
      }
      this.getItem =  this.getItem.bind(this);
      this.updateSize = this.updateSize.bind(this);
      this.updateColor = this.updateColor.bind(this);
      this.updateQty = this.updateQty.bind(this);
      this.updateButtons = this.updateButtons.bind(this);
      this.toggleBox = this.toggleBox.bind(this);
    }
    
    getItem() {
      axios.get(baseUrl)
      .then((response) => {
        console.log(response.data)
        this.setState({
          data: response.data
          })
      });
    };

    updateButtons() {
      axios.patch(baseUrl, {
        selectedSize: this.state.selectedSize,
        selectedColor: this.state.selectedColor,
        selectedQty: this.state.selectedQty
      })
      .then((response) => {
        this.getItem();
        this.toggleBox();
      })
    }

    updateSize(event){
      this.setState({
        selectedSize: event.target.value
      })
    }

    updateColor(event){
      this.setState({
        selectedColor: event.target.value
      })
    }

    updateQty(event){
      this.setState({
        selectedQty: event.target.value
      })
    }

    toggleBox() {
      this.setState({
        addNormalView: true
      })
    };

    componentDidMount() {
      this.getItem();
    };

    render() {
      return (
        <div>
          {this.state.isEmptyState && <Items addToBag={this.updateButtons} changeQty={this.updateQty} changeColor={this.updateColor} changeSize={this.updateSize} data={this.state.data}/> }
          {this.state.addNormalView && <AddToBag data={this.state.data} changeColor={this.updateColor}/>}
        </div>
      )
    }
  }

export default App

