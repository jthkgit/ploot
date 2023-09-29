import uniqueId from '../../utils/uniqueId'

export interface Props {
  id: string
  title: string
  description: string
}

const faq: Array<Props> = [
  {
    id: uniqueId(),
    title: 'What is ploot?',
    description: 'No Description',
  },
  {
    id: uniqueId(),
    title: 'How does it work?',
    description: 'No Description',
  },
  {
    id: uniqueId(),
    title: 'How much does it cost?',
    description: 'No Description',
  },
  {
    id: uniqueId(),
    title: 'Is my money safe with Ploot?',
    description: 'No Description',
  },
  {
    id: uniqueId(),
    title: 'Is Ploot a bank?',
    description: 'No Description',
  },
]

export default faq
