import markdownStyles from './markdown-styles.module.css'
import AdsenseHead from './../components/GoogleAd'
import AdsenseBottom from './../components/GoogleAdGrid'

type Props = {
  content: string
}

const PostBody = ({ content }: Props) => {
  return (
    <div className="max-w-2xl mx-auto">
      <AdsenseHead></AdsenseHead>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <AdsenseBottom></AdsenseBottom>
    </div>
  )
}

export default PostBody
