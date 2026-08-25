import React from 'react';

/**
 * Companies and products I have worked on.
 * TODO: drop real logo files into /public/img/ and add a `logo` key
 * (e.g. logo: "/img/brand-strategyr.png") — the markup renders it automatically.
 */
const companies = [
    { name: "StrategyR" },
    { name: "Global Industry Analysts" },
    { name: "MarketGlass" },
    { name: "Evolv" },
    { name: "eSmart Permit" },
    { name: "iSpatial Techno Solutions" },
    { name: "BizAcumen Research" },
];

const CompanyItem = ({ company }) => (
    <li className="item">
        <span className="marquee-item rounded">
            <div className="marquee-content">
                {company.logo ? (
                    <img src={company.logo} alt={company.name} />
                ) : (
                    <span className="brand-name">{company.name}</span>
                )}
            </div>
        </span>
    </li>
);

const Companies = () => {
    return (
        <div className="marquee" aria-label="Companies and products I have worked on">
            <ul className="list-unstyled">
                {companies.map((company, index) => (
                    <CompanyItem key={`a-${index}`} company={company} />
                ))}
                {/* Duplicate items for seamless marquee effect */}
                {companies.map((company, index) => (
                    <CompanyItem key={`b-${index}`} company={company} />
                ))}
            </ul>
        </div>
    );
};

export default Companies;
