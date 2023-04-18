import React from "react";
import Image from "next/image";

const skills = [
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Redux" },
  { skill: "Next.js" },
  { skill: "SQL" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
];

export const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">About me</h1>
        <hr className="w-6 h-1 mx-auto my-4 bg-slate-400 border-0 rounded" />
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:flex-row md:text-left md:p-4 md:space-y-0 md:space-x-10">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero
              quidem vitae dicta fuga numquam, ratione delectus commodi
              assumenda. Similique at, harum quaerat quis perspiciatis totam ea
              repellat. Corporis, consequatur consequuntur sapiente mollitia
              suscipit illo non molestiae vitae voluptatem neque, saepe
              perspiciatis recusandae! Corrupti quidem, consectetur illo soluta
              ducimus delectus dolorum!
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              quasi maiores recusandae et voluptates quod veniam sed saepe
              repudiandae ipsa autem, amet similique doloremque odit quas quo!
              Doloribus, debitis magnam.
            </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio nulla repudiandae ipsum provident impedit facere,
              dignissimos, qui alias possimus vitae error sed sint nemo
              reprehenderit. A commodi doloribus saepe eius placeat esse
              consectetur totam quasi! Aut magnam tempore perferendis.
              Voluptates?
            </p>
          </div>
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              My skills
            </h1>
            <div className="flex flex-wrap flex-row justify-center md:justify-start">
              {skills.map((item, index) => {
                return (
                  <p
                    className="bg-slate-300 px-4 py-2 mr-2 mt-2 text-gray-800 rounded font-semibold"
                    key={index}
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
