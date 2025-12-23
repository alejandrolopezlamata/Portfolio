// src/pages/projects/otros/otros.js
import backgroundSprLarge from 'assets/aorta.png';
import backgroundSprPlaceholder from 'assets/aortaV1.png';
import backgroundSpr from 'assets/aortaV1.png';
import aorta from 'assets/aorta2.png';
import peristaltic from 'assets/peristaltic.png';
import peristaltic2 from 'assets/peristaltic2.png';
import mn1 from 'assets/mn1.png';
import mn2 from 'assets/mn2.png';
import cad1 from 'assets/cad1.png';
import cad2 from 'assets/cad2.png';

import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import { Link } from 'components/Link';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
} from 'layouts/Project';
import { Fragment } from 'react';
import styles from './otros.module.css';

const title = 'Other projects in Biomedical Engineering';
const description =
  'Here, I showcase some additional projects and initiatives I have been involved in within the field of biomedical engineering. This section includes exploratory work, side projects, and collaborations that complement my main research and design portfolio.';

const roles = [];

export const Otros = () => {
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
          roles={roles}
        />

        {/* 1) CAD – DOS IMÁGENES IZQUIERDA / TEXTO DERECHA (UNA DEBAJO DE OTRA) */}
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectSectionHeading>CAD Designs and Renders</ProjectSectionHeading>

            <div className={styles.rowLayout}>
              <div className={styles.colImage}>
                <div className={styles.peristalticImages}>
                  <div className={styles.peristalticItem}>
                    <Image
                      srcSet={[cad1]}
                      placeholder={cad1}
                      alt="Biomedical CAD model and render, view 1."
                      sizes="(max-width: 600px) 100vw, 400px"
                    />
                  </div>
                  <div className={styles.peristalticItem}>
                    <Image
                      srcSet={[cad2]}
                      placeholder={cad2}
                      alt="Biomedical CAD model and render, view 2."
                      sizes="(max-width: 600px) 100vw, 400px"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.colText}>
                <ProjectSectionText>
                  This gallery gathers a selection of CAD models and renders created for different biomedical projects, from vascular phantoms and microneedle arrays to components for wearable devices and exoskeletons.
                </ProjectSectionText>
                <ProjectSectionText>
                  The focus is on translating clinical or biomechanical requirements into clean parametric geometries, ensuring that parts are manufacturable while remaining visually clear for communication and documentation purposes.
                </ProjectSectionText>
                <ProjectSectionText>
                  These designs have also been used to generate visualisations and animations for presentations, reports and project pitches in both academic and industry-oriented contexts.
                </ProjectSectionText>

                <ProjectSectionText as="div">
                  <Link href="/CAD1.pdf">
                    View CAD project report
                  </Link>
                </ProjectSectionText>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* 2) Fluid Mechanics con fondo negro + degradado */}
        <ProjectSection padding="top" className={styles.fluidSection}>
          <ProjectSectionContent>
            <ProjectSectionHeading>Fluid Mechanics</ProjectSectionHeading>
            <ProjectSectionText>
              Within this section I explore how computational fluid dynamics can be used to study cardiovascular and reproductive biomechanics, from aortic dissections to intra-uterine peristaltic transport.
            </ProjectSectionText>

            {/* 2.1) TBAD – TEXTO IZQUIERDA / IMAGEN DERECHA */}
            <div className={styles.projectSubsection}>
              <h3 className={styles.subsectionTitle}>TBAD Computational Modelling</h3>

              <div className={styles.rowLayout}>
                <div className={styles.colText}>
                  <ProjectSectionText>
                    In this project I explored computational modelling of Type B Aortic Dissection (TBAD), using idealised aortic geometries and simplified flow assumptions to study how different tear configurations affect local haemodynamics.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    The focus was on how lumen morphology, false lumen pressurisation and boundary conditions can influence wall shear stress patterns and flow distribution along the dissected segment.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    This work helped me connect theoretical fluid dynamics with real vascular pathology, and served as a sandbox to test ideas that could later be translated into more patient-specific simulations.
                  </ProjectSectionText>

                  <ProjectSectionText as="div">
                    <Link href="">
                      Coming soon...
                    </Link>
                  </ProjectSectionText>
                </div>

                <div className={styles.colImage}>
                  <Image
                    srcSet={[aorta]}
                    placeholder={aorta}
                    alt="Illustrative aortic model used for TBAD computational simulations."
                    sizes="(max-width: 600px) 100vw, 400px"
                  />
                </div>
              </div>
            </div>

            {/* 2.2) UTERUS – DOS IMÁGENES EN LA COLUMNA IZQUIERDA */}
            <div className={styles.projectSubsection}>
              <h3 className={styles.subsectionTitle}>Peristaltic Motion of the Uterus</h3>

              <div className={styles.rowLayout}>
                <div className={styles.colImage}>
                  <div className={styles.peristalticImages}>
                    <div className={styles.peristalticItem}>
                      <Image
                        srcSet={[peristaltic]}
                        placeholder={peristaltic}
                        alt="Conceptual peristaltic flow model for uterine fluid mechanics."
                        sizes="(max-width: 600px) 100vw, 400px"
                      />
                    </div>
                    <div className={styles.peristalticItem}>
                      <Image
                        srcSet={[peristaltic2]}
                        placeholder={peristaltic2}
                        alt="Complementary schematic used to study uterine peristaltic flow."
                        sizes="(max-width: 600px) 100vw, 400px"
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.colText}>
                  <ProjectSectionText>
                    This study looks at how cyclic myometrial contractions generate peristaltic flow inside the uterine cavity, shaping intra-uterine fluid transport during different phases of the menstrual cycle.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    Using simplified channel-like geometries and wall-driven wave patterns, the project investigates how contraction frequency, direction and amplitude could influence particle trajectories relevant to embryo and sperm transport.
                  </ProjectSectionText>
                  <ProjectSectionText>
                    Beyond the biological context, it serves as a controlled example of peristaltic flow, linking classic fluid mechanics problems with realistic reproductive physiology.
                  </ProjectSectionText>

                  <ProjectSectionText as="div">
                    <Link href="/peristaltic.pdf">
                      Download pdf
                    </Link>
                  </ProjectSectionText>
                </div>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        {/* 3) MICRONEEDLE – TEXTO IZQUIERDA / DOS IMÁGENES DERECHA (UNA DEBAJO DE OTRA) */}
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectSectionHeading>Microneedle Biosensor for Endometriosis</ProjectSectionHeading>

            <div className={styles.rowLayout}>
              <div className={styles.colText}>
                <ProjectSectionText>
                  This concept explores a microneedle-based biosensor aimed at minimally invasive monitoring of biomarkers associated with endometriosis, leveraging interstitial fluid as an accessible analytical matrix.
                </ProjectSectionText>
                <ProjectSectionText>
                  The design combines a microneedle array for gentle sampling with an integrated electrochemical sensing layer, inspired by recent developments in wearable and implantable biosensors.
                </ProjectSectionText>
                <ProjectSectionText>
                  Beyond the sensor itself, the project also considers how continuous data streams could support earlier diagnosis, symptom tracking and personalised treatment strategies.
                </ProjectSectionText>

                <ProjectSectionText as="div">
                  <Link href="/EMplexer.pdf">
                    Open EMplexer project PDF
                  </Link>
                </ProjectSectionText>
              </div>

              <div className={styles.colImage}>
                <div className={styles.peristalticImages}>
                  <div className={styles.peristalticItem}>
                    <Image
                      srcSet={[mn1]}
                      placeholder={mn1}
                      alt="Microneedle biosensor concept render, view 1."
                      sizes="(max-width: 600px) 100vw, 400px"
                    />
                  </div>
                  <div className={styles.peristalticItem}>
                    <Image
                      srcSet={[mn2]}
                      placeholder={mn2}
                      alt="Microneedle biosensor concept render, view 2."
                      sizes="(max-width: 600px) 100vw, 400px"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <Footer />
      </ProjectContainer>
    </Fragment>
  );
};
