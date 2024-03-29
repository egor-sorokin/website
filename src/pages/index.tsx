import Head from 'next/head';
import { useState } from 'react';
import path from 'path';
import { promises as fs } from 'fs';

import Projects from '@/components/slides/Projects';
import Experiments from '@/components/slides/Experiments';
import About from '@/components/slides/About/About';
import Contact from '@/components/slides/Contact';
import Home from '@/components/slides/Home/Home';

function RootPage({ siteData }: any) {
  const { experiments, person, projects } = siteData;

  const [isOpenedAbout, setIsOpenedAbout] = useState<boolean>(false);

  const toggleAboutSection = () => {
    setIsOpenedAbout(!isOpenedAbout);
  };

  return (
    <>
      <Head>
        <title>Egor Sorokin</title>
        <meta name="description" content="Created by Egor Sorokin" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        {person && (
          <About
            person={person}
            isOpenedAbout={isOpenedAbout}
            toggleAboutSection={toggleAboutSection}
          />
        )}
        {person && (
          <Home person={person} toggleAboutSection={toggleAboutSection} />
        )}
        {projects && <Projects projects={projects} />}
        {experiments && <Experiments experiments={experiments} />}
        {person && <Contact person={person} />}
      </main>
    </>
  );
}

export async function getStaticProps() {
  const jsonDirectory = path.join(process.cwd(), 'src/data');
  const filenames = await fs.readdir(jsonDirectory);

  const contents = filenames.map(async filename => {
    const filePath = path.join(jsonDirectory, filename);
    const fileContents = await fs.readFile(filePath, 'utf8');

    return JSON.parse(fileContents);
  });

  return {
    props: {
      siteData: await Promise.all(contents).then(data => ({
        experiments: data[0].experiments,
        person: data[1].person,
        projects: data[2].projects,
      })),
    },
  };
}

export default RootPage;
