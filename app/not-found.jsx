import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className="container">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5wsGQnk73a5OVD3JPvDGgaFpAZ44qEdAeE0sLLhZukzfN29jUD-B-WOyM&s=10"
        alt="404 Not Found"
        className="image"
      />

      <Link href="/" className="link">
        <button className="button">
          Back To Home
        </button>
      </Link>
    </div>
  )
}

export default NotFound