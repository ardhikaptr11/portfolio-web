import { ThreeElements } from '@react-three/fiber';

declare global {
  namespace React {
    namespace JSX {
      interface IntrinsicElements extends ThreeElements {
        meshLineGeometry: any;
        meshLineMaterial: any;
      }
    }
  }
}

export {};
