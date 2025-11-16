import React from 'react'
import { Link } from 'react-router-dom'
import { createPageUrl } from '@/utils'
import { Button } from '@/components/ui/button'

export default function NotFound(){
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0a0a0f] text-white">
      <div className="text-center p-6">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="mb-6">Page not found.</p>
        <Link to={createPageUrl('Home')}>
          <Button>Go Home</Button>
        </Link>
      </div>
    </div>
  )
}
