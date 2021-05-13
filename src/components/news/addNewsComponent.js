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
class AddNewsComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:"",
            title:"",
            image:"",
            description:"",
            date:""
        }
    }
    componentDidMount() {
        this.props.get_all_news(this.props.login.user_token)
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
            add_News,
            news,
            set_news_title,
            set_news_image,
            set_news_description,
            set_news_date
        } = this.props;

        return (
            <Grid container justify="center">
                <Grid item xs={12}>
                    <Card style={card}>
                        <CardHeader color="warning" stats icon>
                            <CardIcon color="rose">
                                <h3>
                                    Add News
                                </h3>
                            </CardIcon>
                        </CardHeader>
                        <CardContent>
                            <TextField
                                // autoFocus
                                margin="dense"
                                // id="name"
                                label="Image"
                                type="text"
                                fullWidth
                                value={news.image}
                                onChange={(event)=>{set_news_image(event.target.value)}}
                            />
                            <TextField
                                // autoFocus
                                margin="dense"
                                // id="name"
                                label="Title"
                                type="text"
                                fullWidth
                                value={news.title}
                                onChange={(event)=>{set_news_title(event.target.value)}}
                            />
                            <TextField
                                // autoFocus
                                margin="dense"
                                // id="name"
                                label="Description"
                                type="text"
                                fullWidth
                                value={news.description}
                                onChange={(event)=>{set_news_description(event.target.value)}}
                            />
                            <TextField
                                // autoFocus
                                margin="dense"
                                // id="name"
                                label="date"
                                type="text"
                                fullWidth
                                value={news.date}
                                onChange={(event)=>{set_news_date(event.target.value)}}
                            />
                            <Button onClick={()=>{add_News(news)}}>
                                SUBMIT
                            </Button>
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
export default withStyles(styles)(AddNewsComponent);
