import ContentWrapper from './ContentWrapper';

function HeroSection() {
  return (
    <div
      className="hero-section h-[100vh] w-full bg-gray-50 relative px-8"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/3184299/pexels-photo-3184299.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <ContentWrapper>
        <div className="content text-center w-full flex justify-center items-center flex-col">
          <h1 className="text-5xl font-bold text-yellow-600">
            Your trusted partner for software development excellence
          </h1>
          <p className="text-black w-1/2 text-lg mt-4">
            Efficiently transform your vision into a market-ready software
            application that stands out for its robustness, reliability, and
            user experience.
          </p>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default HeroSection;
