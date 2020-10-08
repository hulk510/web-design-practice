import { Typography, Button, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Bottomsvg from '../public/bottom.svg'

const useStyles = makeStyles({
  h1: {
    textAlign: "left",
    font: "normal normal bold 50px/60px Calibri",
    letterSpacing: "-1.88px",
    color: "#A1A1A1",
    maxWidth: "456px"
  },
  subtitle1: {
    textAlign: "left",
    font: "normal normal normal 15px/25px Georgia",
    letterSpacing: "0px",
    color: "#B1ABB5",
    maxWidth: "542px"
  },
  button: {
    backgroundColor: "#C46DFC",
    padding: "1rem 2rem",
    color: "white",
    borderRadius: "30px",
    marginTop: "2rem"
  },
  grid: {
    position: "relative",
    zIndex: "999999",
  }
})

export default function Bottom() {
  const classes = useStyles()
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      style={{ marginTop: "500px" }}
      className={classes.grid}
      spacing={10}
    >
      <Grid item>
        <Bottomsvg style={{
          height: "714px",
          width: "570px",
        }} />
      </Grid>
      <Grid item>
        <Typography variant="h1" className={classes.h1}>
          We want chance to
          teach you Unchi
      </Typography>
        <Typography variant="subtitle1" className={classes.subtitle1}>
          ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi
      </Typography>
        <Button className={classes.button}>
          Learn More
      </Button>
      </Grid>
    </Grid>
  )
}
