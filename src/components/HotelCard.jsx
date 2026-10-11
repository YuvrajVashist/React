import React from 'react'
import { Link } from 'react-router-dom'
import starIcon from '../assets/starIconFilled.svg'
import locationIcon from '../assets/locationIcon.svg'

function HotelCard({ room, index }) {
    return (
        <Link
            to={`/rooms/${room._id}`}
            onClick={() => window.scrollTo(0, 0)}
            className="flex group relative block overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
            <div className="relative h-44 overflow-hidden sm:h-48">
                <img
                    src={room.images[0]}
                    alt={`${room.hotel.name} room`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"

                />

                {index % 2 === 0 && (
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-sm">
                        Best seller
                    </span>
                )}
            </div>

            {/* another div */}
            <div className="flex p-4 sm:p-5">
                <div className="flex justify-center gap-3">
                    <h3 className="text-lg font-semibold leading-snug text-gray-900">
                        {room.hotel.name}
                    </h3>
                    <div className="flex shrink-0 items-center gap-1 text-sm font-medium text-gray-700">
                        <img src={starIcon} alt="" className="h-4 w-4" />
                        <span>4.8</span>
                    </div>
                </div>

                <div className="mt-2 flex items-start gap-2 text-sm text-gray-500">
                    <img src={locationIcon} alt="" className="mt-0.5 h-4 w-4 shrink-0" />
                    <span className="line-clamp-2">{room.hotel.address}</span>
                </div>

                <div className="mt-5 flex items-end justify-between gap-3 border-t border-gray-100 pt-4">
                    <p className="text-sm text-gray-500">
                        <span className="text-xl font-bold text-gray-900">
                            ${room.pricePerNight}
                        </span>{' '}
                        / night
                    </p>
                    <span className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-blue-700">
                        Book now
                    </span>
                </div>
            </div>


            <div className="relative h-44 overflow-hidden sm:h-48">
                <img
                    src={room.images[1]}
                    alt={`${room.hotel.name} room`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"

                />

                {index % 2 === 0 && (
                    <span className="absolute left-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-gray-800 shadow-sm">
                        Best seller
                    </span>
                )}
            </div>

            <div className="flex p-4 sm:p-5">
                <div className="flex justify-center gap-3">
                    <h3 className="text-lg font-semibold leading-snug text-gray-900">
                        {room.hotel.name}
                    </h3>
                    <div className="flex justify-center shrink-0 items-center gap-1 text-sm font-medium text-gray-700">
                        <img src={starIcon} alt="" className="h-4 w-4" />
                        <span>4.8</span>
                    </div>
                </div>

                <div className="mt-2 flex items-start gap-2 text-sm text-gray-500">
                    <img src={locationIcon} alt="" className="mt-0.5 h-4 w-4 shrink-0" />
                    <span className="line-clamp-2">{room.hotel.address}</span>
                </div>

                <div className="mt-5 flex items-end justify-between gap-3 border-t border-gray-100 pt-4">
                    <p className="text-sm text-gray-500">
                        <span className="text-xl font-bold text-gray-900">
                            ${room.pricePerNight}
                        </span>{' '}
                        / night
                    </p>
                    <span className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition group-hover:bg-blue-700">
                        Book now
                    </span>
                </div>
            </div>

            {/* another div */}

        </Link>
    )
}

export default HotelCard