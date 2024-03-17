import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
export default function AdvanceSearch({ showAdvSearch }) {
    const [selectedDate, setSelectedDate] = useState(new Date());

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }
    return (
        <div className="full_overlay w-screen h-screen flex justify-center fixed top-0 z-20 left-0 bg-[#00000057">
            <div
                className={`main_searchbox w-[600px] h-[500px] bg-white rounded-md border border-slate-300 ${showAdvSearch ? "translate-y-6" : "translate-y-[-400px]"} duration-700 delay-300 transition-transform p-4`}>
                <div className="title font-font1 font-semibold text-xl">
                    Revolutionize Your News Search: Discover More with Our App's Advanced Filtering Options!
                </div>
                <div className="search_filter_form mt-3">
                    <div className="group_1">
                        <label className="label_text font-font2">
                            Search Text
                        </label>
                        <input className='w-full border mt-1 py-2 px-3 rounded-md 
                        outline-none
                        focus:border-color2' type="text" name="" id="" />
                    </div>
                    <div className="group_1 mt-3">
                        <div className="part1">
                            <label className="label_text font-font2">
                                From
                            </label>
                            <DatePicker
                                selected={selectedDate}
                                onChange={handleDateChange}
                                dateFormat="dd/MM/yyyy" // You can customize the date format here
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
