import React from "react";
import { FiCheckCircle } from "react-icons/fi";
const WhyChoose = () => {
  const chooseUs = [
    {
      id: "01",
      title: "Vast Network of Opportunities",
      description:
        "Our job portal connects you to a vast network of job opportunities across various industries, from entry-level positions to executive roles.",
    },
    {
      id: "02",
      title: "User-Friendly Platform",
      description:
        "Our user-friendly platform ensures a seamless job search experience. With intuitive navigation and clear design, finding your ideal job is quick and effortless.",
    },
    {
      id: "03",
      title: "Customized Job Matches",
      description:
        "Our advanced algorithms tailor job recommendations to your skills and preferences, streamlining your search for the perfect career fit.",
    },
    {
      id: "04",
      title: "Verified Employers",
      description:
        "Rest easy knowing that our job portal partners with verified employers, ensuring the legitimacy and trustworthiness of the job opportunities you'll find on our platform.",
    },
  ];
  return (
    <div className="">
      <div className="container mx-auto py-6  px-4 pb-20 mt-20">
        <div className="card card-side bg-base-100 grid-cols-1 grid md:grid-cols-2 items-center">
          <figure className=" grid grid-cols-2 gap-3">
            <div className="space-y-2 items-center">
              <img
                className="rounded-lg border"
                src="https://img.freepik.com/free-vector/mobile-ux-concept-illustration_114360-4276.jpg"
                alt="Movie"
              />
              <img
                className="rounded-lg border"
                src="https://www.jobspikr.com/wp-content/uploads/2020/10/shutterstock_1138070138.png"
                alt="Movie"
              />
            </div>
            <div className="space-y-2 items-center">
              <img
                className="rounded-lg border"
                src="https://img.freepik.com/premium-vector/video-call-virtual-business-online-conference-meeting-mobile-people-communication-man-watch-webinar-media-seminar-decent-vector-concept_53562-17037.jpg"
                alt="Movie"
              />

              <img
                className="rounded-lg border"
                src="https://img.freepik.com/free-vector/selecting-team-concept-illustration_114360-5473.jpg"
                alt="Movie"
              />
            </div>
          </figure>
          <div className="card-body">
            <h2 className="card-title text-green-600 text-4xl font-bold  py-7 justify-center lg:justify-start">
              Why Choose Us
            </h2>

            {chooseUs.map((item) => (
              <div className="mb-4">
                <div className="flex gap-3 items-center">
                  <FiCheckCircle className="text-green-600  text-2xl"></FiCheckCircle>
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                </div>
                <p className="text-gray-400 ml-10 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
