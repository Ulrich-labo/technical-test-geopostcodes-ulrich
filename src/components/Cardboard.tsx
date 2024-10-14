import React from 'react';
import './css/Cardboard.css';
import { useNavigate } from 'react-router-dom';

/**
 * Props for the component CardComponent
 *
 * @prop {string} imageSrc URL of the image inside the card
 * @prop {string} title Title of the card
 * @prop {string} ul  URL for the redirection once the card is clicked
 */
interface CardProps {
    imageSrc: string;
    title: string;
    ul: string;
}

/**
 * Component representing a card with an image and a title
 *
 * @param {CardProps} props Properties of the component
 * @returns {ReactElement} The component
 */
const CardComponent: React.FC<CardProps> = ({ imageSrc, title, ul }) => {

    //used to handle the redirection when the card is clicked
    const navigate = useNavigate();
    const handleCardClick = () => {
        ul === "explorer" ? navigate("/data-explorer") : navigate('/user-message');
    };

    return (
        <div className="col">
            <div className="card card-background" onClick={handleCardClick} style={{ cursor: 'pointer', maxHeight: '800px' }}>
                <div className="card-body d-flex flex-column justify-content-between" style={{ height: '100%' }}>
                    <h5 className="card-title text-white mb-3" style={{ textAlign: 'left' }}>{title}</h5>
                    <img
                        src={imageSrc}
                        className="card-img img-fluid"
                        alt={title}
                        style={{ objectFit: 'contain', height: '150px', width: '50%', alignSelf: 'flex-end' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
