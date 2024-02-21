import type {Node} from 'unist';
import type {Code, Html} from 'mdast';
import {visit} from 'unist-util-visit';
import {parse} from 'yaml';
import tinyhtml from '@triskel/tinyhtml';
import {html} from './utils.js';

const langMap: Record<'publishDate', Record<string, string>> = {
  publishDate: {
    book: '出版时间',
    music: '发行时间',
    movie: '上映时间',
  },
};

export default function remarkMediaCard() {
  return function (syntaxTree: Node) {
    visit(syntaxTree, 'code', (node: Code) => {
      const {lang, value} = node;
      if (!value || lang !== 'media-card') {
        return;
      }

      try {
        const data = parse(value) as ICardMeta;
        if (typeof data !== 'object' || !data) {
          return;
        }

        const {
          url,
          cover,
          author,
          artist,
          director,
          rate,
          title,
          publishDate,
          type,
          actors,
          introduction,
          width,
          ...rest
        } = data;
        if (!type || !cover || !title) {
          return;
        }

        const cardItems: string[] = [`<strong>${title}</strong>`];
        if (author && type === 'book') {
          cardItems.push(`作者：${author}`);
        }

        if (artist && type === 'music') {
          cardItems.push(`艺术家：${artist}`);
        }

        if (director && type === 'movie') {
          cardItems.push(`导演：${director}`);
        }

        if (actors && type === 'movie') {
          cardItems.push(`主演：${actors}`);
        }

        if (langMap.publishDate[type] && publishDate) {
          cardItems.push(`${langMap.publishDate[type]}：${publishDate}`);
        }

        if (rate) {
          cardItems.push(`评分：${rate}`);
        }

        for (const [key, value] of Object.entries(rest)) {
          cardItems.push(`${key}：${value}`);
        }

        (node as unknown as Html).type = 'html';
        node.value = html`
          <div class="media-card-wrap" style="margin: 0 auto;">
            ${url ? `<a href="${url}" targer="_blank">` : ''}
            <div
              class="media-card"
              style="
                max-width: 100%;
                ${width ? `width: ${width}px;` : ''}
                display:flex;
                flex-direction: column;
                margin:30px 20px;
                padding: 15px;
                border-radius: 15px;
                position: relative;
                overflow: hidden;
                text-decoration: none;
              "
            >
              <div
                class="media-card-bg"
                style="
                width: 110%;
                height: 110%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: -1;
                border-radius: 15px;
                background-color: antiquewhite;
                background-image: url(${cover});
                background-size: cover;
                background-position: center;
                background-repeat: no-repeat;
                filter: blur(15px) brightness(0.6);
              "
              ></div>
              <div
                class="media-card-main"
                style="
                display: flex;
                flex-direction: column;
                font-family: 'Courier New', Courier, monospace;
                color: antiquewhite;
              "
              >
                <div
                  class="media-card-meta"
                  style="
                  display: flex;
                  align-items: center;
                  gap: 12px;
                "
                >
                  <img
                    class="media-card-cover"
                    src="${cover}"
                    style="
                      height: 130px;
                      width: 80px;
                      object-fit: cover;
                      object-position: center;
                  "
                  />
                  <div
                    style="
                      display: flex;
                      flex-direction: column;
                      gap: 6px;
                      line-height: 1.4;
                  "
                  >
                    ${cardItems
                      .map((string_) => `<div>${string_}</div>`)
                      .join('')}
                  </div>
                </div>
                ${introduction
                  ? html`<div
                      class="media-card-introduction"
                      style="
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: pre-line;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 3;
                        display: -webkit-box;
                  "
                    >
                      ${introduction}
                    </div>`
                  : ''}
              </div>
            </div>
            ${url ? '</a>' : ''}
          </div>
        `;
        node.value = tinyhtml(node.value);
      } catch (error) {
        console.log(error);
      }
    });
  };
}