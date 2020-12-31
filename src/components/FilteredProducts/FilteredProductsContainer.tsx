import React, {useEffect, useState} from "react"
import {TFilterProducts, TProducts, TPutCurrentPageProducts, TSearchProducts} from "../../data/ProductsReducer"
import {connect} from "react-redux"
import {GlobalState} from "../../data/redux-store"
import {SearchProducts, FilterProducts, PutCurrentPageProducts} from "../../data/ProductsReducer"
import ProductsPage from "../Products/productsPage"
import {withRouter,useHistory} from 'react-router-dom'
import {RouteComponentProps} from "react-router";

export type T_MSTP_SearchContainer = {
    currentPageProducts: TProducts | null
    portionSize: number
    FilterResult : TProducts
}

type PathParamsType = {
    pageNumber: string,
}

export type TSearchContainerOwnProps = RouteComponentProps<PathParamsType> & {
}

export type T_MDTP_SearchContainer = {
    SearchProducts: TSearchProducts
    FilterProducts: TFilterProducts
    PutCurrentPageProducts: TPutCurrentPageProducts
}

type TSearchContainerProps = T_MSTP_SearchContainer & T_MDTP_SearchContainer & TSearchContainerOwnProps

const FilteredProductsContainer: React.FC<TSearchContainerProps> = (props) => {
    let history = useHistory()
    const [currentPage, SetCurrentPage] = useState(Number.parseInt(props.match.params.pageNumber))

    const changePageHandler = (event: React.ChangeEvent<unknown>, page: number) => {
        history.replace(`/Filter/${page}`)
        SetCurrentPage(page)
    }

    useEffect(() => {
        props.PutCurrentPageProducts(currentPage,"FilterResult")
    }, [currentPage,props.FilterResult])

    return <div className="ProductsContainer">

        <ProductsPage Products={props.currentPageProducts}
                      SearchProducts={props.SearchProducts}
                      FilterProducts={props.FilterProducts} changePageHandler={changePageHandler}
                      currentPage={currentPage}
                      pagesCount={ Math.ceil(props.FilterResult.length / props.portionSize)}/>
    </div>
}

const MSTP = (state: GlobalState): T_MSTP_SearchContainer => ({
    currentPageProducts: state.ProductsData.currentPageProducts,
    FilterResult : state.ProductsData.FilterResult,
    portionSize: state.ProductsData.portionSize
})

export default withRouter(connect<T_MSTP_SearchContainer, T_MDTP_SearchContainer, TSearchContainerOwnProps, GlobalState>
(MSTP, {SearchProducts, FilterProducts, PutCurrentPageProducts})(FilteredProductsContainer))