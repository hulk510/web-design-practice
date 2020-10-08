import { Toolbar, Typography, Button, Tabs, Tab } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import Link from 'next/link'

const useStyles = makeStyles({
  toolbar: {
    marginTop: "60px"
  },
  title: {
    flexGrow: 1,
    color: "#C46DFC",
    font: "normal normal bold 30px/36px Calibri",
    letterSpacing: "3px"
  },
  button: {
    marginRight: "1rem"
  }
})

export default function Header() {
  const classes = useStyles()
  return (
    <header>
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title}>
          PonPon
        </Typography>
        <Button className={classes.button}>
          <Link href="/">Home</Link>
        </Button>
        <Button className={classes.button}>
          <Link href="/">Product</Link>
        </Button>
        <Button className={classes.button}>
          <Link href="/">Login</Link>
        </Button>
        <Button style={{ backgroundColor: "#C46DFC", color: "white", borderRadius: "100px", padding: "1em 2em" }}>
          <Link href="/">SignUp</Link>
        </Button>
      </Toolbar>
    </header>
  )
}
