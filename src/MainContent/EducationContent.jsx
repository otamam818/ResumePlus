function EducationContent ( { educationContent } ) {
  return (
    <div className="education-info">
      <img
        src={require(`../images/mainContent/${educationContent.imageName}`)}
        alt="unimelb logo" />
      <p>
          <strong>{educationContent.universityName}</strong><br /> {educationContent.fromToDate}
      </p>
      <p>
          <strong>{educationContent.degreeName}</strong><br />{educationContent.majorName}
      </p>
    </div>
  )
}

export default EducationContent;

