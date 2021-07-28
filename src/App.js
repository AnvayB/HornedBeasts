import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeasts from './SelectedBeasts.js';
import BeastsForm from './BeastsForm.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beasts: data,
      modal: false,
      favoritedBeast: {},
      formSelect: {},
      hornsCount: 1
    };
  }

  showModal = (name) => {
    let favoritedBeast = data.find(beast => beast.title === name);
    this.setState({favoritedBeast, modal: true });
  }
  hideModal = () => {
    this.setState({modal: false});
  }

  handleFormSubmit = e => {
    e.preventDefault();
    console.log(e.target.test.value);
    this.setState({hornsCount: parseInt(e.target.test.value)});
  }


  render() {
    let numHorns = data.filter((beast) => beast.horns === this.state.hornsCount);
    return (
      <div className = "App">
        <Header />
        <BeastsForm uponSubmit = {this.handleFormSubmit} />
        <Main
          beasts = {numHorns}
          showModal = {this.showModal}/>
        <SelectedBeasts
          favoritedBeast = {this.state.favoritedBeast}
          show = {this.state.modal}
          closeModal = {this.hideModal}
        />
        <hr />
        <Footer />
      </div>
    );
  }
}
export default App;