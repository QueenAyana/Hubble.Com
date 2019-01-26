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
    altText: 'Slide 1',
    name: [],
    link: [],
    location: [],
    description: []

  },
  {
    id: 2,
    altText: 'Slide 2',
    name: [],
    link: [],
    location: [],
    description: []
  },
  {
    id: 3,
    altText: 'Slide 3',
    name: [],
    link: [],
    location: [],
    description: []
  },
  {
    id: 4,
    altText: 'Slide 4',
    name: [],
    link: [],
    location: [],
    description: []
  },
  {
    id: 5,
    altText: 'Slide 5',
    name: [],
    link: [],
    location: [],
    description: []
  },

];



class GroupCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0,
      groupStuff: {
        name: this.props.hobby.name,
        link: this.props.hobby.link,
        location: this.props.hobby.location,
        description: this.props.hobby.description
      }
    };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);

    // items.forEach(element => {
    //   element.name = this.props.hobby.name
    //   element.link = this.props.hobby.link
    //   element.location = this.props.hobby.location
    //   element.description = this.props.hobby.description
    // });
  }

  componentDidMount() {
    for (let i = 0; i < this.state.groupStuff.name.length; i++) {
      items.forEach(element => {
        element.name = this.state.groupStuff.name[i]
      });

    }
    for (let i = 0; i < this.state.groupStuff.link.length; i++) {
      items.forEach(element => {
        element.link[i]=this.state.groupStuff.link[i]
      });

    }

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


    const slides = items.map((group) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={group.id}
          group={group}
          onExiting={this.onExiting}
          onExited={this.onExited}
        >
          <CarouselCaption className="text-danger" captionHeader={group.name} captionText={group.link} />
        </CarouselItem>
      );
    });

    return (
      <div>
        <style>
          {
            `.custom-tag {
                max-width: 100%;
                height: 500px;
              }`
          }
        </style>
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
          {slides}
          <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
          <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
        </Carousel>
      </div>
    );
  }
}

export default GroupCarousel;