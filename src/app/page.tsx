'use client'

import { useState } from 'react'
import ProjectCard from '@/components/projectCard'

export default function Home() {
  const [message, setMessage] = useState('')

  const fetchMessage = async () => {
    const response = await fetch('/api/hello')
    const data = await response.json()
    setMessage(data.message)
  }

  return (
    <main className="container mx-auto px-4 mt-10">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to My Full-stack Developer Portfolio
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          I'm a passionate full-stack developer with experience working at a Fortune 500 company.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside">
          <li>Python</li>
          <li>Machine Learning and AI</li>
          <li>LLMs, RAGs and Fine Tuning</li>
          <li>SQL</li>
          <li>PHP</li>
          <li>Javascript</li>
          <li>React</li>
          <li>Data Science</li>
        </ul>
      </section>

      <section className="mb-8">
  <h2 className="text-2xl font-semibold mb-2">Projects</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <ProjectCard title="Project 1" description="A brief description of your first project." />
    <ProjectCard title="Project 2" description="A brief description of your second project." />
    <ProjectCard title="Project 3" description="A brief description of your third project." />
    {/* Add more projects here */}
  </div>
</section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Contact</h2>
        <p>Email: your.email@example.com</p>
        <p>GitHub: github.com/yourusername</p>
        <p>LinkedIn: linkedin.com/in/yourusername</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Backend Integration Demo</h2>
        <button
          onClick={fetchMessage}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Fetch Message from API
        </button>
        {message && <p className="mt-2">{message}</p>}
      </section>
    </main>
  )
}