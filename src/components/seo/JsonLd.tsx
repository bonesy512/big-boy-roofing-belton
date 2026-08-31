import React from "react";

export default function JsonLd() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": ["RoofingContractor", "HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": "https://www.bigboyroofingbelton.com/#business",
    name: "Big Boy Roofing",
    alternateName: "Big Boy Roofing Belton",
    slogan: "Built for the People!",
    description:
      "Locally owned roofing company in Belton, TX providing residential roof replacements, emergency hail and storm damage repairs, IKO architectural shingles, insurance claim assistance, and free 21-point roof and attic inspections across Bell County.",
    url: "https://www.bigboyroofingbelton.com",
    telephone: "+12542394393",
    email: "Juanbarron1214@gmail.com",
    image: "https://www.bigboyroofingbelton.com/images/logo.jpg",
    logo: "https://www.bigboyroofingbelton.com/images/logo.jpg",
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "2012 S Wall St",
      addressLocality: "Belton",
      addressRegion: "TX",
      postalCode: "76513",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.0560,
      longitude: -97.4645,
    },
    founder: [
      {
        "@type": "Person",
        name: "Juan Barron",
      },
      {
        "@type": "Person",
        name: "Austin Farr",
      },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "07:00",
        closes: "19:00",
      },
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Belton",
      },
      {
        "@type": "City",
        name: "Temple",
      },
      {
        "@type": "City",
        name: "Salado",
      },
      {
        "@type": "City",
        name: "Killeen",
      },
      {
        "@type": "City",
        name: "Harker Heights",
      },
      {
        "@type": "AdministrativeArea",
        name: "Bell County",
      },
      {
        "@type": "AdministrativeArea",
        name: "Central Texas",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      bestRating: "5",
      ratingCount: "21",
      reviewCount: "21",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Roofing Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Complete Roof Replacement (IKO Architectural Shingles)",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Hail & Wind Storm Damage Insurance Claim Assistance",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Emergency Roof Leak Repair",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Seamless Gutter Installation",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "21-Point Free Roof & Attic Drone Inspection",
          },
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How do I know if my Belton or Temple roof has hail damage after a storm?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Hail damage often presents as bruised fiberglass mats, dislodged granules, dented metal flashing, and soft spots. Big Boy Roofing provides a 100% free 21-point photo and drone inspection to verify whether you have legitimate storm damage before contacting insurance.",
        },
      },
      {
        "@type": "Question",
        name: "Will my insurance rates increase if I file a hail damage claim in Texas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In Texas, hail and wind storms are classified as Acts of God. Insurance carriers generally cannot single out an individual homeowner for rate increases based solely on a weather storm claim.",
        },
      },
      {
        "@type": "Question",
        name: "Do you charge anything for your drone and roof inspections?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Our 21-point roof and attic inspections are 100% free with zero obligation. We provide high-resolution photos and honest assessment notes.",
        },
      },
      {
        "@type": "Question",
        name: "Why is it important to have Big Boy Roofing present when the insurance adjuster visits?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Having Juan Barron or Austin Farr on your roof with safety gear ensures that all damage—including valley metal, chimney crickets, and pipe boots—is documented on the spot.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
}
