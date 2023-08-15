import { createElement } from "react"


const SocialMedia =({social})=>{

  console.log(social)
  const socialMedia = social.map( (item, index) => {
    // item.content instanceof String ? item.content : item.content;
   return createElement(
    item.tag, 
    {className:item.className, key:index}, 
     typeof item.content === "string" ? item.content : createElement(
      item.content.tag,
      {
        className:item.content.className,
        fill:item.content.fill,
        fillRule:item.content.fillRule,
        d:item.content.d
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