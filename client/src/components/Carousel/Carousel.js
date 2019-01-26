import React, { Component } from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

const items = [
    {
        id: 1,
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        id: 2,
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        id: 3,
        altText: 'Slide 3',
        caption: 'Slide 3'
    },
    {
        id: 4,
        altText: 'Slide 4',
        caption: 'Slide 4'
    },
    {
        id: 5,
        altText: 'Slide 5',
        caption: 'Slide 5'
    }
];

class Example extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
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
        const nextIndex = this.state.activeIndex === this.props.hobbyList.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.hobbyList.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = this.props.hobbyList.map((hobby, id) => {
            return (
                <CarouselItem
                    className="custom-tag"
                    tag="div"
                    key={id}
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                >

                    {
                        hobby.key_photo ?
                        <img className="picture" src={hobby.key_photo.photo_link} />
                        : null
                    }

                        <h4>{hobby.name}</h4>
                        <a href={hobby.link} target="_blank" rel="noopener noreferrer">{hobby.link}</a>
                        <p>{hobby.localized_location}</p>
                        <p dangerouslySetInnerHTML={{ __html: hobby.description }}></p>
                 
                </CarouselItem>
            );
        });
// message
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
                    <CarouselIndicators items={this.props.hobbyList} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                    {slides}
                    <CarouselControl className="carouselControl" direction="prev" directionText="Previous" onClickHandler={this.previous} />
                    <CarouselControl className="carouselControl" direction="next" directionText="Next" onClickHandler={this.next} />
                </Carousel>
            </div>
        );
    }
}

export default Example;