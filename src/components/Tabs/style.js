import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  appBar: {
    color: '#000',
    backgroundColor: '#ff645385',
    height: '100%',
  },
  tabsm: {
    '& > div': {
      '& > div > button[aria-selected="true"]': {
        border: 'dashed 4px #000',
        borderLeft: 'none',
        borderRight: 'none',

        '&:first-child': {
          borderTop: 'none',
        },
        '&:last-child': {
          borderBottom: 'none',
        },
      },
      '& > span': {
        display: 'none',
      },
    },
  },
}));
