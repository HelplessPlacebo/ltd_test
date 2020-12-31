import React, {useEffect, useState} from "react"
import {TFilterProducts, TProducts, TPutCurrentPageProducts, TSearchProducts} from "../../data/ProductsReducer"
import {connect} from "react-redux"
import {GlobalState} from "../../data/redux-store"
import {SearchProducts, FilterProducts, PutCurrentPageProducts} from "../../data/ProductsReducer"
import ProductsPage from "./productsPage"
import {withRouter,useHistory} from 'react-router-dom'
import {RouteComponentProps} from "react-router";

export type T_MSTP_ProductsContainer = {
    currentPageProducts: TProducts | null
    allProducts: TProducts
    portionSize: number
}

type PathParamsType = {
    pageNumber: string,
}

export type TProductsContainerOwnProps = RouteComponentProps<PathParamsType> & {
}

export type T_MDTP_ProductsContainer = {
    SearchProducts: TSearchProducts
    FilterProducts: TFilterProducts
    PutCurrentPageProducts: TPutCurrentPageProducts
}

type TProductsContainerProps = T_MSTP_ProductsContainer & T_MDTP_ProductsContainer & TProductsContainerOwnProps

const ProductsContainer: React.FC<TProductsContainerProps> = (props) => {
    let history = useHistory()
    const [currentPage, SetCurrentPage] = useState(Number.parseInt(props.match.params.pageNumber))

    const changePageHandler = (event: React.ChangeEvent<unknown>, page: number) => {
        history.replace(`/Products/${page}`)
        SetCurrentPage(page)
    }

    useEffect(() => {
        props.PutCurrentPageProducts(currentPage,"Products")
    }, [currentPage])

    return <div className="ProductsContainer">

        <ProductsPage Products={props.currentPageProducts}
                      SearchProducts={props.SearchProducts}
                      FilterProducts={props.FilterProducts} changePageHandler={changePageHandler}
                      currentPage={currentPage}
                      pagesCount={Math.ceil(props.allProducts.length / props.portionSize)} />

    </div>
}

const MSTP = (state: GlobalState): T_MSTP_ProductsContainer => ({
    currentPageProducts: state.ProductsData.currentPageProducts,
    allProducts: state.ProductsData.Products,
    portionSize: state.ProductsData.portionSize
})

export default withRouter(connect<T_MSTP_ProductsContainer, T_MDTP_ProductsContainer, TProductsContainerOwnProps, GlobalState>
(MSTP, {SearchProducts, FilterProducts, PutCurrentPageProducts})(ProductsContainer))