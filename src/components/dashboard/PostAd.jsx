import React from 'react'
import useAds from '../../hooks/useAds'
import { useForm } from 'react-hook-form'
import { getValidationObj } from '../../utils/validationutils'

const PostAd = () => {

 const { register,
                 handleSubmit,
                 watch,
                 reset,
                 formState: { errors },getValues} = useForm()
                 const validationRules =  getValidationObj(getValues)

          const {postAd} = useAds(reset)

  return (
    <main className="flex-1 p-8">
  <h2 className="text-2xl font-semibold mb-6 text-gray-800">Post Ad</h2>
  <div className="bg-white rounded-lg shadow-md p-6">
    <form onSubmit={handleSubmit(postAd)} className="space-y-4">
      <div>
        <label htmlFor="adTitle" className="block text-gray-700 text-sm font-bold mb-2">Ad Title <span className="text-red-500">*</span></label>
        <input {...register("title",validationRules.title)} type="text" id="adTitle" placeholder="Type here" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      {errors?.title &&<p className="text-red-500 text-sm">{errors.title.message}</p>}
      <div>
        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">Description <span className="text-red-500">*</span></label>
        <textarea {...register("description",validationRules.description)} id="description" placeholder="Type Here" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue={""} />
      </div>
      {errors?.description &&<p className="text-red-500 text-sm">{errors.description.message}</p>}
      <div>
        <label htmlFor="photos" className="block text-gray-700 text-sm font-bold mb-2">Photos <span className="text-red-500">*</span></label>
        <input {...register("image",validationRules.image)} type="text" id="photos" placeholder="Image url" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      {errors?.image &&<p className="text-red-500 text-sm">{errors.image.message}</p>}
      <div>
        <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">Price <span className="text-red-500">*</span></label>
        <input {...register("price",validationRules.price)} type="text" id="price" placeholder="Price" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
      </div>
      {errors?.price &&<p className="text-red-500 text-sm">{errors.price.message}</p>}
      <button type="submit" className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Post
      </button>
    </form>
  </div>
</main>

  )
}

export default PostAd