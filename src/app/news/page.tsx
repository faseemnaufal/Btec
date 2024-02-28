import NavBar from '@/components/common/NavBar'
import React from 'react'

const News = () => {
  return (
    <main className="relative poppins  md:px-[9rem]"
    >
        <NavBar />
        <button><a href='/login' target='_blank' rel='noopener noreferrer'>
            Login</a>
        </button>
    </main>
  )
}

export default News
