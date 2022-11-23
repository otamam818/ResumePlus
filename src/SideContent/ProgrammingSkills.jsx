function ProgrammingSkills( { data } ) {
  let skillList = data.map ((value, index) => {
    let subskills = value.subskills.map ( (sub_value, inner_index) => {
      return (
        <li key={inner_index}>{sub_value}</li>
      )
    });
    return (
      <li key={index}>
        <img
          src={require(`../images/programmingImages/${value.image}`)}
          alt={value.title}
        />
        <b>{value.title}</b>
        <ul>
          {subskills}
        </ul>
      </li>
    )
  });
  return (
    <>
    <h2>Programming Skills</h2>
    <ul className="no-bullet">
      {skillList}
    </ul>
    </>
  )
}

export default ProgrammingSkills;

