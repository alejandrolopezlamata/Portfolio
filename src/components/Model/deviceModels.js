import iphone11 from 'assets/iphone-11.glb';
import macbookPro from 'assets/macbook-pro.glb';
import luminaiDevice from 'assets/luminai-device.glb';
import ipadPro from 'assets/apple_ipad_pro.glb';
import luminaiGris from 'assets/V2gris.glb';
export const ModelAnimationType = {
  SpringUp: 'spring-up',
  LaptopOpen: 'laptop-open',
};

export const deviceModels = {
  phone: {
    url: iphone11,
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp,
  },
  laptop: {
    url: macbookPro,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.LaptopOpen,
  },
  luminai: {
    url: luminaiDevice,
    width: 374,
    height: 512,
    position: { x: 0, y: -3, z: 0 }, // cascos centrados un poco arriba
    scale: 13.5,                        // antes 13.5, ahora un valor normal
    animation: ModelAnimationType.SpringUp,
  },
  tablet: {
    url: ipadPro,
    width: 1024,
    height: 1366,
    position: { x: -0.1, y: -2, z: -3 }, // detrás de los cascos
    scale: 0.072,                            // ajusta 0.6–1 según lo veas
    animation: ModelAnimationType.SpringUp,
  },
  luminaiGris: {
    url: luminaiGris,
    width: 374,
    height: 512,
    position: { x: 0, y: -3, z: 0 }, // cascos centrados un poco arriba
    scale: 13.5,                        // antes 13.5, ahora un valor normal
    animation: ModelAnimationType.SpringUp,
  },
};
