import { useState } from "react";

export default function Editor() {
  const [data, setData] = useState({
    name: "John Doe",
    phone: "+69 1234567890",
    email: "johndoe@gmail.com",
    website: "johndoe.com",
    location: "City, Country",
    role: "Human Being",
    summary: "A good one at that",
    skills: [
      { id: crypto.randomUUID(), skill: "Skill 1" },
      { id: crypto.randomUUID(), skill: "Skill 2" },
      { id: crypto.randomUUID(), skill: "Skill 3" },
    ],
    experience: [
      {
        id: crypto.randomUUID(),
        position: "Position 1",
        organization: "Organization 1",
        startDate: getISODate(new Date()),
        endDate: getISODate(new Date()),
        completed: true,
        location: "City, Country",
        type: "onsite",
        accomplishments: [
          {
            id: crypto.randomUUID(),
            accomplishment: "Some great accomplishment 1",
          },
          {
            id: crypto.randomUUID(),
            accomplishment: "Some great accomplishment 2",
          },
          {
            id: crypto.randomUUID(),
            accomplishment: "Some great accomplishment 3",
          },
        ],
      },
    ],
    education: [
      {
        id: crypto.randomUUID(),
        degree: "Degree 1",
        institution: "Institution 1",
        startDate: getISODate(new Date()),
        endDate: getISODate(new Date()),
        completed: true,
        location: "City, Country",
      },
    ],
  });

  // Input States
  const [showSkillDialog, setShowSkillDialog] = useState(true);
  const [newSkill, setNewSkill] = useState("New Skill");

  const [showExperienceDialog, setShowExperienceDialog] = useState(true);
  const [newExperiencePosition, setNewExperiencePosition] =
    useState("New Position");
  const [newExperienceOrganization, setNewExperienceOrganization] =
    useState("New Organization");
  const [newExperienceStartDate, setNewExperienceStartDate] = useState(
    getISODate(new Date()),
  );
  const [newExperienceEndDate, setNewExperienceEndDate] = useState(
    getISODate(new Date()),
  );
  const [newExperienceCompleted, setNewExperienceCompleted] =
    useState("completed");
  const [newExperienceLocation, setNewExperienceLocation] =
    useState("City, Country");
  const [newExperienceType, setNewExperienceType] = useState("onsite");
  const [newExperienceAccomplishments, setNewExperienceAccomplishments] =
    useState([
      { id: crypto.randomUUID(), accomplishment: "Some accomplishment 1" },
      { id: crypto.randomUUID(), accomplishment: "Some accomplishment 2" },
      { id: crypto.randomUUID(), accomplishment: "Some accomplishment 3" },
    ]);

  const [showAccomplishmentDialog, setShowAccomplishmentDialog] =
    useState(true);
  const [newExperienceNewAccomplishment, setNewExperienceNewAccomplishment] =
    useState("New Accomplishment");

  const [showEducationDialog, setShowEducationDialog] = useState(true);
  const [newEducationDegree, setNewEducationDegree] = useState("New Degree");
  const [newEducationInstitution, setNewEducationInstitution] =
    useState("New Institution");
  const [newEducationStartDate, setNewEducationStartDate] = useState(
    getISODate(new Date()),
  );
  const [newEducationEndDate, setNewEducationEndDate] = useState(
    getISODate(new Date()),
  );
  const [newEducationCompleted, setNewEducationCompleted] =
    useState("completed");
  const [newEducationLocation, setNewEducationLocation] =
    useState("City, Country");

  function toggleSkillDialog() {
    setNewSkill("");

    setShowSkillDialog(!showSkillDialog);
  }

  function toggleExperienceDialog() {
    setNewExperiencePosition("");
    setNewExperienceOrganization("");
    setNewExperienceStartDate("");
    setNewExperienceEndDate("");
    setNewExperienceCompleted("completed");
    setNewExperienceLocation("");
    setNewExperienceType("onsite");
    setNewExperienceAccomplishments([]);
    setNewExperienceNewAccomplishment("");

    setNewExperienceNewAccomplishment("");
    setShowAccomplishmentDialog(false);

    setShowExperienceDialog(!showExperienceDialog);
  }

  function toggleAccomplishmentsDialog() {
    setNewExperienceNewAccomplishment("");

    setShowAccomplishmentDialog(!showAccomplishmentDialog);
  }

  function toggleEducationDialog() {
    setNewEducationDegree("");
    setNewEducationInstitution("");
    setNewEducationStartDate("");
    setNewEducationEndDate("");
    setNewEducationCompleted("completed");
    setNewEducationLocation("");

    setShowEducationDialog(!showEducationDialog);
  }

  function checkSkillValidity() {
    return validateRequiredInput([newSkill]);
  }

  function checkExperienceValidity() {
    return (
      validateRequiredInput([
        newExperiencePosition,
        newExperienceOrganization,
        newExperienceStartDate,
      ]) &&
      (newExperienceEndDate !== "" || newExperienceCompleted !== "completed") &&
      (newExperienceLocation !== "" || newExperienceType !== "onsite")
    );
  }

  function checkAccomplishmentValidity() {
    return validateRequiredInput([newExperienceNewAccomplishment]);
  }

  function checkEducationValidity() {
    return (
      validateRequiredInput([
        newEducationDegree,
        newEducationInstitution,
        newEducationStartDate,
        newEducationLocation,
      ]) &&
      (newEducationEndDate !== "" || newEducationCompleted !== "completed")
    );
  }

  return (
    <>
      <div className="section">
        <h2>Personal Information</h2>
        <form>
          <label>
            <p>Name</p>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={data.name}
              onChange={(event) =>
                setData({ ...data, name: event.target.value })
              }
            />
          </label>
          <label>
            <p>Phone Number</p>
            <input
              type="tel"
              name="phone"
              id="phone"
              required
              value={data.phone}
              onChange={(event) =>
                setData({ ...data, phone: event.target.value })
              }
            />
          </label>
          <label>
            <p>Email</p>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={data.email}
              onChange={(event) =>
                setData({ ...data, email: event.target.value })
              }
            />
          </label>
          <label>
            <p>Website</p>
            <input
              type="text"
              name="website"
              id="website"
              value={data.website}
              onChange={(event) =>
                setData({ ...data, website: event.target.value })
              }
            />
          </label>
          <label>
            <p>Location</p>
            <input
              type="text"
              name="personal-location"
              id="personal-location"
              required
              value={data.location}
              onChange={(event) =>
                setData({ ...data, location: event.target.value })
              }
            />
          </label>
        </form>
      </div>
      <div className="section">
        <h2>Career Summary</h2>
        <form>
          <label>
            <p>Role</p>
            <input
              type="text"
              name="role"
              id="role"
              required
              value={data.role}
              onChange={(event) =>
                setData({ ...data, role: event.target.value })
              }
            />
          </label>
          <label>
            <p>Summary</p>
            <textarea
              name="summary"
              id="summary"
              required
              value={data.summary}
              onChange={(event) =>
                setData({ ...data, summary: event.target.value })
              }
            ></textarea>
          </label>
        </form>
      </div>
      <div className="section">
        <h2>Skills</h2>
        <ul>
          {data.skills.map((skillItem) => (
            <li className="skill" key={skillItem.id}>
              <p>{skillItem.skill}</p>
              <button
                type="button"
                onClick={() =>
                  setData({
                    ...data,
                    skills: data.skills.filter(
                      (skill) => skill.id !== skillItem.id,
                    ),
                  })
                }
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        {showSkillDialog ? (
          <form className="new-skill">
            <h3>Add Skill</h3>
            <input
              type="text"
              name="new-skill"
              id="new-skill"
              required
              value={newSkill}
              onChange={(event) => setNewSkill(event.target.value)}
            />
            <button
              type="button"
              disabled={!checkSkillValidity()}
              onClick={() => {
                const newSkills = [...data.skills];
                newSkills.push({
                  id: crypto.randomUUID(),
                  skill: newSkill,
                });
                setData({ ...data, skills: newSkills });

                toggleSkillDialog();
              }}
            >
              Add
            </button>
            <button type="button" onClick={toggleSkillDialog}>
              Cancel
            </button>
          </form>
        ) : (
          <button type="button" onClick={toggleSkillDialog}>
            + Add Skill
          </button>
        )}
      </div>
      <div className="section experience">
        <h2>Work Experience</h2>
        <ul>
          {data.experience.map((experienceItem) => (
            <li className="experience-item" key={experienceItem.id}>
              <p className="position">{experienceItem.position}</p>
              <p className="organization">{experienceItem.organization}</p>
              <div className="tenure">
                <p>
                  {formatTenureBoundary(experienceItem.startDate)} -{" "}
                  {experienceItem.completed
                    ? formatTenureBoundary(experienceItem.endDate)
                    : "Present"}
                </p>
              </div>
              <div className="location">
                <p>
                  {experienceItem.type === "onsite"
                    ? experienceItem.location
                    : "Remote"}
                </p>
              </div>
              <ul className="accomplishments">
                {experienceItem.accomplishments.map((accomplishmentItem) => (
                  <li key={accomplishmentItem.id}>
                    {accomplishmentItem.accomplishment}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={() => {
                  setData({
                    ...data,
                    experience: data.experience.filter(
                      (experience) => experience.id !== experienceItem.id,
                    ),
                  });
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        {showExperienceDialog ? (
          <form className="new-experience">
            <h3>Add Experience</h3>
            <label>
              <p>Position</p>
              <input
                type="text"
                name="new-experience-position"
                id="new-experience-position"
                required
                value={newExperiencePosition}
                onChange={(event) =>
                  setNewExperiencePosition(event.target.value)
                }
              />
            </label>
            <label>
              <p>Organization</p>
              <input
                type="text"
                name="new-experience-organization"
                id="new-experience-organization"
                required
                value={newExperienceOrganization}
                onChange={(event) =>
                  setNewExperienceOrganization(event.target.value)
                }
              />
            </label>
            <div className="new-experience-tenure">
              <h4>Tenure</h4>
              <label>
                <p>From</p>
                <input
                  type="date"
                  name="new-experience-start"
                  id="new-experience-start"
                  required
                  value={newExperienceStartDate}
                  onChange={(event) =>
                    setNewExperienceStartDate(event.target.value)
                  }
                />
              </label>
              <label>
                <p>To</p>
                <select
                  name="new-experience-completed"
                  id="new-experience-completed"
                  value={newExperienceCompleted}
                  onChange={(event) =>
                    setNewExperienceCompleted(event.target.value)
                  }
                >
                  <option value="completed">Completed</option>
                  <option value="ongoing">Ongoing</option>
                </select>
                {newExperienceCompleted === "completed" && (
                  <input
                    type="date"
                    name="new-experience-end"
                    id="new-experience-end"
                    value={newExperienceEndDate}
                    onChange={(event) =>
                      setNewExperienceEndDate(event.target.value)
                    }
                  />
                )}
              </label>
            </div>
            <label>
              <p>Location</p>
              <select
                name="new-experience-type"
                id="new-experience-type"
                value={newExperienceType}
                onChange={(event) => setNewExperienceType(event.target.value)}
              >
                <option value="onsite">On-Site</option>
                <option value="remote">Remote</option>
              </select>
              {newExperienceType === "onsite" && (
                <input
                  type="text"
                  name="new-experience-location"
                  id="new-experience-location"
                  required
                  value={newExperienceLocation}
                  onChange={(event) =>
                    setNewExperienceLocation(event.target.value)
                  }
                />
              )}
            </label>
            <div className="new-experience-accomplishments">
              <h4>Accomplishments</h4>
              <ul>
                {newExperienceAccomplishments.map((accomplishmentItem) => (
                  <li key={accomplishmentItem.id}>
                    <p>{accomplishmentItem.accomplishment}</p>
                    <button
                      type="button"
                      onClick={() => {
                        setNewExperienceAccomplishments(
                          newExperienceAccomplishments.filter(
                            (newExperienceAccomplishment) =>
                              newExperienceAccomplishment.id !==
                              accomplishmentItem.id,
                          ),
                        );
                      }}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              {showAccomplishmentDialog ? (
                <div className="new-accomplishment">
                  <h5>Add Accomplishment</h5>
                  <textarea
                    name="new-accomplishment"
                    id="new-accomplishmet"
                    required
                    value={newExperienceNewAccomplishment}
                    onChange={(event) =>
                      setNewExperienceNewAccomplishment(event.target.value)
                    }
                  ></textarea>
                  <button
                    type="button"
                    disabled={!checkAccomplishmentValidity()}
                    onClick={() => {
                      const updatedNewExperienceAccomplishments = [
                        ...newExperienceAccomplishments,
                      ];
                      updatedNewExperienceAccomplishments.push({
                        id: crypto.randomUUID(),
                        accomplishment: newExperienceNewAccomplishment,
                      });
                      setNewExperienceAccomplishments(
                        updatedNewExperienceAccomplishments,
                      );

                      toggleAccomplishmentsDialog();
                    }}
                  >
                    Add
                  </button>
                  <button type="button" onClick={toggleAccomplishmentsDialog}>
                    Cancel
                  </button>
                </div>
              ) : (
                <button type="button" onClick={toggleAccomplishmentsDialog}>
                  + Add Accomplishment
                </button>
              )}
            </div>
            <button
              type="button"
              disabled={!checkExperienceValidity()}
              onClick={() => {
                const newExperienceList = [...data.experience];
                newExperienceList.push({
                  id: crypto.randomUUID(),
                  position: newExperiencePosition,
                  organization: newExperienceOrganization,
                  startDate: newExperienceStartDate,
                  endDate: newExperienceEndDate,
                  completed: newExperienceCompleted === "completed",
                  location: newExperienceLocation,
                  type: newExperienceType,
                  accomplishments: newExperienceAccomplishments,
                });
                setData({ ...data, experience: newExperienceList });

                toggleExperienceDialog();
              }}
            >
              Add
            </button>
            <button type="button" onClick={toggleExperienceDialog}>
              Cancel
            </button>
          </form>
        ) : (
          <button type="button" onClick={toggleExperienceDialog}>
            + Add Work Experience
          </button>
        )}
      </div>
      {
        // TODO: Complete button functionality of education section
      }
      <div className="section">
        <h2>Education</h2>
        <ul>
          {data.education.map((educationItem) => (
            <li className="education-item" key={educationItem.id}>
              <p className="degree">{educationItem.degree}</p>
              <p className="institution">{educationItem.institution}</p>
              <div className="tenure">
                <p>
                  {formatTenureBoundary(educationItem.startDate)} -{" "}
                  {educationItem.completed
                    ? formatTenureBoundary(educationItem.endDate)
                    : "Present"}
                </p>
              </div>
              <div className="location">
                <p>{educationItem.location}</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setData({
                    ...data,
                    education: data.education.filter(
                      (education) => education.id !== educationItem.id,
                    ),
                  });
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
        {showEducationDialog ? (
          <form className="new-degree">
            <h3>Add Degree</h3>
            <label>
              <p>Degree</p>
              <input
                type="text"
                name="new-degree-name"
                id="new-degree-name"
                required
                value={newEducationDegree}
                onChange={(event) => setNewEducationDegree(event.target.value)}
              />
            </label>
            <label>
              <p>Institution</p>
              <input
                type="text"
                name="new-degree-institution"
                id="new-degree-institution"
                required
                value={newEducationInstitution}
                onChange={(event) =>
                  setNewEducationInstitution(event.target.value)
                }
              />
            </label>
            <div className="new-degree-tenure">
              <h4>Tenure</h4>
              <label>
                <p>From</p>
                <input
                  type="date"
                  name="new-degree-start"
                  id="new-degree-start"
                  required
                  value={newEducationStartDate}
                  onChange={(event) =>
                    setNewEducationStartDate(event.target.value)
                  }
                />
              </label>
              <label>
                <p>To</p>
                <select
                  name="new-degree-completed"
                  id="new-degree-completed"
                  value={newEducationCompleted}
                  onChange={(event) =>
                    setNewEducationCompleted(event.target.value)
                  }
                >
                  <option value="completed">Completed</option>
                  <option value="ongoing">Ongoing</option>
                </select>
                {newEducationCompleted === "completed" && (
                  <input
                    type="date"
                    name="new-degree-end"
                    id="new-degree-end"
                    value={newEducationEndDate}
                    onChange={(event) =>
                      setNewEducationEndDate(event.target.value)
                    }
                  />
                )}
              </label>
            </div>
            <label>
              <p>Location</p>
              <input
                type="text"
                name="new-degree-location"
                id="new-degree-location"
                required
                value={newEducationLocation}
                onChange={(event) =>
                  setNewEducationLocation(event.target.value)
                }
              />
            </label>
            <button
              type="button"
              disabled={!checkEducationValidity()}
              onClick={() => {
                const newEducationList = [...data.education];
                newEducationList.push({
                  id: crypto.randomUUID(),
                  degree: newEducationDegree,
                  institution: newEducationInstitution,
                  startDate: newEducationStartDate,
                  endDate: newEducationEndDate,
                  completed: newEducationCompleted === "completed",
                  location: newEducationLocation,
                });
                setData({ ...data, education: newEducationList });

                toggleEducationDialog();
              }}
            >
              Add
            </button>
            <button type="button" onClick={toggleEducationDialog}>
              Cancel
            </button>
          </form>
        ) : (
          <button type="button" onClick={toggleEducationDialog}>
            + Add Degree
          </button>
        )}
      </div>
    </>
  );
}

function formatTenureBoundary(isoDate) {
  const date = new Date(isoDate);
  return `${(date.getMonth() + 1).toString().padStart(2, "0")}/${date.getFullYear()}`;
}

function getISODate(dateObject) {
  return dateObject.toISOString().substring(0, 10);
}

function validateRequiredInput(inputValues) {
  for (const inputValue of inputValues) {
    if (inputValue === "") return false;
  }
  return true;
}
