import { useState } from 'react'

export const ProductImage = ({ src, alt, className = '' }) => {
  const [fallo, setFallo] = useState(false)

  if (!src || fallo) {
    return <div className={`bg-slate-100 ${className}`} />
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setFallo(true)}
      className={`object-cover ${className}`}
    />
  )
}
