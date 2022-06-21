import { useRef } from "react";
import "./carousel.css";

const Carousel = ({images}) => {
    const carousel = useRef()

    const incrementCarousel = (delta) => {
        if(carousel.current) {
            const width = carousel.current.offsetWidth;
            carousel.current.scrollTo(carousel.current.scrollLeft + width * delta, 0);
        }
    }

    return <div className="carousel-container">
        <div className="carousel-btn left-btn" onClick={() => incrementCarousel(-1)}></div>
        <div className="carousel-btn right-btn" onClick={() => incrementCarousel(1)}></div>
        
        <div className="carousel" ref={carousel}>
            {images.map((img,idx) => (
                <div className="carousel-item" key={`${idx}-${img.title}`}>
                    <img src={img.src} alt={img.title}></img>
                    <p>{img.title}</p>
                </div>
            ))}
        </div>
    </div>
}

export default Carousel;