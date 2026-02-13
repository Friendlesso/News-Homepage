import { SIDEBAR_DATA } from "../../data/sidebarData";
import Article from "../../ui/Article";
import Aside from "../../ui/Aside";
import Link from "../../ui/Link";

export default function SideBar() {
 return (
  <>
    <Aside
      className="bg-(--dark-blue) p-6 flex flex-col gap-4 w-full"
    >
      <h2 className="text-(--soft-orange) font-extrabold text-2xl">NEWS</h2>
      {SIDEBAR_DATA.map((data) => (
        <Article
          key={data.title}
          className="flex flex-col border-b-2 border-(--dark-gray-blue) pb-8 last:border-0 "
        >
          <h3 className="text-white hover:text-(--soft-orange) font-bold text-lg/[150%] tracking-wide transition-colors duration-300 ease-in-out">
            <Link linkTo={data.href} label={data.title} />
          </h3>
          <p className="text-(--dark-gray-blue)">{data.description}</p>
        </Article>
      ))}
    </Aside>
  </>
 )
}