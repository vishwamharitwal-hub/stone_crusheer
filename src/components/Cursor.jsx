import { useEffect, useRef } from 'react'

const isTouch = typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches

export default function Cursor() {
  const dot  = useRef(null)
  const ring = useRef(null)
  let rx = 0, ry = 0, mx = 0, my = 0

  useEffect(() => {
    if (isTouch) return
    const onMove = (e) => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', onMove)

    dot.current.style.left = '0px'
    dot.current.style.top  = '0px'

    const lerp = (a, b, t) => a + (b - a) * t
    const tick = () => {
      rx = lerp(rx, mx, 0.14)
      ry = lerp(ry, my, 0.14)
      dot.current.style.left  = mx + 'px'
      dot.current.style.top   = my + 'px'
      ring.current.style.left = rx + 'px'
      ring.current.style.top  = ry + 'px'
      requestAnimationFrame(tick)
    }
    tick()

    const onEnter = () => ring.current?.classList.add('hover')
    const onLeave = () => ring.current?.classList.remove('hover')

    const watchEls = () => {
      document.querySelectorAll('a,button,[data-cursor]').forEach(el => {
        el.addEventListener('mouseenter', onEnter)
        el.addEventListener('mouseleave', onLeave)
      })
    }
    watchEls()
    const ob = new MutationObserver(watchEls)
    ob.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', onMove)
      ob.disconnect()
    }
  }, [])

  if (isTouch) return null

  return (
    <>
      <div className="cursor-dot"  ref={dot}  />
      <div className="cursor-ring" ref={ring} />
    </>
  )
}
