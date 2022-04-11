import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export const TimeLine = () => {

   return(
   <VerticalTimeline>
      <VerticalTimelineElement
         className="vertical-timeline-element--work"
         contentStyle={{ background: 'rgb(0, 0, 0)', color: 'rgb(255, 255, 255)' }}
         // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
         date="1958"
         iconStyle={{ background: 'rgb(81, 2, 3)', color: 'rgb(34, 50, 3)' }}
      >
         <h4 className="vertical-timeline-element-subtitle">August 29, 1958</h4>
         <h3 className="vertical-timeline-element-title">Michael Jackson is born.</h3>
         <p>
         The eighth of ten children in a working class family, Michael Jackson is born in Gary, Indiana. His parents both have musical ambitions and set demanding expectations on their children for performing musically. Michael is beaten when he doesn't perform well enough.
         </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
         className="vertical-timeline-element--work"
         date="1965"
         iconStyle={{ background: 'rgb(81, 2, 3)', color: 'rgb(34, 50, 3)' }}
      >
         <h4 className="vertical-timeline-element-subtitle">1965</h4>
         <h3 className="vertical-timeline-element-title">Michael joins the Jackson Brothers as a backup musician.</h3>  
         <p>
         In 1965 Michael and his brother, Marlon, join their three other brothers, Jackie, Tito, and Jermaine, in their band, the Jackson Brothers, as backup musicians who play the tambourine and the congas. They are later promoted to lead singers, and the group becomes the Jackson 5. They set records for getting their first four singles on the Billboard Top 100 charts, and Michael quickly becomes the lead star of the bunch.
         </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
         className="vertical-timeline-element--work"
         date="1972"
         contentStyle={{ background: 'rgb(0, 0, 0)', color: 'rgb(255, 255, 255)' }}
         iconStyle={{ background: 'rgb(81, 2, 3)', color: 'rgb(34, 50, 3)' }}
      >
         <h4 className="vertical-timeline-element-subtitle">January 24, 1972</h4>
         <h3 className="vertical-timeline-element-title">Michael Jackson releases his first solo album, Got to Be There.</h3>
         <p>
         Though still tied to the Jackson 5, Michael Jackson starts releasing his own solo albums, starting with Got to be There on January 24, 1972. This represents a shift from child star to teen heartthrob in Michael's career.
         </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
         className="vertical-timeline-element--work"
         date="2006 - 2008"
         iconStyle={{ background: 'rgb(81, 2, 3)', color: 'rgb(34, 50, 3)' }}
      >
         <h3 className="vertical-timeline-element-title">Web Designer</h3>
         <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
         <p>
            User Experience, Visual Design
         </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
         className="vertical-timeline-element--education"
         date="April 2013"
         contentStyle={{ background: 'rgb(0, 0, 0)', color: 'rgb(255, 255, 255)' }}
         iconStyle={{ background: 'rgb(81, 2, 3)', color: 'rgb(34, 50, 3)' }}
      >
         <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
         <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
         <p>
            Strategy, Social Media
         </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
         className="vertical-timeline-element--education"
         date="November 2012"
         iconStyle={{ background: 'rgb(81, 2, 3)', color: 'rgb(34, 50, 3)' }}
      >
         <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
         <h4 className="vertical-timeline-element-subtitle">Certification</h4>
         <p>
            Creative Direction, User Experience, Visual Design
         </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
         className="vertical-timeline-element--education"
         date="2002 - 2006"
         contentStyle={{ background: 'rgb(0, 0, 0)', color: 'rgb(255, 255, 255)' }}
         iconStyle={{ background: 'rgb(81, 2, 3)', color: 'rgb(34, 50, 3)' }}
      >
         <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
         <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
         <p>
            Creative Direction, Visual Design
         </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
         iconStyle={{ background: 'rgb(81, 2, 3)', color: 'rgb(34, 50, 3)' }}
         />
   </VerticalTimeline>)
}
