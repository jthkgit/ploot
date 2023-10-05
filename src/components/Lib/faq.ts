import uniqueId from '../../utils/uniqueId'

export interface Props {
  id: string
  title: string
  description: string
}

const faq: Array<Props> = [
  {
    id: uniqueId(),
    title: 'What is the Ploot app?',
    description:
      'A digital wallet app for parents to teach their children financial literacy through payments, rewards and interactive parental hub.',
  },
  {
    id: uniqueId(),
    title: 'Why the Ploot app?',
    description:
      'Children can learn how to save, manage and grow their wealth and more importantly, appreciate the value of money. Parents can instantly top-up their childrens allowances, remotely access their balances anytime and anywhere, purchase presents or book classes with vendors on a secure platform and learn how other parents are teaching their children.',
  },
  {
    id: uniqueId(),
    title: 'What kind of card will be issued?',
    description:
      'Each user will be issued with a debit card with spending limits depending on KYC checks.',
  },
  {
    id: uniqueId(),
    title: 'Is my money safe with Ploot?',
    description:
      'Yes, your money will be kept in an account held with a top financial institution managed by our licensed partner regulated by the Hong Kong Monetary Authority (HKMA).',
  },
  {
    id: uniqueId(),
    title: 'Who can create an account within the Ploot app?',
    description:
      'Only parents can create a main account within the Ploot app. Once the main account is created, parents can manually create sub-accounts for their children, helpers and caretakers. Children, helpers and caretakers will each receive a unique link / QR code to easily connect with the parents main account.',
  },
]

export default faq
