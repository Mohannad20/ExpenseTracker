import React from 'react'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Link, Route, Routes } from 'react-router-dom'
import AddTransaction from '../pages/addTransaction'
import Home from '../pages/Home'
import Transaction from '../pages/transaction'
import UserMenu from './UserMenu'
import Login from '../pages/login'
import Signup from '../pages/signup'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className="flex h-screen bg-gray-100 ">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold" onClick={toggleSidebar}>Sidebar</h2>
          <button size="icon" onClick={toggleSidebar}>
            <X className="h-6 w-6" />
            <span className="sr-only">Close sidebar</span>
          </button>
        </div>
        <nav className="p-4">
          <ul className="space-y-2" onClick={toggleSidebar} >
            <li>
              <Link to='/' className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Home</Link>
            </li>
            <li>
              <Link to='/addTransaction' className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Add Transaction</Link>
            </li>
            <li>
              <Link to='/transaction' className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Transaction</Link>
            </li>
            <li>
              <Link to='/login' className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Login</Link>
            </li>
            <li>
              <Link to='/signup' className="block py-2 px-4 text-gray-700 hover:bg-gray-200 rounded">Signup</Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col w-full ">
        <header className="bg-white shadow-sm">
          <div className="min-w-screen mx-auto py-4 px-4 sm:px-6 lg:px-8 flex items-center">
            <button size="icon" onClick={toggleSidebar} className="mr-4">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open sidebar</span>
            </button>
            <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            <div className="flex-1 flex justify-center">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-fit px-4 py-2 border bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <div className='ml-auto flex items-center gap-3'>
                <UserMenu />
            </div>
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-4">
          <div className="max-w-7xl mx-auto">
            {/* The main content will be rendered here based on the route */}
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/addTransaction' element={<AddTransaction />} />
                <Route path='/transaction' element={<Transaction/>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/signup' element={<Signup/>} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Navbar