import { useState } from 'react';
import heroImage from '../assets/heroImage.png';

function Hero() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    const details = Object.fromEntries(new FormData(event.currentTarget));
    console.log('Hotel search:', details);
  }

  return (
    <section
      className="relative flex min-h-screen items-center bg-cover bg-center bg-no-repeat px-6 py-24 text-white md:px-16 lg:px-24 xl:px-32"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="absolute inset-0 bg-black/45" />

      <div className="relative z-10 w-full">
        <p className="mb-4 inline-flex rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm backdrop-blur-sm">
          The Ultimate Hotel Experience
        </p>

        <h1 className="max-w-2xl font-serif text-4xl font-bold leading-tight md:text-6xl">
          Discover your perfect getaway destination
        </h1>

        <p className="mt-4 max-w-xl text-sm leading-6 text-white/85 md:text-base">
          Find a place to stay that makes every part of your trip memorable.
          Explore comfortable rooms and welcoming destinations.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-8 grid w-full gap-3 rounded-2xl bg-white p-4 text-gray-800 shadow-2xl sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_0.8fr_auto] lg:items-end lg:gap-4 lg:rounded-full lg:p-3"
        >
          <label className="flex min-w-0 flex-col gap-2 px-2 text-sm font-medium">
            Destination
            <input
              name="destination"
              type="text"
              placeholder="Where are you going?"
              required
              className="h-11 w-full rounded-lg border border-gray-200 px-3 font-normal outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </label>

          <label className="flex min-w-0 flex-col gap-2 px-2 text-sm font-medium">
            Check-in
            <input
              name="checkIn"
              type="date"
              value={checkIn}
              onChange={(event) => {
                setCheckIn(event.target.value);
                if (checkOut && event.target.value >= checkOut) {
                  setCheckOut('');
                }
              }}
              required
              className="h-11 w-full rounded-lg border border-gray-200 px-3 font-normal outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </label>

          <label className="flex min-w-0 flex-col gap-2 px-2 text-sm font-medium">
            Check-out
            <input
              name="checkOut"
              type="date"
              value={checkOut}
              min={checkIn || undefined}
              onChange={(event) => setCheckOut(event.target.value)}
              required
              className="h-11 w-full rounded-lg border border-gray-200 px-3 font-normal outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            />
          </label>

          <label className="flex min-w-0 flex-col gap-2 px-2 text-sm font-medium">
            Guests
            <select
              name="guests"
              defaultValue="2"
              className="h-11 w-full rounded-lg border border-gray-200 bg-white px-3 font-normal outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
            >
              <option value="1">1 guest</option>
              <option value="2">2 guests</option>
              <option value="3">3 guests</option>
              <option value="4">4 guests</option>
              <option value="5">5+ guests</option>
            </select>
          </label>

          <button
            type="submit"
            className="h-12 rounded-full bg-indigo-600 px-7 font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}

export default Hero;