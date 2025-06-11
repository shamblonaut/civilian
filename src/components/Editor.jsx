import "../styles/Editor.css";

import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";
import { Trash, Calendar, MapPin } from "lucide-react";

import { formatTenureBoundary, getISODate } from "../utils.js";

export default function Editor({ data, setData, activeSection }) {
  // Input States
  const [showSkillDialog, setShowSkillDialog] = useState(false);
  const [newSkill, setNewSkill] = useState("");

  const [showExperienceDialog, setShowExperienceDialog] = useState(false);
  const [newExperiencePosition, setNewExperiencePosition] = useState("");
  const [newExperienceOrganization, setNewExperienceOrganization] =
    useState("");
  const [newExperienceStartDate, setNewExperienceStartDate] = useState("");
  const [newExperienceEndDate, setNewExperienceEndDate] = useState("");
  const [newExperienceCompleted, setNewExperienceCompleted] =
    useState("completed");
  const [newExperienceLocation, setNewExperienceLocation] = useState("");
  const [newExperienceType, setNewExperienceType] = useState("onsite");
  const [newExperienceAccomplishments, setNewExperienceAccomplishments] =
    useState([]);

  const [showAccomplishmentDialog, setShowAccomplishmentDialog] =
    useState(false);
  const [newExperienceNewAccomplishment, setNewExperienceNewAccomplishment] =
    useState("");

  const [showEducationDialog, setShowEducationDialog] = useState(false);
  const [newEducationDegree, setNewEducationDegree] = useState("");
  const [newEducationInstitution, setNewEducationInstitution] = useState("");
  const [newEducationStartDate, setNewEducationStartDate] = useState("");
  const [newEducationEndDate, setNewEducationEndDate] = useState("");
  const [newEducationCompleted, setNewEducationCompleted] =
    useState("completed");
  const [newEducationLocation, setNewEducationLocation] = useState("");

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
    <div className="editor">
      {activeSection.title === "Personal Information" && (
        <div className="section">
          <h2 className="section-title">Personal Information</h2>
          <form>
            <label>
              <p>Name</p>
              <input
                type="text"
                name="name"
                id="name"
                className="placeholder-labelled"
                placeholder=""
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
                className="placeholder-labelled"
                placeholder=""
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
                className="placeholder-labelled"
                placeholder=""
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
                className="placeholder-labelled"
                placeholder=""
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
                className="placeholder-labelled"
                placeholder=""
                required
                value={data.location}
                onChange={(event) =>
                  setData({ ...data, location: event.target.value })
                }
              />
            </label>
          </form>
        </div>
      )}
      {activeSection.title === "Professional Summary" && (
        <div className="section">
          <h2 className="section-title">Professional Summary</h2>
          <form>
            <label>
              <p>Role</p>
              <input
                type="text"
                name="role"
                id="role"
                className="placeholder-labelled"
                placeholder=""
                required
                value={data.role}
                onChange={(event) =>
                  setData({ ...data, role: event.target.value })
                }
              />
            </label>
            <label>
              <p>Summary</p>
              <TextareaAutosize
                name="summary"
                id="summary"
                className="placeholder-labelled"
                placeholder=""
                required
                value={data.summary}
                onChange={(event) =>
                  setData({ ...data, summary: event.target.value })
                }
              />
            </label>
          </form>
        </div>
      )}
      {activeSection.title === "Skills" && (
        <div className="section skills">
          <h2 className="section-title">Skills</h2>
          <ul>
            {data.skills.map((skillItem) => (
              <li className="skill-item item card" key={skillItem.id}>
                <p>{skillItem.skill}</p>
                <button
                  type="button"
                  className="item-action remove-button"
                  onClick={() =>
                    setData({
                      ...data,
                      skills: data.skills.filter(
                        (skill) => skill.id !== skillItem.id,
                      ),
                    })
                  }
                >
                  <Trash />
                </button>
              </li>
            ))}
          </ul>
          {showSkillDialog ? (
            <form className="new-skill new-item card">
              <h2>Add Skill</h2>
              <label>
                <p>Skill</p>
                <input
                  type="text"
                  name="new-skill"
                  id="new-skill"
                  className="placeholder-labelled"
                  placeholder=""
                  required
                  value={newSkill}
                  onChange={(event) => setNewSkill(event.target.value)}
                />
              </label>
              <div className="new-item-actions">
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
              </div>
            </form>
          ) : (
            <button
              type="button"
              className="add-item"
              onClick={toggleSkillDialog}
            >
              + Add Skill
            </button>
          )}
        </div>
      )}
      {activeSection.title === "Work Experience" && (
        <div className="section experience">
          <h2 className="section-title">Work Experience</h2>
          <ul>
            {data.experience.map((experienceItem) => (
              <li className="experience-item item card" key={experienceItem.id}>
                <p className="position">{experienceItem.position}</p>
                <p className="organization">{experienceItem.organization}</p>
                <div className="spacetime">
                  <div className="tenure">
                    <Calendar className="icon" />
                    <p>
                      {formatTenureBoundary(experienceItem.startDate)} -{" "}
                      {experienceItem.completed
                        ? formatTenureBoundary(experienceItem.endDate)
                        : "Present"}
                    </p>
                  </div>
                  <div className="location">
                    <MapPin className="icon" />
                    <p>
                      {experienceItem.type === "onsite"
                        ? experienceItem.location
                        : "Remote"}
                    </p>
                  </div>
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
                  className="item-action remove-button"
                  onClick={() => {
                    setData({
                      ...data,
                      experience: data.experience.filter(
                        (experience) => experience.id !== experienceItem.id,
                      ),
                    });
                  }}
                >
                  <Trash className="icon" />
                </button>
              </li>
            ))}
          </ul>
          {showExperienceDialog ? (
            <form className="new-experience new-item card">
              <h2>Add Experience</h2>
              <label>
                <p>Position</p>
                <input
                  type="text"
                  name="new-experience-position"
                  id="new-experience-position"
                  className="placeholder-labelled"
                  placeholder=""
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
                  className="placeholder-labelled"
                  placeholder=""
                  required
                  value={newExperienceOrganization}
                  onChange={(event) =>
                    setNewExperienceOrganization(event.target.value)
                  }
                />
              </label>
              <label className="misc-input">
                <p>Employment Type:</p>
                <select
                  name="new-experience-type"
                  id="new-experience-type"
                  value={newExperienceType}
                  onChange={(event) => setNewExperienceType(event.target.value)}
                >
                  <option value="onsite">On-Site</option>
                  <option value="remote">Remote</option>
                </select>
              </label>
              {newExperienceType === "onsite" && (
                <label>
                  <p>Location</p>
                  <input
                    type="text"
                    name="new-experience-location"
                    id="new-experience-location"
                    className="placeholder-labelled"
                    placeholder=""
                    required
                    value={newExperienceLocation}
                    onChange={(event) =>
                      setNewExperienceLocation(event.target.value)
                    }
                  />
                </label>
              )}
              <div className="new-experience-tenure">
                <h3>Tenure</h3>
                <label className="misc-input">
                  <p>From:</p>
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
                <label className="misc-input">
                  <p>To:</p>
                  <select
                    name="new-experience-completed"
                    id="new-experience-completed"
                    className="completed-input"
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

              <div className="new-experience-accomplishments">
                <h3>Accomplishments</h3>
                <ul>
                  {newExperienceAccomplishments.map((accomplishmentItem) => (
                    <li key={accomplishmentItem.id}>
                      <div className="new-experience-accomplishment">
                        <p>{accomplishmentItem.accomplishment}</p>
                        <button
                          type="button"
                          className="item-action remove-button"
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
                          <Trash className="icon" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
                {showAccomplishmentDialog ? (
                  <div className="new-accomplishment new-item card">
                    <h4>Add Accomplishment</h4>
                    <label>
                      <p>Accomplishment</p>
                      <TextareaAutosize
                        name="new-accomplishment"
                        id="new-accomplishmet"
                        className="placeholder-labelled"
                        placeholder=""
                        required
                        value={newExperienceNewAccomplishment}
                        onChange={(event) =>
                          setNewExperienceNewAccomplishment(event.target.value)
                        }
                      />
                    </label>
                    <div className="new-item-actions">
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
                      <button
                        type="button"
                        onClick={toggleAccomplishmentsDialog}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="add-item"
                    onClick={toggleAccomplishmentsDialog}
                  >
                    + Add Accomplishment
                  </button>
                )}
              </div>
              <div className="new-item-actions">
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
              </div>
            </form>
          ) : (
            <button
              type="button"
              className="add-item"
              onClick={toggleExperienceDialog}
            >
              + Add Work Experience
            </button>
          )}
        </div>
      )}
      {activeSection.title === "Education" && (
        <div className="section">
          <h2 className="section-title">Education</h2>
          <ul>
            {data.education.map((educationItem) => (
              <li className="education-item item card" key={educationItem.id}>
                <p className="degree">{educationItem.degree}</p>
                <p className="institution">{educationItem.institution}</p>
                <div className="spacetime">
                  <div className="tenure">
                    <Calendar className="icon" />
                    <p>
                      {formatTenureBoundary(educationItem.startDate)} -{" "}
                      {educationItem.completed
                        ? formatTenureBoundary(educationItem.endDate)
                        : "Present"}
                    </p>
                  </div>
                  <div className="location">
                    <MapPin className="icon" />
                    <p>{educationItem.location}</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="item-action remove-button"
                  onClick={() => {
                    setData({
                      ...data,
                      education: data.education.filter(
                        (education) => education.id !== educationItem.id,
                      ),
                    });
                  }}
                >
                  <Trash className="icon" />
                </button>
              </li>
            ))}
          </ul>
          {showEducationDialog ? (
            <form className="new-degree new-item card">
              <h2>Add Degree</h2>
              <label>
                <p>Degree</p>
                <input
                  type="text"
                  name="new-degree-name"
                  id="new-degree-name"
                  className="placeholder-labelled"
                  placeholder=""
                  required
                  value={newEducationDegree}
                  onChange={(event) =>
                    setNewEducationDegree(event.target.value)
                  }
                />
              </label>
              <label>
                <p>Institution</p>
                <input
                  type="text"
                  name="new-degree-institution"
                  id="new-degree-institution"
                  className="placeholder-labelled"
                  placeholder=""
                  required
                  value={newEducationInstitution}
                  onChange={(event) =>
                    setNewEducationInstitution(event.target.value)
                  }
                />
              </label>
              <label>
                <p>Location</p>
                <input
                  type="text"
                  name="new-degree-location"
                  id="new-degree-location"
                  className="placeholder-labelled"
                  placeholder=""
                  required
                  value={newEducationLocation}
                  onChange={(event) =>
                    setNewEducationLocation(event.target.value)
                  }
                />
              </label>
              <div className="new-degree-tenure">
                <h3>Tenure</h3>
                <label className="misc-input">
                  <p>From:</p>
                  <input
                    type="date"
                    name="new-degree-start"
                    id="new-degree-start"
                    placeholder=""
                    required
                    value={newEducationStartDate}
                    onChange={(event) =>
                      setNewEducationStartDate(event.target.value)
                    }
                  />
                </label>
                <label className="misc-input">
                  <p>To:</p>
                  <select
                    name="new-degree-completed"
                    id="new-degree-completed"
                    className="completed-input"
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
                      placeholder=""
                      value={newEducationEndDate}
                      onChange={(event) =>
                        setNewEducationEndDate(event.target.value)
                      }
                    />
                  )}
                </label>
              </div>

              <div className="new-item-actions">
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
              </div>
            </form>
          ) : (
            <button
              type="button"
              className="add-item"
              onClick={toggleEducationDialog}
            >
              + Add Degree
            </button>
          )}
        </div>
      )}
    </div>
  );
}

function validateRequiredInput(inputValues) {
  for (const inputValue of inputValues) {
    if (inputValue === "") return false;
  }
  return true;
}
