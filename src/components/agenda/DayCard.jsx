import React from 'react';


const DayCard = ({number, isTheOneInTheCenter})=>{
    let date;
    switch(number){
        case 1:
            date = 'Thu 14.01.2025';
            break;
        case 2:
            date = 'Fri 15.01.2025';
            break;
        case 3:
            date = 'Sat 16.01.2025';
            break;
        default:
            date = 'No date';
            break;
    }
    return(
        <div className={`flex flex-col items-center bg-Monotone-Black w-80 h-80 rounded-lg border-Primary-400 px-5 py-5 ${isTheOneInTheCenter ? 'border-2 scale-110' : 'border-0 scale-90'}`}>
            <h1 className={`text-xl font-bold ${isTheOneInTheCenter ? 'bg-gradient-to-r from-Tritary-600 via-Primary-800 to-Primary-800 bg-clip-text text-transparent' : 'text-Monotone-White'}`}>Day {number}</h1>
            <p className='text-sm text-Primary-400'>{date}</p>


            <div className='flex flex-row justify-between w-full mt-4'>
                <span className='text-Monotone-White font-bold ms-5'>5PM - 6PM</span>
                <span className='text-Neutral-400 font thin me-5'>Check In</span>
            </div>

            <div className='flex flex-row justify-between w-full mt-4'>
                <span className='text-Monotone-White font-bold ms-5'>6PM - 7PM</span>
                <span className='text-Neutral-400 font thin me-5'>Opening Ceremony</span>
            </div>

            <div className='flex flex-row justify-between w-full mt-4'>
                <span className='text-Monotone-White font-bold ms-5'>7PM - 8PM</span>
                <span className='text-Neutral-400 font thin me-5'>Ice Break Activities</span>
            </div>

            <div className='flex flex-row justify-between w-full mt-4'>
                <span className='text-Monotone-White font-bold ms-5'>8PM - 9PM</span>
                <span className='text-Neutral-400 font thin me-5'>Dinner</span>
            </div>

            <div className='flex flex-row justify-between w-full mt-4'>
                <span className='text-Monotone-White font-bold ms-5'>9PM - 11PM</span>
                <span className='text-Neutral-400 font thin me-5'>Hacking Starts</span>
            </div>

            <div className='flex flex-row justify-between w-full mt-4'>
                <span className='text-Monotone-White font-bold ms-5'>11PM - 12AM</span>
                <span className='text-Neutral-400 font thin me-5'>Break</span>
            </div>
        </div>
    );
}


export default DayCard;