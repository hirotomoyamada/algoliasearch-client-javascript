import type { FacetOrdering } from './facetOrdering';

/**
 * Content defining how the search interface should be rendered. Can be set via the settings for a default value and can be overridden via rules.
 */
export type RenderingContent = {
  facetOrdering?: FacetOrdering;
};
