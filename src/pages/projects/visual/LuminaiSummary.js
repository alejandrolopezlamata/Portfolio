import projectKatakana from 'assets/katakana-project.svg?url';
import luminaiGlyphs from 'assets/LuminaiGlifo.svg?url';

import { Button } from 'components/Button';
import { Divider } from 'components/Divider';
import { deviceModels } from 'components/Model/deviceModels';
import { Section } from 'components/Section';
import { useTheme } from 'components/ThemeProvider';
import { Transition } from 'components/Transition';
import { useWindowSize } from 'hooks';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { cssProps, media } from 'utils/style';
import {
  ProjectSectionHeading,
  ProjectSectionText,
} from 'layouts/Project';
import styles from './LuminaiSummary.module.css';

const Model = dynamic(() => import('components/Model').then(mod => mod.Model));

export const LuminaiSummary = ({
  id,
  visible: sectionVisible,
  sectionRef,
  index,
  title = 'LuminAI',
  description = 'LuminAI is an experimental wearable headset designed to make social interaction more accessible for people with visual impairment. It combines depth sensing, computer vision and audio feedback to surface cues like faces, gestures and proximity that are easy to miss with reduced vision.',
  model,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const theme = useTheme();
  const { width } = useWindowSize();
  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;
  const svgOpacity = theme.themeId === 'light' ? 0.2 : 0.3;
  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;

  const renderKatakana = (device, visible) => (
    <svg
      aria-hidden="true"
      width="750"
      height="137"
      viewBox="0 0 750 137"
      data-visible={visible}
      data-light={theme.themeId === 'light'}
      style={cssProps({ opacity: svgOpacity })}
      className={styles.svg}
      data-device={device}
    >
      <use href={`${projectKatakana}#katakana-project`} />
    </svg>
  );

  const renderLuminaiGlyphs = (device, visible) => (
    <svg
      aria-hidden="true"
      className={styles.luminaiGlyphs}
      viewBox="0 0 750 137"
      data-visible={visible}
      data-light={theme.themeId === 'light'}
      style={cssProps({ opacity: svgOpacity })}
      data-device={device}
      preserveAspectRatio="xMidYMid slice"
    >
      <use href={`${luminaiGlyphs}#luminaiGris`} />
    </svg>
  );

  const renderDetails = visible => (
    <div className={styles.details}>
      <ProjectSectionHeading
        className={styles.title}
        data-visible={visible}
        id={titleId}
      >
        {title}
      </ProjectSectionHeading>
      <ProjectSectionText
        className={styles.description}
        data-visible={visible}
      >
        {description}
      </ProjectSectionText>
      {buttonText && buttonLink && (
        <div className={styles.button} data-visible={visible}>
          <Button iconHoverShift href={buttonLink} iconEnd="arrowRight">
            {buttonText}
          </Button>
        </div>
      )}
    </div>
  );

  const renderPreview = visible => (
    <div className={styles.preview}>
      {model.type === 'laptop' && (
        <>
          {renderKatakana('laptop', visible)}
          <div className={styles.model} data-device="laptop">
            <Model
              alt={model.alt}
              cameraPosition={{ x: 0, y: 0, z: 8 }}
              showDelay={700}
              show={visible}
              models={[
                {
                  ...deviceModels.laptop,
                  texture: {
                    ...model.textures[0],
                    sizes: laptopSizes,
                  },
                },
              ]}
            />
          </div>
        </>
      )}

      {model.type === 'phone' && (
        <>
          {renderKatakana('phone', visible)}
          <div className={styles.model} data-device="phone">
            <Model
              alt={model.alt}
              cameraPosition={{ x: 0, y: 0, z: 11.5 }}
              showDelay={300}
              show={visible}
              models={[
                {
                  ...deviceModels.phone,
                  position: { x: -0.6, y: 1.1, z: 0 },
                  texture: {
                    ...model.textures[0],
                    sizes: phoneSizes,
                  },
                },
                {
                  ...deviceModels.phone,
                  position: { x: 0.6, y: -0.5, z: 0.3 },
                  texture: {
                    ...model.textures[1],
                    sizes: phoneSizes,
                  },
                },
              ]}
            />
          </div>
        </>
      )}

      {model.type === 'luminai' && (
        <>
          {renderLuminaiGlyphs('phone', visible)}
          <div className={styles.model} data-device="phone">
            <Model
              alt={model.alt}
              cameraPosition={{ x: 0, y: 0, z: 8 }}
              showDelay={300}
              show={visible}
              models={[
                {
                  ...deviceModels.luminai,
                  position: { x: 0, y: -5, z: -1 },
                  scale: 18,
                },
              ]}
            />
          </div>
        </>
      )}
    </div>
  );

  return (
    <Section
      className={styles.summary}
      data-alternate={alternate}
      data-first={index === 1}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      aria-labelledby={titleId}
      ref={sectionRef}
      id={id}
      tabIndex={-1}
      {...rest}
    >
      <div className={styles.content}>
        <Transition in={sectionVisible || focused}>
          {visible => (
            <>
              {!alternate && !isMobile && (
                <>
                  {renderPreview(visible)}
                  {renderDetails(visible)}
                </>
              )}
              {(alternate || isMobile) && (
                <>
                  {renderPreview(visible)}
                  {renderDetails(visible)}
                </>
              )}
            </>
          )}
        </Transition>
      </div>
    </Section>
  );
};
