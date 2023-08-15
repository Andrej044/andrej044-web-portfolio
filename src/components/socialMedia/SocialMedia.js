import { createElement } from "react"

// This is experemental feature, create svg icon element with title and parametrs
// work in progress

const SocialMedia =({social})=>{

  console.log(social)
  const socialMedia = social.map( (item, index) => {

    
   return createElement(
    item.tag, 
    {className:item.className, key:index}, 
     typeof item.content === "string" ? item.content : createElement(
      item.content.tag,
      {
        className: typeof item.content.className === "string" ? item.content.className : null ,
        fill: typeof item.content.fill === "string" ? item.content.fill : null,
        fillRule: typeof item.content.fillRule === "string" ? item.content.fillRule : null ,
        d: typeof item.content.d === "string" ? item.content.d : null
      },
    )    
    )
  })

  return(
    <>
    {socialMedia}
    </>
  )
}

export default SocialMedia