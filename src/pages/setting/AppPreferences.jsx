import React from 'react'
import { Button } from '../../components/ui/button'

const AppPreferences = () => {
  return (
    <div className="h-min-screen">
      <h1 className="text-base font-bold my-5">Currency Settings</h1>
      <div className="flex">
        <div className="w-1/2 border-r-2">
          <div className="flex flex-col ml-4 my-2">
            <span className="text-sm">Username</span>
            <div>
              <input
                type="text"
                name="username"
                placeholder="username"
                className="w-fit px-2 mr-2 size-8 rounded rounded-md bg-accent bg-opacity-10 focus:outline outline-green-500"
              />
              <Button
                variant="secondary"
                size="sm"
                className="focus:outline outline-2 outline-green-500"
              >
                Save
              </Button>
            </div>
          </div>
          <div className="flex flex-col ml-4 my-2">
            <span className="text-sm">Email</span>
            <div>
              <input
                type="email"
                name="email"
                placeholder="name@email.me"
                className="w-fit px-2 mr-2 size-8 rounded rounded-md bg-accent bg-opacity-10 focus:outline outline-green-500"
              />
              <Button
                variant="secondary"
                size="sm"
                className="focus:outline outline-2 outline-green-500"
              >
                Save
              </Button>
            </div>
          </div>
          <div className="flex flex-col ml-4 my-2">
            <span className="text-sm">Phone number</span>
            <div>
              <input
                type="text"
                name="phonenumber"
                placeholder="+212 687484417"
                className="w-fit px-2 mr-2 size-8 rounded rounded-md bg-accent bg-opacity-10 focus:outline outline-green-500"
              />
              <Button
                variant="secondary"
                size="sm"
                className="focus:outline outline-2 outline-green-500"
              >
                Save
              </Button>
            </div>
          </div>
        </div>
        <div className="w-1/2 ml-5">
          <div className="flex flex-col ml-4 my-2">
            <span className="text-sm">Profile picture</span>
            <div className="flex flex-col gap-4">
              {/* Current Profile Picture */}
              {/* <div className="relative w-32 h-32">
                <img
                  src={currentImage}
                  alt="Current profile"
                  className="w-full h-full object-cover rounded-full border-2 border-green-500"
                />
              </div> */}

              {/* New Image Preview */}
              {/* {previewUrl && (
                <div className="relative w-32 h-32">
                  <img
                    src={previewUrl}
                    alt="New profile preview"
                    className="w-full h-full object-cover rounded-full border-2 border-green-500"
                  />
                </div>
              )} */}

              <div className="flex items-center gap-2">
                {/* <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100"
                /> */}
                <Button
                  variant="secondary"
                  size="sm"
                  className="focus:outline outline-2 outline-green-500"
                  // onClick={handleSaveImage}
                  // disabled={!selectedImage}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </div>

  )
}

export default AppPreferences