import uniqueId from '../../utils/uniqueId'

export interface Props {
  id: string
  name: string
  description: string
}

const Testimonial: Array<Props> = [
  {
    id: uniqueId(),
    name: '',
    description:
      '讓家長可以知道小朋友的平時消費，因爲孩子長大後會很少和家長溝通，特別一些瑣碎事情，而消費項目在某個程度上也反映出一個小朋友的自治自控能力',
  },
  {
    id: uniqueId(),
    name: '',
    description:
      '可以實時知道小朋友的消費情況，亦都可以預設銀碼，如果超出這個銀碼，作限制交易，這個係防止被欺騙金錢或者係過分消費金錢',
  },
  {
    id: uniqueId(),
    name: '',
    description:
      '鼓勵良好行為也間接令他們知道要付出才有收穫， 在整個過程當中使他們知道 得來的金錢 是不易的， 間接令他們明白要 知道自己消費的模式想要和 實際需要是兩回事',
  },
  {
    id: uniqueId(),
    name: '',
    description:
      '現在的衝動消費實在太容易，很多時不知自己的錢洗左去邊，小朋友更加易被誘惑，這app能幫手看紀錄',
  },
  {
    id: uniqueId(),
    name: '',
    description:
      'It is very interesting how the app can allow children to see their financial behavior and habits and be rewarded for exhibiting good behavior',
  },
  {
    id: uniqueId(),
    name: '',
    description:
      '可以自行設定獎勵行為及扣除積分機制，而獎勵的方法也很有彈性，如：增加每月零用錢、額外現金、儲蓄、存入定期存款）或禮物',
  },
  {
    id: uniqueId(),
    name: '',
    description: '減少紙張記錄，記錄可存放多年，孩子長大後可睇回年幼時獎勵記錄往事回憶',
  },
  {
    id: uniqueId(),
    name: '',
    description:
      '這個對於我現時年齡階層的小朋友是非常吸引的，有問答環節，也有一些小遊戲，令他們容易明白想要需要、和學習理財投資概念',
  },
  {
    id: uniqueId(),
    name: '',
    description: '小遊戲和教育短片最能吸引孩子的注意， 而且圖像吸引有趣 ，是很好的學習渠道',
  },
  {
    id: uniqueId(),
    name: '',
    description:
      'Compared to YouTube videos, the money missions would be better because they would have been filtered',
  },
  {
    id: uniqueId(),
    name: '',
    description: 'Can effectively manage family daily spending',
  },
  {
    id: uniqueId(),
    name: '',
    description: '避免家傭亂用僱主錢做私人野',
  },
  {
    id: uniqueId(),
    name: '',
    description:
      '此程式絕大部分都適宜現時的小朋友，可以避免亂用金錢也能學習理財知識，更免卻家長和小朋友的證明衝突，很吸引',
  },
  {
    id: uniqueId(),
    name: '',
    description:
      '可以管理到小朋友的金錢消費情況，當然是非常吸引。而且過數也能找回交易記錄，因為有時大人工作比較忙，有時會忘記重複給予零用錢的事',
  },
]
export default Testimonial
