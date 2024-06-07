import React from 'react'
import { earthdata } from '../../data/data'

function Header() {
    return (
        <section className="absolute bg-black opacity-1 w-screen h-screen">
            <div className="text-white font-semibold m-6">
                <h1 className="text-3xl text-center text-neutral-400">
                    Earth 3D
                </h1>
                <div>
                    {earthdata.map(({ id, rayon, distance, age, masse, superficie, population }) => (
                        <div key={id}>
                            <div className="text-[9px] font-semibold text-neutral-400 space-y-1">
                                <p>
                                    Rayon: {rayon} km
                                </p>
                                <p>
                                    Distance du Soleil: {distance} millions km
                                </p>
                                <p>
                                    Age: {age} millards d'années
                                </p>
                                <p>
                                    Masse: {masse} x 10^24 kg
                                </p>
                                <p>
                                    Superficie: {superficie} millions de km
                                </p>
                                <p>
                                    Population: {distance} milliards (2022)
                                </p>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default Header