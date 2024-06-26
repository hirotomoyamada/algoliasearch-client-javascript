// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

import {
  createAuth,
  createTransporter,
  getAlgoliaAgent,
  shuffle,
} from '@algolia/client-common';
import type {
  CreateClientOptions,
  Headers,
  Host,
  QueryParameters,
  Request,
  RequestOptions,
} from '@algolia/client-common';

import type {
  CustomPostProps,
  LegacyGetRecommendationsParams,
  LegacySearchMethodProps,
} from '../model/clientMethodProps';
import type { GetRecommendationsParams } from '../model/getRecommendationsParams';
import type { GetRecommendationsResponse } from '../model/getRecommendationsResponse';
import type { SearchMethodParams } from '../model/searchMethodParams';
import type { SearchResponses } from '../model/searchResponses';

export const apiClientVersion = '5.0.0-beta.6';

function getDefaultHosts(appId: string): Host[] {
  return (
    [
      {
        url: `${appId}-dsn.algolia.net`,
        accept: 'read',
        protocol: 'https',
      },
      {
        url: `${appId}.algolia.net`,
        accept: 'write',
        protocol: 'https',
      },
    ] as Host[]
  ).concat(
    shuffle([
      {
        url: `${appId}-1.algolianet.com`,
        accept: 'readWrite',
        protocol: 'https',
      },
      {
        url: `${appId}-2.algolianet.com`,
        accept: 'readWrite',
        protocol: 'https',
      },
      {
        url: `${appId}-3.algolianet.com`,
        accept: 'readWrite',
        protocol: 'https',
      },
    ])
  );
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createLiteClient({
  appId: appIdOption,
  apiKey: apiKeyOption,
  authMode,
  algoliaAgents,
  ...options
}: CreateClientOptions) {
  const auth = createAuth(appIdOption, apiKeyOption, authMode);
  const transporter = createTransporter({
    hosts: getDefaultHosts(appIdOption),
    ...options,
    algoliaAgent: getAlgoliaAgent({
      algoliaAgents,
      client: 'Lite',
      version: apiClientVersion,
    }),
    baseHeaders: {
      'content-type': 'text/plain',
      ...auth.headers(),
      ...options.baseHeaders,
    },
    baseQueryParameters: {
      ...auth.queryParameters(),
      ...options.baseQueryParameters,
    },
  });

  return {
    transporter,

    /**
     * The `appId` currently in use.
     */
    appId: appIdOption,

    /**
     * Clears the cache of the transporter for the `requestsCache` and `responsesCache` properties.
     */
    clearCache(): Promise<void> {
      return Promise.all([
        transporter.requestsCache.clear(),
        transporter.responsesCache.clear(),
      ]).then(() => undefined);
    },

    /**
     * Get the value of the `algoliaAgent`, used by our libraries internally and telemetry system.
     */
    get _ua(): string {
      return transporter.algoliaAgent.value;
    },

    /**
     * Adds a `segment` to the `x-algolia-agent` sent with every requests.
     *
     * @param segment - The algolia agent (user-agent) segment to add.
     * @param version - The version of the agent.
     */
    addAlgoliaAgent(segment: string, version?: string): void {
      transporter.algoliaAgent.add({ segment, version });
    },

    /**
     * This method allow you to send requests to the Algolia REST API.
     *
     * @param customPost - The customPost object.
     * @param customPost.path - Path of the endpoint, anything after \"/1\" must be specified.
     * @param customPost.parameters - Query parameters to apply to the current query.
     * @param customPost.body - Parameters to send with the custom request.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    customPost(
      { path, parameters, body }: CustomPostProps,
      requestOptions?: RequestOptions
    ): Promise<Record<string, any>> {
      if (!path) {
        throw new Error(
          'Parameter `path` is required when calling `customPost`.'
        );
      }

      const requestPath = '/{path}'.replace('{path}', path);
      const headers: Headers = {};
      const queryParameters: QueryParameters = parameters ? parameters : {};

      const request: Request = {
        method: 'POST',
        path: requestPath,
        queryParameters,
        headers,
        data: body ? body : {},
      };

      return transporter.request(request, requestOptions);
    },

    /**
     * Retrieves recommendations from selected AI models.
     *
     * Required API Key ACLs:
     * - search.
     *
     * @param getRecommendationsParams - The getRecommendationsParams object.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    getRecommendations(
      getRecommendationsParams:
        | GetRecommendationsParams
        | LegacyGetRecommendationsParams,
      requestOptions?: RequestOptions
    ): Promise<GetRecommendationsResponse> {
      if (getRecommendationsParams && Array.isArray(getRecommendationsParams)) {
        const newSignatureRequest: GetRecommendationsParams = {
          requests: getRecommendationsParams,
        };

        // eslint-disable-next-line no-param-reassign
        getRecommendationsParams = newSignatureRequest;
      }

      if (!getRecommendationsParams) {
        throw new Error(
          'Parameter `getRecommendationsParams` is required when calling `getRecommendations`.'
        );
      }

      if (!getRecommendationsParams.requests) {
        throw new Error(
          'Parameter `getRecommendationsParams.requests` is required when calling `getRecommendations`.'
        );
      }

      const requestPath = '/1/indexes/*/recommendations';
      const headers: Headers = {};
      const queryParameters: QueryParameters = {};

      const request: Request = {
        method: 'POST',
        path: requestPath,
        queryParameters,
        headers,
        data: getRecommendationsParams,
        useReadTransporter: true,
        cacheable: true,
      };

      return transporter.request(request, requestOptions);
    },

    /**
     * Sends multiple search request to one or more indices.  This can be useful in these cases:  - Different indices for different purposes, such as, one index for products, another one for marketing content. - Multiple searches to the same index—for example, with different filters.
     *
     * Required API Key ACLs:
     * - search.
     *
     * @param searchMethodParams - Muli-search request body. Results are returned in the same order as the requests.
     * @param requestOptions - The requestOptions to send along with the query, they will be merged with the transporter requestOptions.
     */
    search<T>(
      searchMethodParams: LegacySearchMethodProps | SearchMethodParams,
      requestOptions?: RequestOptions
    ): Promise<SearchResponses<T>> {
      if (searchMethodParams && Array.isArray(searchMethodParams)) {
        const newSignatureRequest: SearchMethodParams = {
          requests: searchMethodParams.map(({ params, ...legacyRequest }) => {
            if (legacyRequest.type === 'facet') {
              return {
                ...legacyRequest,
                ...params,
                type: 'facet',
              };
            }

            return {
              ...legacyRequest,
              ...params,
              facet: undefined,
              maxFacetHits: undefined,
              facetQuery: undefined,
            };
          }),
        };

        // eslint-disable-next-line no-param-reassign
        searchMethodParams = newSignatureRequest;
      }

      if (!searchMethodParams) {
        throw new Error(
          'Parameter `searchMethodParams` is required when calling `search`.'
        );
      }

      if (!searchMethodParams.requests) {
        throw new Error(
          'Parameter `searchMethodParams.requests` is required when calling `search`.'
        );
      }

      const requestPath = '/1/indexes/*/queries';
      const headers: Headers = {};
      const queryParameters: QueryParameters = {};

      const request: Request = {
        method: 'POST',
        path: requestPath,
        queryParameters,
        headers,
        data: searchMethodParams,
        useReadTransporter: true,
        cacheable: true,
      };

      return transporter.request(request, requestOptions);
    },
  };
}
