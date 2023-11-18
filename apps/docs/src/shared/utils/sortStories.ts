import { includeKeys, excludeKeys } from 'filter-obj';

import { EXAMPLE_SORT_KEYS } from '../globals';
import { type Stories, type Story } from '../types';

/**
 * sortStories
 * @param stories Stories
 * @returns Array<[string, Story | undefined]>
 */
export const sortStories = (
  stories: Stories
): Array<[string, Story | undefined]> => {
  const storiesSorted: Array<[string, Story | undefined]> = [];

  // order by sort keys first
  EXAMPLE_SORT_KEYS.forEach((key) => {
    const items = includeKeys(stories, (name) => {
      return nameStartWith(name, key);
    });

    storiesSorted.push(...Object.entries(items));
  });

  // remaining keys next
  const restStoriesItems = excludeKeys(stories, (name) => {
    let exclude = false;

    EXAMPLE_SORT_KEYS.forEach((key) => {
      if (nameStartWith(name, key)) {
        exclude = true;
      }
    });

    return exclude;
  });

  storiesSorted.push(...Object.entries(restStoriesItems));

  return storiesSorted;
};

/**
 * nameStartWith
 * @param name string
 * @param str string
 * @returns boolean
 */
function nameStartWith(name: string, str: string): boolean {
  return name.toLowerCase().startsWith(str);
}
