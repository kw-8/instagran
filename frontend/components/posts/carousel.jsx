import React from "react";

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { i: 1 }
  }

  render() {
    let {imageUrls} = this.props;
    let {i} = this.state;
    // let styles = {'transform': `translate( -${(this.state.i - 1)} * min(100vw - 40px, 70vw)) )`}
    let styles = {'transform': `translate( calc(-${(this.state.i - 1)} * 100%))`}
    return (
      <div className="image-container">
        <div className='images-box' style={{ transform: styles.transform }}>
          {imageUrls.map((url, i) => (
            <div className="img-div" key={i}>
              <img src={url}/>
            </div>
          ))}
        </div>
        {imageUrls.length === 1 ? "" :
          <>
            { i === 1 ? "" :
              <a className="prev" onClick={() => this.setState({ i: i - 1 })}>❮</a>}
            { i === imageUrls.length ? "" :
              <a className="next" onClick={() => this.setState({ i: i + 1 })}>❯</a>}
          </>
        }
      </div>
    )
  }
}

export default Carousel;