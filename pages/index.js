import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import Link from "next/link";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hello, human! Welcome to my online blog, where technology, creativity, and a touch of inspiration converge.
          I'm a web developer with a background in graphic design, and I'm thrilled to share my passions with you.
        </p>
        <p>
          Beyond coding, I have a deep love for the written word, the great outdoors, fashion, drawing, and even the
          captivating world of biomedical engineering. In this blog, you'll find a diverse range of content, from
          introspective poetry and reflective musings to practical tech advice drawn from my own experiences as a
          cybernaut.
        </p>
        <p>
          As a proud member of the World Scout Movement, teamwork, leadership and volunteering are close to my heart.
          They serve as the driving forces behind my work, as I strive to contribute to making our world a better place.
          Remembering the wise words of Baden Powell, "Leave this world a little better than you found it " I aim to
          embody these ideals in all that I do.
        </p>
        <p>
          So join me on this extraordinary journey of exploration and growth. Together, let's uncover the beauty of
          technology, indulge in our creative passions, and work towards a brighter future. As we embark on this
          adventure, may you find inspiration, knowledge, and a renewed sense of purpose.
        </p>
      </section>

      {/* Add this <section> tag below the existing <section> tag */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
