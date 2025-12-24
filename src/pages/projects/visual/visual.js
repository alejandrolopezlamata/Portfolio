import backgroundSprLarge from 'assets/urania-tablet-placeholder.jpg';
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
import mlp from 'assets/mlp.png';

// AI course
import AIcourse from 'assets/AIcurso2.png';

// Burgos
import burgosImage from 'assets/Burgos.png';

// Placeholder del vídeo (imagen)
import meddevice from '../../../assets/meddevice.JPG';
import uraniaVideoPlaceholder from '../../../assets/uraniavid-placeholder.png';

// NUEVO: vídeo Urania como asset estático
import uraniaVideo from 'assets/Uraniavid-trailer.mp4';

// NUEVO: assets para motion design (LuminAI)
import imageSprBackgroundVolcanismLarge from 'assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/spr-background-volcanism.jpg';
import videoSprMotionLarge from 'assets/LuminaiPromoV5.mp4';
import videoSprMotionPlaceholder from 'assets/spr-motion-placeholder.jpg';
import videoSprMotion from 'assets/LuminaiPromoV5.mp4';

import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import { ThemeProvider, useTheme } from 'components/ThemeProvider';
import { useAppContext } from 'hooks';
import { Link } from 'components/Link';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectSectionColumns,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment, useRef, useState, useEffect } from 'react';
import { media } from 'utils/style';
import styles from './visual.module.css';

const title = 'Visual impairment & accessibility';
const description =
  'Over the last few years I’ve been developing assistive technology for people with visual impairment, inspired by challenges I’ve seen very closely in my own family. What started as a high‑school research project soon grew into an award‑winning prototype, and later into a series of wearable concepts exploring how sensing, AI and thoughtful product design can surface the kind of social cues that are often easy to miss with reduced vision.';

const roles = [];

