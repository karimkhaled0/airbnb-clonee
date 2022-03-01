import React from 'react'

function Footer() {
  return (
    <div
      className="mb-8 grid grid-cols-1 gap-y-10 gap-x-4 bg-gray-50 px-32 
    py-14 text-gray-500 md:grid-cols-4"
    >
      <div className="space-y-4 text-xs text-gray-800 ">
        <p className="cursor-pointer font-bold">About</p>
        <p className="cursor-pointer">How Airbnb works</p>
        <p className="cursor-pointer">Newsrooms</p>
        <p className="cursor-pointer">Investors</p>
        <p className="cursor-pointer">Airbnb plus</p>
        <p className="cursor-pointer">Airbnb luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800">
        <p className="cursor-pointer font-bold">Community</p>
        <p className="cursor-pointer">Accessibility</p>
        <p className="cursor-pointer">This is not a real site</p>
        <p className="cursor-pointer">It's a pretty awesome clone</p>
        <p className="cursor-pointer">Referrals accepted</p>
        <p className="cursor-pointer">Karim's site</p>
      </div>
      <div className=" space-y-4 text-xs text-gray-800">
        <p className="cursor-pointer font-bold">Host</p>
        <p className="cursor-pointer">Ez gg</p>
        <p className="cursor-pointer">Presents</p>
        <p className="cursor-pointer">wow it's amazing</p>
        <p className="cursor-pointer">Get a life</p>
        <p className="cursor-pointer">Join now</p>
      </div>
      <div className=" space-y-4 text-xs text-gray-800">
        <p className="cursor-pointer font-bold">Suppport</p>
        <p className="cursor-pointer">Help centre</p>
        <p className="cursor-pointer">Trust & safety</p>
        <p className="cursor-pointer">Say hi here</p>
        <p className="cursor-pointer">winnable</p>
        <p className="cursor-pointer">Hey there</p>
      </div>
    </div>
  )
}

export default Footer
