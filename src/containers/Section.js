import { createElement} from "react";
import React from "react";

 const Section = ({name, children, titleHidden,id}) => {
const titleContent = name.charAt(0).toUpperCase() + name.slice(1);

const childrenElements = children.map((elem, index) => {
  // console.log(elem.props)
  return createElement(elem.type, {className:elem.props.className, key:index, props:elem.props}, elem.props.children);
}) 
return(
  <section id={id} className={name}>
    <h2 className={`${name}__title title ${titleHidden ? 'visually-hidden' : ''}`}>{titleContent}</h2>
    {childrenElements}
  </section>
)

 }

 export default Section