import React from 'react'
import {Redirect, Route} from "react-router-dom"
import Grid from "@material-ui/core/Grid"
import ProductContainer from "./components/Product/ProductContainer"
import AS from "./app.module.css"
import ProductsContainer from "./components/Products/ProductsContainer";
import SearchedProductsContainer from "./components/SearchedProducts/SearchedProductsContainer";
import FilteredProductsContainer from "./components/FilteredProducts/FilteredProductsContainer";
import {NavLink} from "react-router-dom";

type TAppProps = {}
const App : React.FC<TAppProps> = (props) => {

    return (
        <Grid container direction="column" className={AS.AppWrapper} >

            <Grid item style={{minHeight: "10rem"}} className="HeaderContainer">

                <NavLink style={{textDecoration : "none",fontSize:"1.5rem",color : "#222",fontWeight:"bold"}} to="/">
                    <div style={{paddingTop:"2rem",paddingLeft:"20%"}}>
                        Home
                    </div>
                </NavLink>
            </Grid>

            <Grid item className="ContentContainer">
                <Route exact path='/'
                       render={() => <Redirect to={"/Products/1"}/>}/>

                <Route exact path='/Products/:pageNumber?'
                       render={() => <ProductsContainer />}/>

                <Route exact path='/Product/:productId?'
                       render={() => <ProductContainer/>}/>

                <Route exact path='/Search/:pageNumber?'
                       render={() => <SearchedProductsContainer/>}/>

                <Route exact path='/Filter/:pageNumber?'
                       render={() => <FilteredProductsContainer/>}/>

            </Grid>

        </Grid>
    )
}


export default App
