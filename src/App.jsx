import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>CIVILIAN</h1>
      </header>
      <main>
        <div className="section">
          <h2>Personal Information</h2>
          <form>
            <label>
              <p>Name</p>
              <input type="text" name="name" id="name" required />
            </label>
            <label>
              <p>Phone Number</p>
              <input type="tel" name="phone" id="phone" required />
            </label>
            <label>
              <p>Email</p>
              <input type="email" name="email" id="email" required />
            </label>
            <label>
              <p>Website</p>
              <input type="text" name="website" id="website" />
            </label>
            <label>
              <p>Location</p>
              <input
                type="text"
                name="location"
                id="personal-location"
                required
              />
            </label>
          </form>
        </div>
        <div className="section">
          <h2>Career Summary</h2>
          <form>
            <label>
              <p>Role</p>
              <input type="text" name="role" id="role" required />
            </label>
            <label>
              <p>Summary</p>
              <textarea name="summary" id="summary"></textarea>
            </label>
          </form>
        </div>
        <div className="section">
          <h2>Skills</h2>
          <ul>
            <li className="skill">
              <p>Example Skill 1</p>
              <button type="button">Remove</button>
            </li>
            <li className="skill">
              <p>Example Skill 2</p>
              <button type="button">Remove</button>
            </li>
          </ul>
          <form>
            <div className="new-skill">
              <h3>Add Skill</h3>
              <input type="text" name="new-skill" id="new-skill" />
              <button type="button">Add</button>
              <button type="button">Cancel</button>
            </div>
            <button type="button">+ Add Skill</button>
          </form>
        </div>
        <div className="section experience">
          <h2>Work Experience</h2>
          <ul>
            <li className="experience-item">
              <p className="position">Position 1</p>
              <p className="organization">Organization 1</p>
              <div className="tenure">
                <p>[Start Date] - [End Date]</p>
              </div>
              <div className="location">
                <p>City, Country</p>
              </div>
              <ul className="accomplishments">
                <li>Some great accomplishment 1</li>
                <li>Some great accomplishment 2</li>
                <li>Some great accomplishment 3</li>
              </ul>
              <button type="button">Remove</button>
            </li>
          </ul>
          <form>
            <div className="new-experience">
              <h3>Add Experience</h3>
              <label>
                <p>Position</p>
                <input
                  type="text"
                  name="new-experience-position"
                  id="new-experience-position"
                />
              </label>
              <label>
                <p>Organization</p>
                <input
                  type="text"
                  name="new-experience-organization"
                  id="new-experience-organization"
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
                  />
                </label>
                <label>
                  <p>To</p>
                  <select
                    name="new-experience-completed"
                    id="new-experience-completed"
                  >
                    <option value="completed" selected>
                      Completed
                    </option>
                    <option value="ongoing">Ongoing</option>
                  </select>
                  <input
                    type="date"
                    name="new-experience-end"
                    id="new-experience-end"
                  />
                </label>
              </div>
              <label>
                <p>Location</p>
                <select name="new-experience-remote" id="new-experience-remote">
                  <option value="onsite">On-site</option>
                  <option value="hybrid">Hybrid</option>
                  <option value="remote">Remote</option>
                </select>
                <input
                  type="text"
                  name="new-experience-location"
                  id="new-experience-location"
                />
              </label>
              <div className="new-experience-accomplishments">
                <h4>Accomplishments</h4>
                <ul>
                  <li>
                    <p>Some great accomplishment 1</p>
                    <button type="button">Remove</button>
                  </li>
                  <li>
                    <p>Some great accomplishment 2</p>
                    <button type="button">Remove</button>
                  </li>
                  <li>
                    <p>Some great accomplishment 3</p>
                    <button type="button">Remove</button>
                  </li>
                </ul>
                <div className="new-accomplishment">
                  <h5>Add Accomplishment</h5>
                  <textarea
                    name="new-accomplishment"
                    id="new-accomplishmet"
                  ></textarea>
                  <button type="button">Add</button>
                  <button type="button">Cancel</button>
                </div>
                <button type="button">+ Add Accomplishment</button>
              </div>
              <button type="button">Add</button>
              <button type="button">Cancel</button>
            </div>
            <button type="button">+ Add Work Experience</button>
          </form>
        </div>
        <div className="section">
          <h2>Education</h2>
          <ul>
            <li className="education-item">
              <p className="degree">Degree 1</p>
              <p className="institution">Institution 1</p>
              <div className="tenure">
                <p>[Start Date] - [End Date]</p>
              </div>
              <div className="location">
                <p>City, Country</p>
              </div>
              <button type="button">Remove</button>
            </li>
          </ul>
          <form>
            <div className="new-degree">
              <h3>Add Degree</h3>
              <label>
                <p>Degree</p>
                <input
                  type="text"
                  name="new-degree-name"
                  id="new-degree-name"
                />
              </label>
              <label>
                <p>Institution</p>
                <input
                  type="text"
                  name="new-degree-institution"
                  id="new-degree-institution"
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
                  />
                </label>
                <label>
                  <p>To</p>
                  <select name="new-degree-completed" id="new-degree-completed">
                    <option value="completed" selected>
                      Completed
                    </option>
                    <option value="ongoing">Ongoing</option>
                  </select>
                  <input
                    type="date"
                    name="new-degree-end"
                    id="new-degree-end"
                  />
                </label>
              </div>
              <label>
                <p>Location</p>
                <input
                  type="text"
                  name="new-degree-location"
                  id="new-degree-location"
                />
              </label>
              <button type="button">Add</button>
              <button type="button">Cancel</button>
            </div>
            <button type="button">+ Add Degree</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default App;