export const Visual = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };

  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0); // 0–100

  // Forzar autoplay razonable al montar (especialmente en producción)
  useEffect(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;

    video.muted = true;

    video
      .play()
      .then(() => {
        setIsPlaying(true);
      })
      .catch(() => {
        // Si el navegador bloquea el autoplay, reflejarlo en el estado
        setIsPlaying(false);
      });
  }, []);

  const handleToggleMute = () => {
    if (!videoRef.current) return;
    const nextMuted = !isMuted;
    videoRef.current.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const handleTogglePlay = () => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return;
    const dur = videoRef.current.duration || 0;
    const startAt = dur * 0.025; // 2.5% del vídeo
    videoRef.current.currentTime = startAt;
  };

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    const dur = videoRef.current.duration || 0;
    if (!dur) return;
    const pct = (videoRef.current.currentTime / dur) * 100;
    setProgress(pct);
  };

  const handleSeek = event => {
    if (!videoRef.current) return;
    const value = Number(event.target.value); // 0–100
    const dur = videoRef.current.duration || 0;
    const newTime = (value / 100) * dur;
    videoRef.current.currentTime = newTime;
    setProgress(value);
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

        {/* Sección Urania */}
        <ThemeProvider themeId="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            className={styles.videoSection}
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>How it started</ProjectSectionHeading>
                  <ProjectSectionText>
                    This early prototype focused on detecting everyday obstacles for people with visual impairment, tailored to the specific needs of a close family member and refined through surveys with patients. I later presented this work at the Urania III Young Research Congress in Tudela, where it received the prize for the best project in the Health category.
                  </ProjectSectionText>
                  <ProjectSectionText as="div">
                    <Link href="https://ainves.org/an520235762/">
                      Full text link
                    </Link>
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>

              <div className={styles.videoWrapper}>
                <Image
                  raised
                  className={styles.video}
                  srcSet={[
                    { src: uraniaVideoPlaceholder, width: 1280 },
                    { src: uraniaVideoPlaceholder, width: 2560 },
                  ]}
                  placeholder={uraniaVideoPlaceholder}
                  alt="Talk about visual impairment and accessibility."
                  sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
                />
                <video
                  ref={videoRef}
                  className={styles.videoElement}
                  src={uraniaVideo}
                  poster={uraniaVideoPlaceholder.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  onLoadedMetadata={handleLoadedMetadata}
                  onTimeUpdate={handleTimeUpdate}
                >
                  <track
                    kind="subtitles"
                    srcLang="en"
                    label="English"
                    src="/subtitles/uraniavid-en.vtt"
                    default
                  />
                </video>
                <button
                  type="button"
                  className={styles.playPauseButton}
                  onClick={handleTogglePlay}
                >
                  {isPlaying ? 'Pause' : 'Play'}
                </button>
                <button
                  type="button"
                  className={styles.muteButton}
                  onClick={handleToggleMute}
                >
                  {isMuted ? 'Unmute' : 'Mute'}
                </button>
                <div className={styles.progressWrapper}>
                  <input
                    className={styles.progressInput}
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={progress}
                    onInput={handleSeek}
                  />
                </div>

                <button
                  type="button"
                  className={styles.fullVideoButton}
                  onClick={() =>
                    window.open(
                      'https://www.youtube.com/watch?v=QYZiib_pzDk&t=5355s',
                      '_blank'
                    )
                  }
                >
                  Full video
                </button>
              </div>
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>

        {/* Sección Motion design LuminAI */}
        <ThemeProvider themeId="dark" data-invert>
          <ProjectSection
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={[
                  imageSprBackgroundVolcanism,
                  imageSprBackgroundVolcanismLarge,
                ]}
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <div className={styles.videoWrapper}>
                <Image
                  raised
                  className={styles.video}
                  srcSet={[
                    { src: videoSprMotion, width: 1280 },
                    { src: videoSprMotionLarge, width: 2560 },
                  ]}
                  placeholder={videoSprMotionPlaceholder}
                  alt="LuminAI motion design promo."
                  sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
                />
              </div>

              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <ProjectSectionHeading>LuminAI</ProjectSectionHeading>
                  <ProjectSectionText>
                    LuminAI is a team project developed as part of the Medical Device Design course at NTU, where we are exploring how wearable technology and AI can make social interaction more accessible for people with visual impairment. Working closely with my teammates, we intend to present the final prototype by May 2026.
                  </ProjectSectionText>
                  <ProjectSectionText as="div">
                    <Link href="">
                      Coming soon...
                    </Link>
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>

        {/* What I did + MLP */}
        <ProjectSection className={styles.whatIDidSection}>
          <ProjectSectionColumns>
            <ProjectSectionContent>
              <ProjectTextRow>
                <ProjectSectionHeading>What I did</ProjectSectionHeading>
                <ProjectSectionText>
                  Led the AI and software team, where I designed and implemented a real‑time gesture recognition pipeline that combined robust landmark extraction with a custom neural model to classify user gestures on the fly, even under changing lighting, distance, and camera position. I also contributed to the overall product design, user research, and prototyping efforts, as well as 3D rendering and animations.
                </ProjectSectionText>
              </ProjectTextRow>
            </ProjectSectionContent>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.mlpImage}
                srcSet={[mlp]}
                placeholder={mlp}
                alt="Med device design pipeline"
                sizes={`(max-width: ${media.mobile}px) 120vw, 80vw`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>

        {/* Group 09 en grande */}
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              className={styles.group9Image}
              srcSet={[meddevice]}
              placeholder={meddevice}
              alt="Medical Device design group photo."
              sizes="70vw"
            />
            <ProjectTextRow>
              <ProjectSectionText as="p">
                <span
                  style={{ fontSize: '0.9rem', color: 'var(--colorTextMuted)' }}
                >
                  Group 09 — Medical Device Design course, NTU Singapore.
                </span>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>

        <Footer />
      </ProjectContainer>
    </Fragment>
  );
};
