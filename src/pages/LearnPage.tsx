import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, ExternalLink, Tv2, X } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { company } from '@/data/company'

interface Video {
  id: string
  title: string
  thumbnail: string
  publishedAt: string
}

export default function LearnPage() {
  const [videos, setVideos] = useState<Video[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null)

  const closeModal = useCallback(() => setSelectedVideo(null), [])

  // Escape key to close modal
  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === 'Escape') closeModal()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [closeModal])

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedVideo ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selectedVideo])

  useEffect(() => {
    const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY
    const channelId = company.social.youtube.channelId

    if (!apiKey) {
      setLoading(false)
      return
    }

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&maxResults=12&order=date&type=video&key=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.items) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          setVideos(data.items.map((item: any) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            thumbnail:
              item.snippet.thumbnails?.high?.url ||
              item.snippet.thumbnails?.medium?.url,
            publishedAt: item.snippet.publishedAt,
          })))
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="pt-16">
      <section className="section-padding bg-dark-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Centro de Aprendizaje"
            subtitle="Contenido educativo para mantenerte actualizado en temas contables, legales y financieros"
          />

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="rounded-2xl overflow-hidden">
                  <div className="aspect-video bg-dark-800 animate-pulse rounded-xl mb-3" />
                  <div className="h-4 bg-dark-800 animate-pulse rounded w-3/4" />
                </div>
              ))}
            </div>
          ) : videos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, i) => (
                <motion.button
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="group text-left w-full"
                  onClick={() => setSelectedVideo(video.id)}
                >
                  <div className="relative aspect-video rounded-xl overflow-hidden mb-3">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-dark-950/20 group-hover:bg-dark-950/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-14 h-14 rounded-full bg-primary-500 flex items-center justify-center shadow-lg shadow-primary-500/30 opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
                        <Play size={22} className="text-dark-950 ml-1" fill="currentColor" />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-sm font-medium text-dark-300 group-hover:text-white transition-colors line-clamp-2 leading-snug">
                    {video.title}
                  </h3>
                </motion.button>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-20 h-20 rounded-full bg-dark-800 flex items-center justify-center mx-auto mb-5">
                <Tv2 size={36} className="text-dark-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Contenido próximamente
              </h3>
              <p className="text-dark-400 mb-8 max-w-sm mx-auto">
                Visita nuestro canal de YouTube para ver el contenido educativo disponible.
              </p>
              <a
                href={`https://www.youtube.com/channel/${company.social.youtube.channelId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-medium rounded-xl hover:bg-red-500 hover:shadow-lg hover:shadow-red-500/20 transition-all"
              >
                <ExternalLink size={18} />
                Visitar canal de YouTube
              </a>
            </motion.div>
          )}
        </div>
      </section>

      {/* Video modal with AnimatePresence */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark-950/95 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute -top-10 right-0 flex items-center gap-2 text-dark-400 hover:text-white transition-colors text-sm"
                aria-label="Cerrar video"
              >
                <X size={18} />
                <span>Cerrar (Esc)</span>
              </button>
              <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                  title="Video player"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
