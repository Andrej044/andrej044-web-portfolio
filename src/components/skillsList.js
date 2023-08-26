 import { useEffect, useState} from "react";


 const SkillsInitialState =  {
  skills: [{
    "name":"none",
    "rate":0 }]
 }

 const SkillList = () => {
  const [data, setData] = useState(SkillsInitialState);

  const fetchSkillsJson = () => {
    fetch('data/skills.json')
      .then(response => {
        return response.json()
      })
      .then( data => {
        setData(data);
      })
      .catch(error => console.log(`This is cause -- ${error} -- why is not working`))
  }

  useEffect(() => {
    fetchSkillsJson();
  },[])

  const skillList = data.skills.map( (skill, index) => {
   return (
      <li className="skills__item" key={index}>
        <h3>{skill.name}</h3>
        <p>{skill.rate}</p>
      </li>
   )
  });

  return(
    <ul className="skills__list">
      {skillList}
    </ul>
  )
 }
 export default SkillList;