'use client'
import { TextEffect } from '@/components/ui/text-effect'
import Link from 'next/link'
import { TextShimmerWave } from '@/components/motion-primitives/text-shimmer-wave';
import './shimmer.css'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white">
          Victor Tyler
        </Link>
        <div>
        <TextShimmerWave
      className='shimmer-custom'
      duration={1}
      spread={1}
      zDistance={1}
      scaleDistance={1.1}
      rotateYDistance={20}
    >
      Software Engineer
    </TextShimmerWave>
        </div>
      </div>
    </header>
  )
}
