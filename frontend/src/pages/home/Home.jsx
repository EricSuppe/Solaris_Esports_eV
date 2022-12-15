import React, { Suspense } from 'react'
import ContentTemplate from '../../components/templates/content/ContentTemplate'
import SectionTemplate from '../../components/templates/section/SectionTemplate'
import "./home.css"
import image from "../../assets/test.jpg"

export default function Home() {
  return (
    <React.Fragment>
      <ContentTemplate
        pageID={"hp"}
        label={"homepage"}
        meta={{ title: "Solaris Esports | irgendnen Text" }}
      >
        <SectionTemplate
          sectionID={"hp_l"}
          label={"landing"}
          hasGuides={true}
          background={
            <React.Fragment>
              <img className='SectionBackground__image' src={image} alt="" />
              <div className="SectionMask__overlay" aria-hidden={true}></div>
            </React.Fragment>
          }
        >
        </SectionTemplate>
      </ContentTemplate>
    </React.Fragment>
  );
}
