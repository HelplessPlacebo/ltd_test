import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles'
import Pagination from '@material-ui/lab/Pagination'

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > *': {
                marginTop: theme.spacing(2),
            },
        },
    }),
);

export type TCustomPaginationProps ={
    count : number
    changeHandler : (event:React.ChangeEvent<unknown>,page:number)=>void
    currentPage : number
}
const CustomPagination : React.FC<TCustomPaginationProps>=(props)=> {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Pagination page={props.currentPage} onChange={props.changeHandler} size="large" count={props.count} color="primary" />
        </div>
    )
}
export default CustomPagination