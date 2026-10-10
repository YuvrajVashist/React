import React from 'react'
import { Link } from 'react-router-dom'
import {startIcon} from '../assets/starIconFilled.svg'
import {location} from '../assets/locationIcon.svg'
function HotelCard({room,index}) {
  return (
    <Link to ={'/rooms/'+room_id} onClick={()=>scroll(0,0)} key={room_id}>
        <img src={room.images[0]} alt="" />

        {index%2 === 0 && <p className='px-3 py-3 absolute top-3 left-3 text-xs bg-white text-gray-800 font-medium rounded-full'>best seller</p>
        }
        <div className='p-4 pt-5'>
            <div className='flex items-ceter justify-between'>
                <p className='text-xl font-medium text-gray-800'>{room.hotel.name}</p>
                <div className='flex items-center gap-1'>
                    <img src={startIcon} alt="star-icon" />
                </div>
            </div>
            <div className='flex items-center gap-1 text-sm'>
                <img src={location} alt="location-icon" />
                <span>{room.hotel.address}</span>
            </div>
            <div className='flex items-center justify-between mt-4'>
                <p><span>${room.pricePerNight} /night</span></p>
                <button className=''>Book Now</button>
            </div>
        </div>
    </Link>
  )
}

export default HotelCard