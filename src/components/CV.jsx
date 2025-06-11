import { Phone, Mail, Link, MapPin, Calendar } from "lucide-react";

import "../styles/CV.css";

import { formatTenureBoundary } from "../utils.js";

export default function CV({ data }) {
  return (
    <div className="cv">
      <div className="section header">
        <div className="name">{data.name}</div>
        <div className="role">{data.role}</div>
        <div className="personal">
          {data.phone && (
            <div className="phone info">
              <Phone className="icon" />
              <p>{data.phone}</p>
            </div>
          )}
          {data.email && (
            <div className="email info">
              <Mail className="icon" />
              <p>{data.email}</p>
            </div>
          )}
          {data.website && (
            <div className="website info">
              <Link className="icon" />
              <p>{data.website}</p>
            </div>
          )}
          {data.location && (
            <div className="location info">
              <MapPin className="icon" />
              <p>{data.location}</p>
            </div>
          )}
        </div>
      </div>
      {data.summary && (
        <div className="section summary">
          <div className="heading">SUMMARY</div>
          <div className="content">
            <p>{data.summary}</p>
          </div>
        </div>
      )}
      {data.skills && data.skills.length > 0 && (
        <div className="section skills">
          <div className="heading">SKILLS</div>
          <div className="content">
            <ul>
              {data.skills.map((skillItem) => (
                <li key={skillItem.id}>{skillItem.skill}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {data.experience && data.experience.length > 0 && (
        <div className="section experience">
          <div className="heading">EXPERIENCE</div>
          <div className="content">
            <ul>
              {data.experience.map((experienceItem) => (
                <li className="item" key={experienceItem.id}>
                  <p className="position">{experienceItem.position}</p>
                  <p className="organization">{experienceItem.organization}</p>
                  <div className="details">
                    <div className="period info">
                      <Calendar className="icon" />
                      <p>
                        {formatTenureBoundary(experienceItem.startDate)} -{" "}
                        {experienceItem.completed
                          ? formatTenureBoundary(experienceItem.endDate)
                          : "Present"}
                      </p>
                    </div>
                    <div className="location info">
                      <MapPin className="icon" />
                      <p>
                        {experienceItem.type === "onsite"
                          ? experienceItem.location
                          : "Remote"}
                      </p>
                    </div>
                  </div>
                  <ul className="accomplishments">
                    {experienceItem.accomplishments.map(
                      (accomplishmentItem) => (
                        <li key={accomplishmentItem.id}>
                          {accomplishmentItem.accomplishment}
                        </li>
                      ),
                    )}
                  </ul>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {data.education && data.education.length > 0 && (
        <div className="section education">
          <div className="heading">EDUCATION</div>
          <div className="content">
            <ul>
              {data.education.map((educationItem) => (
                <li key={educationItem.id}>
                  <p className="degree">{educationItem.degree}</p>
                  <p className="institution">{educationItem.institution}</p>
                  <div className="details">
                    <div className="period info">
                      <Calendar className="icon" />
                      <p>
                        {formatTenureBoundary(educationItem.startDate)} -{" "}
                        {educationItem.completed
                          ? formatTenureBoundary(educationItem.endDate)
                          : "Present"}
                      </p>
                    </div>
                    <div className="location info">
                      <MapPin className="icon" />
                      <p>{educationItem.location}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
