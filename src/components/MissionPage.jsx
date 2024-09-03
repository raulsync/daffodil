import { useState, useEffect } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

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
    <div className="mission-content flex flex-col items-center w-full gap-5 h-auto bg-white p-8">
      <div className="max-w-[50%] text-center mb-4">
        <h1 className="text-4xl text-yellow-500 font-semibold">
          Our mission: Your complete success, realized
        </h1>
      </div>
      <div className="max-w-[60%] text-center mb-8">
        <p>
          Why settle for a vendor when what you truly need is a software
          development partner? Someone who understands your industry, grasps the
          intricacies of your vision, and executes it with precision,
          efficiency, and on-schedule. This is what we bring to the table.
        </p>
      </div>
      <div className="carousel relative flex justify-center items-center w-full ">
        <button
          onClick={handlePrevClick}
          className="absolute left-60 text-2xl p-3  text-yellow-400 hover:bg-yellow-600 transition-colors"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <FaAngleLeft />
        </button>
        <div className="flex w-[70%] gap-4 justify-center items-center">
          {visibleImages.map((image, index) => (
            <div
              key={index}
              className="w-[20%] bg-white shadow-md rounded-lg flex items-center justify-center p-4"
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
          className="absolute right-60 text-2xl p-3  text-yellow-400 hover:bg-yellow-600 transition-colors"
          style={{ top: '50%', transform: 'translateY(-50%)' }}
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default MissionPage;
