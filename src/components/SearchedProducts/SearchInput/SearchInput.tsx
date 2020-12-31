import React, {useState} from 'react';
import InputBase from '@material-ui/core/InputBase'
import {createStyles, fade, Theme, makeStyles} from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import CustomizedButton from "../../CustomizedButton/CustomizedButton";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            borderWidth : 1,
            borderColor : "#2499c3",
            borderStyle : "solid",
            backgroundColor: fade(theme.palette.common.white, 0.35),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginLeft: 0,
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(1),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width : "40ch",
                '&:focus': {
                    width: '50ch',
                },
            },
        },
    }),
);

export type TSearchInputProps={
    SearchProducts : (name : string) =>void
}
const SearchInput : React.FC<TSearchInputProps> = (props)=> {
    const classes = useStyles();

    const [searchInputValue, SetSearchInputValue] = useState("")
    const onSearchInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        SetSearchInputValue(event.target.value)
    }
    const onSearchClick=()=>props.SearchProducts(searchInputValue)
    return (
        <div className={classes.root}>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <SearchIcon/>
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{'aria-label': 'search'}}
                    value={searchInputValue}
                    onChange={onSearchInputChange}
                />
                <NavLink style={{textDecoration : "none"}} to="/Search/1">
                    <CustomizedButton variant="outlined" fontColor="teal" fontSize={16}
                                      text="search" bgColor="common" onClick={onSearchClick} />
                </NavLink>
            </div>
        </div>
    );
}
export default SearchInput