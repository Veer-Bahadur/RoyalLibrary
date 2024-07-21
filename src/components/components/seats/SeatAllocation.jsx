import React, { useEffect, useState } from 'react'
import server from "../services/server.tsx"
import "./SeatAllocation.css"

const SeatAllocation = () => {

    const row1 = [12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
    const row2 = [23, 21, 20, 19, 18, 17, 16, 15, 14, 13]
    const row3 = [33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 56]
    const row4 = [42, 41, 40, 39, 38, 37, 36, 35, 34, 43]
    const row5 = [44, 45, 46, 47, 48, 49, 50]
    const row6 = ['door', 55, 54, 53, 52, 51]

    const [shiftSelected, setShiftSelected] = useState('')
    const [shiftWise, setShiftWise] = useState([])
    const [seatAllocated, setSeatAllocated] = useState([])

    const handleShiftChange = (e) => {
        console.log(e.target.value);
        setShiftSelected(e.target.value)
    }
    const setShiftSeats = () => {
        for (let i = 0; i < shiftWise.length; i++) {
            if (shiftSelected === shiftWise[i]._id) {
                setSeatAllocated(shiftWise[i]?.seat)
                break
            }
        }
    }

    useEffect(() => {
        setShiftSeats()
    }, [shiftSelected])

    useEffect(() => {
        fetch(`${server.server}/getSeatInfo`, {
            method: "GET",
            mode: "cors"
        }).then(async res => {
            let data = await res.json()
            console.log("DATA IN SEAT INFO ", data.data);
            setShiftWise(data.data)
            setShiftSeats()
        })
    }, [])

    return (
        <div className="panel">
            <div className="absolute-box">
                <label style={{ color: "white" }}>Select a Shift</label>
                <select name="shift" id="" className='shift-selection' onChange={handleShiftChange}>
                <option value="">Select Batch Timing</option>
                    <option className='shift-option' value="Morning">Morning</option>
                    <option className='shift-option' value="Evening">Evening</option>
                    <option className='shift-option' value="Full Day">Full Day</option>
                </select>
            </div>
            <div className="top">
                <div className="row1">
                    {row1.map((el, i) => {
                        return <div className={`seat ${seatAllocated.find(ele => el === parseInt(ele)) ? "full" : "vacant"}`} key={i}>
                            <p className='p'>{el}</p>
                        </div>
                    })}
                </div>
                <div className="corridor">
                </div>
                <div className="row2">
                    {row2.map((el, i) => {
                        return <div className={`seat ${seatAllocated.find(ele => el === parseInt(ele)) ? "full" : "vacant"}`} key={i}>
                            <p className='p'>{el}</p>
                        </div>
                    })}
                </div>
            </div>
            <div className="bottom">
                <div className="left">
                    <div className="row1">
                        {row3.map((el, i) => {
                            return <div className={`seat ${seatAllocated.find(ele => el === parseInt(ele)) ? "full" : "vacant"}`} key={i}>
                                <p className='p'>{el}</p>
                            </div>
                        })}
                    </div>
                    <div className="corridor_without_gate">
                    </div>
                    <div className="row2">
                        {row4.map((el, i) => {
                            return <div className={`seat ${seatAllocated.find(ele => el === parseInt(ele)) ? "full" : "vacant"}`} key={i}>
                                <p className='p'>{el}</p>
                            </div>
                        })}
                    </div>
                </div>
                <div className="right">
                    <div className="row1">
                        {row6.map((el, i) => {
                            return el !== "door" ? <div className={`seat ${seatAllocated.find(ele => el === parseInt(ele)) ? "full" : "vacant"}`} key={i}>
                                <p className='p'>{el}</p>
                            </div> : <div className='upper-door'></div>
                        })}
                    </div>
                    <div className="corridor_without_gate">
                    </div>
                    <div className="row2">
                        {row5.map((el, i) => {
                            return <div className={`seat ${seatAllocated.find(ele => el === parseInt(ele)) ? "full" : "vacant"}`} key={i}>
                                <p className='p'>{el}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SeatAllocation