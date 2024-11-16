import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import profilePic from "../../assets/onizuka.jpg";
import { Link, Link2 } from "lucide-react";
const ProfileSetting = () => {
  const [currentImage, setCurrentImage] = useState(profilePic); // Set default or fetch from API
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [currentLinks, setCurrentLinks] = useState();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSaveImage = () => {
    if (selectedImage) {
      // Here you would typically upload to server
      setCurrentImage(previewUrl);
      setSelectedImage(null);
      setPreviewUrl(null);
    }
  };

  const handleReset = () => {
    // Here you would typically make an API call to send verification code
    setIsCodeSent(true);
    setShowCodeInput(true);
  };

  const handleVerifyCode = () => {
    // Here you would typically verify the code with your backend
    if (verificationCode) {
      // Add your verification logic here
      console.log("Verifying code:", verificationCode);
    }
  };

  const handleAddLinks = () => {
    setCurrentLinks();
  };

  return (
    <div className="h-min-screen">
      <h1 className="text-base font-bold my-5">Edit Profile</h1>
      <div className="flex">
        <div className="w-1/2 border-r-2">
          <div className="flex flex-col ml-4 my-2">
            <span className="text-sm mb-2">Username</span>
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
            <span className="text-sm mb-2">Email</span>
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
            <span className="text-sm mb-2">Phone number</span>
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
            <span className="text-sm mb-2">Profile picture</span>
            <div className="flex flex-col gap-4">
              {/* Current Profile Picture */}
              <div className="relative w-32 h-32">
                <img
                  src={currentImage}
                  alt="Current profile"
                  className="w-full h-full object-cover rounded-full border-2 border-green-500"
                />
              </div>

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
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="block w-full text-sm mb-2 text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm mb-2 file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100"
                />
                <Button
                  variant="secondary"
                  size="sm"
                  className="focus:outline outline-2 outline-green-500"
                  onClick={handleSaveImage}
                  disabled={!selectedImage}
                >
                  Save
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-base font-bold my-5">Change Password</h1>
      <div className="flex">
        <div className="w-1/2 border-r-2">
          <div className="flex flex-col ml-4 my-2">
            <span className="text-sm mb-2">Current Password</span>
            <div>
              <input
                type="password"
                name="Current Password"
                placeholder="Current Password"
                className="w-fit px-2 mr-2 size-8 rounded rounded-md bg-accent bg-opacity-10 focus:outline outline-green-500"
              />
              {/* <Button
                variant="secondary"
                size="sm"
                className="focus:outline outline-2 outline-green-500"
              >
                Save
              </Button> */}
            </div>
          </div>
          <div className="flex flex-col ml-4 my-2">
            <span className="text-sm mb-2">New Password</span>
            <div>
              <input
                type="password"
                name="New Password"
                placeholder="New Password"
                className="w-fit px-2 mr-2 size-8 rounded rounded-md bg-accent bg-opacity-10 focus:outline outline-green-500"
              />
              {/* <Button
                variant="secondary"
                size="sm"
                className="focus:outline outline-2 outline-green-500"
              >
                Save
              </Button> */}
            </div>
          </div>
          <div className="flex flex-col ml-4 my-2">
            <span className="text-sm mb-2">Confirm New Password</span>
            <div>
              <input
                type="password"
                name="New Password"
                placeholder="New Password"
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
            <span className="text-sm mb-2">Reset Password</span>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  className="focus:outline outline-2 outline-green-500"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </div>
              {showCodeInput && (
                <div className="flex flex-col gap-2">
                  <span className="text-sm mb-2 text-green-600">
                    {isCodeSent
                      ? "Verification code sent! Please check your email/phone."
                      : ""}
                  </span>
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      placeholder="Enter verification code"
                      value={verificationCode}
                      onChange={(e) => setVerificationCode(e.target.value)}
                      className="w-fit px-2 mr-2 size-8 rounded rounded-md bg-accent bg-opacity-10 focus:outline outline-green-500"
                    />
                    <Button
                      variant="secondary"
                      size="sm"
                      className="focus:outline outline-2 outline-green-500"
                      onClick={handleVerifyCode}
                    >
                      Verify
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-base font-bold my-5">Manage Linked Accounts</h1>

      <div className="flex">
        <div className="w-1/2 border-r-2">
          <div className="flex flex-col ml-4 my-2">
            <span className="text-sm mb-2">Add links</span>
            <div className="flex">
              <div className="flex flex-row">
                <input
                  type="password"
                  name="New Password"
                  placeholder="link of a social account"
                  className="w-fit px-2 mr-2 size-8 rounded rounded-md bg-accent bg-opacity-10 focus:outline outline-green-500"
                />
                <Button
                  variant="secondary"
                  size="sm"
                  className="focus:outline outline-2 outline-green-500"
                  onClick={handleAddLinks}
                >
                  Add
                </Button>
              </div>
            </div>
            <div className="flex flex-col ">
              <div className="flex flex-row items-center ml-3">
                <Link2 />
                <Button variant="link">Facebook link</Button>
              </div>
              <div className="flex flex-row items-center ml-3">
                <Link2 />
                <Button variant="link">Instagram link</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
