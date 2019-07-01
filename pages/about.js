import React from 'react';
import Container from '@material-ui/core/Container';
import Head from '../components/Head';

export default function Saas() {
  return (
    <Container maxWidth="sm">
      <Head title="About" description="About Page" />
      <h1>About</h1>
    </Container>
  );
}

Saas.getInitialProps = () => ({
  namespacesRequired: ['common']
});
