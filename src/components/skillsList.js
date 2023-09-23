 import { useEffect, useState} from "react";
 import Star from "./svg/star";


 const SkillsInitialState =  {
  skills: [{
    "name":"none",
    "rate":0 }]
 }

 const SkillList = () => {
  const [skills, setData] = useState(SkillsInitialState);


  const fetchSkillsJson = () => {
    fetch('data/skills.json')
      .then(response => {
        return response.json()
      })
      .then( skills => {
        setData(skills);
      })
      .catch(error => console.log(`This is cause -- ${error} -- why is not working`))
  }

  useEffect(() => {
    fetchSkillsJson();
  },[]);

  
  const skillList = skills.skills.map( (skill, index) => {
    const stars = [];
    for(let i=0; i<5; i++){
      stars.push(<li key={i}><Star/></li>)
    }
    const starList = stars.map((item,index) => {
      return index < skill.rate ? <li key={index}><Star color ='#D95D39'/></li> : <li key={index}><Star strokeColor="rgb(241, 136, 5)"/></li> 
    })

   return (
      <li className="skills__item" key={index}>
        <h3>{skill.name}</h3>
        <ul>{starList}</ul>
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