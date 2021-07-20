import React from 'react';
import data from './data.json';
import HornedBeasts from './HornedBeasts.js';


class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  allBeasts = (data) => {
    let array = data.map((value) => {
      return <HornedBeasts title={value.title} image_url={value.image_url} description = {value.description} horns = {value.horns}/>;
    });
    return array;
  }



  render () {
    return (
      <div className = "main">
        {this.allBeasts(data)}
      </div>
    );
  }
}
export default Main;
