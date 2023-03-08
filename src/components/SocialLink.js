import React from 'react';
import { socialLinks } from '../data';

const SocialLink = ({parentClass,itemClass}) => {
  return (
    <ul className={parentClass}>
        {socialLinks.map((link)=>{
            return (
            <li key={link.id}>
                <a href={link.href} target="_blank" rel="noreferrer" className={itemClass}
                ><i className={link.icon}></i></a>
            </li>
            )
        })}
    </ul>
  )
}

export default SocialLink
