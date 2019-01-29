import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';


let items = [
  {
    id: 1,
    title: "Archery",
    src: "https://www.quia.com/files/quia/users/sylben/Hobbies/archery.png"

  },
  {
    id: 2,
    title: "Baseball",
    src: "https://www.quia.com/files/quia/users/sylben/Hobbies/baseball.png"
  },
  {
    id: 3,
    title: "Biking",
    src: "https://www.quia.com/files/quia/users/sylben/Hobbies/bike.png"
  },
  {
    id: 4,
    title: "Climbing",
    src: "https://www.quia.com/files/quia/users/sylben/Hobbies/climbing.png"
  },
  {
    id: 5,
    title: "Diving",
    src: "https://www.quia.com/files/quia/users/sylben/Hobbies/diving.png"
  },
  {
    id: 6,
    title: "Horseback Riding",
    src: "https://www.quia.com/files/quia/users/sylben/Hobbies/horseriding.png"
  },
  {
    id: 7,
    title: "Inline Rollerskating",
    src: "https://www.quia.com/files/quia/users/sylben/Hobbies/roller-skates.png"
  },

];



class ImageCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);

  }


  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;


    const slides = items.map((item) => {
      return (
        <CarouselItem
          tag="div"
          key={item.src}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <img src={item.src} />
          <h3>{item.title}</h3>
          <br />
        </CarouselItem>
      );
    });

    return (
      <div>
        <Carousel
          className="imageCarousel"
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div >
    );
  }
}

export default ImageCarousel;