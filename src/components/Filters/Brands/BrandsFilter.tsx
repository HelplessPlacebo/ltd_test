import React from "react"
import Grid from "@material-ui/core/Grid";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ArrowDropDownIcon from "@material-ui/icons/KeyboardArrowDown";
import CustomCheckBox from "../../CustomCheckBox/CustomCheckBox";
import {TbrandsSelectInfo} from "../Filters";

export type TCategoriesFilterProps = {
    CategoriesDropDownDisplayed: boolean
    CategoriesDropDownDisplayedToggle: () => void
    onBrandClicked: (e: any) => void
    brandsSelectInfo: TbrandsSelectInfo | undefined
}

const BrandsFilter: React.FC<TCategoriesFilterProps> = (props) => {
    return <div className="PricesFilterContainer">
        <Grid container justify="center" alignItems="center" onClick={props.CategoriesDropDownDisplayedToggle}
              style={{fontWeight: "bold", fontSize: "1.51rem", cursor: "pointer"}}>

            <Grid item>
                Brands
            </Grid>

            <Grid style={{paddingTop: 5}} item>
                {props.CategoriesDropDownDisplayed ? <KeyboardArrowUpIcon/> : <ArrowDropDownIcon/>}
            </Grid>
        </Grid>
        {
            props.CategoriesDropDownDisplayed && <div style={{paddingTop: "1rem"}}
                                                      className="CategoriesFilterDropDownContainer">
                <CustomCheckBox onBrandClicked={props.onBrandClicked} brandsSelectInfo={props.brandsSelectInfo}
                                name="Nike"/>
                <CustomCheckBox onBrandClicked={props.onBrandClicked} brandsSelectInfo={props.brandsSelectInfo}
                                name="Adidas"/>
                <CustomCheckBox onBrandClicked={props.onBrandClicked} brandsSelectInfo={props.brandsSelectInfo}
                                name="OFF-WHITE"/>
                <CustomCheckBox onBrandClicked={props.onBrandClicked} brandsSelectInfo={props.brandsSelectInfo}
                                name="AAPE"/>
                <CustomCheckBox onBrandClicked={props.onBrandClicked} brandsSelectInfo={props.brandsSelectInfo}
                                name="NASA"/>
            </div>
        }
    </div>
}

export default BrandsFilter