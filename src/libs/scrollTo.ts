// modified from https://www.ackee.agency/blog/scroll-to-element-with-react-and-vanilla-javascript

import { RefObject } from 'react';

const pow = Math.pow;

// The easing function that makes the scroll decelerate over time
const easeOutQuart = (x: number): number => {
  return 1 - pow(1 - x, 4);
};

const animateScroll = ({
  targetPosition,
  initialPosition,
  duration,
}: {
  [key: string]: number;
}): void => {
  let start: number;
  let position: number;
  let animationFrame: number;

  const requestAnimationFrame = window.requestAnimationFrame;
  const cancelAnimationFrame = window.cancelAnimationFrame;

  // maximum amount of pixels we can scroll
  const maxAvailableScroll =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const amountOfPixelsToScroll = initialPosition - targetPosition;

  const step = (timestamp: number): number | undefined => {
    if (start === undefined) {
      start = timestamp;
    }

    const elapsed = timestamp - start;

    // this just gives us a number between 0 (start) and 1 (end)
    const relativeProgress = elapsed / duration;

    // ease out that number
    const easedProgress = easeOutQuart(relativeProgress);

    // calculate new position for every thick of the requesAnimationFrame
    position =
      initialPosition - amountOfPixelsToScroll * Math.min(easedProgress, 1);

    // set the scrollbar position
    window.scrollTo(0, position);

    // Stop when max scroll is reached
    if (
      initialPosition !== maxAvailableScroll &&
      window.scrollY === maxAvailableScroll
    ) {
      cancelAnimationFrame(animationFrame);
      return;
    }

    // repeat until the end is reached
    if (elapsed < duration) {
      animationFrame = requestAnimationFrame(step);
    }
  };

  animationFrame = requestAnimationFrame(step);
};

const logError = (): void =>
  console.error(
    `Invalid element, are you sure you've provided element id or react ref?`
  );

export const scrollTo = ({
  id = null,
  ref = null,
  duration = 1200,
}: {
  id: string | null;
  ref: RefObject<HTMLElement> | null;
  duration?: number;
}): void => {
  // the position of the scroll bar before the user clicks the button
  const initialPosition = window.scrollY;

  // decide what type of reference that is
  // if neither ref or id is provided  set element to null
  const element =
    ref !== null
      ? ref.current
      : id != null
      ? document.getElementById(id)
      : null;

  if (element === null) {
    // log error if the reference passed is invalid
    logError();
    return;
  }

  animateScroll({
    targetPosition: element.offsetTop,
    initialPosition,
    duration,
  });
};
