import React from "react"
import {TFilterProducts, TProducts, TSearchProducts} from "../../data/ProductsReducer"
import ProductCard from "./Card/ProductCard"
import Grid from "@material-ui/core/Grid"
import Filters from "../Filters/Filters"
import SearchInput from "../SearchedProducts/SearchInput/SearchInput"
import Loader from "../CustomLoader/Loader";
import CustomPagination from "../Paginator/Paginator";


export type TProductsPageProps = {
    Products: TProducts | null
    SearchProducts: TSearchProducts
    FilterProducts: TFilterProducts
    changePageHandler: (event: React.ChangeEvent<unknown>, page: number) => void
    currentPage: number
    pagesCount: number
}

const ProductsPage: React.FC<TProductsPageProps> = (props) => {
    return <div className="ProductsPageContainer">
        <Grid container direction="row" justify="center">

            <Grid item style={{paddingTop: "10%"}} className="FiltersContainer">
                <Filters FilterProducts={props.FilterProducts} defaultPriceValues={[0,2000]}/>
            </Grid>

            <Grid style={{maxWidth: "90rem"}} item>
                <Grid container justify="center" alignItems="center" direction="column">

                    <Grid style={{paddingTop: "2rem"}} item className="SearchInputContainer">
                        <SearchInput SearchProducts={props.SearchProducts}/>
                    </Grid>

                    <Grid item>
                        <Grid container className="ProductsPageWrapper">
                            {
                                props.Products
                                    ?
                                    props.Products.length > 0
                                        ?
                                        props.Products.map(Product => <Grid key={Product.id} item
                                                                            style={{
                                                                                maxWidth: "25rem",
                                                                                paddingTop: "1.5rem"
                                                                            }}>
                                            <ProductCard Product={Product}/>
                                        </Grid>)
                                        : <div style={{
                                            fontSize: "1.5rem",
                                            fontWeight: 500,
                                            paddingTop: "2rem"
                                        }}>there nothing to display</div>
                                    : <Loader/>
                            }
                        </Grid>
                    </Grid>

                    <Grid item style={{paddingBottom: "3rem", paddingTop: "3rem"}}>
                        <CustomPagination changeHandler={props.changePageHandler}
                                          count={props.pagesCount}
                                          currentPage={props.currentPage}/>
                    </Grid>
                </Grid>
            </Grid>


        </Grid>
    </div>
}
export default ProductsPage