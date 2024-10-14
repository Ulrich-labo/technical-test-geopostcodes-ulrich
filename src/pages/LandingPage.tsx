import React from 'react';
import CardComponent from '../components/Cardboard.tsx';
import { dataExplorerLink, downloadCenterLink, KBLink, MapExplorerLink } from '../urls.tsx';
import BackgroundVideo from '../components/BackgroundVideo.tsx';

function LandingPage() {
    return (
        <>   <BackgroundVideo />
        <div className="container text-center" style={{ position: 'relative', zIndex: 1 }}>
            <h1 className="g-5 text-white">Welcome to GeoPostcodes' Customer Portal</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <CardComponent imageSrc={dataExplorerLink} title="Data Explorer" ul="explorer" />
                <CardComponent imageSrc={MapExplorerLink} title="Map Explorer" ul='-'/>
                <CardComponent imageSrc={downloadCenterLink} title="Download Center" ul='-' />
                <CardComponent imageSrc={KBLink} title="Knowledge Base" ul='-' />
            </div>
        </div>
        </>
    );
};

export default LandingPage;
