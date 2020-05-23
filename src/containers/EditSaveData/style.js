import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    paddingBottom: theme.spacing(2),
  },

  moneyContainer: {
    backgroundColor: '#63c8fa4f',
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2),
    border: 'dashed 4px #000',
    display: 'flex',
    justifyContent: 'space-between',
    '& > div': {
      width: '50%',
    },
  },

  actionsContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    '& > button': {
      backgroundColor: '#fd5bd0',
      '&:first-child': {
        marginRight: theme.spacing(2),
      },
    },
  },

  grid1: {
    border: 'dashed 4px #000',
  },

  grid2: {
    border: 'dashed 4px #000',
    borderLeft: 'none',
    backgroundColor: '#4bff613b',
  },

  itemsContainer: {
    padding: theme.spacing(2, 0),
  },

  textFieldContainer: {
    width: '100%',
    padding: theme.spacing(3, 2),
  },
}));
