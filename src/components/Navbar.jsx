import React, { useState } from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Bell,
  Book,
  ChevronDown,
  DollarSign,
  MenuIcon,
  Moon,
  Settings,
  SettingsIcon,
  SunDim,
  UserCircle2,
} from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarShortcut,
  MenubarItem,
} from "./ui/menubar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useTheme } from "./theme-provider";
import {
  BadgeDollarSign,
  Currency,
  Eye,
  HomeIcon,
  PlusCircleIcon,
  Receipt,
} from "lucide-react";

import profilePic from "../assets/onizuka.jpg";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/AuthReducer";
const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const isLogged = useSelector((state) => state.auth.isLogged);
  const user = useSelector((state) => state.auth.user);
  // console.log(user.displayName);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="pt-3">
      <nav className="bg-accent bg-opacity-30 text-primary rotating-border w-fit px-6 flex mx-auto md:px-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center">
          <div className="flex items-center justify-between h-16 gap-10">
            {/* <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:opacity-75"
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            </div> */}
            <div className="flex items-center justify-center">
              <div className="flex-shrink-0 ">
                <Link to="/">
                  <span
                    className="text-2xl font-bold text-primary cursor-pointer 
                motion-scale-in-[0.5] motion-translate-x-in-[-120%] motion-translate-y-in-[-60%] motion-opacity-in-[33%] motion-rotate-in-[-1080deg] motion-blur-in-[10px] motion-delay-[0.38s]/scale motion-duration-[0.38s]/opacity motion-duration-[1.20s]/rotate motion-duration-[0.15s]/blur motion-delay-[0.60s]/blur motion-ease-spring-bouncier"
                  >
                    Expense Tracker
                  </span>
                </Link>
              </div>

              {/* Mobile menu */}
              <Menubar className="bg-transparent flex flex-col space-y-1">
                <MenubarMenu className="">
                  <MenubarTrigger>
                    <div className="md:hidden">
                      <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="bg-accent text-primary rounded-md active:bg-accent focus:text-primary"
                      >
                        <MenuIcon className="h-6 w-6" />
                      </button>
                    </div>
                  </MenubarTrigger>
                  <MenubarContent>
                    <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
                      <Link to="/">
                        <MenubarItem>
                          <MenubarMenu>
                            <MenubarTrigger className="no-hover-bg gap-2">
                              <MenubarShortcut>
                                <HomeIcon className="w-5 h-5" />
                              </MenubarShortcut>
                              Home
                            </MenubarTrigger>
                          </MenubarMenu>
                        </MenubarItem>
                      </Link>
                      <Link to="/transaction">
                        <MenubarItem>
                          <MenubarMenu>
                            <MenubarTrigger className="no-hover-bg gap-2">
                              <MenubarShortcut>
                                <DollarSign className="w-5 h-5" />
                              </MenubarShortcut>
                              Transaction
                            </MenubarTrigger>
                          </MenubarMenu>
                        </MenubarItem>
                      </Link>
                      <Link to="/budget">
                        <MenubarItem>
                          <MenubarMenu>
                            <MenubarTrigger className="no-hover-bg gap-2">
                              <MenubarShortcut>
                                <Currency className="w-5 h-5" />
                              </MenubarShortcut>
                              Budget
                            </MenubarTrigger>
                          </MenubarMenu>
                        </MenubarItem>
                      </Link>
                      <Link to="/reports/historicalAnalysis">
                        <MenubarItem>
                          <MenubarMenu>
                            <MenubarTrigger className="no-hover-bg gap-2">
                              <MenubarShortcut>
                                <Eye className="w-5 h-5" />
                              </MenubarShortcut>
                              Reports
                            </MenubarTrigger>
                          </MenubarMenu>
                        </MenubarItem>
                      </Link>
                      <Link to="/setting/profileSetting">
                        <MenubarItem>
                          <MenubarMenu>
                            <MenubarTrigger className="no-hover-bg gap-2">
                              <MenubarShortcut>
                                {/* <Eye className="w-5 h-5" /> */}
                              <SettingsIcon className="w-5 h-5" />

                              </MenubarShortcut>
                              Setting
                            </MenubarTrigger>
                          </MenubarMenu>
                        </MenubarItem>
                      </Link>
                      
                    </div>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Menubar className="no-hover-bg">
                <Link to="/">
                  <MenubarMenu>
                    <MenubarTrigger className="no-hover-bg gap-2">
                      <MenubarShortcut>
                        <HomeIcon className="w-5 h-5" />
                      </MenubarShortcut>
                      Home
                    </MenubarTrigger>
                  </MenubarMenu>
                </Link>
                <MenubarMenu>
                  <Link to="/transaction">
                    <MenubarTrigger className="no-hover-bg">
                      <MenubarShortcut>
                        <DollarSign className="w-5 h-5" />
                      </MenubarShortcut>
                      Transaction
                    </MenubarTrigger>
                  </Link>
                </MenubarMenu>
                <Link to="/budget">
                  <MenubarMenu>
                    <MenubarTrigger className="no-hover-bg gap-2">
                      <MenubarShortcut>
                        <Currency className="w-5 h-5" />{" "}
                      </MenubarShortcut>
                      Budget
                    </MenubarTrigger>
                  </MenubarMenu>
                </Link>
                <Link to="/reports/historicalAnalysis">
                  <MenubarMenu>
                    <MenubarTrigger className="no-hover-bg gap-2">
                      <MenubarShortcut>
                        <Eye className="w-5 h-5" />{" "}
                      </MenubarShortcut>
                      Reports
                    </MenubarTrigger>
                  </MenubarMenu>
                </Link>
              </Menubar>

              <div className="flex items-center">
                {isLogged && (
                  <>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="outline" size="icon">
                          {theme === "dark" ? (
                            <Bell className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 motion-preset-seesaw" />
                          ) : (
                            <Bell className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 motion-preset-seesaw" />
                          )}
                          <span className="sr-only">Notification</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>Notification 1</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <div className="mx-3 relative">
                      <div className="flex items-center p-1 rounded no-hover-bg">
                        <div
                          tabIndex={0}
                          role="button"
                          className="btn btn-ghost btn-circle avatar"
                        >
                          <div className="w-10 rounded-full">
                            <img
                              alt="Tailwind CSS Navbar component"
                              src={profilePic}
                            />
                          </div>
                        </div>
                        <div className="cursor-pointer flex items-center no-hover-bg">
                          <DropdownMenu>
                            <DropdownMenuTrigger className="flex justify-center items-center">
                              <span className="hidden md:flex mx-2 text-sm font-medium text-primary">
                                {user.displayName}
                              </span>
                              <ChevronDown
                                className="ml-1 h-4 w-4 text-primary"
                                aria-hidden="true"
                              />
                            </DropdownMenuTrigger>

                            <DropdownMenuContent>
                              <DropdownMenuLabel>My Account</DropdownMenuLabel>
                              <DropdownMenuSeparator />
                              <Link to="/setting/profileSetting">
                                <DropdownMenuItem>
                                  <UserCircle2 /> Profile
                                </DropdownMenuItem>
                              </Link>
                              <Link to="/setting/profileSetting">
                                <DropdownMenuItem>
                                  <SettingsIcon />
                                  Setting
                                </DropdownMenuItem>
                              </Link>
                              <DropdownMenuSeparator />
                              <DropdownMenuItem onClick={handleLogout}>
                                Logout
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="icon">
                      <SunDim className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0  motion-preset-seesaw" />
                      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 motion-preset-seesaw" />
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => setTheme("light")}>
                      Light
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("dark")}>
                      Dark
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setTheme("system")}>
                      System
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
