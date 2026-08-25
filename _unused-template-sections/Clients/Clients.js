import React from 'react';

/**
 * Companies & products I have worked on.
 * TODO: drop real logo files into /public/img/ and add an `logo` key
 * (e.g. logo: "/img/brand-strategyr.png") — the markup renders it automatically.
 */
const clients = [
    { name: "StrategyR" },
    { name: "Global Industry Analysts" },
    { name: "MarketGlass" },
    { name: "Evolv" },
    { name: "eSmart Permit" },
    { name: "iSpatial Techno Solutions" },
    { name: "BizAcumen Research" },
];

const ClientItem = ({ client, keyPrefix, index }) => (
    <li key={`${keyPrefix}-${index}`} className="item">
        <span className="marquee-item rounded">
            <div className="marquee-content">
                {client.logo ? (
                    <img src={client.logo} alt={client.name} />
                ) : (
                    <span className="brand-name">{client.name}</span>
                )}
            </div>
        </span>
    </li>
);

const Clients = () => {
    return (
        <div className="marquee">
            <ul className="list-unstyled">
                {clients.map((client, index) => (
                    <ClientItem key={`c-${index}`} client={client} keyPrefix="c" index={index} />
                ))}
                {/* Duplicate items for seamless marquee effect */}
                {clients.map((client, index) => (
                    <ClientItem key={`d-${index}`} client={client} keyPrefix="d" index={index} />
                ))}
            </ul>
        </div>
    );
};

export default Clients;
