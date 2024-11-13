import React, { useState } from 'react';
import { CiStar, CiDollar } from 'react-icons/ci';

const pricingData = [
    {
        id: 1,
        title: "Basic Package",
        price: "₹1500",
        features: [
            "Upto 5 days a week",
            "Cardio Included",
            "Access to Guide Videos",
            "Sponsored Sweatshirts"
        ],
        iconType: "star"
    },
    {
        id: 2,
        title: "Premium Package",
        price: "₹2500",
        features: [
            "Upto 6 days a week",
            "Cardio Included",
            "Access to Guide Videos",
            "Sponsored Sweatshirts"
        ],
        iconType: "dollar"
    },
    {
        id: 3,
        title: "Diamond Package",
        price: "₹4000",
        features: [
            "Upto 7 days a week",
            "Cardio Included",
            "Access to Guide Videos",
            "Sponsored Sweatshirts",
            "1-1 Personal Mentoring"
        ],
        iconType: "star"
    }
];

const Pricing = () => {
    const [hoveredCard, setHoveredCard] = useState(null);

    const PricingCard = ({ id, title, price, features, iconType }) => {
        const isHovered = hoveredCard === id;
        const icon = iconType === "star" ? <CiStar size={40} /> : <CiDollar size={40} />;

        return (
            <article
                onMouseEnter={() => setHoveredCard(id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`p-6 rounded-lg shadow-lg border transition duration-300 ${
                    isHovered ? "border-orange-500 bg-orange-50" : "border-gray-200"
                }`}
            >
                <header className="mb-6">
                    <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center text-orange-400 bg-orange-100 rounded-full">
                        {icon}
                    </div>
                    <h1 className="text-2xl font-semibold text-black">{title}</h1>
                    <h2 className="text-4xl font-bold text-black mt-2">{price}</h2>
                </header>
                <ul className="mb-6">
                    {features.map((feature, index) => (
                        <li
                            key={index}
                            className={`flex items-center justify-center text-lg ${
                                index > 1 && !isHovered ? "text-gray-400" : "text-black"
                            }`}
                        >
                            <i className="ri-checkbox-circle-line mr-2"></i> {feature}
                        </li>
                    ))}
                </ul>
                <a
                    href="./offer.jsx"
                    className="py-4 px-9 text-xl group relative text-white bg-[orangered] hover:bg-orange-600 rounded-sm transition duration-300 inline-flex items-center justify-center"
                >
                    Purchase Now <i className="ri-arrow-right-line ml-2"></i>
                </a>
            </article>
        );
    };

    return (
        <section className="py-12 bg-gray-50" id="pricing">
            <div className="container mx-auto px-6 text-center">
                <div className="mb-12">
                    <h2 className="text-2xl font-semibold text-[#f04e3c] relative inline-block">
                        <p className="relative before:absolute before:h-[3px] before:w-16 before:bg-[#f04e3c] before:left-[-110px] before:top-1/2 before:transform before:-translate-y-1/2">
                            Pricing
                        </p>
                    </h2>
                    <div className="text-5xl font-extrabold text-black mt-4">
                        <h1>OUR SPECIAL PLAN</h1>
                    </div>
                </div>
                <div className="grid gap-8 md:grid-cols-3">
                    {pricingData.map((packageData) => (
                        <PricingCard 
                            key={packageData.id} 
                            id={packageData.id}
                            title={packageData.title}
                            price={packageData.price}
                            features={packageData.features}
                            iconType={packageData.iconType}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
