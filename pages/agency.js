import React from 'react';
import Container from '@material-ui/core/Container';
import AgencyPage from '../packages/agency/pages/about';
import Head from '../components/Head';

export default function Agency() {
  return (
    <Container maxWidth="sm">
      <Head title="Agency" description="Agency Template" />
      <h1>Agency Page</h1>
      <AgencyPage />
    </Container>
  );
}

Agency.getInitialProps = () => ({
  namespacesRequired: ['common']
});
