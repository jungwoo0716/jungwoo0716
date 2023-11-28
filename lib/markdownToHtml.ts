import { remark } from 'remark'
import html from 'remark-html'
import toc from 'remark-toc'
import gfm from 'remark-gfm'

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html, { sanitize: false }).use(toc).use(gfm).process(markdown)
  return result.toString()
}