import React, { useState} from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Halpreads Book Application",
    description:
      "Halpreads is a web application developed in React and Python to help people find their next book and keep track of their reading list.",
    image: "/halpreads.png",
    github: "",
    link: "https://www.youtube.com/watch?v=7oWnfWtQBho",
  },
  {
    name: "Word Searcher 3000",
    description: "Word Searcher 3000 is a Python-based command line word search game. It uses SQLAlchemy and a matrix data structure.",
    image: "/wordsearch.png",
    github: "",
    link: "https://www.youtube.com/watch?v=HOFZCCAaE_c",
  },
  {
    name: "Daily News Digest",
    description:
      "This python application uses a Daily News API to pull news articles and send them via email, daily.",
    image: "/dailynewsemail.png",
    github: "https://github.com/emilyhalperin96/daily_news_digest",
    link: "",
  },
  {
    name: "Invoice Generator",
    description:
      "This python application takes excel files and generates them into invoices as PDFs.",
    image: "/invoicepdf.png",
    github: "https://github.com/emilyhalperin96/generate_invoices",
    link: ' ',
  },
  {
    name: "Weather Forecast App",
    description:
      "This python application uses a weather forecasting API to get the weather forecast for a given city. It includes data visualizations.",
    image: "/weatherapi.png",
    github: "https://github.com/emilyhalperin96/weather_forecast_app",
    link: ' ',
  },
  {
    name: "Book Language Processing",
    description:
      "This python application uses regex and the nltk library to analyze a book in a text file. This analysis includes most frequently used words, and a sentiment score for each chapter.",
    image: "/language.png",
    github: "https://github.com/emilyhalperin96/book_language_processing",
    link: ' ',
  },
  {
    name: "Webcam Detector",
    description:
      "This python application connects to your laptops Webcam to detect movement. When movement is detected, it generates an email to send an alert.",
    image: "/webcam.png",
    github: "https://github.com/emilyhalperin96/webcam_detector",
    link: ' ',
  },



]

const ProjectsSection = () => {

  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-[#c084fc] border-0 rounded"></hr>
      </h1>
      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
                <div className="flex flex-col  animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                  <div className=" md:w-1/2">
                    <Link href={project.link}>
                      <Image
                        src={project.image}
                        alt=""
                        width={1000}
                        height={1000}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </Link>
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      <Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </SlideUp>
            </div>
          )
        })}
        
      </div>
    </section>
  )
}

export default ProjectsSection
