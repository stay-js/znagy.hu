'use client';

import { useSyncExternalStore } from 'react';

const emptySubscribe = () => () => {};

export function useMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true, // client
    () => false, // server
  );
}
