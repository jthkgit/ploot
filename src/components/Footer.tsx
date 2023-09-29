import { useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function Footer() {
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
    <section className="relative">
      {/*Front*/}
      <div className="relative z-10 mx-auto my-auto max-w-sm lg:mx-auto  lg:max-w-4xl">
        <div className="mx-4 rounded-xl bg-[#F8D4A2] px-2 py-4 text-center md:mx-0">
          {/*Remove the comment if needed
          <h1 className="text-center font-heading text-display-sm font-semibold text-primary-500 lg:text-display-lg">
            Download Ploot app
            <br /> on iOS or Android
          </h1>
          */}

          <div className="max-w-auto lg:mx-auto lg:my-5 lg:max-w-md lg:px-4">
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
          {/* Remove the comment if needed
        <div className="flex items-center justify-center py-3 text-[#124944]">
            <AiFillApple className="h-12 w-12 lg:h-16 lg:w-16" />
            <AiFillAndroid className="h-12 w-12 lg:h-16 lg:w-16" />
          </div>
        */}
        </div>
      </div>

      {/*Back*/}

      <div className="absolute inset-0 top-1/2 z-0 h-48 bg-[#124944] lg:h-96"></div>
    </section>
  )
}
