import React from 'react';
import { pageLinks } from '../data';

const PageLink = ({parentClass,itemClass,itemId}) => {
  return (
    <ul className={parentClass} id={itemId}>
          {/* iterate through the link array to add the Menu */}
          {pageLinks.map((link)=>{
            return (
              <li key={link.id}>
                <a href={link.href} className={itemClass}> {link.text}</a>
              </li>
              )
          })}
        </ul>
  )
}

export default PageLink
