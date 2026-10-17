
import React from 'react'
import Title from './Title'
import { assets, exclusiveOffers } from '../assets/assets'

function ExclusiveOffer() {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-12">

      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">

        <Title
          title="Exclusive offers"
          subTitle="These are the special offers for the users"
        />

        <button className="group flex items-center gap-2 self-start text-sm font-medium text-gray-700 hover:text-black transition-colors cursor-pointer">
          View all offers

          <img
            alt="arrow-icon"
            src={assets.arrowIcon}
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>

      </div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
  {exclusiveOffers.map((i) => (
    <div
      key={i._id}
      className="group relative flex  flex-col items-start justify-between overflow-hidden rounded-2xl bg-cover bg-center bg-no-repeat p-6 text-white shadow-md transition-transform duration-300 hover:-translate-y-1"
      style={{ backgroundImage: `url(${i.image})` }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40 transition-colors duration-300 group-hover:bg-black/50" />

      {/* Discount badge */}
      <p className="absolute left-4 top-4 z-10 rounded-full bg-white px-3 py-1 text-xs font-semibold text-gray-800 shadow">
        {i.priceOff}% OFF
      </p>

      {/* Offer details */}
      <div className="relative z-10 mt-auto">
        <p className="text-2xl font-bold tracking-wide">
          {i.title}
        </p>

        <p className="mt-2 max-w-xs text-sm leading-relaxed text-white/90">
          {i.description}
        </p>

        <p className="mt-3 text-xs text-white/80">
          Expires {i.expiryDate}
        </p>
      </div>

      {/* View offers button */}
      <button className="relative z-10 mt-5 flex items-center gap-2 rounded-full border border-white/60 px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-white hover:text-gray-900">
        View offers
        <img
          className="h-4 w-4 invert transition-transform duration-300 group-hover:translate-x-1 group-hover:invert-0"
          src={assets.arrowIcon}
          alt="Arrow"
        />
      </button>
    </div>
  ))}
</div>


    </div>
  )
}

export default ExclusiveOffer
