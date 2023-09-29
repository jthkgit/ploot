import NewAndBlog from './Lib/newandblog'

export default function NewsAndBlog() {
  return (
    <section className="mx-0 mt-16 lg:mx-auto lg:max-w-4xl">
      <div className="rounded-xlp-8 mt-8 flex flex-col gap-8">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="rounded-full bg-secondary-500 px-4 py-2 font-sans text-sm font-medium uppercase text-white">
            NEWS & BLOG
          </span>
          <h1 className="mt-4 text-center font-heading text-display-sm font-semibold text-primary-500 lg:mt-8 lg:text-display-lg">
            Updates From Us.
          </h1>
        </div>
        {/* Card */}
        <div className="flex flex-col justify-center gap-2 md:flex-row">
          {NewAndBlog.map((nb, index) => (
            <div
              key={index}
              className={`h-300 md:w-424 md:h-300 w-full rounded-lg p-4 shadow-md transition duration-300 ease-in-out hover:shadow-lg md:p-10 ${
                index === 0 ? 'bg-[#124944]' : index === 1 ? 'bg-[#F8D4A2]' : 'bg-white'
              }`}
            >
              <h2 className="text-xm font-semibold text-white lg:text-lg">{nb.title}</h2>
              <p className="mt-2 text-sm font-medium text-white lg:text-md">{nb.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
