import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "material-ui/styles";
import Table, {
  TableBody,
  TableCell,
  TablePagination,
  TableRow
} from "material-ui/Table";
import Paper from "material-ui/Paper";
import ListToolbar from "./ListToolbar";
import Grid from "material-ui/Grid";
import Typography from "material-ui/Typography";
import { Icon } from "../index";
import { Link } from "react-router-dom";

const styles = theme => ({
  root: {
    margin: theme.spacing.unit * 3
  },
  table: {},
  tableWrapper: {
    overflowX: "auto"
  },
  listItemTitle: {
    marginLeft: theme.spacing.unit * 3,
    flex: 1
  }
});

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: [],
      data: [],
      page: 0,
      rowsPerPage: 10,
      total: 0
    };
    this.getData = this.getData.bind(this);
  }
  componentDidMount() {
    this.getData();
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      data: newProps.listData.inventory,
      total: newProps.listData.total
    });
  }

  getData(pageObj) {
    const page =
      pageObj && pageObj.page !== undefined ? pageObj.page : this.state.page;
    const rowsPerPage =
      pageObj && pageObj.rowsPerPage !== undefined
        ? pageObj.rowsPerPage
        : this.state.rowsPerPage;
    this.props.getListData(page, rowsPerPage);
  }

  handleClick = (event, id) => {
    const { selected } = this.state;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    this.setState({ selected: newSelected });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
    this.getData({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
    this.getData({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.state.selected.indexOf(id) !== -1;
  selectedRecord = seletedId =>
    this.state.data.find(element => element.id === seletedId);
  onIconClickHandler = tool => {
    if (tool === "Edit") {
      const record = this.selectedRecord(this.state.selected[0]);
      this.props.onToolClick(tool, record);
    } else if (tool === "Delete") {
      this.props.onToolClick(tool, this.state.selected);
      this.setState({ selected: [] });
    }
  };
  onNextButtonClickHandler = selected => {
    this.props.nextButtonClick(selected);
  };

  render() {
    const { classes } = this.props;
    const { data, selected, rowsPerPage, page, total } = this.state;
    const emptyRows =
      rowsPerPage - Math.min(rowsPerPage, total - page * rowsPerPage);

    return (
      <Paper className={classes.root}>
        <ListToolbar
          numSelected={selected.length}
          onIconClick={this.onIconClickHandler}
        />
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableBody>
              {data.map(n => {
                const isSelected = this.isSelected(n.id);
                return (
                  <TableRow
                    key={n.id}
                    hover
                    tabIndex={-1}
                    style={{ cursor: "pointer" }}
                    onClick={event => this.handleClick(event, n.id)}
                    role="checkbox"
                    aria-checked={isSelected}
                    selected={isSelected}
                  >
                    <TableCell padding="dense">
                      <Grid container alignItems="center" wrap="nowrap">
                        <img
                          src={n.graphic.src}
                          alt={n.graphic.alt}
                          width="50px"
                          height="50px"
                        />
                        <Typography
                          variant="body2"
                          className={classes.listItemTitle}
                        >
                          {n.title}
                        </Typography>
                        <Link to="/course">
                          <Icon
                            type="Next"
                            onClick={() => this.onNextButtonClickHandler(n)}
                          />
                        </Link>
                      </Grid>
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={total}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
  getListData: PropTypes.func,
  nextButtonClick: PropTypes.func,
  onToolClick: PropTypes.func
};

export default withStyles(styles)(List);
