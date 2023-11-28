// import { remark } from 'remark'
// import html from 'remark-html'
// import toc from 'remark-toc'
// import gfm from 'remark-gfm'

// export default async function markdownToHtml(markdown: string) {
//   const result = await remark().use(html, { sanitize: false }).use(toc).use(gfm).process(markdown)
//   return result.toString()
// }

import { remark } from 'remark'
import html from 'remark-html'
import toc from 'remark-toc'
import gfm from 'remark-gfm'
import cheerio from 'cheerio'; // cheerio 라이브러리 추가

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html, { sanitize: false }).use(toc).use(gfm).process(markdown);
  let htmlString = result.toString();

  // cheerio를 사용하여 HTML을 파싱
  const $ = cheerio.load(htmlString);

  // 테이블 요소에 Tailwind CSS 클래스 추가
  $('table').addClass('table'); // 예시: table 요소에 'table' 클래스 추가

  // 수정된 HTML 문자열 반환
  return $.html();
}