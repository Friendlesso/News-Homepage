import { SIDEBAR_DATA } from "../../data/sidebarData";
import Article from "../../ui/Article";
import Aside from "../../ui/Aside";

export default function SideBar() {
 return (
  <>
    <Aside
      className="bg-(--dark-blue) p-6 flex flex-col gap-4 w-1/4 min-w-xs"
    >
      <h2 className="text-(--soft-orange) font-extrabold text-2xl">NEWS</h2>
      {SIDEBAR_DATA.map((data) => (
        <Article
          className="flex flex-col border-b-2 border-(--dark-gray-blue) pb-8 last:border-0 "
        >
          <h3 className="text-white hover:text-(--soft-orange) font-bold text-lg/[150%] tracking-wide transition-colors duration-300 ease-in-out">
            <a href={data.href}>
              {data.title}
            </a>
          </h3>
          <p className="text-(--dark-gray-blue)">{data.description}</p>
        </Article>
      ))}
    </Aside>
  </>
 )
}