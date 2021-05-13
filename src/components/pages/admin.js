import React from "react";
import Snackbar from "../snackbar/snackbar";
import Loader_Con from "../../containers/loader/loader_cont";
import withStyles from "@material-ui/core/styles/withStyles";
import "../../styles/style.scss";
import { styles } from "../../styles/style";
import {
    Grid,
    AppBar,
    Toolbar,
    ExpansionPanel,
    ExpansionPanelSummary,
    ExpansionPanelDetails,
    Hidden,
    Typography,
    List,
    ListItem,
    Button,
    Fab,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    CardContent,
    IconButton,
    Icon,
    TextField
} from "@material-ui/core";
import {
    Menu,
    Add,
    Edit
} from '@material-ui/icons';
import Logout from "../../containers/router/Lg_Cont";
import Card from "../cards/Card.js";
const card = {
    borderRadius: "10px",
    backgroundColor: "#CDE1F4",
    // padding:-10
};
class Admin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            add: false,
            page: 1,
            event_id: '',
            confirm_delete: false,
            address1: '',
            address2: '',
            address3: '',
            edit: false,
        }
    }
    componentDidMount() {
        this.props.view_all_events();
        this.props.view_details();
    }
    render() {
        const { login, snackbar, close_snack_bar, validate_event, delete_event, edit_details } = this.props;
        return (
            <Grid style={{ height: '100%', }}>
                <Grid>
                    <AppBar position="static" color="default" style={{ backgroundColor: '#5199DC' }}>
                        <Hidden only={["xs", "sm"]}>
                            <Toolbar>
                                <Typography variant="h6" color="primary" style={{ flex: 1 }}>
                                    <Button className="button" onClick={() => { this.setState({ page: 1 }) }}>Events</Button>
                                    <Button className="button" onClick={() => { this.setState({ page: 2 }) }}>Details</Button>
                                </Typography>
                                <Logout />
                            </Toolbar>

                        </Hidden>
                        <Hidden only={["xl", "md", "lg"]}>
                            <ExpansionPanel>
                                <ExpansionPanelSummary
                                    expandIcon={<Menu />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Logout />

                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails style={{ padding: 0 }}>
                                    <List component="nav">
                                        <ListItem button>
                                            <Button className="button" onClick={() => { this.setState({ page: 1 }) }}>Events</Button>
                                        </ListItem >
                                        <ListItem button>
                                            <Button className="button" onClick={() => { this.setState({ page: 2 }) }}>Details</Button>
                                        </ListItem >
                                    </List>
                                </ExpansionPanelDetails>
                            </ExpansionPanel>
                        </Hidden>
                    </AppBar>
                </Grid>
                {this.state.page === 1 ?
                    <Grid container justify="center" style={{ paddingTop: 10 }}>
                        {login.events.map(row => (
                            <Grid item xs={11} md={3} key={row._id} spacing={1}>
                                <Card style={card}>

                                    <CardContent>
                                        <IconButton style={{ float: "right" }}
                                            onClick={() => {
                                                this.setState({
                                                    confirm_delete: true,
                                                    event_id: row._id
                                                })
                                            }}>
                                            <Icon style={{ color: 'red' }}>delete</Icon>
                                        </IconButton>
                                        <img src={row.image} alt={"Unable to Load"} width="100%" />
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}

                    </Grid> :
                    <Grid container justify="center" style={{ paddingTop: 10 }}>
                        <Grid item xs={11} md={3} spacing={1}>
                            <List>
                                <ListItem>
                                    <div>
                                        {"Address Line1:-"}
                                    </div>
                                    <div>
                                        {login.details.address1}
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        {"Address Line2:-"}
                                    </div>
                                    <div>
                                        {login.details.address2}
                                    </div>
                                </ListItem>
                                <ListItem>
                                    <div>
                                        {"Address Line3:-"}
                                    </div>
                                    <div>
                                        {login.details.address3}
                                    </div>
                                </ListItem>
                            </List>
                        </Grid>
                    </Grid>
                }
                <Grid className="chat" >
                    {this.state.page === 1 ?
                        <Fab color="primary" aria-label="add" size='large' onClick={() => { this.setState({ add: true }) }}>
                            <Add />
                        </Fab>
                        :
                        <Fab color="primary" aria-label="edit" size='large'
                            onClick={() => {
                                this.setState({
                                    edit: true,
                                    address1: login.details.address1,
                                    address2: login.details.address2,
                                    address3: login.details.address3
                                })
                            }}>
                            <Edit />
                        </Fab>
                    }
                </Grid>
                <Dialog
                    open={this.state.add}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Add a Event Image</DialogTitle>
                    <DialogContent>
                    </DialogContent>
                    <DialogContent>
                        <Grid container>
                            <Grid container>
                                &nbsp;&nbsp;Image:
                                <input
                                    type="file"
                                    onChange={(event) => {
                                        this.setState({ image: event.target.files[0] })
                                    }}
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() => {
                                this.setState({
                                    add: false,
                                    image: ''
                                });
                            }}
                            color="primary">
                            Close
                        </Button>
                        <Button
                            onClick={() => {
                                validate_event(this.state.image);
                                this.setState({
                                    add: false,
                                    image: ''
                                })
                            }}
                            color="primary" autoFocus>
                            ADD
            </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={this.state.confirm_delete}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Are you sure you want to delete it</DialogTitle>
                    <DialogContent>
                    </DialogContent>
                    <DialogContent>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() => {
                                this.setState({
                                    confirm_delete: false,
                                    event_id: "",
                                });
                            }}
                            color="primary">
                            No
              </Button>
                        <Button
                            onClick={() => {
                                delete_event(this.state.event_id)
                                this.setState({
                                    confirm_delete: false,
                                    event_id: ""
                                })
                            }}
                            color="primary" autoFocus>
                            Yes
              </Button>
                    </DialogActions>
                </Dialog>
                <Dialog
                    open={this.state.edit}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">Edit Office Address</DialogTitle>
                    <DialogContent>
                    </DialogContent>
                    <DialogContent>
                        <Grid container>
                            <Grid container>
                                <TextField
                                    className="login_input"
                                    id="outlined-email-input"
                                    label="Address Line1"
                                    type="email"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    required={true}
                                    value={this.state.address1}
                                    onChange={(event) => { this.setState({ address1: event.target.value }) }}
                                    InputProps={{ classes: { input: this.props.classes.textfield } }}
                                    InputLabelProps={{ classes: { root: this.props.classes.textfieldLabel } }}
                                />
                            </Grid>
                            <Grid container>
                                <TextField
                                    className="login_input"
                                    id="outlined-email-input"
                                    label="Address Line1"
                                    type="email"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    required={true}
                                    value={this.state.address2}
                                    onChange={(event) => { this.setState({ address2: event.target.value }) }}
                                    InputProps={{ classes: { input: this.props.classes.textfield } }}
                                    InputLabelProps={{ classes: { root: this.props.classes.textfieldLabel } }}
                                />
                            </Grid>
                            <Grid container>
                                <TextField
                                    className="login_input"
                                    id="outlined-email-input"
                                    label="Address Line1"
                                    type="email"
                                    fullWidth
                                    margin="normal"
                                    variant="outlined"
                                    required={true}
                                    value={this.state.address3}
                                    onChange={(event) => { this.setState({ address3: event.target.value }) }}
                                    InputProps={{ classes: { input: this.props.classes.textfield } }}
                                    InputLabelProps={{ classes: { root: this.props.classes.textfieldLabel } }}
                                />
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            onClick={() => {
                                this.setState({
                                    edit: false,
                                    address1: '',
                                    address2: '',
                                    address3: '',
                                });
                            }}
                            color="primary">
                            Close
                        </Button>
                        <Button
                            onClick={() => {
                                edit_details(login.user_id, this.state.address1, this.state.address2, this.state.address3);
                                this.setState({
                                    edit: false,
                                    address1: '',
                                    address2: '',
                                    address3: '',
                                })
                            }}
                            color="primary" autoFocus>
                            Update
                        </Button>
                    </DialogActions>
                </Dialog>
                <Loader_Con />
                <Snackbar
                    open={snackbar.response_received}
                    close_snack_bar={close_snack_bar}
                    message={snackbar.message}
                />
            </Grid >
        )
    }
}
export default withStyles(styles)(Admin);

