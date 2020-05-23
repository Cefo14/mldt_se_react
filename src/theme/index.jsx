import React from 'react';
import PropTypes from 'prop-types';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  typography: {
    fontFamily: "'Press Start 2P', cursive",
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        fontFamily: "'Press Start 2P', cursive",
      },
    },
  },
});

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    { children }
  </ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
    PropTypes.string,
  ]).isRequired,
};

export default Theme;
