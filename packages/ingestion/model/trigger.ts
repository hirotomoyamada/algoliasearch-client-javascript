// Code generated by OpenAPI Generator (https://openapi-generator.tech), manual changes will be lost - read more on https://github.com/algolia/api-clients-automation. DO NOT EDIT.

import type { OnDemandTrigger } from './onDemandTrigger';
import type { ScheduleTrigger } from './scheduleTrigger';
import type { StreamingTrigger } from './streamingTrigger';
import type { SubscriptionTrigger } from './subscriptionTrigger';

/**
 * Trigger that runs the task.
 */
export type Trigger = OnDemandTrigger | ScheduleTrigger | StreamingTrigger | SubscriptionTrigger;
