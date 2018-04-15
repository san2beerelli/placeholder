import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";
import MenuItem from "material-ui/Menu/MenuItem";

const styles = theme => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexWrap: "wrap",
    minWidth: 400
  },
  margin: {
    margin: theme.spacing.unit
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3
  },
  textField: {
    marginRight: theme.spacing.unit * 3
  },
  menu: {
    width: 200
  }
});

const skillsArr = [
  {
    value: "basic",
    label: "Basic"
  },
  {
    value: "intermediate",
    label: "Intermediate"
  },
  {
    value: "advanced",
    label: "Advanced"
  }
];
const langArr = [
  {
    value: "en",
    label: "English"
  },
  {
    value: "es",
    label: "Spanish"
  },
  {
    value: "chi",
    label: "Chinese"
  }
];

class FormView extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props.formData };
  }
  componentWillReceiveProps(newProps) {
    this.setState({ ...newProps });
  }
  componentWillUpdate(newProps, newState) {
    const {
      id,
      title,
      slug,
      description,
      time,
      graphic,
      language,
      skill,
      lessons_count
    } = newState;
    this.props.onFormUpdate({
      id,
      title,
      slug,
      description,
      time,
      graphic,
      language,
      skill,
      lessons_count
    });
  }

  handleChange = name => event => {
    if (name === "graphic") {
      this.setState({
        graphic: {
          src: event.target.value
        }
      });
    } else {
      this.setState({
        [name]: event.target.value
      });
    }
  };
  render() {
    const { classes } = this.props;
    return (
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="title"
          label="Title"
          fullWidth
          onChange={this.handleChange("title")}
          className={classes.textField}
          value={this.state.title}
          margin="normal"
        />
        <TextField
          id="slug"
          label="Slug"
          fullWidth
          className={classes.textField}
          value={this.state.slug}
          onChange={this.handleChange("slug")}
          margin="normal"
        />
        <TextField
          id="description"
          label="Description"
          fullWidth
          multiline
          rows="3"
          className={classes.textField}
          value={this.state.description}
          onChange={this.handleChange("description")}
          margin="normal"
        />
        <TextField
          id="select-skill"
          select
          label="Skill"
          className={classes.textField}
          value={this.state.skill}
          onChange={this.handleChange("skill")}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          margin="normal"
        >
          {skillsArr.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="lessons_count"
          label="Lessons Count"
          value={this.state.lessons_count}
          onChange={this.handleChange("lessons_count")}
          type="number"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          margin="normal"
        />
        <TextField
          id="select-lang"
          select
          label="Language"
          className={classes.textField}
          value={this.state.language}
          onChange={this.handleChange("language")}
          SelectProps={{
            MenuProps: {
              className: classes.menu
            }
          }}
          margin="normal"
        >
          {langArr.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="imageSrc"
          label="Image Source"
          fullWidth
          className={classes.textField}
          value={this.state.graphic.src}
          onChange={this.handleChange("graphic")}
          margin="normal"
        />
      </form>
    );
  }
}

FormView.propTypes = {
  classes: PropTypes.object.isRequired,
  onFormUpdate: PropTypes.func
};

export default withStyles(styles)(FormView);
