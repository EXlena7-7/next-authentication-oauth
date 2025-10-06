'use client'
import Link from "next/link"
import { useState } from "react"

const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white focus:outline-none"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </button>
            {isOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                    <Link href="/" className="block px-4 py-2 text-gray-800">Home</Link>
                    <Link href="/about" className="block px-4 py-2 text-gray-800">About</Link>
                    <Link href="/contact" className="block px-4 py-2 text-gray-800">Contact</Link>
                </div>
            )}
        </div>
    )
}

export default MobileMenu