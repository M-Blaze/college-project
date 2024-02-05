import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Input from '@/components/Input'

export default function SignUp() {
  return (
    <section id='sign-up' className='h-screen'>
      <div className="flex h-full items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">Sign up</h2>
          <p className="mt-2 text-base text-gray-600">
            Already have an account?{' '}
            <Link to="/signin"
              className="font-medium text-black transition-all duration-200 hover:underline"
            >
              Sign In
            </Link>
          </p>
          <form action="#" method="POST" className="mt-8">
            <div className="space-y-5">
              <div className='input-group'>
                <label htmlFor="fullname" className="text-base font-medium text-gray-900">
                  Full Name
                </label>
                <Input id='fullname' placeholder='Full Name' />
              </div>
              <div className='input-group'>
                <label htmlFor="email" className="text-base font-medium text-gray-900">
                  Email address
                </label>
                <Input type='email' id='email' placeholder='Email' />
              </div>
              <div className='input-group'>
                <label htmlFor="password" className="text-base font-medium text-gray-900">
                  Password
                </label>
                <Input type='password' id='password' placeholder='Password' />
              </div>
              <div className='action-group'>
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Create Account <ArrowRight className="ml-2" size={16} />
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
