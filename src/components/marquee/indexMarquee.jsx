import React, { Component } from 'react';
import './styleMarquee.css';

class Marquee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleMouseEnter = () => {
    this.setState({ isHovered: true });
  };

  handleMouseLeave = () => {
    this.setState({ isHovered: false });
  };

  render() {
    const { items } = this.props;
    const { isHovered } = this.state;
    const reorderedItems = [...items, ...items, ...items];

    return (
      <div
        className="marquee-container"
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        <div className={`marquee-wrapper ${isHovered ? 'paused' : ''}`}>
          {reorderedItems.map((item, index) => (
            <div className="marquee-item" key={index}>
              <a href={item.link}>
                <span>{item.text}</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Marquee;
