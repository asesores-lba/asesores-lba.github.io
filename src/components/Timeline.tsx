import type { TimelineEntry } from '@/data/team'

interface TimelineProps {
  entries: TimelineEntry[]
}

export default function Timeline({ entries }: TimelineProps) {
  return (
    <div className="relative pl-6 border-l-2 border-dark-200 space-y-6">
      {entries.map((entry, i) => (
        <div key={`${entry.year}-${i}`} className="relative">
          {/* Dot */}
          <div className="absolute -left-[25px] top-1 w-3 h-3 rounded-full bg-primary-500 border-2 border-white" />

          <div>
            <span className="inline-block px-2.5 py-0.5 bg-primary-500/10 text-primary-700 rounded-md text-xs font-semibold mb-1.5">
              {entry.year}
            </span>
            <h4 className="text-sm font-semibold text-dark-900">
              {entry.title}
            </h4>
            {(entry.institution || entry.location) && (
              <p className="text-xs text-dark-500 mt-0.5">
                {entry.institution}
                {entry.location && ` - ${entry.location}`}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
