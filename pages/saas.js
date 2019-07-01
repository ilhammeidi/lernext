import React from 'react';
import Container from '@material-ui/core/Container';
import SaasPage from '../packages/saas/pages/about';
import Head from '../components/Head';

export default function Saas() {
  return (
    <Container maxWidth="sm">
      <Head title="Agency" description="Agency Template" />
      <h1>Saas Page</h1>
      <SaasPage />
    </Container>
  );
}

Saas.getInitialProps = () => ({
  namespacesRequired: ['common']
});
