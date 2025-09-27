'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { TextScramble } from '@/components/motion-primitives/text-scramble';

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Victor Tyler
        </Link>
        <div>
        <TextScramble
      className='font-mono text-sm'
      duration={2.5}
      speed={.05}
      characterSet='01'
    >
      Software Engineer
    </TextScramble>
        </div>
      </div>
    </header> 
  )
}
