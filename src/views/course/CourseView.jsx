import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import withRoot from "../../withRoot";
import AppContext from "../../provider/AppContext";
import Typography from "material-ui/Typography";
import Card, { CardMedia, CardContent, CardActions } from "material-ui/Card";
import Badge from "material-ui/Badge";

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 3,
    display: "flex",
    justifyContent: "center"
  },
  card: {
    maxWidth: 600
  },
  media: {
    height: 400
  },
  pos: {
    marginBottom: 12
  },
  padding: {
    padding: `0 ${theme.spacing.unit * 2}px`
  }
});

class CourseView extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppContext.Consumer>
        {context => (
          <div className={classes.root}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.media}
                image={context.formData.graphic.src}
                title={context.formData.graphic.alt}
              />
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  {context.formData.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {`Skill: ${context.formData.skill} - Slug: ${
                    context.formData.slug
                  }`}
                </Typography>
                <Typography component="p">
                  {context.formData.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Badge
                  color="primary"
                  badgeContent={context.formData.lessons_count}
                >
                  <Typography variant="button" className={classes.padding}>
                    Lessons
                  </Typography>
                </Badge>
                <Badge color="primary" badgeContent={context.formData.time}>
                  <Typography variant="button" className={classes.padding}>
                    Time
                  </Typography>
                </Badge>
              </CardActions>
            </Card>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}
CourseView.propTypes = {
  classes: PropTypes.object.isRequired
};
export default withRoot(withStyles(styles)(CourseView));
