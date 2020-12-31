import React from "react"
import {TProduct} from "../../../data/ProductsReducer"
import Grid from "@material-ui/core/Grid"
import {NavLink} from "react-router-dom";

export type TProductCardInfoProps = {
    Product: TProduct
}
const ProductCard: React.FC<TProductCardInfoProps> = (props) => {
    return <>
        <Grid container direction="column"
              style={{fontSize: "1.275rem", fontFamily: "inherit", fontWeight: "inherit", padding: "1.5rem"}}
              alignItems="center">
            <Grid item>
                <NavLink to={`/Product/${props.Product.id}`}>
                <img style={{ maxWidth: "20rem", paddingTop: "2rem"}} src={props.Product.imgUrl}
                     alt="ProductImg"/>
                </NavLink>
            </Grid>

            <Grid item style={{fontWeight: 500}} xs={10}>
                {props.Product.name}
            </Grid>
        </Grid>

        <Grid container direction="column"
              style={{paddingLeft: "2rem", fontSize: "1.275rem", fontFamily: "inherit", fontWeight: 500}}>
            <Grid item>
                {
                    props.Product.isAvailable
                        ? <div style={{color: "#26f540"}}> available </div>
                        : <div style={{color: "#4f4f4f"}}> not available</div>
                }
            </Grid>

            <Grid item style={{color: "#4d4d4d", paddingTop: "0.5rem"}}>
                {props.Product.price}&#36;
            </Grid>
        </Grid>
    </>
}
export default ProductCard