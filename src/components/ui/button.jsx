import React from 'react'

export const Button = React.forwardRef(({ className = '', variant = 'default', size = 'md', ...props }, ref) => {
  const base = 'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'
  const variants = {
    default: 'bg-emerald-500 text-white hover:bg-emerald-600',
    ghost: 'hover:bg-white/10',
    outline: 'border border-white/20 hover:bg-white/5',
  }
  const sizes = {
    sm: 'h-8 px-3 text-sm rounded-md',
    md: 'h-10 px-4 text-base rounded-lg',
    lg: 'h-12 px-6 text-lg rounded-lg',
    icon: 'h-10 w-10 rounded-full',
  }

  return (
    <button ref={ref} className={`${base} ${variants[variant] || variants.default} ${sizes[size] || sizes.md} ${className}`} {...props} />
  )
})

Button.displayName = 'Button'
