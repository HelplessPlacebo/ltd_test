import React from 'react'
import Checkbox from '@material-ui/core/Checkbox'
import {TbrandsSelectInfo} from "../Filters/Filters";

export type TCustomCheckBoxProps={
    value?: string
    name : string
    onBrandClicked:(e:any)=>void
    brandsSelectInfo :TbrandsSelectInfo | undefined
}
const CustomCheckBox:React.FC<TCustomCheckBoxProps>= (props)=> {

    return (
        <div className="CheckBoxContainer">
            <Checkbox
                name={props.name}
                color="primary"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                onChange={props.onBrandClicked}
                defaultChecked={props.brandsSelectInfo && props.brandsSelectInfo[props.name]}
            /> {props.name}
        </div>
    )
}
export default CustomCheckBox