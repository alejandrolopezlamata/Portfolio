import gamestackTexture2Large from 'assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from 'assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from 'assets/gamestack-list.jpg';
import gamestackTextureLarge from 'assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from 'assets/gamestack-login-placeholder.jpg';
import gamestackTexture from 'assets/gamestack-login.jpg';
import sliceTextureLarge from 'assets/portada3.png';
import sliceTexturePlaceholder from 'assets/portada3.png';
import sliceTexture from 'assets/portada3.png';
import sprTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from 'assets/spr-lesson-builder-dark.jpg';
import { Footer } from 'components/Footer';
import { Meta } from 'components/Meta';
import { Intro } from 'layouts/Home/Intro';
import { Profile } from 'layouts/Home/Profile';
import { ProjectSummary } from 'layouts/Home/ProjectSummary';
import { useEffect, useRef, useState } from 'react';
import styles from './Home.module.css';
import ceeibisTextureLarge from 'assets/ceeibis-laptop-large.jpg';
import ceeibisTexturePlaceholder from 'assets/ceeibis-laptop-placeholder.jpg';
import ceeibisTexture from 'assets/ceeibis-laptop.jpg';
import uraniaTextureLarge from 'assets/urania-tablet-large.jpg';
import uraniaTexturePlaceholder from 'assets/urania-tablet-placeholder.jpg';
import uraniaTexture from 'assets/urania-tablet.jpg';

const disciplines = [
  'Field engineer',
  'Medical devices',
  'AI/ML',
  'Biosensors',
];

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Meta
        title="Biomedical Engineer"
        description="Portfolio of Alejandro López Lamata — a biomedical engineering student at UC3M and NTU Singapore, focused on biosensors, wearable devices and data-driven health applications."
      />
      <Intro
        id="intro"
        sectionRef={intro}
        disciplines={disciplines}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="Leadership, initiative & community"
        description={
          <>
            President of UC3M&apos;s group in the council of biomedical engineering
            students (CEEIBIS).
            <br />
            <br />
            Coordinating with other students across Spain and organizing
            national and international academic and networking events.
          </>
        }
        buttonLink="/projects/ceeibis"
        buttonText="Discover more"
        model={{
          type: 'laptop',
          alt: 'CEEIBIS UC3M website on a laptop screen',
          textures: [
            {
              srcSet: [ceeibisTexture, ceeibisTextureLarge],
              placeholder: ceeibisTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Visual imparement & accesibility"
        description="Design and development of devices focused on improving accesibility for visually impaired users."
        buttonText="Continue reading"
        buttonLink="/projects/visual"
        model={{
          type: 'luminai',
          alt: 'LuminAI headset and Urania paper',
          textures: [
            {
              srcSet: [uraniaTexture, uraniaTextureLarge],
              placeholder: uraniaTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Other biomedical projects"
        description="Physical simulations, cardiovascular engineering, microneedle-based biosensors and more..."
        buttonText="View project"
        buttonLink="/projects/otros"
        model={{
          type: 'laptop',
          alt: 'Annotating a biomedical image in the Slice app',
          textures: [
            {
              srcSet: [sliceTexture, sliceTextureLarge],
              placeholder: sliceTexturePlaceholder,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
