import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'center',
    alignItems: 'center',
  },
  dropZoneContainer: {
    width: '100%',
    maxWidth: '780px',
    marginTop: theme.spacing(5),
    backgroundColor: '#43b0e2',
    color: '#000',
    borderColor: '#000',
  },
}));
