import ContentWrapper from './ContentWrapper';
import { FaCircleCheck } from 'react-icons/fa6';

const services = [
  {
    title: 'Digital Strategy and Design',
    points: [
      'UI/UX Consulting',
      'Technology Consulting',
      'Product Discovery',
      'Experience Design',
    ],
  },
  {
    title: 'Product Engineering',
    points: [
      'Custom Application Development',
      'Mobile App Development',
      'Legacy Modernization',
      'DevOps Services',
      'Quality Engineering',
      'Software Maintenance and Support',
    ],
  },
  {
    title: 'Cloud and Infrastructure',
    points: [
      'Cloud Consulting',
      'Cloud Migration',
      'Managed Cloud Services',
      'Infrastructure Management',
      'CloudOps',
    ],
  },
  {
    title: 'Intelligent Automation',
    points: [
      'Robotic Process Automation',
      'Intelligent Document Processing',
      'AI/ML Integration',
    ],
  },
  {
    title: 'Application Security',
    points: [
      'Security Assessments',
      'Penetration Testing',
      'Threat Modeling',
      'Vulnerability Management',
    ],
  },
  {
    title: 'Business Intelligence',
    points: [
      'Data Warehousing',
      'Data Visualization',
      'Predictive Analytics',
      'Big Data Consulting',
    ],
  },
];

function ServicePage() {
  return (
    <div className="py-12 bg-gray-100">
      <ContentWrapper>
        <div className="service-page py-12 bg-gray-100">
          <div className="text-center mb-12">
            <h1 className="text-4xl text-yellow-500 font-semibold">
              Service offerings
            </h1>
            <p className="text-gray-700 mt-4">
              Get the full spectrum of software development services all in one
              place, with flexible engagement models to suit your every need.
            </p>
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="service-card bg-white  p-7 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <h3 className="text-xl font-semibold hover:text-yellow-600">
                    {service.title}
                  </h3>
                </div>
                <ul className="text-gray-700 space-y-2">
                  {service.points.map((point, idx) => (
                    <li
                      key={idx}
                      className="flex items-center hover:text-yellow-500"
                    >
                      <span className="mr-2 text-black-500 text-xl">
                        <FaCircleCheck />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
}

export default ServicePage;
