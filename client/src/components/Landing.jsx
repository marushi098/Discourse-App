import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Button } from "../material/index";
import { Link } from "react-router-dom";
import hero from "../assests/hero.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "5rem",
    color:"red"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    color:"red"
  },
  img: {
    width: "80%",
    height: "80%",
    color:"red"
  },
  heroHeading: {
    color: "#341f97",
    color:"red"
  },
  spacing: {
    margin: theme.spacing(1),
  },
  registerBtn: {
    backgroundColor: "red",
    color: "#fff",
    "&:hover": {
      opacity: "0.9",
      backgroundColor: "#341f97",
      color: "#fff",
    },
  },
  link: {
    textDecoration: "none",
    color: "#fff",
  },
}));

const Landing = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={12} lg={6} style={{ textAlign: "center" }}>
          <Typography variant="h3" className={classes.heroHeading}>
           Be a Part Of Our Programe
          </Typography>
          <p>Contributed by thousands of Devlopers</p>
          <Button
            variant="outlined"
            color="primary"
            className={classes.spacing}
          >
            <Link
              to="/login"
              className={classes.link}
              style={{ color: "#111" }}
            >
              Login
            </Link>
          </Button>
          <Button
            variant="outlined"
            color="primary"
            className={`${classes.spacing} ${classes.registerBtn}`}
          >
            <Link to="/register" className={classes.link}>
              Register
            </Link>
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} lg={6}>
          <img src={hero} alt="hero" className={classes.img} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Landing;
