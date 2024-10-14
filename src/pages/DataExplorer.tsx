import React, { useEffect, useState } from 'react';
import { DataLink } from '../urls.tsx';
import './css/DataExplorer.css';
import SummaryTable from '../components/SummaryTable.tsx';
import DisplayCountries from '../components/CountryDisplay.tsx';

/**
 * Abstract representation of a country with only essential information.
 *
 * @prop {string} continent The continent to which the country belongs
 * @prop {number} continentCode The code representing the continent
 * @prop {string} iso The ISO 3166-1 alpha-2 code of the country
 * @prop {string} name The name of the country
 */
export interface AbstractRepresentationCountry {
    continent: string;
    continentCode: number;
    iso: string;
    name: string;
}

/**
 * Fetches countries from the data link and filters them to only include the
 * continent, iso, name, and continentCode fields.
 *
 * @returns {Promise<AbstractRepresentationCountry[]>} A promise containing an
 * array of abstract representation of countries with only essential information.
 */
const fetchCountries = async (): Promise<AbstractRepresentationCountry[]> => {
    const response = await fetch(DataLink);
    const data = await response.json();

    // Filter the data to only include the needed fields
    const filteredData = data.map((country: any) => ({
        continent: country.continent,
        continentCode: country.continentCode,
        iso: country.iso,
        name: country.name
    }));

    return filteredData;
};

/**
 * Page component for the data explorer.
 *
 * This renders a page with a data explorer
 * that displays a list of countries grouped by using continent code.
 */
const DataExplorer: React.FC = () => {
    const [essentialInfocountries, setCountries] = useState<AbstractRepresentationCountry[]>([]);
    const [continentDictionary, setContinentDictionary] = useState<Record<number, string>>({});

    useEffect(() => {
        fetchCountries()
            .then(filteredData => {
                setCountries(filteredData);

                // Create the dictionary where keys are continent codes and values are continent names
                const continentDict = filteredData.reduce((acc, country) => {
                    acc[country.continentCode] = country.continent;
                    return acc;
                }, {} as Record<number, string>);

                setContinentDictionary(continentDict);
            })
            .catch(error => console.error("Error fetching countries:", error));
    }, []);

    // Group countries by continent code
    const groupedCountries = essentialInfocountries.reduce((acc, country) => {
        if (!acc[country.continentCode]) {
            acc[country.continentCode] = [];
        }
        acc[country.continentCode].push(country);
        return acc;
    }, {} as Record<number, AbstractRepresentationCountry[]>);

    return (
        <div className="data-explorer">
            <h1 className="data-explorer-title">Data Explorer</h1>
            <h5 style={{ marginTop: '-30px' }}>
                <span className="material-icons">public</span>
                Index <span className="text-gray">of countries</span>
            </h5>
            <div className="row mt-5">
                <DisplayCountries
                    groupedCountries={groupedCountries}
                    continentDictionary={continentDictionary}
                />
                <SummaryTable />
            </div>
        </div>
    );
};

export default DataExplorer;
