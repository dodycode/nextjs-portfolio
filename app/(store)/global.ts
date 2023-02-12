import { atom } from 'nanostores';

export const isHovering = atom<Boolean>(false);

export function toggleHover() {
  isHovering.set(!isHovering.get());
}