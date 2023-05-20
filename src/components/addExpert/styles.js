
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  },
  paper: {
    padding: theme.spacing(2),
    marginTop: '3%',
    marginBottom: '3%'
  },
  form: {
    flexWrap: 'wrap',

  },
  fileInput: {
    width: '100%',
    margin: '20px 0',
  },
  input: {
    width: '200%',
  },
  buttonSubmit: {
    marginLeft: '50%',
    backgroundColor: '#45E598',
    "&:hover": {
      backgroundColor: '#45EF98',
    },
  },
}));
