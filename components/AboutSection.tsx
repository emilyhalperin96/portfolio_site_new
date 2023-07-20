import React from "react"
import Image from "next/image"

const skills = [
  { skill: "Python" },
  { skill: "Flask" },
  { skill: "SQL" },
  { skill: "React" },
  { skill: "Javascript" },
  { skill: "AWS" },
  { skill: "Jira" },
  { skill: "Looker" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Salesforce" },
  { skill: 'Postman'},
  { skill: 'Docker'},
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <br />
            <p>
            I’m a graduate of Flatiron School’s Software Engineering program, where I gained comprehensive knowledge and practical skills in web development. Prior to that, I worked in tech for 5 years and studied Communications at the University of Michigan, with a certificate in Sales & Marketing from the Ross School of Business.
            </p>
            <br />
            <p>
             
In addition to my technical proficiency, I bring previous experience that sets me apart. I spent most of my career at Braze, a customer engagement software. I worked closely with our technical customers to enhance their utilization of our software, and this gave me a deep understanding of customer needs and the key business outcomes they drove with their tech stack.

            </p>
            <br />
            <p>
            Following my time at Braze, I was the sole product manager at a B2C travel start-up. I owned the development of various features by conducting industry research, identifying customer pain points, scoping out features, defining product requirements, and bringing the final product to market.
            </p>
            <br />

            <p>

            Combining my technical expertise from the Flatiron School with my previous experience in tech, I will bring a unique perspective to any software engineering role. My strong focus on creating user-centric solutions enables me to effectively translate customer requirements into tangible products. 

            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-1xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
