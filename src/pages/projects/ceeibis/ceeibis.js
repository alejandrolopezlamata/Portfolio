import backgroundSprLarge from 'assets/ceeibis.png';
import backgroundSprPlaceholder from 'assets/ceeibis-hero-placeholder.png';
import backgroundSpr from 'assets/ceeibis-hero.png';

// Portada principal
import imageSprLessonBuilderDarkLarge from 'assets/Ceeibisportada.png';
import imageSprLessonBuilderDarkPlaceholder from 'assets/Ceeibisportada.png';
import imageSprLessonBuilderDark from 'assets/Ceeibisportada.png';
import imageSprLessonBuilderLightLarge from 'assets/Ceeibisportada.png';
import imageSprLessonBuilderLightPlaceholder from 'assets/Ceeibisportada.png';
import imageSprLessonBuilderLight from 'assets/Ceeibisportada.png';

// Collage JEIB + Hackathon
import collage from 'assets/collage.png';

// AI course
import AIcourse from 'assets/AIcurso2.png';

// Exoesqueleto
import exoskeletonImage from '../../../assets/exoesqueleto.png';


// Burgos
import burgosImage from 'assets/Burgos.png';

import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './ceeibis.module.css';

const title = 'President of CEEIBIS UC3M';
const description =
  'CEEIBIS is the Spanish Council of Biomedical Engineering Students, a national network that connects local chapters from universities across Spain to promote collaboration, student representation, and initiatives around health technology.';

const roles = [];

export const Ceeibis = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Meta title={title} prefix="Projects" description={description} />
        <ProjectBackground
          className={styles.backgroundLogo}
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr.src} 1080w, ${backgroundSprLarge.src} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://ceeibis.com/officialweb/"
          roles={roles}
        />

        {/* Hero CEEIBIS */}
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={
                isDark
                  ? [imageSprLessonBuilderDark, imageSprLessonBuilderDarkLarge]
                  : [imageSprLessonBuilderLight, imageSprLessonBuilderLightLarge]
              }
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="CEEIBIS cover and activities."
            />
          </ProjectSectionContent>
        </ProjectSection>

        {/* What I did */}
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>What I did</ProjectSectionHeading>
            <ProjectSectionText>
              As president of the local CEEIBIS chapter at UC3M, I coordinated a team of over 50 students to design and run initiatives that brought together peers, professors, and industry partners around biomedical engineering.
            </ProjectSectionText>
            <ProjectSectionText>
              We organised hackathons, career events, and collaboration opportunities with other universities, focusing on innovation, professional development, and complementary training beyond the standard curriculum.
            </ProjectSectionText>
            <ProjectSectionText>
              This role let me turn a personal passion for biomedical engineering and community-building into concrete activities that made it easier for students to discover opportunities, connect with each other, and get closer to the field.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>

        {/* Hackathon & Employment fair con collage */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              raised
              srcSet={[collage]}
              placeholder={collage}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Collage of CEEIBIS hackathon and JEIB activities."
            />
            <ProjectTextRow>
              <ProjectSectionHeading>Hackathon & Employment fair</ProjectSectionHeading>
              <ProjectSectionText>
                One of the highlights of my time at CEEIBIS was organising a hackathon and an employment fair that brought together students, companies, and research groups around biomedical engineering challenges.
              </ProjectSectionText>
              <ProjectSectionText>
                These events helped students prototype ideas, showcase projects, and connect with recruiters and mentors, making it easier to turn interest in health technology into real opportunities.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        {/* AI Courses */}
        <ProjectSection>
          <ProjectSectionContent>
            <div className={styles.aiLayout}>
              <div className={styles.aiImageWrapper}>
                <Image
                  srcSet={[AIcourse]}
                  placeholder={AIcourse}
                  alt="AI study group based on Harvard CS50 materials."
                />
              </div>

              <div className={styles.aiText}>
                <ProjectSectionHeading>AI & Machine Learning Study Group</ProjectSectionHeading>
                <ProjectSectionText>
                  I organised an AI study group where CEEIBIS members followed Harvard CS50 materials together, turning advanced topics like machine learning and neural networks into something collaborative and approachable.
                </ProjectSectionText>
                <ProjectSectionText>
                  Beyond watching the lectures, we met regularly to discuss the intuition behind the algorithms, review problem sets, and connect the theory with real biomedical engineering applications.
                </ProjectSectionText>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Exoskeleton project */}
        <ProjectSection>
          <ProjectSectionContent>
            <div className={styles.exoskeletonLayout}>
              <div className={styles.exoskeletonText}>
                <ProjectSectionHeading>Student Exoskeleton Project</ProjectSectionHeading>
                <ProjectSectionText>
                  I led a hands-on exoskeleton project where students explored the full journey from concept to physical prototype, combining biomechanics, CAD and rapid prototyping.
                </ProjectSectionText>
                <ProjectSectionText>
                  I designed and delivered an Onshape CAD crash course, guided teams to study specific pathologies, and helped them translate clinical needs into mechanical requirements.
                </ProjectSectionText>
                <ProjectSectionText>
                  The most advanced designs were taken to the makerspace, where I mentored students through 3D-printing their first parts and understanding the constraints of real-world fabrication.
                </ProjectSectionText>
              </div>

              <div className={styles.polaroidStyle}>
                <Image
                  srcSet={[exoskeletonImage]}
                  placeholder={exoskeletonImage}
                  alt="Student exoskeleton design project."
                />
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* Burgos Training Days */}
        <ProjectSection>
          <ProjectSectionContent>
            <div className={styles.burgosLayout}>
              <div className={styles.burgosImageWrapper}>
                <Image
                  srcSet={[burgosImage]}
                  placeholder={burgosImage}
                  alt="CEEIBIS training days in Burgos."
                />
              </div>

              <div className={styles.burgosText}>
                <ProjectSectionHeading>CEEIBIS Training Days in Burgos</ProjectSectionHeading>
                <ProjectSectionText>
                  We organised a trip to Burgos to attend the CEEIBIS training days, representing UC3M within the national biomedical engineering student network.
                </ProjectSectionText>
                <ProjectSectionText>
                  During the event we joined several insightful talks and workshops on healthcare innovation, student leadership, and career development in biomedical engineering.
                </ProjectSectionText>
                <ProjectSectionText>
                  It was also a great opportunity to connect with students from universities all across Spain, exchange ideas, and strengthen collaborations between local chapters.
                </ProjectSectionText>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <Footer />
      </ProjectContainer>
    </Fragment>
  );
};
