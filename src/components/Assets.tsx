import resume from '../assets/resume.pdf'
import { useEffect } from 'react'

export default function Assets() {
  useEffect(() => {
    // Automatically redirect to the PDF
    window.location.href = resume
  }, [])

  return null
}
