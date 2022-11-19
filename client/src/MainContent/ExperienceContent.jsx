function ExperienceContent( { data } ) {
  let dataArray = data.map( (value, index) => {
    return <ExperienceAtom data={value} index={index} key={index} />
  });
  return (
    <>
      <h2 id="experience">Experience</h2>
      <ul className="experience-info">
        {dataArray}
      </ul>
    </>
  )
}

function ExperienceAtom ( { data, index } ) {
  return (
    <li key={index}><strong>{data.title}: {data.fromToDate} </strong>
      <br/>{data.description}</li>
  )
}

export default ExperienceContent;

