import React from 'react';
import ContentWrapper from './ContentWrapper';

const RecognitionSection = () => {
  const logos = [
    { src: '/image8.png', alt: 'Everest Group Logo' },
    { src: '/image9.png', alt: 'Gartner Logo' },
    { src: 'image10.png', alt: 'Frost & Sullivan Logo' },
    { src: 'image11.png', alt: 'Deloitte Logo' },
    { src: 'image12.png', alt: 'ISG Provider Lens Logo' },
    { src: 'image13.png', alt: 'Zinnov Zones Logo' },
  ];

  return (
    <div className="section w-full bg-emerald-50">
      <ContentWrapper>
        <section className="py-12 w-full h-[80vh]  flex flex-col gap-6">
          <div className="w-[100%] mx-auto text-center">
            <h2 className="text-3xl font-bold text-yellow-500">
              Recognized excellence, proven capabilities
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Daffodil has been recognized as the most preferred software
              development partner by leading analysts across the globe.
            </p>
          </div>
          <div className="mt-8 w-[100%]  place-content-center place-items-center grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex items-center w-[70%] h-40 justify-center p-4 bg-white shadow-lg rounded-md"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-20"
                />
              </div>
            ))}
          </div>
        </section>
      </ContentWrapper>
    </div>
  );
};

export default RecognitionSection;
