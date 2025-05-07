'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { MorphingDialog, MorphingDialogTrigger, MorphingDialogContent, MorphingDialogClose, MorphingDialogContainer } from './morphing-dialog'

export function Navbar() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <nav className="fixed top-0 left-0 z-40 w-full bg-white/80 backdrop-blur border-b border-zinc-100 dark:bg-zinc-950/80 dark:border-zinc-800">
        <div className="flex w-full items-center justify-between px-4 py-3">
          {/* 左側 LOGO 與標題 */}
          <div className="flex items-center gap-3 min-w-[180px]">
            <span className="font-bold text-lg text-zinc-900 dark:text-zinc-100 whitespace-nowrap">Ray's Blog</span>
          </div>
          {/* 中間 About me 與 文章分類 */}
          <div className="flex items-center gap-6 flex-1 justify-start ml-8">
            <Link href="/about" className="font-medium text-zinc-900 dark:text-zinc-100 hover:underline">About me</Link>
            <div className="relative group">
              <span className="font-medium text-zinc-900 dark:text-zinc-100 cursor-pointer group-hover:underline">文章分類</span>
              <div className="absolute left-0 top-full mt-2 hidden min-w-[120px] rounded-md bg-white p-2 shadow-lg ring-1 ring-zinc-200 dark:bg-zinc-900 dark:ring-zinc-700 group-hover:block text-base">
                <Link href="/blog/category/startup" className="block px-2 py-1 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded">創業</Link>
                <Link href="/blog/category/interview" className="block px-2 py-1 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded">人物專訪</Link>
                <Link href="/blog/category/reading" className="block px-2 py-1 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded">閱讀心得</Link>
              </div>
            </div>
          </div>
          {/* 右側 電子報訂閱 */}
          <div className="flex items-center gap-4">
            <MorphingDialog transition={{ type: 'spring', bounce: 0, duration: 0.3 }}>
              <MorphingDialogTrigger>
                <button className="rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300">免費訂閱電子報</button>
              </MorphingDialogTrigger>
              <MorphingDialogContainer>
                <MorphingDialogContent className="relative w-96 rounded-2xl bg-white p-8 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
                  <h2 className="mb-2 text-2xl font-bold">免費訂閱電子報</h2>
                  <p className="mb-4 text-base text-zinc-600 dark:text-zinc-400">定期收到最新的創業觀點、人物故事和深度分析</p>
                  <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                      type="email"
                      placeholder="輸入你的 Email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      className="rounded-md border border-zinc-200 px-4 py-3 text-base focus:border-zinc-400 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
                      required
                    />
                    <button
                      type="submit"
                      className="rounded-md bg-zinc-900 px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
                      disabled={submitted}
                    >
                      {submitted ? '已訂閱' : '免費訂閱電子報'}
                    </button>
                  </form>
                  <MorphingDialogClose className="absolute top-4 right-4" />
                </MorphingDialogContent>
              </MorphingDialogContainer>
            </MorphingDialog>
          </div>
        </div>
      </nav>
      {/* Navbar 下方預留區塊：照片與社群連結與 email 訂閱 */}
      <div className="flex flex-col items-center gap-4 pt-40 pb-8 w-full bg-white dark:bg-zinc-950">
        {/* 預留照片區塊 */}
        <img
          src="/大頭貼.JPG"
          alt="Ray Wong"
          className="h-40 w-40 rounded-full object-cover mb-2 border-4 border-zinc-100 dark:border-zinc-800 shadow"
          style={{ objectPosition: 'center center' }}
        />
        {/* IG/FB/Linkedin 超連結 */}
        <div className="flex gap-6 mb-2">
          <a href="https://www.instagram.com/moooofan0526/" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7Z" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor"/></svg></a>
          <a href="https://www.facebook.com/rueicheng.wong/" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><svg width="32" height="32" fill="none" viewBox="0 0 24 24"><path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H12V15H10V12H12V10C12 8.34315 13.3431 7 15 7H17V10H15C14.4477 10 14 10.4477 14 11V12H17V15H14V22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="currentColor" strokeWidth="2"/></svg></a>
          <a href="https://www.threads.com/@moooofan0526?xmt=AQGz5IDPRphRA-SuDW3SCdwVbMuVTEQpzs13CGwgEPhWCHc" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100" aria-label="Threads" target="_blank" rel="noopener noreferrer"><svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/><path d="M12 7c2.5 0 4.5 1.5 4.5 4.5S14.5 16 12 16s-4.5-1.5-4.5-4.5S9.5 7 12 7zm0 0v2m0 6v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></a>
          <a href="https://www.linkedin.com/in/moooofan/" className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><svg width="32" height="32" fill="none" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/><path d="M7 10V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="7" cy="7" r="1" fill="currentColor"/><path d="M10 17V13C10 11.8954 10.8954 11 12 11C13.1046 11 14 11.8954 14 13V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M17 17V13C17 11.8954 16.1046 11 15 11C13.8954 11 13 11.8954 13 13V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg></a>
        </div>
        {/* 新增 email 訂閱表單 */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-80">
          <input
            type="email"
            placeholder="輸入你的 Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="rounded-md border border-zinc-200 px-4 py-3 text-base focus:border-zinc-400 focus:outline-none dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-100"
            required
          />
          <button
            type="submit"
            className="rounded-md bg-zinc-900 px-4 py-3 text-base font-semibold text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            disabled={submitted}
          >
            {submitted ? '已訂閱' : '免費訂閱電子報'}
          </button>
        </form>
      </div>
    </>
  )
} 