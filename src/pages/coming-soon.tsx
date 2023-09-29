import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline'
import { Navigation, Autoplay } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Logo from '~/components/Logotype'
import Title from '~/components/Title'

export default function Home(): JSX.Element {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({ mode: 'onBlur', defaultValues: { Email: '' } })

  const onSubmit = async (data: any) => {
    try {
      const response = await fetch('/api/mail', {
        method: 'POST',
        body: JSON.stringify(data),
      })

      const result = await response.json()
      toast(result.message)
      reset()
    } catch (error) {
      console.error(error)
      reset()
    }
  }
  return (
    <div className="min-h-screen bg-neutral-500 text-primary-500">
      <Title>ploot.app</Title>

      <header className="pt-20">
        <div className="container">
          <Logo className="mx-auto h-12" />
          <p className="mt-2.5 text-center text-lg">Coming soon</p>
        </div>
      </header>

      <main className="pb-24 pt-10">
        <div className="mx-auto max-w-md px-4">
          <div className="mx-4 text-center md:mx-0">
            <h1 className="font-heading text-display-xs font-semibold md:text-display-md">
              Empowering Families To Build Wealth Together.
            </h1>
            <p className="mt-3 text-md text-primary-400 md:text-lg">
              Our app provides you with a flexible framework to teach your kids financial literacy
              in a fun and engaging way.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-md px-4 md:mt-24">
          <p className="text-center font-semibold">Get notified when we launch</p>
          <form className="mx-4 mt-4" method="post" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative isolate flex items-center rounded-xl bg-white py-1.5 pl-3.5 pr-1.5 shadow-sm">
              <svg
                className="relative h-4 w-4 text-secondary-500 md:h-6 md:w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12.578.013C9.254-.14 6.11 1.033 3.717 3.316A11.892 11.892 0 0 0 0 12c0 6.617 5.383 12 12 12 .882 0 1.6-.718 1.6-1.6 0-.882-.718-1.6-1.6-1.6-4.852 0-8.8-3.948-8.8-8.8 0-2.43.968-4.691 2.727-6.368a8.742 8.742 0 0 1 6.501-2.422c4.694.221 8.372 4.211 8.372 9.083V15.2c0 .882-.718 1.6-1.6 1.6-.882 0-1.6-.718-1.6-1.6V12c0-3.088-2.512-5.6-5.6-5.6A5.606 5.606 0 0 0 6.4 12c0 3.088 2.512 5.6 5.6 5.6.963 0 1.9-.249 2.728-.715C15.418 18.706 17.186 20 19.2 20c2.647 0 4.8-2.153 4.8-4.8v-2.907C24 5.71 18.983.315 12.578.013ZM12 9.6c1.323 0 2.4 1.077 2.4 2.4s-1.077 2.4-2.4 2.4A2.403 2.403 0 0 1 9.6 12c0-1.323 1.077-2.4 2.4-2.4Z"
                />
              </svg>

              <input
                className={`peer flex-auto bg-transparent px-3.5 py-2.5 text-sm font-semibold placeholder:font-semibold placeholder:text-secondary-500 focus:outline-none md:text-lg ${
                  errors?.Email
                    ? 'border-error-600 text-error-600'
                    : 'border-primary-400 text-primary-200'
                }`}
                type="email"
                placeholder="Enter your email address"
                {...register('Email', {
                  required: 'Email Address is required',
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: 'Invalid email address',
                  },
                })}
              />

              <button
                className="rounded-lg bg-accent-1-500 px-[1.125rem] py-2.5 text-sm font-semibold text-white shadow-sm focus:outline-none md:text-lg"
                type="submit"
              >
                Submit
              </button>

              <div className="absolute inset-0 -z-10 rounded-xl border-2 border-transparent transition-all peer-focus:border-accent-1-500/75 peer-focus:ring-4 peer-focus:ring-accent-1-500/25"></div>
            </div>
          </form>
        </div>

        <div className="relative mx-auto mt-8 max-w-screen-sm px-4 md:mt-16">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            navigation={{
              prevEl: '.button-prev',
              nextEl: '.button-next',
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className="p-4">
              <div className="rounded-2xl bg-white p-2.5 shadow-md">
                <div className="rounded-lg bg-greek-gradient p-8">
                  <h3 className="font-heading text-display-xs font-semibold">Did you know?</h3>
                  <ol className="mt-4 list-none">
                    <li>
                      <p>
                        In a survey of 15-year-old students in Southeast Asia, only{' '}
                        <span className="font-bold">12%</span> were able to answer basic financial
                        literacy questions correctly.
                      </p>
                      <p className="mt-4 text-sm text-primary-400">
                        (OECD PISA Financial Literacy Assessment, 2018)
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="p-4">
              <div className="rounded-2xl bg-white p-2.5 shadow-md">
                <div className="rounded-lg bg-greek-gradient p-8">
                  <h3 className="font-heading text-display-xs font-semibold">Did you know?</h3>
                  <ol className="mt-4 list-none">
                    <li>
                      <p>
                        Only 15% of children in Hong Kong save money regularly, and{' '}
                        <span className="font-bold">40%</span> do not save at all.
                      </p>
                      <p className="mt-4 text-sm text-primary-400">
                        (Survey conducted by the Hong Kong Institute of Bankers, 2020)
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="p-4">
              <div className="rounded-2xl bg-white p-2.5 shadow-md">
                <div className="rounded-lg bg-greek-gradient p-8">
                  <h3 className="font-heading text-display-xs font-semibold">Did you know?</h3>
                  <ol className="mt-4 list-none">
                    <li>
                      <p>
                        Parents play a significant role in shaping children&apos;s financial habits.
                        However, only <span className="font-bold">26%</span> of parents in Hong Kong
                        said they actively teach their children about money management.
                      </p>
                      <p className="mt-4 text-sm text-primary-400">
                        (Survey conducted by the Hong Kong Institute of Bankers, 2020)
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="p-4">
              <div className="rounded-2xl bg-white p-2.5 shadow-md">
                <div className="rounded-lg bg-greek-gradient p-8">
                  <h3 className="font-heading text-display-xs font-semibold">Did you know?</h3>
                  <ol className="mt-4 list-none">
                    <li>
                      <p>
                        Only <span className="font-bold">44%</span> of primary school students and{' '}
                        <span className="font-bold">55%</span> of secondary school students in Hong
                        Kong were able to correctly answer basic financial literacy questions.
                      </p>
                      <p className="mt-4 text-sm text-primary-400">
                        (Survey conducted by the Investor and Financial Education Council, 2018)
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="p-4">
              <div className="rounded-2xl bg-white p-2.5 shadow-md">
                <div className="rounded-lg bg-greek-gradient p-8">
                  <h3 className="font-heading text-display-xs font-semibold">Did you know?</h3>
                  <ol className="mt-4 list-none">
                    <li>
                      <p>
                        When asked about difficulties encountered when teaching children money
                        matters, most parents admitted they often give in to children’s material
                        requests too easily <span className="font-bold">(66%)</span> while many{' '}
                        <span className="font-bold">(61%)</span> also pointed to{' '}
                        <span className="font-bold">inconsistent approach</span> with
                        spouses/grandparents of their children.
                      </p>
                      <p className="mt-4 text-sm text-primary-400">
                        (Survey conducted by the Investor and Financial Education Council, 2018)
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="p-4">
              <div className="rounded-2xl bg-white p-2.5 shadow-md">
                <div className="rounded-lg bg-greek-gradient p-8">
                  <h3 className="font-heading text-display-xs font-semibold">Did you know?</h3>
                  <ol className="mt-4 list-none">
                    <li>
                      <p>
                        Only <span className="font-bold">27%</span> of parents in Hong Kong have
                        ever discussed money management with their children.
                      </p>
                      <p className="mt-4 text-sm text-primary-400">
                        (Survey conducted by the Investor and Financial Education Council, 2018)
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide className="p-4">
              <div className="rounded-2xl bg-white p-2.5 shadow-md">
                <div className="rounded-lg bg-greek-gradient p-8">
                  <h3 className="font-heading text-display-xs font-semibold">Did you know?</h3>
                  <ol className="mt-4 list-none">
                    <li>
                      <p>
                        Only <span className="font-bold">29%</span> of secondary school students in
                        Hong Kong have a basic understanding of interest rates.
                      </p>
                      <p className="mt-4 text-sm text-primary-400">
                        (Study conducted by the Hong Kong Institute of Monetary Research (HKIMR),
                        2019)
                      </p>
                    </li>
                  </ol>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <button
            className="button-prev absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-lg bg-white p-2 shadow-sm transition-opacity disabled:opacity-50 md:-left-8"
            type="button"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>

          <button
            className="button-next absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-lg bg-white p-2 shadow-sm transition-opacity disabled:opacity-50 md:-right-8"
            type="button"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </main>
    </div>
  )
}
