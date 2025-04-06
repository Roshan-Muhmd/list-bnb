import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../../hooks/useAuth'
import { getValidationObj } from '../../utils/validationutils';

const RegisterForm = () => {

 const { register,
         handleSubmit,
         watch,
         formState: { errors },getValues} = useForm()
         const validationRules =  getValidationObj(getValues)

        const {isAuthenticated,handleRegister } = useAuth()
    
  return (
    <div className="w-1/2 p-6">
        <h2 className="text-3xl font-bold text-gray-700 text-center">
          <span className="text-pink-500">list</span>bnb
        </h2>
        <p className="text-center text-gray-500 mt-2">
          <strong>Listbnb</strong> - Largest Classified Listing Marketplace
          offers perfect Ads classifieds...
        </p>
        <h3 className="mt-6 text-lg font-semibold text-center">
          Create Your Account
        </h3>
        <form onSubmit={handleSubmit(handleRegister)} className="mt-4 space-y-4">
          <div>
            <label className="block text-gray-600">
              Email <span className="text-pink-500">*</span>
            </label>
            <div className="relative">
              <input
                type="email"
                placeholder="Type here"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-300"
                {...register("email",validationRules.email)}
              />
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2">
                📧
              </span>
            </div>
            {errors?.email &&<p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-gray-600">
              Username <span className="text-pink-500">*</span>
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Type here"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-300"
                {...register("username",validationRules.username)}
              />
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2">
                👤
              </span>
            </div>
            {errors?.username &&<p className="text-red-500 text-sm">{errors.username.message}</p>}
          </div>
          <div>
            <label className="block text-gray-600">
              Password <span className="text-pink-500">*</span>
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Type here"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-300"
                {...register("password",validationRules.password)}
              />
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2">
                🔒
              </span>
            </div>
            {errors?.password &&<p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>
          <div>
            <label className="block text-gray-600">
              Confirm Password <span className="text-pink-500">*</span>
            </label>
            <div className="relative">
              <input
                type="password"
                placeholder="Type here"
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-pink-300"
                {...register("confirmpassword",validationRules.confirmpassword)}
              />
              <span className="absolute top-1/2 right-3 transform -translate-y-1/2">
                🔒
              </span>
            </div>
            {errors?.confirmpassword &&<p className="text-red-500 text-sm">{errors.confirmpassword.message}</p>}
          </div>
          <button type='submit' className="w-full bg-pink-500 text-white p-3 rounded-lg">
            Register →
          </button>
        </form>
      </div>
  );
};

export default RegisterForm;
