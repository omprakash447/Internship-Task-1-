import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';
import './Containers.scss'; // Create this file for styles

const Containers = () => {
    const sliderRef = useRef(null); // Ref to access the Slider instance

    const featureCards = [
        { id: 1, title: 'Service Title 1', description: 'This is a brief description of the service being offered.', img: 'https://via.placeholder.com/300x200' },
        { id: 2, title: 'Service Title 2', description: 'This is a brief description of the service being offered.', img: 'https://via.placeholder.com/300x200' },
        { id: 3, title: 'Service Title 3', description: 'This is a brief description of the service being offered.', img: 'https://via.placeholder.com/300x200' },
        { id: 4, title: 'Service Title 4', description: 'This is a brief description of the service being offered.', img: 'https://via.placeholder.com/300x200' },
        { id: 5, title: 'Service Title 5', description: 'This is a brief description of the service being offered.', img: 'https://via.placeholder.com/300x200' },
        { id: 6, title: 'Service Title 6', description: 'This is a brief description of the service being offered.', img: 'https://via.placeholder.com/300x200' },
        { id: 7, title: 'Service Title 7', description: 'This is a brief description of the service being offered.', img: 'https://via.placeholder.com/300x200' },
        { id: 8, title: 'Service Title 8', description: 'This is a brief description of the service being offered.', img: 'https://via.placeholder.com/300x200' },
        { id: 9, title: 'Service Title 9', description: 'This is a brief description of the service being offered.', img: 'https://via.placeholder.com/300x200' },
        { id: 10, title: 'Service Title 10', description: 'This is a brief description of the service being offered.', img: 'https://via.placeholder.com/300x200' },
        { id: 11, title: 'Service Title 11', description: 'This is a brief description of the service being offered.', img: 'https://via.placeholder.com/300x200' },
        { id: 12, title: 'Service Title 12', description: 'This is a brief description of the service being offered.', img: 'https://via.placeholder.com/300x200' },
        { id: 13, title: 'Service Title 13', description: 'This is a brief description of the service being offered.', img: 'https://via.placeholder.com/300x200' },
        { id: 14, title: 'Service Title 14', description: 'This is a brief description of the service being offered.', img: 'https://via.placeholder.com/300x200' },
        { id: 15, title: 'Service Title 15', description: 'This is a brief description of the service being offered.', img: 'https://via.placeholder.com/300x200' },
        { id: 16, title: 'Service Title 16', description: 'This is a brief description of the service being offered.', img: 'https://via.placeholder.com/300x200' },
        { id: 17, title: 'Service Title 17', description: 'This is a brief description of the service being offered.', img: 'https://via.placeholder.com/300x200' },
        { id: 18, title: 'Service Title 18', description: 'This is a brief description of the service being offered.', img: 'https://via.placeholder.com/300x200' },
        { id: 19, title: 'Service Title 19', description: 'This is a brief description of the service being offered.', img: 'https://via.placeholder.com/300x200' }
    ];

    const itemsPerSlide = 4; // Number of items to show per slide
    const totalSections = Math.ceil(featureCards.length / itemsPerSlide); // Calculate total sections

    const settings = {
        dots: false, // Disable default dots
        infinite: false, // Disable infinite scrolling
        speed: 500,
        slidesToShow: itemsPerSlide,
        slidesToScroll: itemsPerSlide, // Scroll by the number of items per slide
        beforeChange: (_current, next) => {
            setActiveDot(Math.floor(next / itemsPerSlide)); // Update the active dot based on the next index
        },
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const [activeDot, setActiveDot] = React.useState(0);

    const handleNext = () => {
        sliderRef.current.slickNext(); // Go to the next slide
    };

    const handlePrev = () => {
        sliderRef.current.slickPrev(); // Go to the previous slide
    };

    return (
        <div className="features-section">
            <h1 className="section-title">Our Services</h1>
            <div className="carousel-container">
                <button className="nav-button left" onClick={handlePrev} disabled={activeDot === 0}>
                    Left
                </button>
                <Slider ref={sliderRef} {...settings}>
                    {featureCards.map((feature) => (
                        <div key={feature.id} className="slider-item">
                            <div className="card-content">
                                <img src={feature.img} alt={feature.title} className="feature-image" />
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
                <button
                    className="nav-button right"
                    onClick={handleNext}
                    disabled={activeDot === totalSections - 1}
                >
                    Right
                </button>
            </div>

            {/* Custom dots based on total sections */}
            <div className="slick-dots">
                {Array.from({ length: totalSections }).map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${activeDot === index ? 'active' : ''}`}
                        onClick={() => {
                            sliderRef.current.slickGoTo(index * itemsPerSlide); // Go to the selected dot's slide
                            setActiveDot(index); // Update active dot
                        }}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Containers;
