import React from 'react'
import { Ul } from '../../../MainTags'
import styles from './aboutSectOne.module.css'

export default function AboutSectOneText() {
  return (
    <div className={styles.aboutTextMainParent}>
      <h2>Vestibulum congue neque quis ex fringilla, in pellentesque massa gravida.</h2>
      <p>Mauris tempus lorem nec ex facilisis suscipit. Phasellus pretium rutrum augue, eu rutrum lacus lobortis rutrum. Etiam a sem et velit sollicitudin placerat. Maecenas tincidunt justo ligula, sit amet maximus dolor iaculis quis. Sed laoreet cursus posuere. Pellentesque commodo odio in luctus interdum.</p>
        <div>
          <Ul className={styles.aboutTextUl}>
            <li><span>&#10148;</span> Proin et ligula ut nulla laoreet posuere.</li>
            <li><span>&#10148;</span> Sed vestibulum magna vel egestas feugiat.</li>
            <li><span>&#10148;</span> Curabitur nec erat eu lorem gravida aliquet.</li>
          </Ul>
        </div>
    </div>
  )
}
