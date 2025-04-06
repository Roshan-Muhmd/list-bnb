import React from 'react'
import { Link } from 'react-router-dom'

const RightBox = ({activeForm}) => {
  return (
    <div className="w-full md:w-1/2 bg-pink-50 flex flex-col justify-center items-center p-10">
          <img
            src="https://via.placeholder.com/200"
            alt="Illustration"
            className="mb-6"
          />
          {activeForm == "register" ? 
           <>
          <h3 className="text-xl font-semibold text-center">
          Already Have an Account? <span className="text-pink-600">?</span>
          </h3>
          <p className="text-gray-500 text-center mt-2">
          To connect with us, please login to our account if you are having one already.
          </p>
          <Link to='/login'><button className="bg-pink-500 text-white px-6 py-3 rounded-md mt-4 hover:bg-pink-600">
            Login →
          </button> 
          </Link>
          </>
          : 
            <>
            <h3 className="text-xl font-semibold text-center">
            Don't Have an Account? <span className="text-pink-600">?</span>
          </h3>
          <p className="text-gray-500 text-center mt-2">
            To connect with us please register for a new account if you are not
            having one already.
          </p>
          <Link to='/register'><button className="bg-pink-500 text-white px-6 py-3 rounded-md mt-4 hover:bg-pink-600">
            Register →
          </button> 
          </Link>
            </>
          }
        </div>
  )
}

export default RightBox