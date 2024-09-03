import { useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images = [
  '/image1.png',
  '/image2.png',
  '/image3.png',
  '/image4.png',
  '/image5.png',
  '/image6.png',
];

function MissionPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 3 : prevIndex - 3,
    );
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 3) % images.length);
  };

  return (
    <div className="mission-content flex items-center  w-full justify-center flex-col gap-5 bg-gray-200 h-[70%]">
      <div className="content flex flex-col justify-center w-full items-center gap-4">
        <div className="max-w-[60%] flex">
          <h1 className="text-yellow-600 text-2xl font-semibold">
            Our Mission : Your Complete success, realized
          </h1>
        </div>
        <div className="flex justify-center">
          <p className="max-w-[60%] text-lg">
            Why settle for a vendor when what you truly need is a software
            development partner? Someone who understands your industry, grasps
            the intricacies of your vision, and executes it with precision,
            efficiency, and on-schedule. This is what we bring to the table.
          </p>
        </div>
      </div>
      <div className="carousel relative  flex justify-center items-center w-full ">
        <button
          onClick={handlePrevClick}
          className="absolute left-20 text-xl p-2 bg-gray-300 text-white hover:bg-gray-800 transition-colors "
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <FaArrowLeft />
        </button>
        <div className="flex w-[90%] h-30 gap-4 justify-center items-center">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className="w-1/4 h-30 bg-white shadow-md rounded-lg flex items-center justify-center p-4"
            >
              <img
                src={image}
                alt={`Slide ${index}`}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          ))}
        </div>
        <button
          onClick={handleNextClick}
          className="absolute right-20 text-xl p-2 bg-gray-300 text-white hover:bg-gray-800 transition-colors"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
}

export default MissionPage;
