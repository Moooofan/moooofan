"use client"
import React, { useState } from 'react'
import Link from 'next/link'
import { AnimatedBackground } from './animated-background'

export function Sidebar() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // You can add your email subscription logic here
    setSubmitted(true)
  }

  return (
    <aside className="fixed left-0 top-0 z-30 flex h-full w-64 flex-col border-r border-zinc-100 bg-white px-6 py-10 dark:border-zinc-800 dark:bg-zinc-950 max-sm:hidden">
      <nav className="flex flex-col gap-8">
        <div>
          <h2 className="mb-2 text-lg font-bold">About me</h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm">分享新創趣點、人物專訪和閱讀心得，探索創業生態系統的各種可能。</p>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold">文章分類</h2>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link href="/blog/category/startup" className="hover:underline">創業</Link></li>
            <li><Link href="/blog/category/interview" className="hover:underline">人物專訪</Link></li>
            <li><Link href="/blog/category/reading" className="hover:underline">閱讀心得</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="mb-2 text-lg font-bold">電子報訂閱</h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input
              type="email"
              placeholder="輸入你的 Email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="rounded-md border border-zinc-200 px-3 py-2 text-sm focus:border-zinc-400 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
              required
            />
            <button
              type="submit"
              className="rounded-md bg-zinc-900 px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
              disabled={submitted}
            >
              {submitted ? '已訂閱' : '訂閱'}
            </button>
          </form>
        </div>
      </nav>
    </aside>
  )
} 