import React, { Suspense } from 'react'
import { CircularProgress } from '@mui/material'
import PageTemplate from '../../components/templates/PageTemplate'
import SectionTemplate from '../../components/templates/SectionTemplate'

export default function Home() {
  return (
    <React.Fragment>
      <PageTemplate
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
      </PageTemplate>
    </React.Fragment>
  );
}
