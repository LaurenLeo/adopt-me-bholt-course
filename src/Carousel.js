import React from 'react';

class Carousel extends React.Component {
    state = {
        photos: [],
        active: 0
    };

    //this filters out only the large photos and updates state, 'creating an image carousel' 8:40
    static getDerivedStateFromProps({ media }) { 
        let photos = ['http://placecorgi.com/600/600'];

        if(media.length) {
            photos = media.map(({ large }) => large);
        }

        return { photos };
    }
    
    handleIndexClick = event => {
        this.setState({
            active: +event.target.dataset.index
            //plus sign forces it to number, less work than ParseInt
        })
    }

    render() {
        const { photos, active } =  this.state;

        return(
            <div className="carousel">
                <img src={photos[active]} alt="animal" />
                <div className="carousel-smaller">
                    {photos.map((photo, index) => (
                    //eslint-disable-next-line
                       <img 
                       key={photo}
                       onClick={this.handleIndexClick}
                       data-index={index}
                       src={photo}
                       className={index === active ? "active": ""}
                       alt="animal thumbnail"
                       /> 
                    ))}
                </div>
            </div>
        )
    }
}

export default Carousel;