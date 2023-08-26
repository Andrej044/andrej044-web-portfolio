 import { useEffect, useState} from "react"


 const SkillsInitialState =  {
    "name":"none",
    "rate":0
 }

 const SkillList = () => {
  const [data, setData] = useState(SkillsInitialState);

  const fetchSkillsJson = () => {
    fetch('data/skills.json')
      .then(response => {
        return response.json()
      })
      .then( data => {
        console.log(data)
        setData(data);
      })
      .catch(error => console.log(`This is cause -- ${error} -- why is not working`))
  }
  useEffect(() => {
    fetchSkillsJson();
  },[])

 

  return(
    <> 
    <h2>{data.name}</h2>
    <h2>{data.rate}</h2>
    </>
  )
 }
 export default SkillList