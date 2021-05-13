import React, { Component } from "react/index.js";
import Grid from "@material-ui/core/Grid";
import CardHeader from "../cards/CardHeader.js";
import CardIcon from "../cards/CardIcon.js";
import Card from "../cards/Card.js";
import withStyles from "@material-ui/core/styles/withStyles";
import Snackbar from "../snackbar/snackbar";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import {Avatar, DialogContentText,} from "@material-ui/core";
import moment from "moment";
// import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardTimePicker,
} from '@material-ui/pickers';
import Icon from "@material-ui/core/Icon";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import { styles } from "../../styles/style";
import LoaderCon from "../../containers/loader/loader_cont";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import {update_product} from "../../actions/product/productActions";

const card = {
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    marginTop: 50
};
const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}
class ProductComponents extends Component {
    constructor(props) {
        super(props);
        this.state = {
            delete:false,
            update:false,
            id:"",
            name:"",
            image:""
        }
    }
    componentDidMount() {
        this.props.get_all_product(this.props.login.user_token)
    }
    // ed = (s) => {
    //     this.setState({
    //         amenity_desc: s.amenity_desc,
    //         amenity_name: s.amenity_name,
    //         amenity_fullday_price: s.amenity_price_info.Hourly_price,
    //         guest_fullday_price: s.guest_price_info.Hourly_price,
    //         start_time: moment(s.available_timings[0], ["h:mm A"]).format("YYYY-MM-DD HH:mm:ss"),
    //         end_time: moment(s.available_timings[1], ["h:mm A"]).format("YYYY-MM-DD HH:mm:ss"),
    //         amenity_id: s._id,
    //         isfree: s.is_free,
    //         no_of_slots: s.no_of_slots,
    //         imgs: s.amenity_imgs
    //     })
    // }
    // del_single_row = (row) => {
    //     this.setState({
    //         confirm_delete: true,
    //         id: row._id,
    //     })
    // }
    handleClose=()=> {
        this.setState({delete: false})
        this.setState({update: false})
    }
    render() {
        const {
            snackbar,
            close_snack_bar,
            product,
            delete_all_product,
            update_product
        } = this.props;
        console.log(product)
        return (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Card style={card}>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="rose">
                                <h3>
                                    VIEW PRODUCT
                                </h3>
                            </CardIcon>
                        </CardHeader>
                        <CardContent>
                            <Grid item lg={12}>
                                <Link to="add_product" style={{ textDecoration: "none" }}>
                                    <IconButton>
                                        <Icon>add</Icon>
                                    </IconButton>
                                </Link>

                            </Grid>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell></TableCell>
                                        <TableCell align="left">&nbsp;&nbsp;Name</TableCell>
                                        {/*<TableCell align="left">Name</TableCell>*/}
                                        <TableCell align="left">ID</TableCell>
                                       {/* <TableCell align="left">Position</TableCell>
                                        <TableCell align="left">Employee-ID</TableCell>*/}
                                        <TableCell align="right">Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {product.all_product.map(row=>(
                                        <TableRow>
                                            <TableCell></TableCell>
                                            <TableCell>{row.name}</TableCell>
                                            <TableCell>{row._id}</TableCell>
                                            {/*<TableCell>{row.name}</TableCell>*/}
                                            {/*<TableCell>{row.name}</TableCell>*/}
                                            <TableCell align={"right"}>
                                                <IconButton>
                                                    <Icon onClick={()=>{this.setState({update:true,id:row._id, image:row.image, name:row.name})}}>edit</Icon>
                                                </IconButton>
                                                <IconButton onClick={()=>{this.setState({delete:true,id:row._id})}}>
                                                    <Icon>delete</Icon>
                                                </IconButton>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <Dialog open={this.state.delete} onClose={()=>{this.handleClose()}} aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">Delete Product</DialogTitle>
                                    <DialogContent>
                                        <DialogContentText>
                                            Are you sure?
                                        </DialogContentText>
                                        {/*<TextField
                                            autoFocus
                                            margin="dense"
                                            id="name"
                                            label="Email Address"
                                            type="email"
                                            fullWidth
                                        />*/}
                                    </DialogContent>
                                    <DialogActions>
                                        <Button  color="primary" onClick={()=>{this.setState({delete:false})}}>
                                            no
                                        </Button>
                                        <Button color="primary" onClick={()=> {
                                            delete_all_product(this.state.id);
                                            this.setState({delete: false, id: ""});
                                        }
                                        }>
                                            Yes
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                                <Dialog open={this.state.update} onClose={()=>{this.handleClose()}} aria-labelledby="form-dialog-title">
                                    <DialogTitle id="form-dialog-title">Edit</DialogTitle>
                                    <DialogContent>
                                        {/*<DialogContentText>
                                            To subscribe to this website, please enter your email address here. We will send updates
                                            occasionally.
                                        </DialogContentText>*/}
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="Name"
                                            type="text"
                                            fullWidth
                                            value={this.state.name}
                                            onChange={(event)=>{this.setState({name:event.target.value})}}
                                        />
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="ID"
                                            type="text"
                                            fullWidth
                                            value={this.state.id}
                                            onChange={(event)=>{this.setState({id:event.target.value})}}
                                        />
                                        <TextField
                                            // autoFocus
                                            margin="dense"
                                            // id="name"
                                            label="Image"
                                            type="text"
                                            fullWidth
                                            value={this.state.image}
                                            onChange={(event)=>{this.setState({image:event.target.value})}}
                                        />
                                    </DialogContent>
                                    <DialogActions>
                                        <Button onClick={()=>{this.setState({update:false})}} color="primary">
                                            Cancel
                                        </Button>
                                        <Button  color="primary" onClick={()=> {
                                            update_product(this.state.id, this.state.image, this.state.name);
                                            this.setState({update: false, id: "", image:"", name:""});
                                        }
                                        }>
                                            Update
                                        </Button>
                                    </DialogActions>
                                </Dialog>
                            </Table>
                        </CardContent>
                    </Card>
                    <LoaderCon />
                    <Snackbar
                        open={snackbar.response_received}
                        close_snack_bar={close_snack_bar}
                        message={snackbar.message}
                    />
                </Grid>
            </Grid>
        )
    }
}
export default withStyles(styles)(ProductComponents);
