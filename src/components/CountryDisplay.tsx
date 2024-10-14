import React from "react";
import { AbstractRepresentationCountry } from "../pages/DataExplorer";
import { useNavigate } from 'react-router-dom';

const getFlagUrl = (iso: string) => `https://flagcdn.com/w320/${iso.toLowerCase()}.png`;

/**
 * Props for the component DisplayCountries
 *
 * @prop {Record<number, AbstractRepresentationCountry[]>} groupedCountries
 *        Object where the keys are the continent codes and the values are arrays
 *        of countries belonging to the same continent
 * @prop {Record<number, string>} continentDictionary
 *        Dictionary mapping continent codes to continent names
 */
interface CountriesProps {
    groupedCountries: Record<number, AbstractRepresentationCountry[]>;
    continentDictionary: Record<number, string>;
}

/**
 * Component that displays a list of countries grouped by continent.
 *
 * @param {Record<number, AbstractRepresentationCountry[]>} groupedCountries
 *        Object where the keys are the continent codes and the values are arrays
 *        of countries belonging to the same continent
 * @param {Record<number, string>} continentDictionary
 *        Dictionary mapping continent codes to continent names
 *
 * @returns {React.ReactElement} The component
 */
function DisplayCountries({ groupedCountries, continentDictionary }: CountriesProps) {

    // used to handle the redirection when the card is clicked
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate('/user-message');
    };

    return (
        <div className="col-md-8">
            {Object.entries(groupedCountries).map(([continentCode, countries]) => (
                <div key={continentCode} className="continent-section">
                    <h2 className="continent-title">{continentDictionary[Number(continentCode)] || "Unknown Continent"}</h2>
                    <div className="row row-cols-1 row-cols-md-3 g-3 country-grid">
                        {countries.map((country) => (
                            <div key={country.iso} className="col">
                                <div className="card country-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
                                    <div className="card-body">
                                        <img
                                            src={getFlagUrl(country.iso)}
                                            alt={`${country.name} flag`}
                                            className="flag-img"
                                        />
                                        <h5 className="country-name">{country.name}</h5>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

export default DisplayCountries;
