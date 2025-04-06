import React,{useEffect} from 'react'
import { useForm } from 'react-hook-form'
import useUserProfile from '../../hooks/useUserProfile'
import { getValidationObj } from '../../utils/validationutils'

const MyProfile = () => {

        const { register,
                handleSubmit,
                watch,
                reset,
                formState: { errors },getValues} = useForm()
                const validationRules =  getValidationObj(getValues)

            const {userprofile,updateUser} = useUserProfile()
            
            useEffect(() => {
              reset(userprofile)
            }, [userprofile])
            

  return (
    <main className="container mx-auto px-6 py-8 flex justify-center">
  <section className="flex-1 md:max-w-xl bg-white p-6 rounded-lg shadow">
    <form onSubmit={handleSubmit(updateUser)} className="space-y-5">
      <div>
        <label className="block text-sm font-medium mb-1">First Name<span className="text-red-500">*</span></label>
        <input defaultValue={userprofile?.firstName} {...register("firstName",validationRules.firstName)} type="text" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:border-pink-500" placeholder="Type here" />
      </div>
      {errors?.firstName &&<p className="text-red-500 text-sm">{errors.firstName.message}</p>}
      <div>
        <label className="block text-sm font-medium mb-1">Last Name<span className="text-red-500">*</span></label>
        <input defaultValue={userprofile?.lastName} {...register("lastName",validationRules.lastName)} type="text" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:border-pink-500" placeholder="Type here" />
      </div>
      {errors?.lastName &&<p className="text-red-500 text-sm">{errors.lastName.message}</p>}
      <div>
        <label className="block text-sm font-medium mb-1">Email<span className="text-red-500">*</span></label>
        <input defaultValue={userprofile?.email} {...register("email",validationRules.email)} type="email" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:border-pink-500" placeholder="Type here" />
      </div>
      {errors?.email &&<p className="text-red-500 text-sm">{errors.email.message}</p>}
      <div>
        <label className="block text-sm font-medium mb-1">Username<span className="text-red-500">*</span></label>
        <input  defaultValue={userprofile?.username} {...register("username",validationRules.username)}  type="text" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:border-pink-500" placeholder="Type here" />
      </div>
      {errors?.username &&<p className="text-red-500 text-sm">{errors.username.message}</p>}
      <div>
        <label className="block text-sm font-medium mb-1">Photo<span className="text-red-500">*</span></label>
        <input  defaultValue={userprofile?.image} {...register("photo",validationRules.image)} type="text" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:border-pink-500" placeholder="Image url" />
      </div>
      {errors?.image &&<p className="text-red-500 text-sm">{errors.image.message}</p>}
      <div>
        <label className="block text-sm font-medium mb-1">Location<span className="text-red-500">*</span></label>
        <input defaultValue={userprofile?.location} {...register("location",validationRules.location)} type="text" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:border-pink-500" placeholder="Type here" />
      </div>
      {errors?.location &&<p className="text-red-500 text-sm">{errors.location.message}</p>}
      <div>
        <label className="block text-sm font-medium mb-1">Contact Number<span className="text-red-500">*</span></label>
        <input defaultValue={userprofile?.phone} {...register("phone",validationRules.phone)} type="text" className="w-full border rounded px-4 py-2 focus:outline-none focus:ring focus:border-pink-500" placeholder="Type here" />
      </div>
      {errors?.phone &&<p className="text-red-500 text-sm">{errors.phone.message}</p>}
      <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-full font-medium transition">
        Save
      </button>
    </form>
  </section>
</main>

  )
}

export default MyProfile