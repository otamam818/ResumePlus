import EducationContent from "./EducationContent";
import ExperienceContent from "./ExperienceContent";

function MainContent ( { data }) {
  return (
    <div className="main-content">
      <h2 id="summary">Summary</h2>
      <div className="summary-info">{data.contentInfo.summary.info}</div>

      <h2 id="education">Education</h2>
      <EducationContent
        educationContent={data.contentInfo.educationContent}
      />
      <ExperienceContent data={data.contentInfo.experienceInfo} />
    </div>
  )
}

export default MainContent;

