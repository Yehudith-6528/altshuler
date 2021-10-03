
import React, { useState } from 'react'
import DonutChart from 'react-donut-chart';
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../redux/actions";

export default function Chart() {
    const { coingecko } = useSelector(state => state.moviesReducer)
    const dispatch = useDispatch();
    const [data, setData] = useState([{
        label: 'ONE',
        value: 25,
    },
    {
        label: 'TOW',
        value: 60,
    },
    {
        label: 'THREE',
        value: 10,
    }
    ])

  
    const butClick = () => {
        dispatch(actions.getCoingecko());
        setData([{
            label: 'ONE',
            value: Math.random()
        },
        {
            label: 'TOW',
            value: Math.random(),
            // isEmpty: true
        },
        {
            label: 'THREE',
            value: Math.random(),
        }])
        setTimeout(()=>{
            setData([{
                isEmpty: true
            },
            {
                isEmpty: true
            },
            {
                isEmpty: true
            }]) 
        },5000)
    }
    return (
        <>
            <button onClick={butClick}>click me</button>
            {/* {coingecko && coingecko.map((key, item) => (
                <p>{item.ils}</p>
            ))} */}
             {coingecko?.rates &&<p>{coingecko.rates.ils.name}</p> }
            <DonutChart
                data={data} />
        </>)
}

