import React, {useState} from "react"
import PricesFilter from "./Prices/PricesFilter";
import BrandsFilter from "./Brands/BrandsFilter";
import { TFilterProducts} from "../../data/ProductsReducer";
import CustomizedButton from "../CustomizedButton/CustomizedButton";
import {NavLink} from "react-router-dom";

export type TFiltersProps = {
    FilterProducts: TFilterProducts
    defaultPriceValues?: number[]
}
export type TbrandsSelectInfo ={
    [key : string] : boolean
}
const Filters: React.FC<TFiltersProps> = (props) => {
    let [sliderValues, SetSliderValues] = useState<number[]>(props.defaultPriceValues ? props.defaultPriceValues : [0, 100])
    let [PricesDropDownDisplayed, SetPricesDropDownDisplayed] = useState(false)
    let [BrandsDropDownDisplayed, SetBrandsDropDownDisplayedDropDownDisplayed] = useState(false)
    let [brandsSelectInfo, setBrandsSelectInfo] = useState<TbrandsSelectInfo>()

    const PricesDropDownDisplayedToggle = () => SetPricesDropDownDisplayed(!PricesDropDownDisplayed)
    const CategoriesDropDownDisplayedToggle = () => SetBrandsDropDownDisplayedDropDownDisplayed(!BrandsDropDownDisplayed)
    const SliderHandleChange = (event: any, newValue: number | number[]) => SetSliderValues(newValue as number[])

    const onBrandClicked = (event: any) => setBrandsSelectInfo({
        ...brandsSelectInfo, [event.target.name]: event.target.checked
    })

    const onSubmitFilters = () => {
        let clickedBrands = [] as string[]
        for(let brandKey in brandsSelectInfo ) {
            //@ts-ignore
            if(brandsSelectInfo[brandKey])clickedBrands.push(brandKey)
        }
        props.FilterProducts({price:sliderValues,brands:clickedBrands})
    }

    return <div className="FiltersContainer">
        <PricesFilter PricesDropDownDisplayed={PricesDropDownDisplayed}
                      PricesDropDownDisplayedToggle={PricesDropDownDisplayedToggle}
                      defaultValues={props.defaultPriceValues ? props.defaultPriceValues : [0, 2000]}
                      maxValue={2000} minValue={0} maxWidth={500}
                      values={sliderValues} SliderHandleChange={SliderHandleChange}/>

        <BrandsFilter CategoriesDropDownDisplayed={BrandsDropDownDisplayed}
                      CategoriesDropDownDisplayedToggle={CategoriesDropDownDisplayedToggle}
                      onBrandClicked={onBrandClicked} brandsSelectInfo={brandsSelectInfo}/>

        <NavLink style={{textDecoration : "none"}} className="SearchButtonContainer" to="/Filter/1">
            <CustomizedButton onClick={onSubmitFilters} bgColor="deepOrange" text="filter"
                              variant="contained" fontSize={16}/>
        </NavLink>
    </div>
}

export default Filters