import { ReactElement, cloneElement } from 'react';

export const setHideOnMobile = (
  components: ReactElement[],
  hiddenComponents: number[]
): ReactElement[] => {
  const sx = { display: { xs: 'none', lg: 'block' } };

  const editedComponents = components.map(
    (component: ReactElement, index: number): ReactElement => {
      if (hiddenComponents.includes(index))
        return cloneElement(component, {
          ...component.props,
          sx,
        });
      return component;
    }
  );
  return editedComponents;
};
