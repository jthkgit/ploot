import uniqueId from '../../utils/uniqueId'

export interface Props {
  id: string
  title: string
  description: string
}

const NewAndBlog: Array<Props> = [
  {
    id: uniqueId(),
    title: 'A LETTER FROM OUR CEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eu porttitor sem. Duis congue et mauris ut tincidunt. Curabitur dapibus, urna quis sagittis elementum, ante eros tincidunt justo, eu rutrum arcu est in leo. Suspendisse ex metus, luctus ac pulvinar in, rutrum a mauris. Duis euismod, dolor id laoreet suscipit, magna mauris ultricies tortor, id viverra neque sem et orci. Aliquam nisl massa, sodales eu orci non, porta fringilla mi. Sed sed aliquam quam. Proin in enim sit amet arcu pellentesque ultricies id nec sapien.',
  },
  {
    id: uniqueId(),
    title: 'WHAT IS MONEY?',
    description: 'No Comment',
  },
]
export default NewAndBlog
