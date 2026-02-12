import { ARTICLE_DATA } from "../../data/articleData";
import Article from "../../ui/Article";

export default function NewsCard() {

  return (
    <section className="flex justify-between flex-wrap sm:gap-0 gap-10">
      {ARTICLE_DATA.map((data, index) => {

        const correctIndex = (index + 1).toString().padStart(2, '0')

        return (
          <Article
            className="flex gap-5 w-sm"
            key={correctIndex}
          >
            <div>
              <img
                src={data.img.src}
                alt={data.img.alt}
                className="min-h-25 min-w-35 max-h-45 max-w-35"
              />
            </div>
            <div>
              <p>{correctIndex}</p>
              <h3>
                <a href={data.href}>{data.title}</a>
              </h3>
              <p>{data.description}</p>
            </div>
          </Article>
        )
      })}
    </section>
  )
}