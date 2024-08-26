// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

import type { ClientOptions } from '@algolia/client-common';
import {
  createMemoryCache,
  createNullCache,
  DEFAULT_CONNECT_TIMEOUT_NODE,
  DEFAULT_READ_TIMEOUT_NODE,
  DEFAULT_WRITE_TIMEOUT_NODE,
} from '@algolia/client-common';
import { createHttpRequester } from '@algolia/requester-node-http';

import type { Region } from '../src/querySuggestionsClient';
import { createQuerySuggestionsClient, REGIONS } from '../src/querySuggestionsClient';

export { apiClientVersion, Region } from '../src/querySuggestionsClient';
export * from '../model';

/**
 * The client type.
 */
export type QuerySuggestionsClient = ReturnType<typeof querySuggestionsClient>;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function querySuggestionsClient(appId: string, apiKey: string, region: Region, options?: ClientOptions) {
  if (!appId || typeof appId !== 'string') {
    throw new Error('`appId` is missing.');
  }

  if (!apiKey || typeof apiKey !== 'string') {
    throw new Error('`apiKey` is missing.');
  }

  if (!region || (region && (typeof region !== 'string' || !REGIONS.includes(region)))) {
    throw new Error(`\`region\` is required and must be one of the following: ${REGIONS.join(', ')}`);
  }

  return {
    ...createQuerySuggestionsClient({
      appId,
      apiKey,
      region,
      timeouts: {
        connect: DEFAULT_CONNECT_TIMEOUT_NODE,
        read: DEFAULT_READ_TIMEOUT_NODE,
        write: DEFAULT_WRITE_TIMEOUT_NODE,
      },
      requester: createHttpRequester(),
      algoliaAgents: [{ segment: 'Node.js', version: process.versions.node }],
      responsesCache: createNullCache(),
      requestsCache: createNullCache(),
      hostsCache: createMemoryCache(),
      ...options,
    }),
  };
}
