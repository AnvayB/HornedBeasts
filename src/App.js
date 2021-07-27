import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import SelectedBeasts from './SelectedBeasts.js';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      beasts: data,
      modal: false,
      favoritedBeast: {}
    };
  }

  showModal = (name) => {
    let favoritedBeast = data.find(beast => beast.title === name);
    this.setState({favoritedBeast, modal: true });
  }
  hideModal = () => {
    this.setState({modal: false});
  }


  render() {
    return (
      <div className = "App">
        <Header />
        <Main
          beasts = {this.state.beasts}
          showModal = {this.showModal}/>
        <SelectedBeasts
          favoritedBeast = {this.state.favoritedBeast}
          show = {this.state.modal}
          closeModal = {this.hideModal}
        />
        <Footer />
      </div>
    );
  }
}
export default App;