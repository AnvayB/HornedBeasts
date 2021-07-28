import React from 'react';
import Card from 'react-bootstrap/Card';
import heart from './red-heart-14x15px.png';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favoriteClicks: 0,
    };
  }

  addFavorite = () => {
    this.setState({ favoriteClicks: this.state.favoriteClicks + 1});
    this.props.showModal(this.props.title);
  }

  render() {
    return (
      <Card
        style={{width: '18rem' }}
        border = {"info"}
        onClick={this.addFavorite}>

        <Card.Img variant="top" src={this.props.image} />
        <Card.Body>
          <Card.Title>
            {this.props.title}
          </Card.Title>
          <Card.Text><img src={heart} alt=" "/>{this.state.favoriteClicks}
          </Card.Text>
          <Card.Text>
            {this.props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default HornedBeasts;
