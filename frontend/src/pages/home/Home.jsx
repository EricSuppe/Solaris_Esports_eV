import React, { Suspense } from 'react'
import ContentTemplate from '../../components/templates/content/ContentTemplate'
import SectionTemplate from '../../components/templates/section/SectionTemplate'
import "./home.css"

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
        >
        </SectionTemplate>
      </ContentTemplate>
    </React.Fragment>
  );
}
