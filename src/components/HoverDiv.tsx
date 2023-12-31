import { cn } from '@/utils/cn'
import React from 'react'

type Props = {}

export default function HoverDiv(props: React.HTMLAttributes<HTMLDivElement> & {isActive?: boolean}) {
  return (
    <div
    {...props} 
    className={cn("py-2 px-3 hover:bg-zinc-800 transition-all cursor-pointer rounded-xl",props.className
    )}
    />
  )
}