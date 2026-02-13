import { ARTICLE_DATA } from "../../data/articleData";
import Article from "../../ui/Article";

export default function NewsCard() {

  return (
    // Change mt-12  to be a gap when site is finished
    <section className="grid xl:grid-cols-3 md:grid-cols-2 gap-10 mt-12">
      {ARTICLE_DATA.map((data, index) => {

        const correctIndex = (index + 1).toString().padStart(2, '0')

        return (
          <Article
            className="flex gap-5 md:max-w-sm"
            key={correctIndex}
          >
            <div className="w-1/2 ">
              <img
                src={data.img.src}
                alt={data.img.alt}
                className="w-full h-48  object-cover"
              />
            </div>
            <div className="flex flex-col sm:gap-3 gap-1.5 w-1/2">
              <p className="text-(--soft-red) font-extrabold text-3xl">{correctIndex}</p>
              <h3 className="text-(--dark-blue) hover:text-(--soft-red) font-bold sm:text-xl text-lg transition-colors duration-150">
                <a href={data.href}>
                  {data.title}
                </a>
              </h3>
              <p className="text-(--dark-gray-blue)">{data.description}</p>
            </div>
          </Article>
        )
      })}
    </section>
  )
}