import React from 'react';
import data from './data.json';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import heart from './red-heart-14x15px.png';
import "./style.css";


class HornedBeasts extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      favoriteClicks: 0,
      data: data
    };
  }

  fav = () => {
    this.setState({favoriteClicks: this.state.favoriteClicks + 1});
  }


  render () {
    console.log(this.state.data);
    return (
      <div className = "beasts">
        <Container>
          <Row>
            <Col>
              <img id = "animals" src={this.props.image_url} onClick={this.fav} alt = " " />
              <h2>{this.props.title}</h2>
              <h3>{this.props.description}</h3>
              {/* <h4>{this.props.keyword}</h4> */}
              {/* <h4>{this.props.horns}</h4> */}
              <span>Number of Favorite Clicks: {this.state.favoriteClicks}   </span>
              <img src={heart} alt = " "/>
              <hr />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
export default HornedBeasts;
