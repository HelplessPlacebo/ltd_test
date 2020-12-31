import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';


function valuetext(value: number) {
    return `${value}P`
}

export type TCustomSliderProps = {
    maxValue: number
    minValue: number
    maxWidth?: number | string
    title?: string
    defaultValues : number[]
    value : number[]
    handleChange : (event: any, newValue: number | number[])=>void
}
const CustomSlider: React.FC<TCustomSliderProps> = (props) => {
    const useStyles = makeStyles({
        root: {
            maxWidth: props.maxWidth ? props.maxWidth : 300
        },
    })
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {
                props.title && <Typography id="range-slider" gutterBottom>
                    {props.title}
                </Typography>
            }
            <Slider
                value={props.value}
                onChange={props.handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                min={props.minValue}
                max={props.maxValue}
            />
        </div>
    );
}
export default CustomSlider