import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import NextLink from 'next/link';
import { withTranslation } from '../i18n';

class Index extends React.Component {
  static async getInitialProps() {
    console.log('getinitprops');
    return {
      namespacesRequired: ['footer'],
    };
  }

  render() {
    // const classes = useStyles();
    const { t } = this.props;
    return (
      <Container maxWidth="lg">
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          {t('description')}
        </Typography>
        <NextLink href="/agency">
          <a title="Agency">
            Agency
          </a>
        </NextLink>
        &nbsp;&nbsp;&nbsp;
        <NextLink href="/saas">
          <a title="Saas">
            Saas
          </a>
        </NextLink>
        &nbsp;&nbsp;&nbsp;
        <NextLink href="/about">
          <a title="About">
            About
          </a>
        </NextLink>
      </Container>
    );
  }
}

Index.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation('footer')(Index);
