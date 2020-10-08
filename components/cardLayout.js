import { Card, Grid, Typography, CardContent, Button } from "@material-ui/core"
import { makeStyles } from '@material-ui/core'
import CardSvg from '../public/card.svg'

const useStyle = makeStyles({
  root: {
    borderRadius: "10px",
    padding: "84px 46px 68px"
  },
  grid: {
    marginTop: "376px",
    position: "relative",
    zIndex: "999999",
  },
  title: {
    textAlign: "left",
    font: "normal normal normal 40px/45px Arial",
    letterSpacing: "0px",
    color: "#6D6D6D",
    marginTop: "56px"
  },
  subtitle1: {
    textAlign: "left",
    font: "normal normal normal 15px/25px Georgia",
    letterSpacing: "0px",
    color: "#B1ABB5",
    maxWidth: "478px",
    marginTop: "13px"
  },
  cardContent: {
    padding: 0,
    // svgを真ん中にするにはdiv要素で囲ってtext-alignでいけるみたい。
    textAlign: "center"
  },
  button: {
    marginTop: "42px",
    float: "left",
    color: "#C46DFC",
    font: "normal normal bold 15px/17px Arial",
    letterSpacing: 0,
  }
})

export default function CardLayout() {
  const classes = useStyle()

  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.grid}
      spacing={10}
    >
      <Grid item>
        <Card raised className={classes.root}>
          <CardContent className={classes.cardContent}>
            <CardSvg style={{
              width: "341px",
              height: "258px"
            }} />
            <Typography variant="h4" className={classes.title}>
              Startup Marketing Unchi
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle1}>
              ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi
            </Typography>
            <Button className={classes.button}>Learn More</Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item>
        <Card raised className={classes.root}>
          <CardContent className={classes.cardContent}>
            <CardSvg style={{
              width: "341px",
              height: "258px"
            }} />
            <Typography variant="h4" className={classes.title}>
              Startup Marketing Unchi
            </Typography>
            <Typography variant="subtitle1" className={classes.subtitle1}>
              ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi ponpon unchi
            </Typography>
            <Button className={classes.button}>Learn More</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
