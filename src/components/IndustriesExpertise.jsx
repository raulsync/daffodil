import ContentWrapper from './ContentWrapper';

const IndustryExpertise = () => {
  const industries = [
    { title: 'Healthcare', icon: '🩺' },
    { title: 'Software & Technology', icon: '💻' },
    { title: 'Fintech', icon: '📱' },
    { title: 'Banking', icon: '🏦' },
    { title: 'Insurance', icon: '📝' },
    { title: 'Real Estate', icon: '🏗️' },
    { title: 'Travel & Transportation', icon: '✈️' },
    { title: 'Media & Entertainment', icon: '🎬' },
    { title: 'Public Sector', icon: '👥' },
  ];

  return (
    <div className="w-full h-screen">
      <ContentWrapper>
        <section className="bg-white py-12 ">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-yellow-500">
              Expertise that caters to a diverse range of industries
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Stay ahead with best practices, emerging trends, compliance, and
              top-tier security standards in your industry.
            </p>
          </div>
          <div className="mt-8 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-6 bg-white shadow-lg rounded-md gap-5 h-32"
              >
                <div className="flex items-center space-x-2">
                  <h3 className="text-lg font-semibold text-black hover:text-yellow-600">
                    {industry.title}
                  </h3>
                </div>
                <div className="text-yellow-500 text-2xl">→</div>
                <div className="text-3xl">{industry.icon}</div>
              </div>
            ))}
          </div>
        </section>
      </ContentWrapper>
    </div>
  );
};

export default IndustryExpertise;
