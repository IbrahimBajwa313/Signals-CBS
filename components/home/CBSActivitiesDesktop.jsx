import React from "react";
import Heading from "../Heading";

const activities = [
  {
    title: "Arabic Fundamentals",
    content:
      "Introducing students to Arabic language essentials to enhance comprehension of classical texts and historical writings",
    imageSrc: "/cbsActivities/daud.png",
  },
  {
    title: "Seerah Circles",
    content:
      "Learning from historical role models, directed towards personal development, leadership and responcibility, Conflict resolution, perseverance and compassion",
    imageSrc: "/cbsActivities/grid.png",
  },
  {
    title: "Personal Development Exercises",
    content:
      "Encouraging critical thinking on ethical issues, personal challenges, and strategies for positive decision-making",
    imageSrc: "/cbsActivities/fist.png",
  },
  {
    title: "Iqbaliyat",
    content:
      "Khudi (Self-Realization & Self-Respect) and Concept of Shaheen (The Ideal Human)",
    imageSrc: "/cbsActivities/iqbal.png",
  },
  {
    title: "Inspiring Leadership Circles",
    content: "Learning from historical and contemporary role models",
    imageSrc: "/cbsActivities/leadership.png",
  },
  {
    title: "Understanding The Divine Message",
    content:
      "Thought-provoking discussions analyzing influential texts and their relevance in modern-day ethical dilemmas",
    imageSrc: "/cbsActivities/teacher.png",
  },
  {
    title: "Speeches",
    content:
      "Inspirational talks from experienced individuals promoting self-improvement, discipline, and perseverance ",
    imageSrc: "/cbsActivities/speaker.png",
  },
  {
    title: "Guest Speaker Sessions",
    content:
      "Hosting professionals, educators, and mentors to provide insights on personal development and character building ",
    imageSrc: "/cbsActivities/guestSpeaker.png",
  },
];

const CBSActivitiesDesktop = () => {
  return (
    <section className="w-full max-w-[1000px] mx-auto px-4 py-10 hidden sm:block">
      <Heading
        className="mb-10 text-blackText text-5xl font-extrabold text-center"
        text="CBS Activities"
      />
      {/* Main container */}
      <div className="flex flex-col gap-16 text-blackText flex-1">
        {activities.map((activity, index) => (
          // Row
          <div
            key={index}
            className={`flex items-center justify-center gap-8 w-full ${
              index % 2 !== 0 ? "flex-row-reverse" : ""
            }`}
          >
            {/* Content Container */}
            <div className="bg-white shadow-md rounded-lg p-6 max-w-lg text-center h-60 w-90 flex flex-col justify-center flex-grow">
              <h3 className="text-2xl font-semibold mb-4 text-green-600">
                {activity.title}
              </h3>
              <p className="text-gray-600">{activity.content}</p>
            </div>

            {/* Image Container */}
            <div className="border-2  p-4 rounded-lg shadow-md">
              <img
                src={activity.imageSrc}
                alt={`Activity ${index + 1}`}
                className={`rounded-md object-cover w-full max-w-[200px] ${
                  index == 4 ? "rotate-180 scale-x-[-1] " : ""
                } ${index == 5 || index == 6 ? "scale-x-[-1]" : ""} `}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CBSActivitiesDesktop;
