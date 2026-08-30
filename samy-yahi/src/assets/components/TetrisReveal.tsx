import { useEffect, useRef, useState } from 'react'

type TetrisRevealProps = {
  src: string
  size?: number
  cols?: number
  rows?: number
  trigger?: 'inview' | 'mount'
  className?: string
}

export default function TetrisReveal({
  src,
  size = 320,
  cols = 12,
  rows = 12,
  trigger = 'inview',
  className = '',
}: TetrisRevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [play, setPlay] = useState(trigger === 'mount')

  useEffect(() => {
    if (trigger !== 'inview') return
    const el = containerRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlay(true)
          io.unobserve(el)
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [trigger])

  const tileSize = size / cols

  const tiles: Array<{
    key: string
    left: number
    top: number
    bgX: number
    bgY: number
    delay: number
  }> = []

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const colDelay = col * 0.045
      const withinColDelay = (rows - 1 - row) * 0.032
      tiles.push({
        key: `${row}-${col}`,
        left: col * tileSize,
        top: row * tileSize,
        bgX: -col * tileSize,
        bgY: -row * tileSize,
        delay: colDelay + withinColDelay,
      })
    }
  }

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden bg-cover bg-center ${className}`}
      style={{ width: size, height: size }}
    >
      {tiles.map((t) => (
        <div
          key={t.key}
          className={`absolute bg-no-repeat ${play ? 'tetris-play' : ''}`}
          style={{
            width: tileSize + 0.6,
            height: tileSize + 0.6,
            left: t.left,
            top: t.top,
            backgroundImage: `url(${src})`,
            backgroundSize: `${size}px ${size}px`,
            backgroundPosition: `${t.bgX}px ${t.bgY}px`,
            opacity: 0,
            transform: 'translateY(-520px)',
            animationDelay: `${t.delay.toFixed(3)}s`,
          }}
        />
      ))}
    </div>
  )
}
