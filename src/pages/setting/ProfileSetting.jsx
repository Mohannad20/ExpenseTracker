import React, { useState, useEffect } from "react";
import { Button } from "../../components/ui/button";
import profilePic from "../../assets/onizuka.jpg";
import { Link, Link2, Trash } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { changeEmail, changePassword, fetchUserProfile, sendVerificationEmail, updateUsername } from "../../redux/ProfileReducer";
import { updateEmail } from "firebase/auth";
const ProfileSetting = () => {
  const [currentImage, setCurrentImage] = useState(profilePic);
  const [selectedImage, setSelectedImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [verificationCode, setVerificationCode] = useState("");
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [showCodeInputEmail, setShowCodeInputEmail] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [addLinks, setAddLinks] = useState('');
  const [currentLinks, setCurrentLinks] = useState(['Facebook', 'Twitter', 'Instagram']);
  const [newPassword, setNewPassword] = useState('')
  const { loading, error, message } = useSelector((state) => state.profile);

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

  const handleVerifyEmail = () => {
    // setIsCodeSent(true);
    setShowCodeInputEmail(true);
  };
  const handleReset = () => {
    setIsCodeSent(true);
    setShowCodeInput(true);
  };



  const handleAddLinks = () => {
    if (addLinks.trim()) {
      setCurrentLinks([...currentLinks, addLinks]);
      setAddLinks('');
    }
  };
  const handleDeleteLink = (id) => {
    const updateLinks = [...currentLinks]
    updateLinks.splice(id,1)
    setCurrentLinks(updateLinks)
  }

  const dispatch = useDispatch()
  const username = useSelector((state) => state.profile.username)
  const email = useSelector((state) => state.profile.email)
  console.log('username is :', username);
  console.log('email is :', email);
  const [newUsername, setNewUsername] = useState(username)
  const [newEmail, setNewEmail] = useState(email)
  
  useEffect(()=> {
    dispatch(fetchUserProfile())
  }, [dispatch])
  useEffect(() => {
    setNewUsername(username);
    setNewEmail(email);
  }, [username, email])

  const handleUpdateUsername = () => {
    dispatch(updateUsername(newUsername))
  }
  // const handleUpdateEmail = async () => {
  //   const result = await dispatch(changeEmail(newEmail))
  //   if (changeEmail.fulfilled.match(result)) {
  //     console.log('Email changed successfully');
  //   } else {
  //     console.log('Error changing email:', result.payload);
  //   }
  // }

  const handleSendVerificationEmail = async () => {
    const result = await dispatch(sendVerificationEmail())
    if (sendVerificationEmail.fulfilled.match(result)) {
      console.log('Verification email sent successfully');

    } else {
      console.log('Error sending verification email:');
    }
  }

  const handleChangePassword = async () => {
    const result = await dispatch(changePassword(newPassword));
    if (changePassword.fulfilled.match(result)) {
      console.log('Password changed successfully');
    } else {
      console.log('Error changing password:', result.payload);
    }
  };

  return (
    <div className="h-min-screen">
      <h1 className="text-base font-bold my-5">Edit Profile</h1>
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-2">
        <div className=" lg:border-r-2">
          <div className="flex flex-col ml-4 my-2">
            <span className="text-sm mb-2">Username</span>
            <div>
              <input
                type="text"
                name="username"
                value={newUsername}
                placeholder="username"
                onChange={(e) => setNewUsername(e.target.value)}
                className="w-fit px-2 mr-2 size-8 rounded rounded-md bg-accent bg-opacity-10 focus:outline outline-green-500"
              />
              <Button
                variant="secondary"
                size="sm"
                className="focus:outline outline-2 outline-green-500"
                onClick={handleUpdateUsername}
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
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="name@email.me"
                className="w-fit px-2 mr-2 size-8 rounded rounded-md bg-accent bg-opacity-10 focus:outline outline-green-500"
              />
              <Button
                variant="secondary"
                size="sm"
                className="focus:outline outline-2 outline-green-500"
                onClick={() => { handleVerifyEmail(); handleSendVerificationEmail(); }}
              >
                Verify
              </Button>
              {showCodeInputEmail && (
                <div className="flex flex-col gap-2">
                  <span className="text-sm mb-2 text-green-600">
                    
                   A verification just sent! Please check your email/phone.
                
                  </span>
                  
                </div>
              )}
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
        <div className=" ml-5">
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
      <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-2">
        <div className=" lg:border-r-2">
          <div className="flex flex-col ml-4 my-2">
            <span className="text-sm mb-2">Current Password</span>
            <div>
              <input
                type="password"
                name="Current Password"
                placeholder="Current Password"
                className="w-fit px-2 mr-2 size-8 rounded rounded-md bg-accent bg-opacity-10 focus:outline outline-green-500"
              />
             
            </div>
          </div>
          <div className="flex flex-col ml-4 my-2">
            <span className="text-sm mb-2">New Password</span>
            <div>
              <input
                type="password"
                name="New Password"
                placeholder="New Password"
                onChange={(e) => setNewPassword(e.target.value)}
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
                onChange={(e) => setNewPassword(e.target.value)}

                className="w-fit px-2 mr-2 size-8 rounded rounded-md bg-accent bg-opacity-10 focus:outline outline-green-500"
              />
              <Button
                variant="secondary"
                size="sm"
                className="focus:outline outline-2 outline-green-500"
                onClick={handleChangePassword}
              >
                Save
              </Button>
              {loading && <span>Loading...</span>}
              {/* {error && <span className="text-red-500">{error}</span>} */}
              {message && <span className="text-green-500">{message}</span>}
            </div>
          </div>
        </div>
        <div className=" ml-5">
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
        <div className="w-1/2">
          <div className="flex flex-col ml-4 my-2">
            <span className="text-sm mb-2">Add links</span>
            <div className="flex">
              <div className="flex flex-row">
                <input
                  type="text"
                  name="link"
                  value={addLinks}
                  onChange={(e) => setAddLinks(e.target.value)}
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
              {currentLinks && currentLinks.map((link, index) => (
              
                <div className="flex flex-row items-center ml-3" key={index}>
                <Link2 />
                <Button variant="link">{link}</Button>
                <Trash size={18} className='hover:opacity-40 cursor-pointer' onClick={() => handleDeleteLink(index)} />
              </div>
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetting;
