
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import flutterIcon from '../../assets/Icons/icons8-flutter-128.png';
import swiftIcon from '../../assets/Icons/swift.svg';
import kotlinIcon from '../../assets/Icons/icons8-kotlin-128.png';
import reactNativeIcon from '../../assets/Icons/image 53.png';
import nodejs from "../../assets/Icons/nodejs.svg";
import ionicIcon from "../../assets/Icons/icons8-ionic-128.png";
import xamarinIcon from "../../assets/Icons/icons8-xamarin-128.png";
import angularIcon from "../../assets/Icons/angular.svg";
import titaniumIcon from "../../assets/Icons/image-removebg-preview (7).png";
const TechStack = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  })
  const technologies = [
    {
      name: 'React Native',
      icon: reactNativeIcon,
      description: 'Build cross-platform apps for iOS and Android using a single JavaScript codebase.',
      delay: 0.1
    },
    {
      name: 'Node.js',
      icon: nodejs,
      description: 'Develop scalable and high-performance backend services using JavaScript.',
      delay: 0.2
    },
    {
      name: 'Kotlin (Android)',
      icon: kotlinIcon,
      description: "Create modern, expressive, and safe Android applications using Google's preferred language.",
      delay: 0.3
    },
    {
      name: 'Swift (iOS)',
      icon: swiftIcon,
      description: "Build fast, safe, and feature-rich native iOS applications using Apple's official language.",
      delay: 0.4
    },
    {
      name: 'Flutter',
      icon: flutterIcon,
      description: "Create natively compiled applications for mobile, web, and desktop from a single Dart codebase.",
      delay: 0.5
    },
    {
      name: 'Ionic',
      icon: ionicIcon,
      description: "Develop cross-platform mobile applications using web technologies like HTML, CSS, and JavaScript.",
      delay: 0.6
    },
    {
      name: 'Xamarin',
      icon: xamarinIcon,
      description: "Build native Android, iOS, and Windows apps using C# and .NET.",
      delay: 0.7
    },
    {
      name: 'Angular',
      icon: angularIcon,
      description: "Develop dynamic and powerful web applications using Google's TypeScript-based framework.",
      delay: 0.8
    },
    // {
    //   name: 'PhoneGap',
    //   icon: phonegapIcon,
    //   description: "Create cross-platform mobile applications using HTML, CSS, and JavaScript with Cordova.",
    //   delay: 0.9
    // },
    {
      name: 'Appcelerator Titanium',
      icon: titaniumIcon,
      description: "Develop native mobile apps using JavaScript with direct access to native APIs.",
      delay: 0.10
    },
    // {
    //   name: 'Framework 7',
    //   icon: framework7Icon,
    //   description: "Create mobile apps with a native look and feel using HTML, CSS, and JavaScript.",
    //   delay: 0.11
    // }
  ];
  

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white py-10">
      <div className="max-w-6xl mx-auto px-2">
        <div
          className="text-center mb-16" data-aos="fade-up" data-aos-duration="600"
       
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#2A3DD8] mb-2">
            Technology Stacks
          </h2>
          <p className="text-gray-600 text-lg">
            We Use To Develop High Performance Mobile Apps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl py-10 px-8 shadow-lg hover:shadow-xl transition-all duration-300"  data-aos="fade-up" data-aos-duration="500" data-aos-delay={tech.delay * 100}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 mb-6">
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {tech.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;