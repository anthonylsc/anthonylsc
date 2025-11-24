import React, { useEffect, useRef, useState } from 'react'

export default function MusicPlayer2({ src, startAt = 253 }) {
  const audioRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.5)
  const [isMuted, setIsMuted] = useState(false)
  const [showVol, setShowVol] = useState(false)

  const base = typeof import.meta !== 'undefined'
    ? (import.meta.env?.BASE_URL ?? '/')
    : '/'

  const resolvedSrc = src ?? (base + 'music.mp3')

  useEffect(() => {
    try {
      const audio = new Audio(resolvedSrc)
      audio.loop = true
      audio.preload = 'auto'
      audio.volume = volume
      audio.muted = isMuted
      audioRef.current = audio

      const setStartPos = () => {
        try {
          if (startAt != null && typeof audio.duration === 'number' && startAt < audio.duration) {
            audio.currentTime = startAt
          }
        } catch (_) {}
      }

      if (audio.readyState >= 1) {
        setStartPos()
      } else {
        audio.addEventListener('loadedmetadata', setStartPos, { once: true })
      }

      return () => {
        try { audio.pause(); audio.src = '' } catch (_) {}
        audioRef.current = null
      }
    } catch (err) {
      console.error('MusicPlayer init failed', err)
    }
  }, [resolvedSrc])

  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const a = audioRef.current
    if (!a) return

    const onTime = () => setCurrentTime(a.currentTime || 0)
    const onMeta = () => setDuration(a.duration || 0)

    a.addEventListener('timeupdate', onTime)
    a.addEventListener('loadedmetadata', onMeta)
    a.addEventListener('durationchange', onMeta)

    return () => {
      try { a.removeEventListener('timeupdate', onTime) } catch(_){}
      try { a.removeEventListener('loadedmetadata', onMeta) } catch(_){}
      try { a.removeEventListener('durationchange', onMeta) } catch(_){}
    }
  }, [audioRef.current])

  const handleToggle = async () => {
    const a = audioRef.current
    if (!a) return

    if (isPlaying) {
      try { a.pause() } catch (_) {}
      setIsPlaying(false)
    } else {
      try {
        await a.play()
        setIsPlaying(true)
      } catch (e) {
        console.error('Play failed', e)
      }
    }
  }

  const onVolumeChange = (e) => {
    const v = Number(e.target.value)
    setVolume(v)
    if (audioRef.current) audioRef.current.volume = v
  }

  const toggleMute = () => {
    const a = audioRef.current
    if (!a) return
    const next = !a.muted
    try { a.muted = next } catch(_){}
    setIsMuted(next)
  }

  const onSeek = (e) => {
    const v = Number(e.target.value)
    if (audioRef.current && !Number.isNaN(v)) {
      try { audioRef.current.currentTime = v } catch(_){}
      setCurrentTime(v)
    }
  }

  const formatTime = (t) => {
    if (!t) return '0:00'
    const mm = Math.floor(t / 60)
    const ss = Math.floor(t % 60).toString().padStart(2, '0')
    return `${mm}:${ss}`
  }

  const progressPercent = duration
    ? Math.min(100, Math.max(0, (currentTime / duration) * 100))
    : 0

  const volumePercent = Math.min(100, Math.max(0, (isMuted ? 0 : volume * 100)))

  return (
    <div className="fixed left-1/2 transform -translate-x-1/2 bottom-6 z-50 w-[92%] max-w-3xl">
      <div className="music-card flex items-center gap-4 px-4 py-3 rounded-3xl bg-white/6 backdrop-blur-xl border border-white/10 shadow-lg text-white relative transition-all duration-300">

        {/* PLAY BUTTON */}
        <button
          onClick={handleToggle}
          className="player-play-btn w-14 h-14 rounded-full flex items-center justify-center text-2xl bg-gradient-to-br from-purple-600 to-violet-500 shadow-md"
        >
          {isPlaying ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="5" y="4" width="4" height="16" fill="white" rx="1" />
              <rect x="15" y="4" width="4" height="16" fill="white" rx="1" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <path d="M5 3v18l15-9L5 3z" fill="white" />
            </svg>
          )}
        </button>

        {/* INFO + PROGRESS */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2">
            <div className="truncate">
              <div className="text-sm font-semibold">Musique</div>
              <div className="text-xs text-gray-300">
                {isPlaying ? 'En cours' : 'En pause'}
              </div>
            </div>
            <div className="text-xs text-gray-300">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          <input
            type="range"
            min={0}
            max={duration || 0}
            step={0.1}
            value={currentTime}
            onChange={onSeek}
            className="player-range"
            style={{
              background: `linear-gradient(90deg, rgba(147,51,234,0.95) 0%, rgba(99,102,241,0.95) 100%)`,
              backgroundSize: `${progressPercent}% 100%`,
              backgroundRepeat: "no-repeat"
            }}
          />
        </div>

        {/* VOLUME CONTAINER (ICONE + SLIDER) */}
        <div
          className="relative flex-shrink-0"
          onMouseEnter={() => setShowVol(true)}
          onMouseLeave={() => setShowVol(false)}
        >
          <div className="relative flex items-center">

            {/* BOUTON VOLUME */}
            <button
              onClick={toggleMute}
              className="w-10 h-10 rounded-full flex items-center justify-center bg-white/3 hover:bg-white/5 transition-colors z-20"
            >
              {isMuted ? (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M16 7v10a1 1 0 0 1-1.6.8L11 15H8a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1h3l3.4-3.8A1 1 0 0 1 16 7z"
                    fill="white"
                  />
                  <path
                    d="M19 5l-2 2m0 10 2 2"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M5 9v6h4l5 4V5L9 9H5z" fill="white" />
                </svg>
              )}
            </button>

            {/* SLIDER VOLUME */}
            <div
              className={`absolute top-1/2 left-full ml-3 transform -translate-y-1/2 w-40 transition-all duration-300 ${
                showVol ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={isMuted ? 0 : volume}
                onChange={(e) => {
                  onVolumeChange(e)
                  setIsMuted(false)
                }}
                className="player-range-mini"
                style={{
                  background: `linear-gradient(90deg, rgba(147,51,234,0.95) 0%, rgba(99,102,241,0.95) 100%)`,
                  backgroundSize: `${volumePercent}% 100%`,
                  backgroundRepeat: 'no-repeat'
                }}
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
