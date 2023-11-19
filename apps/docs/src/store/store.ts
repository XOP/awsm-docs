import { action, atom } from 'nanostores';

import { LS_KEY_META, SIDEBAR_STATE } from '../shared/globals';

import { localStore } from './local';

export type MetaDataStore = Record<string, string | number | boolean>;

export type SidebarStateKeys = keyof typeof SIDEBAR_STATE;
export type SidebarStateValues = typeof SIDEBAR_STATE[SidebarStateKeys];

// ------------------------------------
// Setup
// ------------------------------------

const [getLsMeta, setLsMeta] = localStore<MetaDataStore>();

// application settings
export const sourceCode = atom<boolean>(false);

sourceCode.listen(() => {
  setMetaStore();
});

// store update
export const updateMetaStore = function updateMetaStore(
  data: MetaDataStore
): void {
  sourceCode.set(data.sourceCode as boolean);
};

// retrieve and set initial data
const localMeta = getMetaStore();

if (localMeta === null) {
  setInitialMeta();
} else {
  updateMetaStore(localMeta);
}

// ------------------------------------
// Actions
// ------------------------------------

export const showSourceCode = action(
  sourceCode,
  'showSourceCode',
  (store, value: boolean) => {
    store.set(value);
  }
);

// ------------------------------------
// High Order
// ------------------------------------

export function setInitialMeta(): void {
  sourceCode.set(false);
}

export function setMetaStore(): void {
  setLsMeta(LS_KEY_META, {
    sourceCode: sourceCode.get(),
  });
}

export function getMetaStore(): MetaDataStore {
  return getLsMeta(LS_KEY_META);
}
