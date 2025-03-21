import resume from '../assets/resume.pdf'
import { useEffect } from 'react'

export default function Assets() {

  useEffect(()=>{
    const link =  document.createElement('a')
    link.href = resume
    link.download = 'resume.pdf'
    document.body.appendChild(link)
    link.click()
  }, [])
  return null
}
