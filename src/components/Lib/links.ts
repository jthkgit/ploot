import uniqueId from '../../utils/uniqueId'

export interface Props {
  id: string
  label: string
  href: string
}

const links: Array<Props> = [
  {
    id: uniqueId(),
    href: '#kids-and-teens',
    label: 'Kids & Teens',
  },
  {
    id: uniqueId(),
    href: '#parents',
    label: 'Parents',
  },
  {
    id: uniqueId(),
    href: 'learn',
    label: 'Learn',
  },
]

export default links
