import React, { useState } from 'react'
import { BsGlobeAmericas } from 'react-icons/bs';
import Select from 'react-select';
const countryOptions = [
    { value: 'india', label: 'India' },
    { value: 'usa', label: 'USA' },
    { value: 'england', label: 'England' },
  ];
  
  const defaultCountry = { value: 'india', label: 'India' };
export default function CountrySelection() {
    const [selectedOption, setSelectedOption] = useState();
    const handleChange = (selectedOption) => {
        setSelectedOption(selectedOption);
    };

    return (
        <div className='container font-font2 flex items-center border border-slate-300 px-1 rounded-sm'>
            <div className="icon px-1"><BsGlobeAmericas /></div>
            <div className="country_list">
                <Select
                defaultValue={defaultCountry}
                    components={{
                        IndicatorSeparator: () => null
                    }}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            border: 0,
                            boxShadow: 'none',
                            width:"140px",
                            cursor:"pointer"
                        }),
                    }}
                    onChange={handleChange}
                    options={countryOptions}
                />
            </div>
        </div>
    )
}
