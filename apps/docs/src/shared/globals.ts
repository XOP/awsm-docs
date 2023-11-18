export const NAVIGATION_KEYS = {
  core: 'core',
  patterns: 'patterns',
  components: 'components'
} as const;

export const NAVIGATION = [
  {
    slug: NAVIGATION_KEYS.core,
    title: 'Core',
  },
  {
    slug: NAVIGATION_KEYS.patterns,
    title: 'Patterns',
  },
  {
    slug: NAVIGATION_KEYS.components,
    title: 'Components',
  }
];

export const COMPONENT_NAVIGATION = [
  {
    slug: '',
    title: 'Examples',
  },
  {
    slug: 'usage',
    title: 'Usage',
  }
];

export const COMPONENT_GROUPS = {
  form: 'Form',
  content: 'Content'
};

export const DEFAULT = 'default';

export const EXAMPLE_SORT_KEYS = [
  'base',
  'color',
  'size',
  'variant',
  'disabled',
  'with'
];

export const LS_PREFIX = 'awsm';
export const LS_KEY_META = 'meta';

export const SIDEBAR_STATE = {
  opened: 'opened',
  closed: 'closed',
} as const;
