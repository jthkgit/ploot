import React, { useEffect, useState } from 'react'
import Swiper, { Autoplay } from 'swiper'
import 'swiper/swiper-bundle.min.css'
import Testimonials from '~/components/Lib/testimonial'

export default function Testimonial({ slidesPerView }: { slidesPerView: number }) {
  const [TestimonialSwiper, setTestimonialSwiper] = useState<Swiper | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  useEffect(() => {
    const swiper = new Swiper('.swiper.Testimonial', {
      modules: [Autoplay],
      spaceBetween: 16,
      slidesPerView,
      autoplay: false,
      speed: 600,
      effect: 'fade',
      on: {
        slideChange: () => {
          setActiveIndex(swiper.activeIndex)
        },
      },
    })

    setTestimonialSwiper(swiper)
  }, [slidesPerView])

  const contentBoxClass = 'relative rounded-lg p-6 w-[96%] h-[90%] bg-[#124944] text-white'
  const contentBoxStyle = {
    height: '275px',
    width: '250px',
    overflow: 'visible',
  }

  const handlePrevPage = () => {
    if (TestimonialSwiper) {
      TestimonialSwiper.slidePrev()
    }
  }

  const handleNextPage = () => {
    if (TestimonialSwiper) {
      TestimonialSwiper.slideNext()
    }
  }

  return (
    <section className="mx-0 mt-16 lg:mx-auto lg:max-w-4xl">
      <div className="mt-8 rounded-xl p-8 lg:mt-24">
        <div className="text-center">
          <span className="rounded-full bg-secondary-500 px-4 py-2 font-sans text-sm font-medium uppercase text-white">
            Testimonial
          </span>
          <h3 className="mt-4 font-heading text-display-sm font-semibold text-primary-500 lg:mt-8 lg:text-display-lg">
            What Parents Are Saying.
          </h3>
        </div>

        <div>
          <div className="w-0% mx-auto">
            <div className="swiper Testimonial mt-6">
              <div className="swiper-wrapper">
                {Testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className={`swiper-slide ${
                      index === activeIndex || index === activeIndex + 2
                        ? 'opacity-100 lg:opacity-50'
                        : ''
                    }`}
                    style={{
                      ...contentBoxStyle,
                    }}
                  >
                    <div className={contentBoxClass} style={{ position: 'relative' }}>
                      <blockquote className="mb-4 text-xl font-semibold italic text-gray-900 dark:text-white">
                        <svg
                          className="absolute right-4 top-4 mb-4 h-8 w-8 dark:text-white"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 18 14"
                        >
                          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                      </blockquote>
                      <p className="md:text-display-s lg:text-display-s mb-8 py-2 pr-10 font-semibold">
                        {testimonial.description}
                      </p>
                      <div className="text-xm font-normal">{testimonial.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 flex justify-center">
          <div className="flex items-center p-2">
            <button
              className="m-1 w-16 rounded-xl bg-neutral-600 p-2 font-extrabold text-primary-500 hover:bg-[#124944] hover:text-white lg:w-24"
              onClick={handlePrevPage}
            >
              {'<'}
            </button>
            <button
              className="m-1 w-16 rounded-xl bg-neutral-600 p-2 pl-2 font-extrabold text-primary-500 hover:bg-[#124944] hover:text-white lg:w-24"
              onClick={handleNextPage}
            >
              {'>'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
