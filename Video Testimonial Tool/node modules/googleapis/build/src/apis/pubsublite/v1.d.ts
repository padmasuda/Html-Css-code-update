/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace pubsublite_v1 {
    export interface Options extends GlobalOptions {
        version: 'v1';
    }
    interface StandardParameters {
        /**
         * Auth client or API Key for the request
         */
        auth?: string | OAuth2Client | JWT | Compute | UserRefreshClient | BaseExternalAccountClient | GoogleAuth;
        /**
         * V1 error format.
         */
        '$.xgafv'?: string;
        /**
         * OAuth access token.
         */
        access_token?: string;
        /**
         * Data format for response.
         */
        alt?: string;
        /**
         * JSONP
         */
        callback?: string;
        /**
         * Selector specifying which fields to include in a partial response.
         */
        fields?: string;
        /**
         * API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.
         */
        key?: string;
        /**
         * OAuth 2.0 token for the current user.
         */
        oauth_token?: string;
        /**
         * Returns response with indentations and line breaks.
         */
        prettyPrint?: boolean;
        /**
         * Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.
         */
        quotaUser?: string;
        /**
         * Legacy upload protocol for media (e.g. "media", "multipart").
         */
        uploadType?: string;
        /**
         * Upload protocol for media (e.g. "raw", "multipart").
         */
        upload_protocol?: string;
    }
    /**
     * Pub/Sub Lite API
     *
     *
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const pubsublite = google.pubsublite('v1');
     * ```
     */
    export class Pubsublite {
        context: APIRequestContext;
        admin: Resource$Admin;
        cursor: Resource$Cursor;
        topicStats: Resource$Topicstats;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * The request message for Operations.CancelOperation.
     */
    export interface Schema$CancelOperationRequest {
    }
    /**
     * The throughput capacity configuration for each partition.
     */
    export interface Schema$Capacity {
        /**
         * Publish throughput capacity per partition in MiB/s. Must be \>= 4 and <= 16.
         */
        publishMibPerSec?: number | null;
        /**
         * Subscribe throughput capacity per partition in MiB/s. Must be \>= 4 and <= 32.
         */
        subscribeMibPerSec?: number | null;
    }
    /**
     * Request for CommitCursor.
     */
    export interface Schema$CommitCursorRequest {
        /**
         * The new value for the committed cursor.
         */
        cursor?: Schema$Cursor;
        /**
         * The partition for which to update the cursor. Partitions are zero indexed, so `partition` must be in the range [0, topic.num_partitions).
         */
        partition?: string | null;
    }
    /**
     * Response for CommitCursor.
     */
    export interface Schema$CommitCursorResponse {
    }
    /**
     * Compute the current head cursor for a partition.
     */
    export interface Schema$ComputeHeadCursorRequest {
        /**
         * Required. The partition for which we should compute the head cursor.
         */
        partition?: string | null;
    }
    /**
     * Response containing the head cursor for the requested topic and partition.
     */
    export interface Schema$ComputeHeadCursorResponse {
        /**
         * The head cursor.
         */
        headCursor?: Schema$Cursor;
    }
    /**
     * Compute statistics about a range of messages in a given topic and partition.
     */
    export interface Schema$ComputeMessageStatsRequest {
        /**
         * The exclusive end of the range. The range is empty if end_cursor <= start_cursor. Specifying a start_cursor before the first message and an end_cursor after the last message will retrieve all messages.
         */
        endCursor?: Schema$Cursor;
        /**
         * Required. The partition for which we should compute message stats.
         */
        partition?: string | null;
        /**
         * The inclusive start of the range.
         */
        startCursor?: Schema$Cursor;
    }
    /**
     * Response containing stats for messages in the requested topic and partition.
     */
    export interface Schema$ComputeMessageStatsResponse {
        /**
         * The number of quota bytes accounted to these messages.
         */
        messageBytes?: string | null;
        /**
         * The count of messages.
         */
        messageCount?: string | null;
        /**
         * The minimum event timestamp across these messages. For the purposes of this computation, if a message does not have an event time, we use the publish time. The timestamp will be unset if there are no messages.
         */
        minimumEventTime?: string | null;
        /**
         * The minimum publish timestamp across these messages. Note that publish timestamps within a partition are not guaranteed to be non-decreasing. The timestamp will be unset if there are no messages.
         */
        minimumPublishTime?: string | null;
    }
    /**
     * Compute the corresponding cursor for a publish or event time in a topic partition.
     */
    export interface Schema$ComputeTimeCursorRequest {
        /**
         * Required. The partition for which we should compute the cursor.
         */
        partition?: string | null;
        /**
         * Required. The target publish or event time. Specifying a future time will return an unset cursor.
         */
        target?: Schema$TimeTarget;
    }
    /**
     * Response containing the cursor corresponding to a publish or event time in a topic partition.
     */
    export interface Schema$ComputeTimeCursorResponse {
        /**
         * If present, the cursor references the first message with time greater than or equal to the specified target time. If such a message cannot be found, the cursor will be unset (i.e. `cursor` is not present).
         */
        cursor?: Schema$Cursor;
    }
    /**
     * A cursor that describes the position of a message within a topic partition.
     */
    export interface Schema$Cursor {
        /**
         * The offset of a message within a topic partition. Must be greater than or equal 0.
         */
        offset?: string | null;
    }
    /**
     * The settings for a subscription's message delivery.
     */
    export interface Schema$DeliveryConfig {
        /**
         * The DeliveryRequirement for this subscription.
         */
        deliveryRequirement?: string | null;
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
     */
    export interface Schema$Empty {
    }
    /**
     * Configuration for a Pub/Sub Lite subscription that writes messages to a destination. User subscriber clients must not connect to this subscription.
     */
    export interface Schema$ExportConfig {
        /**
         * Output only. The current state of the export, which may be different to the desired state due to errors. This field is output only.
         */
        currentState?: string | null;
        /**
         * Optional. The name of an optional Pub/Sub Lite topic to publish messages that can not be exported to the destination. For example, the message can not be published to the Pub/Sub service because it does not satisfy the constraints documented at https://cloud.google.com/pubsub/docs/publisher. Structured like: projects/{project_number\}/locations/{location\}/topics/{topic_id\}. Must be within the same project and location as the subscription. The topic may be changed or removed.
         */
        deadLetterTopic?: string | null;
        /**
         * The desired state of this export. Setting this to values other than `ACTIVE` and `PAUSED` will result in an error.
         */
        desiredState?: string | null;
        /**
         * Messages are automatically written from the Pub/Sub Lite topic associated with this subscription to a Pub/Sub topic.
         */
        pubsubConfig?: Schema$PubSubConfig;
    }
    /**
     * The response message for Operations.ListOperations.
     */
    export interface Schema$ListOperationsResponse {
        /**
         * The standard List next-page token.
         */
        nextPageToken?: string | null;
        /**
         * A list of operations that matches the specified filter in the request.
         */
        operations?: Schema$Operation[];
    }
    /**
     * Response for ListPartitionCursors
     */
    export interface Schema$ListPartitionCursorsResponse {
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
        /**
         * The partition cursors from this request.
         */
        partitionCursors?: Schema$PartitionCursor[];
    }
    /**
     * Response for ListReservations.
     */
    export interface Schema$ListReservationsResponse {
        /**
         * A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.
         */
        nextPageToken?: string | null;
        /**
         * The list of reservation in the requested parent. The order of the reservations is unspecified.
         */
        reservations?: Schema$Reservation[];
    }
    /**
     * Response for ListReservationTopics.
     */
    export interface Schema$ListReservationTopicsResponse {
        /**
         * A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.
         */
        nextPageToken?: string | null;
        /**
         * The names of topics attached to the reservation. The order of the topics is unspecified.
         */
        topics?: string[] | null;
    }
    /**
     * Response for ListSubscriptions.
     */
    export interface Schema$ListSubscriptionsResponse {
        /**
         * A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.
         */
        nextPageToken?: string | null;
        /**
         * The list of subscriptions in the requested parent. The order of the subscriptions is unspecified.
         */
        subscriptions?: Schema$Subscription[];
    }
    /**
     * Response for ListTopics.
     */
    export interface Schema$ListTopicsResponse {
        /**
         * A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.
         */
        nextPageToken?: string | null;
        /**
         * The list of topic in the requested parent. The order of the topics is unspecified.
         */
        topics?: Schema$Topic[];
    }
    /**
     * Response for ListTopicSubscriptions.
     */
    export interface Schema$ListTopicSubscriptionsResponse {
        /**
         * A token that can be sent as `page_token` to retrieve the next page of results. If this field is omitted, there are no more results.
         */
        nextPageToken?: string | null;
        /**
         * The names of subscriptions attached to the topic. The order of the subscriptions is unspecified.
         */
        subscriptions?: string[] | null;
    }
    /**
     * This resource represents a long-running operation that is the result of a network API call.
     */
    export interface Schema$Operation {
        /**
         * If the value is `false`, it means the operation is still in progress. If `true`, the operation is completed, and either `error` or `response` is available.
         */
        done?: boolean | null;
        /**
         * The error result of the operation in case of failure or cancellation.
         */
        error?: Schema$Status;
        /**
         * Service-specific metadata associated with the operation. It typically contains progress information and common metadata such as create time. Some services might not provide such metadata. Any method that returns a long-running operation should document the metadata type, if any.
         */
        metadata?: {
            [key: string]: any;
        } | null;
        /**
         * The server-assigned name, which is only unique within the same service that originally returns it. If you use the default HTTP mapping, the `name` should be a resource name ending with `operations/{unique_id\}`.
         */
        name?: string | null;
        /**
         * The normal, successful response of the operation. If the original method returns no data on success, such as `Delete`, the response is `google.protobuf.Empty`. If the original method is standard `Get`/`Create`/`Update`, the response should be the resource. For other methods, the response should have the type `XxxResponse`, where `Xxx` is the original method name. For example, if the original method name is `TakeSnapshot()`, the inferred response type is `TakeSnapshotResponse`.
         */
        response?: {
            [key: string]: any;
        } | null;
    }
    /**
     * Metadata for long running operations.
     */
    export interface Schema$OperationMetadata {
        /**
         * The time the operation was created.
         */
        createTime?: string | null;
        /**
         * The time the operation finished running. Not set if the operation has not completed.
         */
        endTime?: string | null;
        /**
         * Resource path for the target of the operation. For example, targets of seeks are subscription resources, structured like: projects/{project_number\}/locations/{location\}/subscriptions/{subscription_id\}
         */
        target?: string | null;
        /**
         * Name of the verb executed by the operation.
         */
        verb?: string | null;
    }
    /**
     * The settings for a topic's partitions.
     */
    export interface Schema$PartitionConfig {
        /**
         * The capacity configuration.
         */
        capacity?: Schema$Capacity;
        /**
         * The number of partitions in the topic. Must be at least 1. Once a topic has been created the number of partitions can be increased but not decreased. Message ordering is not guaranteed across a topic resize. For more information see https://cloud.google.com/pubsub/lite/docs/topics#scaling_capacity
         */
        count?: string | null;
        /**
         * DEPRECATED: Use capacity instead which can express a superset of configurations. Every partition in the topic is allocated throughput equivalent to `scale` times the standard partition throughput (4 MiB/s). This is also reflected in the cost of this topic; a topic with `scale` of 2 and count of 10 is charged for 20 partitions. This value must be in the range [1,4].
         */
        scale?: number | null;
    }
    /**
     * A pair of a Cursor and the partition it is for.
     */
    export interface Schema$PartitionCursor {
        /**
         * The value of the cursor.
         */
        cursor?: Schema$Cursor;
        /**
         * The partition this is for.
         */
        partition?: string | null;
    }
    /**
     * Configuration for exporting to a Pub/Sub topic.
     */
    export interface Schema$PubSubConfig {
        /**
         * The name of the Pub/Sub topic. Structured like: projects/{project_number\}/topics/{topic_id\}. The topic may be changed.
         */
        topic?: string | null;
    }
    /**
     * Metadata about a reservation resource.
     */
    export interface Schema$Reservation {
        /**
         * The name of the reservation. Structured like: projects/{project_number\}/locations/{location\}/reservations/{reservation_id\}
         */
        name?: string | null;
        /**
         * The reserved throughput capacity. Every unit of throughput capacity is equivalent to 1 MiB/s of published messages or 2 MiB/s of subscribed messages. Any topics which are declared as using capacity from a Reservation will consume resources from this reservation instead of being charged individually.
         */
        throughputCapacity?: string | null;
    }
    /**
     * The settings for this topic's Reservation usage.
     */
    export interface Schema$ReservationConfig {
        /**
         * The Reservation to use for this topic's throughput capacity. Structured like: projects/{project_number\}/locations/{location\}/reservations/{reservation_id\}
         */
        throughputReservation?: string | null;
    }
    /**
     * The settings for a topic's message retention.
     */
    export interface Schema$RetentionConfig {
        /**
         * How long a published message is retained. If unset, messages will be retained as long as the bytes retained for each partition is below `per_partition_bytes`.
         */
        period?: string | null;
        /**
         * The provisioned storage, in bytes, per partition. If the number of bytes stored in any of the topic's partitions grows beyond this value, older messages will be dropped to make room for newer ones, regardless of the value of `period`.
         */
        perPartitionBytes?: string | null;
    }
    /**
     * Request for SeekSubscription.
     */
    export interface Schema$SeekSubscriptionRequest {
        /**
         * Seek to a named position with respect to the message backlog.
         */
        namedTarget?: string | null;
        /**
         * Seek to the first message whose publish or event time is greater than or equal to the specified query time. If no such message can be located, will seek to the end of the message backlog.
         */
        timeTarget?: Schema$TimeTarget;
    }
    /**
     * Response for SeekSubscription long running operation.
     */
    export interface Schema$SeekSubscriptionResponse {
    }
    /**
     * The `Status` type defines a logical error model that is suitable for different programming environments, including REST APIs and RPC APIs. It is used by [gRPC](https://github.com/grpc). Each `Status` message contains three pieces of data: error code, error message, and error details. You can find out more about this error model and how to work with it in the [API Design Guide](https://cloud.google.com/apis/design/errors).
     */
    export interface Schema$Status {
        /**
         * The status code, which should be an enum value of google.rpc.Code.
         */
        code?: number | null;
        /**
         * A list of messages that carry the error details. There is a common set of message types for APIs to use.
         */
        details?: Array<{
            [key: string]: any;
        }> | null;
        /**
         * A developer-facing error message, which should be in English. Any user-facing error message should be localized and sent in the google.rpc.Status.details field, or localized by the client.
         */
        message?: string | null;
    }
    /**
     * Metadata about a subscription resource.
     */
    export interface Schema$Subscription {
        /**
         * The settings for this subscription's message delivery.
         */
        deliveryConfig?: Schema$DeliveryConfig;
        /**
         * If present, messages are automatically written from the Pub/Sub Lite topic associated with this subscription to a destination.
         */
        exportConfig?: Schema$ExportConfig;
        /**
         * The name of the subscription. Structured like: projects/{project_number\}/locations/{location\}/subscriptions/{subscription_id\}
         */
        name?: string | null;
        /**
         * The name of the topic this subscription is attached to. Structured like: projects/{project_number\}/locations/{location\}/topics/{topic_id\}
         */
        topic?: string | null;
    }
    /**
     * A target publish or event time. Can be used for seeking to or retrieving the corresponding cursor.
     */
    export interface Schema$TimeTarget {
        /**
         * Request the cursor of the first message with event time greater than or equal to `event_time`. If messages are missing an event time, the publish time is used as a fallback. As event times are user supplied, subsequent messages may have event times less than `event_time` and should be filtered by the client, if necessary.
         */
        eventTime?: string | null;
        /**
         * Request the cursor of the first message with publish time greater than or equal to `publish_time`. All messages thereafter are guaranteed to have publish times \>= `publish_time`.
         */
        publishTime?: string | null;
    }
    /**
     * Metadata about a topic resource.
     */
    export interface Schema$Topic {
        /**
         * The name of the topic. Structured like: projects/{project_number\}/locations/{location\}/topics/{topic_id\}
         */
        name?: string | null;
        /**
         * The settings for this topic's partitions.
         */
        partitionConfig?: Schema$PartitionConfig;
        /**
         * The settings for this topic's Reservation usage.
         */
        reservationConfig?: Schema$ReservationConfig;
        /**
         * The settings for this topic's message retention.
         */
        retentionConfig?: Schema$RetentionConfig;
    }
    /**
     * Response for GetTopicPartitions.
     */
    export interface Schema$TopicPartitions {
        /**
         * The number of partitions in the topic.
         */
        partitionCount?: string | null;
    }
    export class Resource$Admin {
        context: APIRequestContext;
        projects: Resource$Admin$Projects;
        constructor(context: APIRequestContext);
    }
    export class Resource$Admin$Projects {
        context: APIRequestContext;
        locations: Resource$Admin$Projects$Locations;
        constructor(context: APIRequestContext);
    }
    export class Resource$Admin$Projects$Locations {
        context: APIRequestContext;
        operations: Resource$Admin$Projects$Locations$Operations;
        reservations: Resource$Admin$Projects$Locations$Reservations;
        subscriptions: Resource$Admin$Projects$Locations$Subscriptions;
        topics: Resource$Admin$Projects$Locations$Topics;
        constructor(context: APIRequestContext);
    }
    export class Resource$Admin$Projects$Locations$Operations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Starts asynchronous cancellation on a long-running operation. The server makes a best effort to cancel the operation, but success is not guaranteed. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`. Clients can use Operations.GetOperation or other methods to check whether the cancellation succeeded or whether the operation completed despite cancellation. On successful cancellation, the operation is not deleted; instead, it becomes an operation with an Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        cancel(params: Params$Resource$Admin$Projects$Locations$Operations$Cancel, options: StreamMethodOptions): GaxiosPromise<Readable>;
        cancel(params?: Params$Resource$Admin$Projects$Locations$Operations$Cancel, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        cancel(params: Params$Resource$Admin$Projects$Locations$Operations$Cancel, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        cancel(params: Params$Resource$Admin$Projects$Locations$Operations$Cancel, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        cancel(params: Params$Resource$Admin$Projects$Locations$Operations$Cancel, callback: BodyResponseCallback<Schema$Empty>): void;
        cancel(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Admin$Projects$Locations$Operations$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Admin$Projects$Locations$Operations$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Admin$Projects$Locations$Operations$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Admin$Projects$Locations$Operations$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Admin$Projects$Locations$Operations$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Admin$Projects$Locations$Operations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Admin$Projects$Locations$Operations$Get, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        get(params: Params$Resource$Admin$Projects$Locations$Operations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Admin$Projects$Locations$Operations$Get, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        get(params: Params$Resource$Admin$Projects$Locations$Operations$Get, callback: BodyResponseCallback<Schema$Operation>): void;
        get(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Admin$Projects$Locations$Operations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Admin$Projects$Locations$Operations$List, options?: MethodOptions): GaxiosPromise<Schema$ListOperationsResponse>;
        list(params: Params$Resource$Admin$Projects$Locations$Operations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Admin$Projects$Locations$Operations$List, options: MethodOptions | BodyResponseCallback<Schema$ListOperationsResponse>, callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
        list(params: Params$Resource$Admin$Projects$Locations$Operations$List, callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    }
    export interface Params$Resource$Admin$Projects$Locations$Operations$Cancel extends StandardParameters {
        /**
         * The name of the operation resource to be cancelled.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CancelOperationRequest;
    }
    export interface Params$Resource$Admin$Projects$Locations$Operations$Delete extends StandardParameters {
        /**
         * The name of the operation resource to be deleted.
         */
        name?: string;
    }
    export interface Params$Resource$Admin$Projects$Locations$Operations$Get extends StandardParameters {
        /**
         * The name of the operation resource.
         */
        name?: string;
    }
    export interface Params$Resource$Admin$Projects$Locations$Operations$List extends StandardParameters {
        /**
         * The standard list filter.
         */
        filter?: string;
        /**
         * The name of the operation's parent resource.
         */
        name?: string;
        /**
         * The standard list page size.
         */
        pageSize?: number;
        /**
         * The standard list page token.
         */
        pageToken?: string;
    }
    export class Resource$Admin$Projects$Locations$Reservations {
        context: APIRequestContext;
        topics: Resource$Admin$Projects$Locations$Reservations$Topics;
        constructor(context: APIRequestContext);
        /**
         * Creates a new reservation.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Admin$Projects$Locations$Reservations$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Admin$Projects$Locations$Reservations$Create, options?: MethodOptions): GaxiosPromise<Schema$Reservation>;
        create(params: Params$Resource$Admin$Projects$Locations$Reservations$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Admin$Projects$Locations$Reservations$Create, options: MethodOptions | BodyResponseCallback<Schema$Reservation>, callback: BodyResponseCallback<Schema$Reservation>): void;
        create(params: Params$Resource$Admin$Projects$Locations$Reservations$Create, callback: BodyResponseCallback<Schema$Reservation>): void;
        create(callback: BodyResponseCallback<Schema$Reservation>): void;
        /**
         * Deletes the specified reservation.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Admin$Projects$Locations$Reservations$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Admin$Projects$Locations$Reservations$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Admin$Projects$Locations$Reservations$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Admin$Projects$Locations$Reservations$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Admin$Projects$Locations$Reservations$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Returns the reservation configuration.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Admin$Projects$Locations$Reservations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Admin$Projects$Locations$Reservations$Get, options?: MethodOptions): GaxiosPromise<Schema$Reservation>;
        get(params: Params$Resource$Admin$Projects$Locations$Reservations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Admin$Projects$Locations$Reservations$Get, options: MethodOptions | BodyResponseCallback<Schema$Reservation>, callback: BodyResponseCallback<Schema$Reservation>): void;
        get(params: Params$Resource$Admin$Projects$Locations$Reservations$Get, callback: BodyResponseCallback<Schema$Reservation>): void;
        get(callback: BodyResponseCallback<Schema$Reservation>): void;
        /**
         * Returns the list of reservations for the given project.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Admin$Projects$Locations$Reservations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Admin$Projects$Locations$Reservations$List, options?: MethodOptions): GaxiosPromise<Schema$ListReservationsResponse>;
        list(params: Params$Resource$Admin$Projects$Locations$Reservations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Admin$Projects$Locations$Reservations$List, options: MethodOptions | BodyResponseCallback<Schema$ListReservationsResponse>, callback: BodyResponseCallback<Schema$ListReservationsResponse>): void;
        list(params: Params$Resource$Admin$Projects$Locations$Reservations$List, callback: BodyResponseCallback<Schema$ListReservationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListReservationsResponse>): void;
        /**
         * Updates properties of the specified reservation.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Admin$Projects$Locations$Reservations$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Admin$Projects$Locations$Reservations$Patch, options?: MethodOptions): GaxiosPromise<Schema$Reservation>;
        patch(params: Params$Resource$Admin$Projects$Locations$Reservations$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Admin$Projects$Locations$Reservations$Patch, options: MethodOptions | BodyResponseCallback<Schema$Reservation>, callback: BodyResponseCallback<Schema$Reservation>): void;
        patch(params: Params$Resource$Admin$Projects$Locations$Reservations$Patch, callback: BodyResponseCallback<Schema$Reservation>): void;
        patch(callback: BodyResponseCallback<Schema$Reservation>): void;
    }
    export interface Params$Resource$Admin$Projects$Locations$Reservations$Create extends StandardParameters {
        /**
         * Required. The parent location in which to create the reservation. Structured like `projects/{project_number\}/locations/{location\}`.
         */
        parent?: string;
        /**
         * Required. The ID to use for the reservation, which will become the final component of the reservation's name. This value is structured like: `my-reservation-name`.
         */
        reservationId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Reservation;
    }
    export interface Params$Resource$Admin$Projects$Locations$Reservations$Delete extends StandardParameters {
        /**
         * Required. The name of the reservation to delete. Structured like: projects/{project_number\}/locations/{location\}/reservations/{reservation_id\}
         */
        name?: string;
    }
    export interface Params$Resource$Admin$Projects$Locations$Reservations$Get extends StandardParameters {
        /**
         * Required. The name of the reservation whose configuration to return. Structured like: projects/{project_number\}/locations/{location\}/reservations/{reservation_id\}
         */
        name?: string;
    }
    export interface Params$Resource$Admin$Projects$Locations$Reservations$List extends StandardParameters {
        /**
         * The maximum number of reservations to return. The service may return fewer than this value. If unset or zero, all reservations for the parent will be returned.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListReservations` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReservations` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. The parent whose reservations are to be listed. Structured like `projects/{project_number\}/locations/{location\}`.
         */
        parent?: string;
    }
    export interface Params$Resource$Admin$Projects$Locations$Reservations$Patch extends StandardParameters {
        /**
         * The name of the reservation. Structured like: projects/{project_number\}/locations/{location\}/reservations/{reservation_id\}
         */
        name?: string;
        /**
         * Required. A mask specifying the reservation fields to change.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Reservation;
    }
    export class Resource$Admin$Projects$Locations$Reservations$Topics {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Lists the topics attached to the specified reservation.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Admin$Projects$Locations$Reservations$Topics$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Admin$Projects$Locations$Reservations$Topics$List, options?: MethodOptions): GaxiosPromise<Schema$ListReservationTopicsResponse>;
        list(params: Params$Resource$Admin$Projects$Locations$Reservations$Topics$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Admin$Projects$Locations$Reservations$Topics$List, options: MethodOptions | BodyResponseCallback<Schema$ListReservationTopicsResponse>, callback: BodyResponseCallback<Schema$ListReservationTopicsResponse>): void;
        list(params: Params$Resource$Admin$Projects$Locations$Reservations$Topics$List, callback: BodyResponseCallback<Schema$ListReservationTopicsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListReservationTopicsResponse>): void;
    }
    export interface Params$Resource$Admin$Projects$Locations$Reservations$Topics$List extends StandardParameters {
        /**
         * Required. The name of the reservation whose topics to list. Structured like: projects/{project_number\}/locations/{location\}/reservations/{reservation_id\}
         */
        name?: string;
        /**
         * The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the given reservation will be returned.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListReservationTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListReservationTopics` must match the call that provided the page token.
         */
        pageToken?: string;
    }
    export class Resource$Admin$Projects$Locations$Subscriptions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a new subscription.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Admin$Projects$Locations$Subscriptions$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Admin$Projects$Locations$Subscriptions$Create, options?: MethodOptions): GaxiosPromise<Schema$Subscription>;
        create(params: Params$Resource$Admin$Projects$Locations$Subscriptions$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Admin$Projects$Locations$Subscriptions$Create, options: MethodOptions | BodyResponseCallback<Schema$Subscription>, callback: BodyResponseCallback<Schema$Subscription>): void;
        create(params: Params$Resource$Admin$Projects$Locations$Subscriptions$Create, callback: BodyResponseCallback<Schema$Subscription>): void;
        create(callback: BodyResponseCallback<Schema$Subscription>): void;
        /**
         * Deletes the specified subscription.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Admin$Projects$Locations$Subscriptions$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Admin$Projects$Locations$Subscriptions$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Admin$Projects$Locations$Subscriptions$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Admin$Projects$Locations$Subscriptions$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Admin$Projects$Locations$Subscriptions$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Returns the subscription configuration.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Admin$Projects$Locations$Subscriptions$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Admin$Projects$Locations$Subscriptions$Get, options?: MethodOptions): GaxiosPromise<Schema$Subscription>;
        get(params: Params$Resource$Admin$Projects$Locations$Subscriptions$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Admin$Projects$Locations$Subscriptions$Get, options: MethodOptions | BodyResponseCallback<Schema$Subscription>, callback: BodyResponseCallback<Schema$Subscription>): void;
        get(params: Params$Resource$Admin$Projects$Locations$Subscriptions$Get, callback: BodyResponseCallback<Schema$Subscription>): void;
        get(callback: BodyResponseCallback<Schema$Subscription>): void;
        /**
         * Returns the list of subscriptions for the given project.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Admin$Projects$Locations$Subscriptions$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Admin$Projects$Locations$Subscriptions$List, options?: MethodOptions): GaxiosPromise<Schema$ListSubscriptionsResponse>;
        list(params: Params$Resource$Admin$Projects$Locations$Subscriptions$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Admin$Projects$Locations$Subscriptions$List, options: MethodOptions | BodyResponseCallback<Schema$ListSubscriptionsResponse>, callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>): void;
        list(params: Params$Resource$Admin$Projects$Locations$Subscriptions$List, callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListSubscriptionsResponse>): void;
        /**
         * Updates properties of the specified subscription.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Admin$Projects$Locations$Subscriptions$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Admin$Projects$Locations$Subscriptions$Patch, options?: MethodOptions): GaxiosPromise<Schema$Subscription>;
        patch(params: Params$Resource$Admin$Projects$Locations$Subscriptions$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Admin$Projects$Locations$Subscriptions$Patch, options: MethodOptions | BodyResponseCallback<Schema$Subscription>, callback: BodyResponseCallback<Schema$Subscription>): void;
        patch(params: Params$Resource$Admin$Projects$Locations$Subscriptions$Patch, callback: BodyResponseCallback<Schema$Subscription>): void;
        patch(callback: BodyResponseCallback<Schema$Subscription>): void;
        /**
         * Performs an out-of-band seek for a subscription to a specified target, which may be timestamps or named positions within the message backlog. Seek translates these targets to cursors for each partition and orchestrates subscribers to start consuming messages from these seek cursors. If an operation is returned, the seek has been registered and subscribers will eventually receive messages from the seek cursors (i.e. eventual consistency), as long as they are using a minimum supported client library version and not a system that tracks cursors independently of Pub/Sub Lite (e.g. Apache Beam, Dataflow, Spark). The seek operation will fail for unsupported clients. If clients would like to know when subscribers react to the seek (or not), they can poll the operation. The seek operation will succeed and complete once subscribers are ready to receive messages from the seek cursors for all partitions of the topic. This means that the seek operation will not complete until all subscribers come online. If the previous seek operation has not yet completed, it will be aborted and the new invocation of seek will supersede it.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        seek(params: Params$Resource$Admin$Projects$Locations$Subscriptions$Seek, options: StreamMethodOptions): GaxiosPromise<Readable>;
        seek(params?: Params$Resource$Admin$Projects$Locations$Subscriptions$Seek, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        seek(params: Params$Resource$Admin$Projects$Locations$Subscriptions$Seek, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        seek(params: Params$Resource$Admin$Projects$Locations$Subscriptions$Seek, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        seek(params: Params$Resource$Admin$Projects$Locations$Subscriptions$Seek, callback: BodyResponseCallback<Schema$Operation>): void;
        seek(callback: BodyResponseCallback<Schema$Operation>): void;
    }
    export interface Params$Resource$Admin$Projects$Locations$Subscriptions$Create extends StandardParameters {
        /**
         * Required. The parent location in which to create the subscription. Structured like `projects/{project_number\}/locations/{location\}`.
         */
        parent?: string;
        /**
         * If true, the newly created subscription will only receive messages published after the subscription was created. Otherwise, the entire message backlog will be received on the subscription. Defaults to false.
         */
        skipBacklog?: boolean;
        /**
         * Required. The ID to use for the subscription, which will become the final component of the subscription's name. This value is structured like: `my-sub-name`.
         */
        subscriptionId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Subscription;
    }
    export interface Params$Resource$Admin$Projects$Locations$Subscriptions$Delete extends StandardParameters {
        /**
         * Required. The name of the subscription to delete.
         */
        name?: string;
    }
    export interface Params$Resource$Admin$Projects$Locations$Subscriptions$Get extends StandardParameters {
        /**
         * Required. The name of the subscription whose configuration to return.
         */
        name?: string;
    }
    export interface Params$Resource$Admin$Projects$Locations$Subscriptions$List extends StandardParameters {
        /**
         * The maximum number of subscriptions to return. The service may return fewer than this value. If unset or zero, all subscriptions for the parent will be returned.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListSubscriptions` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. The parent whose subscriptions are to be listed. Structured like `projects/{project_number\}/locations/{location\}`.
         */
        parent?: string;
    }
    export interface Params$Resource$Admin$Projects$Locations$Subscriptions$Patch extends StandardParameters {
        /**
         * The name of the subscription. Structured like: projects/{project_number\}/locations/{location\}/subscriptions/{subscription_id\}
         */
        name?: string;
        /**
         * Required. A mask specifying the subscription fields to change.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Subscription;
    }
    export interface Params$Resource$Admin$Projects$Locations$Subscriptions$Seek extends StandardParameters {
        /**
         * Required. The name of the subscription to seek.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SeekSubscriptionRequest;
    }
    export class Resource$Admin$Projects$Locations$Topics {
        context: APIRequestContext;
        subscriptions: Resource$Admin$Projects$Locations$Topics$Subscriptions;
        constructor(context: APIRequestContext);
        /**
         * Creates a new topic.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Admin$Projects$Locations$Topics$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Admin$Projects$Locations$Topics$Create, options?: MethodOptions): GaxiosPromise<Schema$Topic>;
        create(params: Params$Resource$Admin$Projects$Locations$Topics$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Admin$Projects$Locations$Topics$Create, options: MethodOptions | BodyResponseCallback<Schema$Topic>, callback: BodyResponseCallback<Schema$Topic>): void;
        create(params: Params$Resource$Admin$Projects$Locations$Topics$Create, callback: BodyResponseCallback<Schema$Topic>): void;
        create(callback: BodyResponseCallback<Schema$Topic>): void;
        /**
         * Deletes the specified topic.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Admin$Projects$Locations$Topics$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Admin$Projects$Locations$Topics$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Admin$Projects$Locations$Topics$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Admin$Projects$Locations$Topics$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Admin$Projects$Locations$Topics$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Returns the topic configuration.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Admin$Projects$Locations$Topics$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Admin$Projects$Locations$Topics$Get, options?: MethodOptions): GaxiosPromise<Schema$Topic>;
        get(params: Params$Resource$Admin$Projects$Locations$Topics$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Admin$Projects$Locations$Topics$Get, options: MethodOptions | BodyResponseCallback<Schema$Topic>, callback: BodyResponseCallback<Schema$Topic>): void;
        get(params: Params$Resource$Admin$Projects$Locations$Topics$Get, callback: BodyResponseCallback<Schema$Topic>): void;
        get(callback: BodyResponseCallback<Schema$Topic>): void;
        /**
         * Returns the partition information for the requested topic.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getPartitions(params: Params$Resource$Admin$Projects$Locations$Topics$Getpartitions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getPartitions(params?: Params$Resource$Admin$Projects$Locations$Topics$Getpartitions, options?: MethodOptions): GaxiosPromise<Schema$TopicPartitions>;
        getPartitions(params: Params$Resource$Admin$Projects$Locations$Topics$Getpartitions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getPartitions(params: Params$Resource$Admin$Projects$Locations$Topics$Getpartitions, options: MethodOptions | BodyResponseCallback<Schema$TopicPartitions>, callback: BodyResponseCallback<Schema$TopicPartitions>): void;
        getPartitions(params: Params$Resource$Admin$Projects$Locations$Topics$Getpartitions, callback: BodyResponseCallback<Schema$TopicPartitions>): void;
        getPartitions(callback: BodyResponseCallback<Schema$TopicPartitions>): void;
        /**
         * Returns the list of topics for the given project.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Admin$Projects$Locations$Topics$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Admin$Projects$Locations$Topics$List, options?: MethodOptions): GaxiosPromise<Schema$ListTopicsResponse>;
        list(params: Params$Resource$Admin$Projects$Locations$Topics$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Admin$Projects$Locations$Topics$List, options: MethodOptions | BodyResponseCallback<Schema$ListTopicsResponse>, callback: BodyResponseCallback<Schema$ListTopicsResponse>): void;
        list(params: Params$Resource$Admin$Projects$Locations$Topics$List, callback: BodyResponseCallback<Schema$ListTopicsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListTopicsResponse>): void;
        /**
         * Updates properties of the specified topic.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Admin$Projects$Locations$Topics$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Admin$Projects$Locations$Topics$Patch, options?: MethodOptions): GaxiosPromise<Schema$Topic>;
        patch(params: Params$Resource$Admin$Projects$Locations$Topics$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Admin$Projects$Locations$Topics$Patch, options: MethodOptions | BodyResponseCallback<Schema$Topic>, callback: BodyResponseCallback<Schema$Topic>): void;
        patch(params: Params$Resource$Admin$Projects$Locations$Topics$Patch, callback: BodyResponseCallback<Schema$Topic>): void;
        patch(callback: BodyResponseCallback<Schema$Topic>): void;
    }
    export interface Params$Resource$Admin$Projects$Locations$Topics$Create extends StandardParameters {
        /**
         * Required. The parent location in which to create the topic. Structured like `projects/{project_number\}/locations/{location\}`.
         */
        parent?: string;
        /**
         * Required. The ID to use for the topic, which will become the final component of the topic's name. This value is structured like: `my-topic-name`.
         */
        topicId?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Topic;
    }
    export interface Params$Resource$Admin$Projects$Locations$Topics$Delete extends StandardParameters {
        /**
         * Required. The name of the topic to delete.
         */
        name?: string;
    }
    export interface Params$Resource$Admin$Projects$Locations$Topics$Get extends StandardParameters {
        /**
         * Required. The name of the topic whose configuration to return.
         */
        name?: string;
    }
    export interface Params$Resource$Admin$Projects$Locations$Topics$Getpartitions extends StandardParameters {
        /**
         * Required. The topic whose partition information to return.
         */
        name?: string;
    }
    export interface Params$Resource$Admin$Projects$Locations$Topics$List extends StandardParameters {
        /**
         * The maximum number of topics to return. The service may return fewer than this value. If unset or zero, all topics for the parent will be returned.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListTopics` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopics` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. The parent whose topics are to be listed. Structured like `projects/{project_number\}/locations/{location\}`.
         */
        parent?: string;
    }
    export interface Params$Resource$Admin$Projects$Locations$Topics$Patch extends StandardParameters {
        /**
         * The name of the topic. Structured like: projects/{project_number\}/locations/{location\}/topics/{topic_id\}
         */
        name?: string;
        /**
         * Required. A mask specifying the topic fields to change.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Topic;
    }
    export class Resource$Admin$Projects$Locations$Topics$Subscriptions {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Lists the subscriptions attached to the specified topic.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Admin$Projects$Locations$Topics$Subscriptions$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Admin$Projects$Locations$Topics$Subscriptions$List, options?: MethodOptions): GaxiosPromise<Schema$ListTopicSubscriptionsResponse>;
        list(params: Params$Resource$Admin$Projects$Locations$Topics$Subscriptions$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Admin$Projects$Locations$Topics$Subscriptions$List, options: MethodOptions | BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>, callback: BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>): void;
        list(params: Params$Resource$Admin$Projects$Locations$Topics$Subscriptions$List, callback: BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListTopicSubscriptionsResponse>): void;
    }
    export interface Params$Resource$Admin$Projects$Locations$Topics$Subscriptions$List extends StandardParameters {
        /**
         * Required. The name of the topic whose subscriptions to list.
         */
        name?: string;
        /**
         * The maximum number of subscriptions to return. The service may return fewer than this value. If unset or zero, all subscriptions for the given topic will be returned.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListTopicSubscriptions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListTopicSubscriptions` must match the call that provided the page token.
         */
        pageToken?: string;
    }
    export class Resource$Cursor {
        context: APIRequestContext;
        projects: Resource$Cursor$Projects;
        constructor(context: APIRequestContext);
    }
    export class Resource$Cursor$Projects {
        context: APIRequestContext;
        locations: Resource$Cursor$Projects$Locations;
        constructor(context: APIRequestContext);
    }
    export class Resource$Cursor$Projects$Locations {
        context: APIRequestContext;
        subscriptions: Resource$Cursor$Projects$Locations$Subscriptions;
        constructor(context: APIRequestContext);
    }
    export class Resource$Cursor$Projects$Locations$Subscriptions {
        context: APIRequestContext;
        cursors: Resource$Cursor$Projects$Locations$Subscriptions$Cursors;
        constructor(context: APIRequestContext);
        /**
         * Updates the committed cursor.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        commitCursor(params: Params$Resource$Cursor$Projects$Locations$Subscriptions$Commitcursor, options: StreamMethodOptions): GaxiosPromise<Readable>;
        commitCursor(params?: Params$Resource$Cursor$Projects$Locations$Subscriptions$Commitcursor, options?: MethodOptions): GaxiosPromise<Schema$CommitCursorResponse>;
        commitCursor(params: Params$Resource$Cursor$Projects$Locations$Subscriptions$Commitcursor, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        commitCursor(params: Params$Resource$Cursor$Projects$Locations$Subscriptions$Commitcursor, options: MethodOptions | BodyResponseCallback<Schema$CommitCursorResponse>, callback: BodyResponseCallback<Schema$CommitCursorResponse>): void;
        commitCursor(params: Params$Resource$Cursor$Projects$Locations$Subscriptions$Commitcursor, callback: BodyResponseCallback<Schema$CommitCursorResponse>): void;
        commitCursor(callback: BodyResponseCallback<Schema$CommitCursorResponse>): void;
    }
    export interface Params$Resource$Cursor$Projects$Locations$Subscriptions$Commitcursor extends StandardParameters {
        /**
         * The subscription for which to update the cursor.
         */
        subscription?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CommitCursorRequest;
    }
    export class Resource$Cursor$Projects$Locations$Subscriptions$Cursors {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Returns all committed cursor information for a subscription.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Cursor$Projects$Locations$Subscriptions$Cursors$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Cursor$Projects$Locations$Subscriptions$Cursors$List, options?: MethodOptions): GaxiosPromise<Schema$ListPartitionCursorsResponse>;
        list(params: Params$Resource$Cursor$Projects$Locations$Subscriptions$Cursors$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Cursor$Projects$Locations$Subscriptions$Cursors$List, options: MethodOptions | BodyResponseCallback<Schema$ListPartitionCursorsResponse>, callback: BodyResponseCallback<Schema$ListPartitionCursorsResponse>): void;
        list(params: Params$Resource$Cursor$Projects$Locations$Subscriptions$Cursors$List, callback: BodyResponseCallback<Schema$ListPartitionCursorsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListPartitionCursorsResponse>): void;
    }
    export interface Params$Resource$Cursor$Projects$Locations$Subscriptions$Cursors$List extends StandardParameters {
        /**
         * The maximum number of cursors to return. The service may return fewer than this value. If unset or zero, all cursors for the parent will be returned.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListPartitionCursors` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListPartitionCursors` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. The subscription for which to retrieve cursors. Structured like `projects/{project_number\}/locations/{location\}/subscriptions/{subscription_id\}`.
         */
        parent?: string;
    }
    export class Resource$Topicstats {
        context: APIRequestContext;
        projects: Resource$Topicstats$Projects;
        constructor(context: APIRequestContext);
    }
    export class Resource$Topicstats$Projects {
        context: APIRequestContext;
        locations: Resource$Topicstats$Projects$Locations;
        constructor(context: APIRequestContext);
    }
    export class Resource$Topicstats$Projects$Locations {
        context: APIRequestContext;
        topics: Resource$Topicstats$Projects$Locations$Topics;
        constructor(context: APIRequestContext);
    }
    export class Resource$Topicstats$Projects$Locations$Topics {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Compute the head cursor for the partition. The head cursor's offset is guaranteed to be less than or equal to all messages which have not yet been acknowledged as published, and greater than the offset of any message whose publish has already been acknowledged. It is zero if there have never been messages in the partition.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        computeHeadCursor(params: Params$Resource$Topicstats$Projects$Locations$Topics$Computeheadcursor, options: StreamMethodOptions): GaxiosPromise<Readable>;
        computeHeadCursor(params?: Params$Resource$Topicstats$Projects$Locations$Topics$Computeheadcursor, options?: MethodOptions): GaxiosPromise<Schema$ComputeHeadCursorResponse>;
        computeHeadCursor(params: Params$Resource$Topicstats$Projects$Locations$Topics$Computeheadcursor, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        computeHeadCursor(params: Params$Resource$Topicstats$Projects$Locations$Topics$Computeheadcursor, options: MethodOptions | BodyResponseCallback<Schema$ComputeHeadCursorResponse>, callback: BodyResponseCallback<Schema$ComputeHeadCursorResponse>): void;
        computeHeadCursor(params: Params$Resource$Topicstats$Projects$Locations$Topics$Computeheadcursor, callback: BodyResponseCallback<Schema$ComputeHeadCursorResponse>): void;
        computeHeadCursor(callback: BodyResponseCallback<Schema$ComputeHeadCursorResponse>): void;
        /**
         * Compute statistics about a range of messages in a given topic and partition.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        computeMessageStats(params: Params$Resource$Topicstats$Projects$Locations$Topics$Computemessagestats, options: StreamMethodOptions): GaxiosPromise<Readable>;
        computeMessageStats(params?: Params$Resource$Topicstats$Projects$Locations$Topics$Computemessagestats, options?: MethodOptions): GaxiosPromise<Schema$ComputeMessageStatsResponse>;
        computeMessageStats(params: Params$Resource$Topicstats$Projects$Locations$Topics$Computemessagestats, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        computeMessageStats(params: Params$Resource$Topicstats$Projects$Locations$Topics$Computemessagestats, options: MethodOptions | BodyResponseCallback<Schema$ComputeMessageStatsResponse>, callback: BodyResponseCallback<Schema$ComputeMessageStatsResponse>): void;
        computeMessageStats(params: Params$Resource$Topicstats$Projects$Locations$Topics$Computemessagestats, callback: BodyResponseCallback<Schema$ComputeMessageStatsResponse>): void;
        computeMessageStats(callback: BodyResponseCallback<Schema$ComputeMessageStatsResponse>): void;
        /**
         * Compute the corresponding cursor for a publish or event time in a topic partition.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        computeTimeCursor(params: Params$Resource$Topicstats$Projects$Locations$Topics$Computetimecursor, options: StreamMethodOptions): GaxiosPromise<Readable>;
        computeTimeCursor(params?: Params$Resource$Topicstats$Projects$Locations$Topics$Computetimecursor, options?: MethodOptions): GaxiosPromise<Schema$ComputeTimeCursorResponse>;
        computeTimeCursor(params: Params$Resource$Topicstats$Projects$Locations$Topics$Computetimecursor, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        computeTimeCursor(params: Params$Resource$Topicstats$Projects$Locations$Topics$Computetimecursor, options: MethodOptions | BodyResponseCallback<Schema$ComputeTimeCursorResponse>, callback: BodyResponseCallback<Schema$ComputeTimeCursorResponse>): void;
        computeTimeCursor(params: Params$Resource$Topicstats$Projects$Locations$Topics$Computetimecursor, callback: BodyResponseCallback<Schema$ComputeTimeCursorResponse>): void;
        computeTimeCursor(callback: BodyResponseCallback<Schema$ComputeTimeCursorResponse>): void;
    }
    export interface Params$Resource$Topicstats$Projects$Locations$Topics$Computeheadcursor extends StandardParameters {
        /**
         * Required. The topic for which we should compute the head cursor.
         */
        topic?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ComputeHeadCursorRequest;
    }
    export interface Params$Resource$Topicstats$Projects$Locations$Topics$Computemessagestats extends StandardParameters {
        /**
         * Required. The topic for which we should compute message stats.
         */
        topic?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ComputeMessageStatsRequest;
    }
    export interface Params$Resource$Topicstats$Projects$Locations$Topics$Computetimecursor extends StandardParameters {
        /**
         * Required. The topic for which we should compute the cursor.
         */
        topic?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ComputeTimeCursorRequest;
    }
    export {};
}
