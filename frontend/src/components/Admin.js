import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ChooseBluffmaster from './ChooseBluffmaster';
import Voting from './Voting';
import DisplayQuestion from './DisplayQuestion';
import DisplayOptions from './DisplayOptions';
import ActivePlayers from './ActivePlayers';
import QuestionSelector from './QuestionSelector';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    padding: theme.spacing(1),
  },
}));

export default function Admin() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container xs={12}>
        <Grid item xs={4} className={classes.grid}>
          <QuestionSelector />
        </Grid>
        <Grid item xs={4} className={classes.grid}>
          <DisplayQuestion />
        </Grid>
        <Grid item xs={4} className={classes.grid}>
          <DisplayOptions />
        </Grid>
        <Grid item xs={4} className={classes.grid}>
          <ChooseBluffmaster />
        </Grid>
        <Grid item xs={4} className={classes.grid}>
          <ActivePlayers />
        </Grid>
        <Grid item xs={4} className={classes.grid}>
          <Voting />
        </Grid>
      </Grid>
    </div>
  );
}
