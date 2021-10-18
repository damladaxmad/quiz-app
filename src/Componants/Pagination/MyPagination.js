import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core';
import React, {useState} from 'react';

const useStyles = makeStyles(theme=>({
    root:{
        position: "relative",
        bottom: 0,
        padding: "5px 80px",
        // zIndex: "200",
        color: "white",
        width: "100%"

    },
    container:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "white"
    }

}))

const MyPagination = (props) =>{
    const classes = useStyles();
    const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
      setPage(value)
    props.onPageChange(event, value)
    window.scroll(0,0)
  };

    return <div className = {classes.container} >
        <div className = {classes.root} >
            <Pagination style = {{
                display: "flex",
                justifyContent: "center"
            }}count = {props.count} color = "primary" page={page}
            onChange={handleChange}/>
        </div>
    </div>
}

export default MyPagination;