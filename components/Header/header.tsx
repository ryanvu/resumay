'use client'
import React from 'react'
import { ModeToggle } from '../ThemeToggler/theme-toggle'

export default function Header() {
  return (
    <header className="flex w-full justify-between">
      <h1>resume.</h1>
      <ModeToggle></ModeToggle>
    </header>
  )
}

