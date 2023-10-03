import uniqueId from '../../utils/uniqueId'

export interface Props {
  id: string
  title: string
  description: string
  image: string
}

const essentials: Array<Props> = [
  {
    id: uniqueId(),
    title: 'Full Transparency',
    description: 'NO Overdraft Fees Minimum Balance Credit Checks Hidden Fees',
    image: '',
  },
  {
    id: uniqueId(),
    title: 'Real-time Notifications',
    description: 'Get notified of everything happening in the family.',
    image: '/svg/boxploot.svg',
  },
  {
    id: uniqueId(),
    title: 'Instant Transfers and Requests',
    description: 'Instantly top-up all accounts, anywhere, any time.',
    image: '/svg/Livello_1-2.svg',
  },
  {
    id: uniqueId(),
    title: 'Instant Card Lock',
    description: 'Lost Card? Instantly freeze cards remotely for safety.',
    image: '',
  },
  {
    id: uniqueId(),
    title: 'Recurring Allowance',
    description: 'Set it and forget it.',
    image: '',
  },
  {
    id: uniqueId(),
    title: 'Comprehensive Reports',
    description: 'Analyse, budget and save accordingly for the whole family.',
    image: '',
  },
]
export default essentials
