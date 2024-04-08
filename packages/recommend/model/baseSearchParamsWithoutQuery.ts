// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

import type { AroundPrecision } from './aroundPrecision';
import type { AroundRadius } from './aroundRadius';
import type { FacetFilters } from './facetFilters';
import type { NumericFilters } from './numericFilters';
import type { OptionalFilters } from './optionalFilters';
import type { TagFilters } from './tagFilters';

export type BaseSearchParamsWithoutQuery = {
  /**
   * Keywords to be used instead of the search query to conduct a more broader search.  Using the `similarQuery` parameter changes other settings:  - `queryType` is set to `prefixNone`. - `removeStopWords` is set to true. - `words` is set as the first ranking criterion. - All remaining words are treated as `optionalWords`.  Since the `similarQuery` is supposed to do a broad search, they usually return many results. Combine it with `filters` to narrow down the list of results.
   */
  similarQuery?: string;

  /**
   * Filter expression to only include items that match the filter criteria in the response.  You can use these filter expressions:  - **Numeric filters.** `<facet> <op> <number>`, where `<op>` is one of `<`, `<=`, `=`, `!=`, `>`, `>=`. - **Ranges.** `<facet>:<lower> TO <upper>` where `<lower>` and `<upper>` are the lower and upper limits of the range (inclusive). - **Facet filters.** `<facet>:<value>` where `<facet>` is a facet attribute (case-sensitive) and `<value>` a facet value. - **Tag filters.** `_tags:<value>` or just `<value>` (case-sensitive). - **Boolean filters.** `<facet>: true | false`.  You can combine filters with `AND`, `OR`, and `NOT` operators with the following restrictions:  - You can only combine filters of the same type with `OR`.   **Not supported:** `facet:value OR num > 3`. - You can\'t use `NOT` with combinations of filters.   **Not supported:** `NOT(facet:value OR facet:value)` - You can\'t combine conjunctions (`AND`) with `OR`.   **Not supported:** `facet:value OR (facet:value AND facet:value)`  Use quotes around your filters, if the facet attribute name or facet value has spaces, keywords (`OR`, `AND`, `NOT`), or quotes. If a facet attribute is an array, the filter matches if it matches at least one element of the array.  For more information, see [Filters](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/).
   */
  filters?: string;

  facetFilters?: FacetFilters;

  optionalFilters?: OptionalFilters;

  numericFilters?: NumericFilters;

  tagFilters?: TagFilters;

  /**
   * Whether to sum all filter scores.  If true, all filter scores are summed. Otherwise, the maximum filter score is kept. For more information, see [filter scores](https://www.algolia.com/doc/guides/managing-results/refine-results/filtering/in-depth/filter-scoring/#accumulating-scores-with-sumorfiltersscores).
   */
  sumOrFiltersScores?: boolean;

  /**
   * Restricts a search to a subset of your searchable attributes.
   */
  restrictSearchableAttributes?: string[];

  /**
   * Facets for which to retrieve facet values that match the search criteria and the number of matching facet values.  To retrieve all facets, use the wildcard character `*`. For more information, see [facets](https://www.algolia.com/doc/guides/managing-results/refine-results/faceting/#contextual-facet-values-and-counts).
   */
  facets?: string[];

  /**
   * Whether faceting should be applied after deduplication with `distinct`.  This leads to accurate facet counts when using faceting in combination with `distinct`. It\'s usually better to use `afterDistinct` modifiers in the `attributesForFaceting` setting, as `facetingAfterDistinct` only computes correct facet counts if all records have the same facet values for the `attributeForDistinct`.
   */
  facetingAfterDistinct?: boolean;

  /**
   * Page of search results to retrieve.
   */
  page?: number;

  /**
   * Position of the first hit to retrieve.
   */
  offset?: number;

  /**
   * Number of hits to retrieve (used in combination with `offset`).
   */
  length?: number;

  /**
   * Coordinates for the center of a circle, expressed as a comma-separated string of latitude and longitude.  Only records included within circle around this central location are included in the results. The radius of the circle is determined by the `aroundRadius` and `minimumAroundRadius` settings. This parameter is ignored if you also specify `insidePolygon` or `insideBoundingBox`.
   */
  aroundLatLng?: string;

  /**
   * Whether to obtain the coordinates from the request\'s IP address.
   */
  aroundLatLngViaIP?: boolean;

  aroundRadius?: AroundRadius;

  aroundPrecision?: AroundPrecision;

  /**
   * Minimum radius (in meters) for a search around a location when `aroundRadius` isn\'t set.
   */
  minimumAroundRadius?: number;

  /**
   * Coordinates for a rectangular area in which to search.  Each bounding box is defined by the two opposite points of its diagonal, and expressed as latitude and longitude pair: `[p1 lat, p1 long, p2 lat, p2 long]`. Provide multiple bounding boxes as nested arrays. For more information, see [rectangular area](https://www.algolia.com/doc/guides/managing-results/refine-results/geolocation/#filtering-inside-rectangular-or-polygonal-areas).
   */
  insideBoundingBox?: number[][];

  /**
   * Coordinates of a polygon in which to search.  Polygons are defined by 3 to 10,000 points. Each point is represented by its latitude and longitude. Provide multiple polygons as nested arrays. For more information, see [filtering inside polygons](https://www.algolia.com/doc/guides/managing-results/refine-results/geolocation/#filtering-inside-rectangular-or-polygonal-areas). This parameter is ignored, if you also specify `insideBoundingBox`.
   */
  insidePolygon?: number[][];

  /**
   * ISO language codes that adjust settings that are useful for processing natural language queries (as opposed to keyword searches):  - Sets `removeStopWords` and `ignorePlurals` to the list of provided languages. - Sets `removeWordsIfNoResults` to `allOptional`. - Adds a `natural_language` attribute to `ruleContexts` and `analyticsTags`.
   */
  naturalLanguages?: string[];

  /**
   * Assigns a rule context to the search query.  [Rule contexts](https://www.algolia.com/doc/guides/managing-results/rules/rules-overview/how-to/customize-search-results-by-platform/#whats-a-context) are strings that you can use to trigger matching rules.
   */
  ruleContexts?: string[];

  /**
   * Impact that Personalization should have on this search.  The higher this value is, the more Personalization determines the ranking compared to other factors. For more information, see [Understanding Personalization impact](https://www.algolia.com/doc/guides/personalization/personalizing-results/in-depth/configuring-personalization/#understanding-personalization-impact).
   */
  personalizationImpact?: number;

  /**
   * Unique pseudonymous or anonymous user identifier.  This helps with analytics and click and conversion events. For more information, see [user token](https://www.algolia.com/doc/guides/sending-events/concepts/usertoken/).
   */
  userToken?: string;

  /**
   * Whether the search response should include detailed ranking information.
   */
  getRankingInfo?: boolean;

  /**
   * Whether to take into account an index\'s synonyms for this search.
   */
  synonyms?: boolean;

  /**
   * Whether to include a `queryID` attribute in the response.  The query ID is a unique identifier for a search query and is required for tracking [click and conversion events](https://www.algolia.com/guides/sending-events/getting-started/).
   */
  clickAnalytics?: boolean;

  /**
   * Whether this search will be included in Analytics.
   */
  analytics?: boolean;

  /**
   * Tags to apply to the query for [segmenting analytics data](https://www.algolia.com/doc/guides/search-analytics/guides/segments/).
   */
  analyticsTags?: string[];

  /**
   * Whether to include this search when calculating processing-time percentiles.
   */
  percentileComputation?: boolean;

  /**
   * Whether to enable A/B testing for this search.
   */
  enableABTest?: boolean;
};
