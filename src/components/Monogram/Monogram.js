import { forwardRef, useId } from 'react';
import { classes } from 'utils/style';
import styles from './Monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;

  return (
    <svg
      aria-hidden
      className={classes(styles.monogram, className)}
      width="52"              // más grande que antes
      height="32"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <defs>
        {/* Círculo define la silueta del monograma */}
        <clipPath id={clipId}>
          <circle cx="50" cy="50" r="45" />
        </clipPath>
      </defs>

      {/* Relleno base del monograma, usando el color de texto actual */}
      <rect clipPath={`url(#${clipId})`} width="100%" height="100%" />

      {/* Highlight del template dentro de la misma silueta */}
      {highlight && (
        <g clipPath={`url(#${clipId})`}>
          <rect className={styles.highlight} width="100%" height="100%" />
        </g>
      )}

      {/* Letra A, en color fijo de fondo casi negro */}
      <g transform="translate(50, 50) skewX(-5) translate(-50, -50)">
        <path
          d="
            M 35 72 L 35 70 
            C 35 68 36 66 37 64 
            L 46 32 
            C 46.5 30 48 28 50 28 
            C 52 28 53.5 30 54 32 
            L 63 64 
            C 64 66 65 68 65 70 
            L 65 72
          "
          stroke="#050505"          // color de la A: fondo oscuro
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <line
          x1="40"
          y1="55"
          x2="60"
          y2="55"
          stroke="#050505"          // misma A en negro/fondo
          strokeWidth="8"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
});
