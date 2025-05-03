import React from "react";
import Heading from "../Heading";

const CBSActivitiesMobile = () => {
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
  return (
    <section className="w-full mx-auto px-4 py-10 sm:hidden">
      <Heading
        className="mb-10 text-blackText text-5xl font-extrabold text-center"
        text="CBS Activities"
      />
      {/* Main container */}
      <div className="flex flex-col gap-16 flex-1">
        {activities.map((activity, index) => (
          // Activity
          <div
            key={index}
            className={`flex flex-col items-center justify-center w-full bg-[#333333] shadow-md rounded-lg`}
          >
            {/* Head Container */}
            <div className="flex items-centerjustify-center gap-4 px-4 pt-4 pb-2">
              <img
                src={activity.imageSrc}
                alt={`Activity ${index + 1}`}
                className={`object-cover max-w-[115px] sm:max-w-[200px] ${
                  index == 4 ? "rotate-180 scale-x-[-1] " : ""
                } ${index == 5 || index == 6 ? "scale-x-[-1]" : ""} `}
              />
              <h3 className="text-2xl text-center flex items-center font-semibold mb-4 text-green-600">
                {activity.title}
              </h3>
            </div>
            {/* Content Container */}
            <div className="px-4 pt-2 pb-4 max-w-lg text-center flex flex-col justify-center flex-grow">
              <p className="text-gray-300">{activity.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CBSActivitiesMobile;
