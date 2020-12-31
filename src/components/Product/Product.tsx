import React from "react"
import {TProduct} from "../../data/ProductsReducer";
import Grid from "@material-ui/core/Grid";

export type TProductProps = {
    Product: TProduct | null | undefined
}

const Product: React.FC<TProductProps> = (props) => {
    return <Grid container direction="column" alignItems="center" justify={"center"}>
        <Grid item>
            <Grid container justify="center" alignItems="center">

                <Grid item>
                    <img style={{maxWidth: "30rem", maxHeight: "30rem"}} src={props.Product?.imgUrl} alt="ProductImg"/>
                </Grid>

                <Grid style={{paddingLeft: "1rem"}} item>
                    <Grid style={{fontSize: "1.225rem"}} container direction="column" alignItems="flex-start">
                        <Grid item>
                            brand : {props.Product?.brand}
                        </Grid>

                        <Grid style={{paddingTop: "0.5rem"}} item>
                            category: {props.Product?.category}
                        </Grid>

                        <Grid style={{paddingTop: "0.5rem"}} item>
                            color : {props.Product?.color}
                        </Grid>

                        <Grid style={{paddingTop: "0.5rem"}} item>
                            sizes : {props.Product?.availableSizes.map(el => el + " ")}
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid style={{maxWidth : "50rem", paddingTop:"1.5rem",fontSize:"1.275rem",paddingLeft:"1rem"}} item>
            <Grid  container>
                <Grid item>
                    description :
                </Grid>
                <Grid style={{paddingTop:"1.5rem"}} item>
                    {props.Product?.description}
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}
export default Product