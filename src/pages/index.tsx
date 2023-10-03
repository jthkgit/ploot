import { useEffect, useState } from 'react'
import { AiFillApple, AiFillAndroid } from 'react-icons/ai'
import Image from 'next/image'
import Essentials from '~/components/Essentials'
import Faq from '~/components/Faq'
import Footer from '~/components/Footer'
import Header from '~/components/Header'
// import NewsAndBlog from '~/components/NewsAndBlog'
import Pricing from '~/components/Pricing'
import Testimonial from '~/components/Testimonial'
import Title from '~/components/Title'
import Toggle from '~/components/ToggleProps'

export default function Home(): JSX.Element {
  const [isMobile, setIsMobile] = useState<boolean>(false)

  useEffect(() => {
    // Determine mobile mode based on screen width
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsMobile(window.innerWidth < 1080)
    }

    handleResize() // Initial check
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-primary-500">
      <Title>ploot.app</Title>
      <Header />
      <main className="container pb-16 pt-16">
        {/* Level 1 */}
        <section className="mx-auto max-w-lg">
          <div className="mx-4 text-center md:mx-0">
            <h1 className="font-heading text-display-md font-bold capitalize md:text-display-md lg:text-display-xl">
              Connect & Build wealth together.
            </h1>
            <p className="mt-3 text-md font-bold text-primary-400 lg:text-xl">
              A financial app that teaches kids to
              <br />
              <span className="text-accent-1-500">save, spend smart, invest, and give</span>.
            </p>
            <div className="flex items-center justify-center py-3 text-accent-1-500">
              <AiFillApple className="h-12 w-12 lg:h-16 lg:w-16" />
              <AiFillAndroid className="h-12 w-12 lg:h-16 lg:w-16" />
            </div>
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-xl px-4 md:mt-24">
          <p className="text-center text-xs lg:text-md">
            We work with the best to provide you security and accessibility
          </p>
          <div className="flex items-center justify-center py-8  text-accent-1-500">
            <Image className="px-2" src="/svg/mc_logo.svg" alt="" width="100" height="29" />
            <Image className="px-2" src="/svg/UnionPay_logo 1.svg" alt="" width="63" height="39" />
            <Image
              className="px-2"
              src="/svg/Visa_Inc._logo 1.svg"
              alt=""
              width="127"
              height="41"
            />
          </div>
        </section>

        {/* Level 2 */}
        <section className="mt-16 lg:mx-auto">
          <h1 className="text-center font-heading text-display-sm font-semibold text-primary-500 lg:text-display-xl">
            Parents Hub
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-center text-sm font-medium text-primary-500 lg:text-lg">
            Form connections around shared interests, brands, and spending habits.
          </p>

          <div className="absolute inset-x-0 -z-0 mt-8">
            <div className="relative mx-auto">
              <div className="hidden lg:block">
                <Image
                  src="/svg/livello.svg"
                  alt="Brown Star"
                  width={380}
                  height={380}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="relative z-0 mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-4 px-8 lg:mt-16 lg:grid-cols-3 lg:gap-8">
            <div className="rounded-2xl bg-neutral-500 p-8">
              <Image
                src="/svg/stay.svg"
                alt="Discover promotions and discounts in your area"
                className="mx-auto"
                width={150}
                height={150}
              />
              <p className="mt-4 text-center text-sm font-medium text-primary-500 lg:mt-8 lg:text-lg">
                Discover promotions and discounts in your area
              </p>
            </div>
            <div className="rounded-2xl bg-neutral-500 p-8">
              <Image
                src="/svg/discover.svg"
                alt="Connect and learn from other families"
                className="mx-auto"
                width={150}
                height={150}
              />
              <p className="mt-4 text-center text-sm font-medium text-primary-500 lg:mt-8 lg:text-lg">
                Connect and learn from other families
              </p>
            </div>
            <div className="rounded-2xl bg-neutral-500 p-8">
              <Image
                src="/svg/connect.svg"
                alt="Stay in the know with what children want"
                className="mx-auto"
                width={150}
                height={150}
              />
              <p className="mt-4 text-center text-sm font-medium text-primary-500 lg:mt-8 lg:text-lg">
                Stay in the know with what children want
              </p>
            </div>
          </div>
        </section>

        {/* Level 3 */}
        <section className="mx-auto mt-16 lg:mx-auto lg:mt-36 lg:max-w-4xl">
          <h1 className="text-center font-heading text-display-sm font-semibold text-primary-500 lg:text-display-lg">
            Teaching children to be <span className="text-accent-1-500">money-savvy</span>, one
            reward at a time.
          </h1>
          <p className="mt-4 text-center text-sm font-medium text-primary-500 lg:text-lg">
            Our flexible framework is designed for you to reward your children for their good
            behavior and accomplishments how you see fit.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-10 rounded-xl bg-neutral-500 p-8 lg:mt-16 lg:flex-row lg:justify-start">
            <div className="text-center lg:text-left">
              <span className="rounded-full bg-secondary-500 px-4 py-2 font-sans text-sm font-medium uppercase text-white">
                Parenting Done Right
              </span>
              <h3 className="mt-8 font-heading text-display-sm font-semibold text-primary-500 lg:text-display-lg">
                More than just a place to store your money.
              </h3>
              <p className="mt-4 font-sans text-sm font-medium text-primary-500 lg:text-lg">
                With every smart money decision, children will earn rewards that help them grow
                their savings and make smarter financial choices for the long term.
              </p>
            </div>
            <Image className="px-2" src="/svg/illustrator-1.svg" alt="" width="280" height="320" />
          </div>
        </section>

        {/* Level 4 */}
        <Essentials slidesPerView={isMobile ? 1 : 3} />

        {/* Level 5*/}
        <section className="mx-0 lg:mx-auto lg:max-w-4xl">
          <div className="mt-8 rounded-xl p-0 lg:mt-24">
            <h3 className="mt-8 font-heading text-display-sm font-semibold text-primary-500 lg:text-display-lg">
              Permissions and <br />
              Restrictions
            </h3>
            <p className="py-4 font-sans text-sm font-medium text-primary-500 lg:text-lg">
              Complete control over where your family&apos;s prepaid cards can be used.
            </p>

            <div className="relative flex flex-col items-center rounded-xl py-8 lg:flex-row">
              <div className="absolute left-0 top-0 z-10 h-full w-3/4 rounded-xl bg-neutral-500"></div>
              <div className="absolute left-0 top-0 z-10 h-full w-full rounded-xl bg-neutral-500 lg:w-3/4 lg:bg-transparent"></div>

              <div className="relative z-20 flex w-full flex-col items-center gap-4 lg:w-1/2">
                <div className="flex items-center">
                  <Image src="/static/groceries.svg" alt="" width="49" height="59" />
                  <span className="mx-10 lg:hidden">
                    <Toggle isTrue={true} />
                  </span>
                </div>
                <div className="flex items-center">
                  <Image src="/static/drinks.svg" alt="" width="49" height="65" />
                  <span className="mx-10  lg:hidden">
                    <Toggle isTrue={false} />
                  </span>
                </div>
                <div className="flex items-center">
                  <Image src="/static/books.svg" alt="" width="49" height="65" />
                  <span className="mx-10 lg:hidden">
                    <Toggle isTrue={true} />
                  </span>
                </div>
                <div className="flex items-center">
                  <Image
                    className="w-[49px] lg:w-[80px]"
                    src="/static/cards.svg"
                    alt=""
                    width="80"
                    height="60"
                  />
                  <span className="mx-10 lg:hidden">
                    <Toggle isTrue={false} />
                  </span>
                </div>
              </div>

              <div className="relative z-20 hidden w-full flex-col gap-5 lg:flex lg:w-1/2">
                <span className="mt-2">
                  <Toggle isTrue={true} />
                </span>
                <span className="mt-2">
                  <Toggle isTrue={false} />
                </span>
                <span className="mt-2">
                  <Toggle isTrue={true} />
                </span>
                <span className="mt-2">
                  <Toggle isTrue={false} />
                </span>
              </div>
              {/*className="z-10 mt-8 w-[90%] px-2 lg:mt-2 lg:h-[450px] lg:w-[800px] lg:px-0"*/}
              <Image
                className="relative z-10 mt-8 w-[70%] px-2 lg:mt-0 lg:h-[295px] lg:w-[553px] lg:px-0"
                src="/static/plootcard.svg"
                alt=""
                width="453"
                height="285"
              />
            </div>
          </div>
        </section>

        {/* Level 6 */}
        <section className="mx-auto mt-16 lg:mx-auto lg:max-w-4xl">
          <div className="rounded-xl bg-neutral-500 p-6 lg:mt-16 lg:p-4 ">
            <div className="mt-2 flex flex-col justify-between lg:flex-row">
              <div className="hidden lg:block">
                <Image className="z-0" src="/static/dh_left.svg" width={180} height={180} alt="" />
              </div>
              <div className="flex flex-col items-center justify-center text-center">
                <span className="rounded-full bg-secondary-500 px-4 py-2 font-sans text-sm font-medium uppercase text-white">
                  DOMESTIC HELPERS
                </span>
                <h1 className="mt-4 text-center font-heading text-display-sm font-semibold text-primary-500 lg:text-display-lg">
                  Your Second Family.
                </h1>
              </div>
              <div className="hidden lg:block">
                <Image className="z-0" src="/static/dh_right.svg" width={180} height={180} alt="" />
              </div>
            </div>
            <p className="mx-0 my-5 text-center text-sm font-medium text-primary-500 lg:mx-8 lg:text-lg">
              Domestic helpers help us in all aspects of life - Gain full control and transparency
              over your helper&apos;s spending on any tasks where money might be involved.
            </p>
          </div>
        </section>

        {/* Level 7 */}
        <Pricing />

        {/* Level 8 */}
        <section className="mx-auto mt-16 lg:mx-auto lg:max-w-4xl">
          <span className="rounded-full bg-secondary-500 px-4 py-2 font-sans text-sm font-medium uppercase text-white">
            FREQUENTLY ASKED
          </span>
          <div className="top-2 grid grid-cols-1 justify-between gap-4 lg:grid-cols-2">
            <div>
              <h3 className="mt-8 font-heading text-display-sm font-semibold text-primary-500 lg:text-display-lg">
                We're here to help!
              </h3>
              <div className="mt-4 flex space-x-2">
                <span className="flex w-auto flex-row items-center rounded-lg bg-[#F4F8F9] px-4 py-2 font-sans text-xs font-semibold lg:px-6 lg:py-2 lg:text-sm ">
                  <Image
                    src="/svg/talk.svg"
                    alt="StarBackground"
                    width={22}
                    height={20}
                    className="absolute mr-2"
                    style={{ zIndex: 1 }}
                  />
                  <Image
                    src="/favicon-16x16.svg"
                    alt="Star"
                    width={12}
                    height={12}
                    className="relative ml-1 mr-4"
                    style={{ zIndex: 2 }}
                  />
                  Talk with us.
                </span>
                <span className="flex w-auto flex-row items-center rounded-lg bg-[#F4F8F9] px-4 py-2 font-sans text-xs font-semibold lg:px-6 lg:py-2 lg:text-sm ">
                  <Image
                    src="/svg/talk.svg"
                    alt="StarBackground"
                    width={22}
                    height={20}
                    className="absolute mr-2"
                    style={{ zIndex: 1 }}
                  />
                  <Image
                    src="/svg/questionmark.svg"
                    alt="questionmark"
                    width={7}
                    height={8}
                    className="relative ml-2 mr-4"
                    style={{ zIndex: 2 }}
                  />
                  FAQ
                </span>
              </div>
              <div className="relative hidden w-0 flex-col items-center rounded-xl lg:flex lg:w-[500px]">
                <div className="relative z-20 flex w-full flex-col gap-1 md:block lg:w-1/2">
                  <div className="relative z-20 flex w-full flex-row items-center gap-4 ">
                    <div className="relative flex py-5">
                      <div className="relative">
                        <div className="hidden lg:block">
                          <Image
                            src="/static/favicon_brown.svg"
                            alt="Brown Star"
                            width={251}
                            height={249}
                            className="absolute ml-2"
                          />
                          <Image
                            src="/favicon-32x32.svg"
                            alt="Green Star"
                            width={251}
                            height={249}
                            className="relative"
                          />
                        </div>
                      </div>
                      <div className="absolute -left-6 top-4">
                        <Image
                          src="/static/favicon_brown.svg"
                          alt="Small Brown Star"
                          width={38}
                          height={38}
                          className="absolute ml-3"
                        />
                        <Image
                          src="/favicon-32x32.svg"
                          alt="Small Green Star"
                          width={38}
                          height={38}
                          className="relative -mr-3 ml-2"
                        />
                      </div>
                      <div className="absolute -left-14 top-14">
                        <Image
                          src="/static/favicon_brown.svg"
                          alt="Small Brown Star"
                          width={38}
                          height={38}
                          className="absolute ml-3"
                        />
                        <Image
                          src="/favicon-32x32.svg"
                          alt="Small Green Star"
                          width={38}
                          height={38}
                          className="relative -mr-3 ml-2"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Faq />
          </div>
        </section>

        {/* Level 9 */}
        <Testimonial slidesPerView={isMobile ? 1 : 3} />

        {/* Level 10 */}
        {/* <NewsAndBlog /> */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
