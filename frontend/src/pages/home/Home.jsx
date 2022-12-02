import React, { Suspense } from 'react'
import { CircularProgress } from '@mui/material'
import ContentTemplate from '../../components/templates/content/ContentTemplate'
import SectionTemplate from '../../components/templates/section/SectionTemplate'

export default function Home() {
  return (
    <React.Fragment>
      <ContentTemplate
        pageID={"hp"}
        label={"homepage"}
        meta={{ title: "Solaris Esports | irgendnen Text" }}
      >
        <Suspense fallback={<CircularProgress />}>
          <SectionTemplate
            sectionID={"hp_l"}
            label={"landing"}
            hasGuides={true}
          >
            <h1>Test</h1>
          </SectionTemplate>
        </Suspense>
      </ContentTemplate>
    </React.Fragment>
  );
}
