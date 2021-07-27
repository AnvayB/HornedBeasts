import React from 'react';
import HornedBeasts from './HornedBeasts.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardColumns from 'react-bootstrap/CardColumns';

class Main extends React.Component {
  render() {
    return (
      <div id="beastCards">
        <CardColumns>
          {this.props.beasts.map((beast, index) =>
            <HornedBeasts
              title={beast.title}
              image={beast.image_url}
              description={beast.description}
              horns={beast.horns}
              key={index}
              showModal={this.props.showModal}
            />
          )};
        </CardColumns>
      </div>
    );
  }
}
export default Main;