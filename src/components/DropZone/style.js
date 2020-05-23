import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  dropZoneContainer: {
    boxSizing: 'border-box',
    width: '100%',
    backgroundColor: 'inherit',
    color: 'inherit',
    borderColor: 'inherit',
  },
  dropZone: {
    boxSizing: 'border-box',
    width: '100%',
    height: '165px',
    border: '4px dashed',
    borderRadius: '4px',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    boxShadow: 'none',
    backgroundColor: 'inherit',
    color: 'inherit',
    borderColor: 'inherit',
    padding: theme.spacing(2),
  },
  typography: {
    textAlign: 'center',
  },
}));
