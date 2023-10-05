export default function Pricing() {
  // Define your pricing plan data here
  const pricingPlans = [
    {
      title: 'Basic',

      // price: 'Free',
      description: (
        <span>
          Our <strong>Base</strong> plan for families and children to learn financial literacy
          through fun activities, rewards system, money missions, payment controls and an
          interactive parental hub.
        </span>
      ),
    },
    // {
    //   title: 'Ploot',

    //   price: '19.99HKD/mo',
    //   description: (
    //     <span>
    //       <strong>Ploot</strong> plan offers advanced features such as savings goals, budget
    //       tracking, and customized financial education for families and children.
    //     </span>
    //   ),
    // },
    {
      title: 'Ploot+',

      // price: 'TBD',
      description: (
        <span>
          <strong>Ploot+</strong> plan offers full features including unlimited access to payment
          controls, rewards system and parental hub, giving the full experience to families and
          children to reach their financial goals.
        </span>
      ),
    },
  ]

  return (
    <section className="mx-0 mt-16 lg:mx-auto lg:max-w-4xl">
      <div className="mt-8 flex flex-col gap-8 rounded-xl bg-neutral-500 p-8 lg:mt-24">
        <div className="flex flex-col items-center justify-center text-center">
          <span className="rounded-full bg-secondary-500 px-4 py-2 font-sans text-sm font-medium uppercase text-white">
            Pricing
          </span>
          <h1 className="text-center font-heading text-display-sm font-semibold text-primary-500 lg:text-display-lg">
            Plans for every family.
          </h1>
        </div>
        {/* Pricing Cards Container */}
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {/* Pricing Cards */}
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className="group rounded-lg bg-white p-10 shadow-md transition duration-300 ease-in-out hover:bg-[#124944] hover:text-white hover:shadow-lg"
            >
              <h2 className="text-lg font-semibold text-primary-500 group-hover:text-white">
                {plan.title}
              </h2>
              {/* <p className="text-sm font-medium text-primary-500 group-hover:text-white">
                {plan.price}
              </p> */}
              <p className="mt-2 text-sm font-medium text-primary-500 group-hover:text-white">
                {plan.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
