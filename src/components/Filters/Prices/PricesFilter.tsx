import React from "react"
import CustomSlider from "../../CustomSlider/CustomSlider"
import ArrowDropDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import Grid from "@material-ui/core/Grid";

export type TPricesFilterProps = {
    PricesDropDownDisplayed: boolean
    PricesDropDownDisplayedToggle: () => void
    maxValue: number
    minValue: number
    maxWidth?: number | string
    title?: string
    defaultValues: number[]
    values : number[]
    SliderHandleChange : (event: any, newValue: number | number[])=>void
}
const PricesFilter: React.FC<TPricesFilterProps> = (props) => {

    return <div className="PricesFilterContainer">
        <Grid container justify="center" alignItems="center" onClick={props.PricesDropDownDisplayedToggle}
              style={{fontWeight: "bold", fontSize: "1.51rem", cursor: "pointer"}}>

            <Grid item>
                Prices
            </Grid>

            <Grid style={{paddingTop: 5}} item>
                {props.PricesDropDownDisplayed ? <KeyboardArrowUpIcon/> : <ArrowDropDownIcon/>}
            </Grid>
        </Grid>
        {
            props.PricesDropDownDisplayed && <div className="PricesFilterDropDownContainer">

                <div style={{fontSize: "1.115rem",paddingLeft:"25%",paddingTop:"1.12rem"}}>
                    from {props.values[0]}&#36; to {props.values[1]}&#36;
                </div>

                <div style={{paddingTop: "1.5rem"}} className="Slider">
                    <CustomSlider minValue={props.minValue} maxValue={props.maxValue}
                                  defaultValues={props.defaultValues} value={props.values}
                                  handleChange={props.SliderHandleChange} maxWidth={props.maxWidth}
                                  title={props.title}/>
                </div>
            </div>
        }
    </div>
}
export default PricesFilter