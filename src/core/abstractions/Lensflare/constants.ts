import { SeedProps } from "."

export const TEXTURE_PATH =
  'https://raw.githubusercontent.com/andretchen0/tresjs_assets/' +
  'b1bc3780de73a9328a530767c9a7f4cbab060396/textures/lensflare/'

export const circle = `${TEXTURE_PATH}circle.png`
export const circleBlur = `${TEXTURE_PATH}cirlceBlur.png`
export const circleRainbow = `${TEXTURE_PATH}circleRainbow.png`
export const line = `${TEXTURE_PATH}line.png`
export const poly6 = `${TEXTURE_PATH}poly6.png`
export const polyStroke6 = `${TEXTURE_PATH}polyStroke6.png`
export const rays6 = `${TEXTURE_PATH}rays6.png`
export const ring = `${TEXTURE_PATH}ring.png`
export const starThin6 = `${TEXTURE_PATH}starThin6.png`

// NOTE:
// Flare elements are divided into back, oversize, body, front.
// They are arranged as such, relative to the light source and camera:
//
// | distance < 0 | distance == 0  | distance > 0 | camera |
// | ------------ | -------------- | ------------ | ------ |
// |              |     light      |              |        |
// | back         | body, oversize | front        |        |

export const oversize: SeedProps = {
  texture: [line, ring],
  color: ['white'],
  distance: [0, 0],
  size: [750, 1024],
  length: [0, 2],
}

export const bodyRequired0: SeedProps = {
  texture: [circleBlur],
  color: ['white'],
  distance: [0, 0],
  size: [180, 512],
  length: [1, 1],
}

export const bodyRequired1:SeedProps = {
  texture: [rays6],
  color: ['white'],
  distance: [0, 0],
  size: [180, 512],
  length: [1, 1],
}

export const bodyOptional: SeedProps = {
  texture: [circle, circleRainbow, ring, starThin6],
  color: ['white'],
  distance: [0, 0],
  size: [180, 512],
  length: [2, 3],
}

export const [darkPurple, darkBlue] = [0x38235f, 0x02055a]

export const front: SeedProps = {
  texture : [circleBlur, circle, ring, poly6, polyStroke6],
  color: ['dimgray', 'gray', 'darkgray', darkPurple, darkBlue],
  distance: [0.5, 2.5],
  size: [20, 180],
  length: [5, 21]
}

export const back: SeedProps = {
  texture : [circleBlur, circle, ring, poly6, polyStroke6],
  color: ['dimgray', 'gray', 'darkgray', darkPurple, darkBlue],
  distance: [-0.6, -0.1],
  size: [180, 360],
  length: [0, 5]
}

export const defaultSeedProps: SeedProps[] = [oversize, bodyRequired0, bodyRequired1, bodyOptional, front, back];