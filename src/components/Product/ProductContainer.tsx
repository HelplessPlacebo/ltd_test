import React,{useEffect} from "react"
import { GetProductById, TGetProductById, TProduct} from "../../data/ProductsReducer"
import {connect} from "react-redux";
import {GlobalState} from "../../data/redux-store"
import {withRouter} from 'react-router-dom'
import Product from "./Product"
import {RouteComponentProps} from "react-router"


export type T_MSTP_ProductContainer = {
    ClickedProduct : TProduct | null | undefined
}

type PathParamsType = {
    productId : string,
}
export type TProductContainerOwnProps = RouteComponentProps<PathParamsType> &  {}
export type T_MDTP_ProductContainer = {
    GetProductById : TGetProductById
}

type TProductsContainerProps = T_MSTP_ProductContainer & T_MDTP_ProductContainer & TProductContainerOwnProps

 const ProductsContainer : React.FC<TProductsContainerProps> = (props)=>{

    useEffect(()=>{
        props.GetProductById(Number.parseInt(props.match.params.productId))
    },[])

    return <div className="ProductContainer">
        <Product Product={props.ClickedProduct}/>
    </div>
}

const MSTP = (state:GlobalState) : T_MSTP_ProductContainer=>({
    ClickedProduct : state.ProductsData.ClickedProduct
})
export default withRouter(connect<T_MSTP_ProductContainer,T_MDTP_ProductContainer,TProductContainerOwnProps,GlobalState>
(MSTP,{GetProductById})(ProductsContainer))