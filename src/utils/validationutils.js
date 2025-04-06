
export const getValidationObj = (getValues) => {
    return  {
        username: {
            required: "Please enter Username",
            minlength: 2,
            maxlength: 20
        },
        firstName: {
            required: "Please enter First Name",
            minlength: 2,
            maxlength: 40
        },
        lastName: {
            required: "Please enter Last Name",
            minlength: 2,
            maxlength: 40
        },
        email: {
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Invalid email format"
            }
          },
          confirmpassword: {
            required: "Please confirm your password",
            validate: (value) =>
              value === getValues("password") || "Passwords do not match"
          },
          password: {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters"
            }
        },
        image: {
            required: "Password enter a image url",
        },
        location: {
            required: "Please enter location details",
            minLength: {
              value: 2,
              message: "Enter atleast 2 characters"
            }
        },
        title:{
            required : "Please enter a Title"
        },
        description:{
            required : "Please enter a Description",
            minLength: {
                value: 10,
                 message: "Please enter atleast 10 characters"
            }
        },
        phone: {
            required: "Please enter a valid Phone number",
            pattern: {
                value: /^\+?\d+$/,
                message: "Enter a valid phone number (10–15 digits)"
              },
            minLength: {
              value: 5,
              message: "Phone number should be minimum 5"
            },
            
        },
        price : {
            required: "Please Add a price",
            validate: (val)=> parseFloat(val) > 0 || "Please enter a valid price"
        }

    }
}

 