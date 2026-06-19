import { Badge } from './Badge'
import { cn } from '../../hooks/useCn'

export function SectionHeader({ eyebrow, title, subtitle, centered = false }) {
  const safeTitle = typeof title === 'string' ? title : String(title ?? '')
  const safeEyebrow = typeof eyebrow === 'string' ? eyebrow : String(eyebrow ?? '')
  const safeSubtitle = typeof subtitle === 'string' ? subtitle : String(subtitle ?? '')
  const words = safeTitle.split(' ')
  return (
    <div className={cn('mb-16', centered && 'text-center')}>
      {safeEyebrow && (
        <div className={cn('mb-4', centered && 'flex justify-center')}>
          <Badge>{safeEyebrow}</Badge>
        </div>
      )}
      {safeTitle && (
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 leading-tight">
          {words.map((word, i) => (
            <span key={i}>
              {['Built', 'Master', 'Hear', 'Engineering', 'How', 'About'].includes(word) ? (
                <span className="gradient-text">{word}</span>
              ) : (
                word
              )}
              {i < words.length - 1 && ' '}
            </span>
          ))}
        </h2>
      )}
      {safeSubtitle && (
        <p className={cn('text-text-secondary max-w-2xl text-lg', centered && 'mx-auto')}>
          {safeSubtitle}
        </p>
      )}
      <div className="mt-4 h-1 w-20 bg-gradient-to-r from-accent-indigo to-accent-cyan rounded-full" />
    </div>
  )
}

SectionHeader.defaultProps = {
  eyebrow: '',
  title: '',
  subtitle: '',
  centered: false,
}