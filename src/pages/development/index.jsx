import React from 'react';
import img1 from '../../assets/Banner/Sdlc.png';
import PageTitle from '../../components/Pagetitle/PageTitle';
import { GrUserExpert } from "react-icons/gr";
import { FaUserTie } from "react-icons/fa6";
import { BsGraphUpArrow } from "react-icons/bs";
import { GrHostMaintenance } from "react-icons/gr";

const Development = () => {

  const styIcon = "text-4xl text-slate-500";

  const data = [
    {
      id: 1,
      icon: <GrUserExpert className={styIcon} />,
      title: "Expert Team",
      description: "VMK Tech solutions has a team of experienced developers and designers who have a deep understanding of the latest technologies and trends in the industry.",
    },
    {
      id: 2,
      icon: <FaUserTie className={styIcon} />,
      title: "Professional Advisors",
      description: "VMK Tech solutions has a team of experienced developers and designers who have a deep understanding of the latest technologies and trends in the industry.",
    },
    {
      id: 3,
      icon: <BsGraphUpArrow className={styIcon} />,
      title: "Quality Assurance",
      description: "VMK Tech solutions has a team of experienced developers and designers who have a deep understanding of the latest technologies and trends in the industry.",
    },
    {
      id: 4,
      icon: <GrHostMaintenance className={styIcon} />,
      title: "24/7 Support",
      description: "VMK Tech solutions has a team of experienced developers and designers who have a deep understanding of the latest technologies and trends in the industry.",
    }
  ]

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <div className="inline-block text-slate-500 px-4 py-1 mb-4 text-xl sm:text-3xl font-bold uppercase tracking-wider">
            Why...?
          </div>
          <PageTitle title="Why choose VMK Tech solutions For Best IT Services in India" />
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.map((item) => (
            <div
              key={item.id}
              className="xl:w-1/4 md:w-1/2 p-4 transition-transform duration-300 ease-in-out transform hover:scale-105 "
            >
              <div
              
                className="border border-gray-200 p-6 rounded-lg space-y-4 shadow-md hover:shadow-lg hover:bg-slate-100"
              >
                <div className="h-full inline-flex items-center justify-center rounded-full bg-indigo-100 p-5">
                  {item.icon}
                </div>
                <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                  {item.title}
                </h2>
                <hr className="border-2 border-t-slate-500" />
                <p className="leading-relaxed text-base">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Development
