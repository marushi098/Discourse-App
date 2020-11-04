import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";


import Typography from "@material-ui/core/Typography";



const useStyles = makeStyles({
  root: {
    width: 300,
  },
  media: {
    height: 340,
  },
});

const About = () => {
  const classes = useStyles();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "1rem",
      }}
    >
      <Card className={classes.root}>
        <CardActionArea>

          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Arushi Mishra
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Full Stack Web Developer
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          
            
        </CardActions>
      </Card>
    </div>
  );
};

export default About;
