import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'
import { getValidationObj } from '../../utils/validationutils'

const LoginForm = () => {

    const { register,
        handleSubmit,
        watch,
        formState: { errors },getValues} = useForm()
        const validationRules =  getValidationObj(getValues)

        const {isAuthenticated,handleLogin } = useAuth()



  return (

   
    <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-center">
            <span className="text-pink-600">list</span>bnb
          </h2>
          <p className="text-gray-500 text-center mt-2">
            Largest Classified Listing Marketplace
          </p>
          <h3 className="text-xl font-semibold text-center mt-6">
            Login To Your Account
          </h3>
          <form onSubmit={handleSubmit(handleLogin)} className="mt-6">
            <label className="block text-gray-700 font-medium mb-2">
              Username <span className="text-pink-600">*</span>
            </label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <input
                type="text"
                placeholder="Type here"
                className="w-full outline-none"
                {...register("username",validationRules.username)}
              />
              <span className="text-gray-500">📧</span>
            </div>
              {errors?.username &&<p className="text-red-500 text-sm">{errors.username.message}</p>}
            <label className="block text-gray-700 font-medium mt-4 mb-2">
              Password <span className="text-pink-600">*</span>
            </label>
            <div className="flex items-center border rounded-md px-3 py-2">
              <input
                type="password"
                placeholder="Type here"
                className="w-full outline-none"
                {...register("password",validationRules.password)}
              />
              <span className="text-gray-500">🔒</span>
            </div>
            {errors?.password &&<p className="text-red-500 text-sm">{errors.password.message}</p>}
            <button type='submit' className="bg-pink-500 text-white w-full py-3 rounded-md mt-6 hover:bg-pink-600 flex justify-center items-center">
              Login →
            </button>
          </form>
        </div>
  )
}

export default LoginForm