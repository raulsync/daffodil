import React from 'react';
import ContentWrapper from './ContentWrapper';

function HighlightsPage() {
  return (
    <ContentWrapper>
      <div className="highlights-page py-12 bg-white">
        <div className="text-center mb-12">
          <h1 className="text-4xl text-center text-yellow-500 font-bold">
            What sets Daffodil Software a class apart
          </h1>
          <p className="text-gray-700 mt-4">
            Experience a distinctive blend of innovation, expertise, and
            customer-centric approach.
          </p>
        </div>
        <div className="stats grid grid-cols-2 gap-8">
          <div className="container mx-auto flex flex-col gap-5 mb-12">
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Unmatched technical expertise
              </h2>
              <p className="text-gray-700">
                As one of the top technology consulting firms, we pride
                ourselves on having a team of seasoned business analysts, UI/UX
                designers, developers, architects, DevOps engineers, and more.
                Each of the talents is an expert in their respective domain and
                equipped with the latest technologies and tools.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Tailored solutions for your unique challenges
              </h2>
              <p className="text-gray-700">
                Every business is unique, and so are its software application
                needs. We provide bespoke software solutions designed to fit
                your specific requirements, ensuring they align perfectly with
                your business objectives and operational workflows.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">
                Subject matter expertise & mature processes
              </h2>
              <p className="text-gray-700">
                [Your Company] is a CMMI level 3 accredited company, which
                implies that our subject matter expertise and processes are at
                par with the globally accepted standards.
              </p>
            </div>
          </div>
          <div className="container mx-auto grid grid-cols-2 gap-4 text-center">
            <div className="stat-card p-2 flex flex-col justify-center gap-3 border border-yellow-500 items-center  rounded-lg shadow-md">
              <h3 className="text-4xl text-yellow-500 font-semibold">25+</h3>
              <p className="text-gray-700 ">
                years of software engineering excellence
              </p>
            </div>
            <div className="stat-card p-2 flex flex-col justify-center gap-3 border border-yellow-500 items-center  rounded-lg shadow-md">
              <h3 className="text-4xl text-yellow-500 font-semibold">150+</h3>
              <p className="text-gray-700 mt-2">active clients globally</p>
            </div>
            <div className="stat-card p-2 flex flex-col justify-center gap-3 border border-yellow-500 items-center  rounded-lg shadow-md">
              <h3 className="text-4xl text-yellow-500 font-semibold">4.8</h3>
              <p className="text-gray-700 mt-2">average CSAT score</p>
            </div>
            <div className="stat-card p-2 flex flex-col justify-center gap-3 border border-yellow-500 items-center  rounded-lg shadow-md">
              <h3 className="text-4xl text-yellow-500 font-semibold">95%</h3>
              <p className="text-gray-700 mt-2">customer retention rate</p>
            </div>
            <div className="stat-card p-2 flex flex-col justify-center gap-3 border border-yellow-500 items-center  rounded-lg shadow-md">
              <h3 className="text-4xl text-yellow-500 font-semibold">1000+</h3>
              <p className="text-gray-700 mt-2">software engineering experts</p>
            </div>
            <div className="stat-card p-2 flex flex-col justify-center gap-3 border border-yellow-500 items-center  rounded-lg shadow-md">
              <h3 className="text-4xl text-yellow-500 font-semibold">50+</h3>
              <p className="text-gray-700 mt-2">subject matter experts</p>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  );
}

export default HighlightsPage;
