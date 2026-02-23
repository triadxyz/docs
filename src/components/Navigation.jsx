import Link from 'next/link'
import { useRouter } from 'next/router'
import clsx from 'clsx'

function NavLink({ href, active, children }) {
  return (
    <Link
      href={href}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'flex min-h-[36px] items-center rounded-xl px-3 text-sm transition-all duration-200',
        active
          ? 'bg-zinc-900/[0.06] font-medium text-zinc-900'
          : 'text-zinc-500 hover:bg-zinc-900/[0.03] hover:text-zinc-700'
      )}
    >
      <span className="truncate">{children}</span>
    </Link>
  )
}

function NavigationGroup({ group, className }) {
  let router = useRouter()

  if (group.links.length === 0) return null

  return (
    <li className={clsx('mt-6', className)}>
      {group.title && (
        <h2 className="mb-2 px-3 text-[10px] font-semibold uppercase tracking-[0.1em] text-zinc-400">
          {group.title}
        </h2>
      )}
      <ul role="list" className="space-y-0.5">
        {group.links.map((link) => (
          <li key={link.href}>
            <NavLink href={link.href} active={link.href === router.pathname}>
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </li>
  )
}

export const navigation = [
  {
    title: 'Explore',
    links: [
      { title: 'Introduction', href: '/' },
      { title: 'Triad Story', href: '/how-triad-works' },
      { title: 'Founders', href: '/founders' },
    ],
  },
  {
    title: 'Products',
    links: [
      { title: 'Pre-Market', href: '/pre-market' },
      { title: 'Prediction Markets', href: '/fees' },
      { title: 'Fast Markets', href: '/fast-markets' },
    ],
  },
  {
    title: 'Gamification',
    links: [{ title: 'Levels & Score', href: '/levels-score' }],
  },
  {
    title: 'Getting Started',
    links: [
      { title: 'First Access', href: '/first-access' },
      { title: 'Deposits & Withdrawals', href: '/currency' },
      { title: 'Affiliate Program', href: '/affiliate' },
    ],
  },
  {
    title: '',
    links: [{ title: 'Contact Us', href: '/contact' }],
  },
]

export function Navigation(props) {
  return (
    <nav {...props}>
      <ul role="list">
        {navigation.map((group, groupIndex) => (
          <NavigationGroup
            key={group.title || `group-${groupIndex}`}
            group={group}
            className={groupIndex === 0 && 'md:mt-0'}
          />
        ))}
      </ul>
    </nav>
  )
}
