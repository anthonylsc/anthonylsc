// Lightweight GSAP initializer with dynamic import.
// Run `npm install gsap` to install the dependency.

export async function initGsap() {
  try {
    const gsapModule = await import('gsap')
    const ScrollTrigger = await import('gsap/ScrollTrigger')
    const gsap = gsapModule.gsap ?? gsapModule.default ?? gsapModule
    gsap.registerPlugin(ScrollTrigger?.default ?? ScrollTrigger)
    return { gsap, ScrollTrigger }
  } catch (e) {
    console.warn('GSAP not available. Run `npm install gsap` to enable scroll animations.', e)
    return null
  }
}

// React hook helper to animate a ref when it scrolls into view.
import { useEffect } from 'react'

export function useGsapScroll(ref, opts = {}) {
  useEffect(() => {
    let ctx = null
    let mounted = true
    ;(async () => {
      const lib = await initGsap()
      if (!mounted || !lib) return
      const { gsap } = lib
      try {
        // simple default animation: fade+slide up when entering viewport
        const el = ref?.current
        if (!el) return
        gsap.fromTo(el, { autoAlpha: 0, y: 30 }, {
          autoAlpha: 1,
          y: 0,
          duration: opts.duration ?? 0.8,
          ease: opts.ease ?? 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: opts.start ?? 'top 80%'
          }
        })
      } catch (e) {
        console.warn('GSAP animation failed', e)
      }
    })()
    return () => { mounted = false; if (ctx && ctx.revert) ctx.revert() }
  }, [ref, opts.duration, opts.start, opts.ease])
}

// Apply site-wide animations (floating shapes, parallax backgrounds)
export async function applySiteAnimations() {
  const lib = await initGsap()
  if (!lib) return
  const { gsap } = lib

  try {
    // floating hero shapes
    gsap.to('.hero-shape-1', {
      y: -30,
      rotation: 360,
      duration: 22,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    gsap.to('.hero-shape-2', {
      y: 20,
      rotation: -360,
      duration: 26,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    // subtle parallax on background gradient blobs
    if (gsap.utils.toArray) {
      gsap.utils.toArray('.bg-shape-top-left').forEach((el) => {
        gsap.to(el, { yPercent: -12, ease: 'none', scrollTrigger: { trigger: el, scrub: 0.6 } })
      })
      gsap.utils.toArray('.bg-shape-bottom-right').forEach((el) => {
        gsap.to(el, { yPercent: 10, ease: 'none', scrollTrigger: { trigger: el, scrub: 0.6 } })
      })
    }

    // gentle floating for particle background (if present)
    gsap.to('.particle-floating', { x: '+=20', y: '+=10', duration: 18, repeat: -1, yoyo: true, ease: 'sine.inOut' })

    // mesmerising title animation: subtle scale/rotate + gradient shift
    try {
      // Keep a pure gradient animation (no scale) and make it yoyo so the
      // gradient flows back-and-forth smoothly instead of jumping back.
      gsap.set('.site-title', { backgroundPosition: '0% 50%' })
      gsap.to('.site-title', {
        backgroundPosition: '100% 50%',
        duration: 18,
        repeat: -1,
        yoyo: true,
        ease: 'linear'
      })
    } catch (e) {
      console.warn('site-title animation failed', e)
    }
  } catch (e) {
    console.warn('applySiteAnimations failed', e)
  }
}
