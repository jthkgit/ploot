import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Swiper, { Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import essentials, { Props as EssentialProps } from '~/components/Lib/essentials'

export default function Essentials({ slidesPerView }: { slidesPerView: number }) {
  const [essentialsSwiper, setEssentialsSwiper] = useState<Swiper | null>(null)

  useEffect(() => {
    const swiper = new Swiper('.swiper.essentials', {
      modules: [Autoplay],
      spaceBetween: 16,
      slidesPerView,
      autoplay: false,
      speed: 500, // Adjust the speed (in milliseconds) to control the animation speed
      effect: 'slide', // Use 'slide' for a basic slide animation
    })

    setEssentialsSwiper(swiper)
  }, [slidesPerView])

  const contentBoxClass = 'relative bg-neutral-500 rounded-lg p-6 w-[96%] h-[90%]'
  const contentBoxStyle = {
    height: '250px',
    width: '250px',
    overflow: 'visible',
  }

  const handlePrevPage = () => {
    if (essentialsSwiper) {
      essentialsSwiper.slidePrev()
    }
  }

  const handleNextPage = () => {
    if (essentialsSwiper) {
      essentialsSwiper.slideNext()
    }
  }

  return (
    <section className="mx-0 lg:mx-auto lg:max-w-4xl">
      <div className="mt-8 rounded-xl p-0 lg:mt-24">
        <div>
          <span className="rounded-full bg-secondary-500 px-4 py-2 font-sans text-sm font-medium uppercase text-white">
            Essentials
          </span>
          <h3 className="mt-8 font-heading text-display-sm font-semibold text-primary-500 lg:text-display-lg">
            Basic Essentials for full
            <br />
            control and peace of mind.
          </h3>
          <div className="mt-4 flex flex-row items-center justify-between">
            <p className="font-sans text-sm font-medium text-primary-500 lg:text-lg">
              We&apos;ve got you and your whole family covered.
            </p>
            <div className="flex items-center ">
              <div>
                <button
                  className="w-10 rounded-xl bg-neutral-600 p-2 text-primary-500 "
                  onClick={handlePrevPage}
                >
                  {'<'}
                </button>
              </div>

              <div className="p-2">
                <button
                  className="w-10 rounded-xl bg-neutral-600 p-2 pl-2 text-primary-500 "
                  onClick={handleNextPage}
                >
                  {'>'}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content Box */}
        <div>
          <div className="w-0% mx-auto">
            <div className="swiper essentials mt-6">
              <div className="swiper-wrapper">
                {essentials.map((essential: EssentialProps, index: number) => (
                  <div
                    key={essential.id}
                    className={`swiper-slide`}
                    style={{
                      ...contentBoxStyle,
                    }}
                  >
                    <div className={contentBoxClass} style={{ position: 'relative' }}>
                      <h4 className="md:text-display-s lg:text-display-s text-xl font-bold">
                        {essential.title}
                      </h4>
                      <p className="md:text-display-s lg:text-display-s py-2 font-semibold">
                        {essential.description}
                      </p>
                      <div style={{ position: 'absolute', bottom: '0', right: '0' }}>
                        <Image src={essential.image} alt="" width={0} height={0} fill={true} />
                      </div>
                    </div>

                    <div
                      className="absolute inset-0 mb-3 ml-3 mr-1 mt-3 rounded-lg"
                      style={{
                        zIndex: -1,
                        backgroundColor: index % 2 === 0 ? '#F8D4A2' : '#124944',
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
