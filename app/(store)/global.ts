import { atom } from 'nanostores';

export const isHovering = atom<Boolean>(false);
export const isHoveringIntoText = atom<Boolean>(false);
export const isHoveringIntoBrand = atom<Boolean>(false);

export function toggleHover() {
  isHovering.set(!isHovering.get());
}

export function toggleHoverText() {
  isHoveringIntoText.set(!isHoveringIntoText.get());
  toggleHover();
}

export function toggleHoverBrand() {
  isHoveringIntoBrand.set(!isHoveringIntoBrand.get());
}