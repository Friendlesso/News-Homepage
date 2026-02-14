import FeaturedArticleImg from '../../assets/images/image-web-3-desktop.jpg';
import Article from "../../ui/Article";
import Link from "../../ui/Link";

export default function FeaturedArticle() {
  return (
    <Article className="grid lg:grid-cols-2 h-fit lg:col-span-2">
      <div className='col-span-2'>
        <img
          className='w-full md:h-70 object-cover'
          src={FeaturedArticleImg}
          loading='lazy'
          alt="3D Illustraion"
        />
      </div>
      <div className="flex md:flex-row flex-col gap-10 col-span-2 mt-5 row-span-2">
        <h1 className='text-(--dark-blue) font-extrabold xl:text-5xl 2xl:text-6xl text-4xl'>The Bright Future of Web 3.0?</h1>
        <div className="flex flex-col gap-6">
          <p className="text-(--dark-gray-blue)">We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
          <Link
            linkTo="/"
            label="READ MORE"
            className="bg-(--soft-red) hover:bg-(--dark-blue) hover:text-white p-5 font-bold tracking-wider text-center w-1/2 transition-colors duration-200 ease-in-out"
          />
        </div>
      </div>
    </Article>
  )
}