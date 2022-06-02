import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navbar: {
    backgroundColor: 'aqua',
    '& a': {
      color: 'white',
      marginLeft: 12,
    },
  },
  main: {
    minHeight: '90vh',
  },
  footer: {
    textAlign: 'center',
  },
});

export default useStyles;
