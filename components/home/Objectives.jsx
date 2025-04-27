import React from "react";
import Heading from "../Heading";

const Objectives = () => {
  const objectives = [
    {
      title: "Build Strong Character",
      text: "Instill honesty, empathy, and accountability to shape individuals of high moral integrity",
    },
    {
      title: "Promote Ethical Leadership",
      text: "Encourage students to lead by example, upholding ethical values in all aspects of life",
    },
    {
      title: "Reinforce Quranic Teachings",
      text: "Strengthen the connection with the Quran through structured learning and reflection",
    },
    {
      title: "Encourage Intellectual & Personal Growth",
      text: "Spark meaningful conversations that challenge perspectives and nurture wisdom",
    },
    {
      title: "Promote Positivity",
      text: "Inspire students to contribute positively to society",
    },
  ];

  return (
    <section className="max-w-[1440px]">
      <Heading
        className="mb-10 text-blackText text-5xl font-extrabold text-center"
        text="Objectives"
      />
      <div className="flex flex-row flex-wrap items-center justify-center gap-6">
        {objectives.map((obj, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 max-w-sm text-center h-60 w-90 flex flex-col justify-center "
          >
            <h3 className="text-2xl font-semibold mb-4 text-green-600">
              {obj.title}
            </h3>
            <p className="text-gray-600">{obj.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Objectives;
