// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

import type { RecommendRule } from './recommendRule';

export type SearchRecommendRulesResponse = {
  /**
   * Recommend rules that match the search criteria.
   */
  hits: RecommendRule[];

  /**
   * Number of results (hits).
   */
  nbHits: number;

  /**
   * Page of search results to retrieve.
   */
  page: number;

  /**
   * Number of pages of results.
   */
  nbPages: number;
};
