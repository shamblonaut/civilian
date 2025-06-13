import { useState } from "react";
import { Menu, X } from "lucide-react";

import "./App.css";

import Hero from "./components/Hero.jsx";
import Navigator from "./components/Navigator.jsx";
import Editor from "./components/Editor.jsx";
import Viewport from "./components/Viewport.jsx";

const emptyCV = {
  name: "",
  phone: "",
  email: "",
  website: "",
  location: "",
  role: "",
  summary: "",
  skills: [],
  experience: [],
  education: [],
};

// CV Template and example content credits to EnhanCV [https://enhancv.com]
const exampleCV = {
  name: "John Doe",
  phone: "+69 1234567890",
  email: "johndoe@gmail.com",
  website: "johndoe.com",
  location: "Portsmouth, UK",
  role: "Software Developer",
  summary:
    "A seasoned developer with over 8 years of experience in software integration and security-oriented solutions. Proficient in Salesforce and Agile Scrum methodologies, my biggest achievement includes boosting system performance by 30% through API integration.",
  skills: [
    { id: crypto.randomUUID(), skill: "Salesforce" },
    { id: crypto.randomUUID(), skill: "Agile Scrum" },
    { id: crypto.randomUUID(), skill: "JavaScript" },
    { id: crypto.randomUUID(), skill: "Angular" },
    { id: crypto.randomUUID(), skill: "Ajax" },
    { id: crypto.randomUUID(), skill: "React" },
    { id: crypto.randomUUID(), skill: "NextJS" },
    { id: crypto.randomUUID(), skill: "CI/CD" },
    { id: crypto.randomUUID(), skill: "Test-Driven Development" },
    { id: crypto.randomUUID(), skill: "Object-Oriented Design" },
  ],
  experience: [
    {
      id: crypto.randomUUID(),
      position: "Senior Software Developer",
      organization: "Optum",
      startDate: "2021-03-01",
      endDate: "",
      completed: false,
      location: "London, UK",
      type: "onsite",
      accomplishments: [
        {
          id: crypto.randomUUID(),
          accomplishment:
            "Led the integration of critical APIs improving data retrieval speeds by 30%, enhancing overall system performance.",
        },
        {
          id: crypto.randomUUID(),
          accomplishment:
            "Automated testing processes, reducing manual errors by 25% and streamlining workflow for improved team efficiency.",
        },
        {
          id: crypto.randomUUID(),
          accomplishment:
            "Collaborated on strategic data migration projects, resulting in a 40% increase in data availability and relevance.",
        },
        {
          id: crypto.randomUUID(),
          accomplishment:
            "Provided mentorship to junior developers resulting in a 20% improvement in team programming skill proficiency.",
        },
        {
          id: crypto.randomUUID(),
          accomplishment:
            "Enhanced user experience through thoughtful application design changes, boosting customer satisfaction scores by 10%.",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      position: "Software Engineer",
      organization: "UnitedHealth Group",
      startDate: "2018-06-01",
      endDate: "2021-02-01",
      completed: true,
      location: "Dublin, Ireland",
      type: "onsite",
      accomplishments: [
        {
          id: crypto.randomUUID(),
          accomplishment:
            "Developed tailored software applications that met client specifications, improving operational efficiency by 35%.",
        },
        {
          id: crypto.randomUUID(),
          accomplishment:
            "Worked in an Agile Scrum environment to achieve timely delivery of project milestones, reducing time-to-market by 20%.",
        },
        {
          id: crypto.randomUUID(),
          accomplishment:
            "Enhanced automation mechanisms that saved an average of 15 hours per week across development processes.",
        },
        {
          id: crypto.randomUUID(),
          accomplishment:
            "Conducted comprehensive debugging sessions resulting in the identification and resolution of complex issues.",
        },
        {
          id: crypto.randomUUID(),
          accomplishment:
            "Supported team efforts in maintaining system stability, ensuring an uptime of 99.8% over a 12-month period.",
        },
      ],
    },
    {
      id: crypto.randomUUID(),
      position: "Junior Developer",
      organization: "Tech Data UK",
      startDate: "2015-01-01",
      endDate: "2018-05-01",
      completed: true,
      location: "Basingstoke, UK",
      type: "onsite",
      accomplishments: [
        {
          id: crypto.randomUUID(),
          accomplishment:
            "Assisted in software development projects that improved system scalability by 25%, enhancing user experience.",
        },
        {
          id: crypto.randomUUID(),
          accomplishment:
            "Participated in weekly team standups to align project goals and foster a collaborative work environment.",
        },
        {
          id: crypto.randomUUID(),
          accomplishment:
            "Contributed to the development of a user-friendly API interface, reducing customer support queries by 15%.",
        },
        {
          id: crypto.randomUUID(),
          accomplishment:
            "Provided input in the development of risk management tools, resulting in a more secure data handling process.",
        },
      ],
    },
  ],
  education: [
    {
      id: crypto.randomUUID(),
      degree: "Associate Degree in Computer Science",
      institution: "Portsmouth College",
      startDate: "2013-01-01",
      endDate: "2015-01-01",
      completed: true,
      location: "Portsmouth, UK",
    },
  ],
};

const sections = [
  { id: crypto.randomUUID(), title: "Personal Information" },
  { id: crypto.randomUUID(), title: "Professional Summary" },
  { id: crypto.randomUUID(), title: "Skills" },
  { id: crypto.randomUUID(), title: "Work Experience" },
  { id: crypto.randomUUID(), title: "Education" },
];

function App() {
  const [data, setData] = useState(emptyCV);

  const [activeSection, setActiveSection] = useState(sections[0]);
  const [showHero, setShowHero] = useState(true);
  const [showCV, setShowCV] = useState(false);
  const [showError, setShowError] = useState(false);
  const [menuHidden, setMenuHidden] = useState(true);

  function saveCV() {
    if (JSON.stringify(data) === JSON.stringify(emptyCV)) {
      alert("What are you trying to save, exactly?");
      return;
    }

    if (
      localStorage.getItem("data") &&
      !confirm(
        "Your previous saved work will be overwritten. Do you want to continue?",
      )
    ) {
      return;
    }

    localStorage.setItem("data", JSON.stringify(data));

    alert("Your work has been successfully saved to local storage!");
  }

  function loadCV() {
    // Fetch data from local storage
    const loadedData = localStorage.getItem("data");

    if (!loadedData) {
      alert("You do not have any saved work to load");
      return;
    }

    if (
      JSON.stringify(data) !== JSON.stringify(emptyCV) &&
      !confirm("Your current work will be lost. Do you want to continue?")
    ) {
      return;
    }

    // Overwrite the current data with the loaded one
    setData(JSON.parse(loadedData));
  }

  function loadExample() {
    if (
      JSON.stringify(data) !== JSON.stringify(emptyCV) &&
      !confirm(
        "Your current work will be lost. Do you want to continue? [You might want to try saving it]",
      )
    ) {
      return;
    }

    setData(exampleCV);
    setShowError(false);
  }

  function clearCV() {
    if (
      JSON.stringify(data) !== JSON.stringify(emptyCV) &&
      !confirm("Your current work will be lost. Do you want to continue?")
    ) {
      return;
    }

    setData(emptyCV);
    setShowError(false);
  }

  function checkCVValidity(
    highlight = false,
    redirect = false,
    onlyActiveSection = false,
  ) {
    let valid = true;
    let redirected = false;

    if (!data.name || !data.phone || !data.email || !data.location) {
      if (redirect) {
        setActiveSection(sections[0]);
        redirected = true;
      }
      if (!onlyActiveSection || activeSection === sections[0]) valid = false;
    }

    if (!redirected && (!data.role || !data.summary)) {
      if (redirect) {
        setActiveSection(sections[1]);
      }
      if (!onlyActiveSection || activeSection === sections[1]) valid = false;
    }

    if (highlight) {
      if (!valid) {
        setShowError(true);
      } else {
        setShowError(false);
      }
    }

    return valid;
  }

  function toggleCV() {
    setMenuHidden(true);

    if (showCV) {
      setShowCV(false);
      setActiveSection(sections[0]);
      return;
    }

    if (!checkCVValidity()) return;

    setShowCV(true);
  }

  if (showHero) {
    return <Hero setShowHero={setShowHero} />;
  } else {
    return (
      <>
        <div className="sidebar">
          <header>
            <div
              className="menu-button"
              onClick={() => setMenuHidden(!menuHidden)}
            >
              {menuHidden ? <Menu className="icon" /> : <X className="icon" />}
            </div>
            <img src="/cv.svg" alt="CVLIAN Logo" />
            <h1>CVLIAN</h1>
          </header>
          <Navigator
            sections={sections}
            setActiveSection={setActiveSection}
            showCV={showCV}
            setShowCV={setShowCV}
            checkCVValidity={checkCVValidity}
            toggleCV={toggleCV}
            loadExample={loadExample}
            clearCV={clearCV}
            menuHidden={menuHidden}
            setMenuHidden={setMenuHidden}
            saveCV={saveCV}
            loadCV={loadCV}
          />
        </div>
        <main>
          {showCV ? (
            <Viewport data={data} toggleCV={toggleCV} />
          ) : (
            <Editor
              data={data}
              setData={setData}
              sections={sections}
              activeSection={activeSection}
              setActiveSection={setActiveSection}
              checkCVValidity={checkCVValidity}
              toggleCV={toggleCV}
              showError={showError}
            />
          )}
        </main>
      </>
    );
  }
}

export default App;
