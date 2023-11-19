import { useState, useEffect } from 'react';

import { type Stories } from '../types';

export const useStoriesLoad = (
  componentName: string,
  dir = ''
): [Stories, boolean] => {
  const componentDir = !!dir ? dir : componentName;

  const [stories, setStories] = useState<Stories>({});
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function load() {
      const _stories = await import(
        `../../../../../packages/awsm-ui/src/components/${componentDir}/${componentName}.stories.tsx`
      );

      // debug & styling
      // await new Promise((resolve) =>
      //   setTimeout(() => resolve(setIsLoading(false)), 3000)
      // );

      setIsLoading(false);
      setStories(_stories);
    }

    load();
  }, []);

  return [stories, isLoading];
};
