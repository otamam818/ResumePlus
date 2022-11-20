import ProgrammingSkills from "./ProgrammingSkills";

function SideContent ( { data } ) {
  return (
    <div className="side-content">
      <ProgrammingSkills data={data.programmingSkills}/>
      <OtherSkills data={data.otherSkills} />
    </div>
  )
}

function OtherSkills ( { data } ) {
  let skillList = data.map( (value, index) => {
    return (
      <li key={index}>
        <img
          src={require(`../images/others/${value.image}`)}
          alt={value.title}
        />
        <b>{value.title}</b>
      </li>
    )
  });
  return (
    <>
    <h2>Other skills</h2>
    <ul className="no-bullet">
      {skillList}
    </ul>
    </>
  )
}

export default SideContent;

