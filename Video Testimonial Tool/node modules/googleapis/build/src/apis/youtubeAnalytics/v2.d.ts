/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace youtubeAnalytics_v2 {
    export interface Options extends GlobalOptions {
        version: 'v2';
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
     * YouTube Analytics API
     *
     * Retrieves your YouTube Analytics data.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const youtubeAnalytics = google.youtubeAnalytics('v2');
     * ```
     */
    export class Youtubeanalytics {
        context: APIRequestContext;
        groupItems: Resource$Groupitems;
        groups: Resource$Groups;
        reports: Resource$Reports;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Empty response.
     */
    export interface Schema$EmptyResponse {
        /**
         * Apiary error details
         */
        errors?: Schema$Errors;
    }
    /**
     * Describes one specific error.
     */
    export interface Schema$ErrorProto {
        /**
         * Error arguments, to be used when building user-friendly error messages given the error domain and code. Different error codes require different arguments.
         */
        argument?: string[] | null;
        /**
         * Error code in the error domain. This should correspond to a value of the enum type whose name is in domain. See the core error domain in error_domain.proto.
         */
        code?: string | null;
        /**
         * Debugging information, which should not be shared externally.
         */
        debugInfo?: string | null;
        /**
         * Error domain. RoSy services can define their own domain and error codes. This should normally be the name of an enum type, such as: gdata.CoreErrorDomain
         */
        domain?: string | null;
        /**
         * A short explanation for the error, which can be shared outside Google. Please set domain, code and arguments whenever possible instead of this error message so that external APIs can build safe error messages themselves. External messages built in a RoSy interface will most likely refer to information and concepts that are not available externally and should not be exposed. It is safer if external APIs can understand the errors and decide what the error message should look like.
         */
        externalErrorMessage?: string | null;
        /**
         * Location of the error, as specified by the location type. If location_type is PATH, this should be a path to a field that's relative to the request, using FieldPath notation (net/proto2/util/public/field_path.h). Examples: authenticated_user.gaia_id resource.address[2].country
         */
        location?: string | null;
        locationType?: string | null;
    }
    /**
     * Request Error information. The presence of an error field signals that the operation has failed.
     */
    export interface Schema$Errors {
        /**
         * Global error code. Deprecated and ignored. Set custom error codes in ErrorProto.domain and ErrorProto.code instead.
         */
        code?: string | null;
        /**
         * Specific error description and codes
         */
        error?: Schema$ErrorProto[];
        /**
         * Request identifier generated by the service, which can be used to identify the error in the logs
         */
        requestId?: string | null;
    }
    /**
     * A group.
     */
    export interface Schema$Group {
        /**
         * The `contentDetails` object contains additional information about the group, such as the number and type of items that it contains.
         */
        contentDetails?: Schema$GroupContentDetails;
        /**
         * Apiary error details
         */
        errors?: Schema$Errors;
        /**
         * The Etag of this resource.
         */
        etag?: string | null;
        /**
         * The ID that YouTube uses to uniquely identify the group.
         */
        id?: string | null;
        /**
         * Identifies the API resource's type. The value will be `youtube#group`.
         */
        kind?: string | null;
        /**
         * The `snippet` object contains basic information about the group, including its creation date and name.
         */
        snippet?: Schema$GroupSnippet;
    }
    /**
     * A group's content details.
     */
    export interface Schema$GroupContentDetails {
        /**
         * The number of items in the group.
         */
        itemCount?: string | null;
        /**
         * The type of resources that the group contains. Valid values for this property are: * `youtube#channel` * `youtube#playlist` * `youtube#video` * `youtubePartner#asset`
         */
        itemType?: string | null;
    }
    /**
     * A group item.
     */
    export interface Schema$GroupItem {
        /**
         * Apiary error details
         */
        errors?: Schema$Errors;
        /**
         * The Etag of this resource.
         */
        etag?: string | null;
        /**
         * The ID that YouTube uses to uniquely identify the group that contains the item.
         */
        groupId?: string | null;
        /**
         * The ID that YouTube uses to uniquely identify the `channel`, `video`, `playlist`, or `asset` resource that is included in the group. Note that this ID refers specifically to the inclusion of that resource in a particular group and is different than the channel ID, video ID, playlist ID, or asset ID that uniquely identifies the resource itself. The `resource.id` property's value specifies the unique channel, video, playlist, or asset ID.
         */
        id?: string | null;
        /**
         * Identifies the API resource's type. The value will be `youtube#groupItem`.
         */
        kind?: string | null;
        /**
         * The `resource` object contains information that identifies the item being added to the group.
         */
        resource?: Schema$GroupItemResource;
    }
    export interface Schema$GroupItemResource {
        /**
         * The channel, video, playlist, or asset ID that YouTube uses to uniquely identify the item that is being added to the group.
         */
        id?: string | null;
        /**
         * Identifies the type of resource being added to the group. Valid values for this property are: * `youtube#channel` * `youtube#playlist` * `youtube#video` * `youtubePartner#asset`
         */
        kind?: string | null;
    }
    /**
     * A group snippet.
     */
    export interface Schema$GroupSnippet {
        /**
         * The date and time that the group was created. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format.
         */
        publishedAt?: string | null;
        /**
         * The group name. The value must be a non-empty string.
         */
        title?: string | null;
    }
    /**
     * Response message for GroupsService.ListGroupItems.
     */
    export interface Schema$ListGroupItemsResponse {
        /**
         * Apiary error details
         */
        errors?: Schema$Errors;
        /**
         * The Etag of this resource.
         */
        etag?: string | null;
        /**
         * A list of groups that match the API request parameters. Each item in the list represents a `groupItem` resource.
         */
        items?: Schema$GroupItem[];
        /**
         * Identifies the API resource's type. The value will be `youtube#groupItemListResponse`.
         */
        kind?: string | null;
    }
    /**
     * Response message for GroupsService.ListGroups.
     */
    export interface Schema$ListGroupsResponse {
        /**
         * Apiary error details
         */
        errors?: Schema$Errors;
        /**
         * The Etag of this resource.
         */
        etag?: string | null;
        /**
         * A list of groups that match the API request parameters. Each item in the list represents a `group` resource.
         */
        items?: Schema$Group[];
        /**
         * Identifies the API resource's type. The value will be `youtube#groupListResponse`.
         */
        kind?: string | null;
        /**
         * The token that can be used as the value of the `pageToken` parameter to retrieve the next page in the result set.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response message for TargetedQueriesService.Query.
     */
    export interface Schema$QueryResponse {
        /**
         * This value specifies information about the data returned in the `rows` fields. Each item in the `columnHeaders` list identifies a field returned in the `rows` value, which contains a list of comma-delimited data. The `columnHeaders` list will begin with the dimensions specified in the API request, which will be followed by the metrics specified in the API request. The order of both dimensions and metrics will match the ordering in the API request. For example, if the API request contains the parameters `dimensions=ageGroup,gender&metrics=viewerPercentage`, the API response will return columns in this order: `ageGroup`, `gender`, `viewerPercentage`.
         */
        columnHeaders?: Schema$ResultTableColumnHeader[];
        /**
         * When set, indicates that the operation failed.
         */
        errors?: Schema$Errors;
        /**
         * This value specifies the type of data included in the API response. For the query method, the kind property value will be `youtubeAnalytics#resultTable`.
         */
        kind?: string | null;
        /**
         * The list contains all rows of the result table. Each item in the list is an array that contains comma-delimited data corresponding to a single row of data. The order of the comma-delimited data fields will match the order of the columns listed in the `columnHeaders` field. If no data is available for the given query, the `rows` element will be omitted from the response. The response for a query with the `day` dimension will not contain rows for the most recent days.
         */
        rows?: any[][] | null;
    }
    /**
     * The description of a column of the result table.
     */
    export interface Schema$ResultTableColumnHeader {
        /**
         * The type of the column (`DIMENSION` or `METRIC`).
         */
        columnType?: string | null;
        /**
         * The type of the data in the column (`STRING`, `INTEGER`, `FLOAT`, etc.).
         */
        dataType?: string | null;
        /**
         * The name of the dimension or metric.
         */
        name?: string | null;
    }
    export class Resource$Groupitems {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Removes an item from a group.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Groupitems$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Groupitems$Delete, options?: MethodOptions): GaxiosPromise<Schema$EmptyResponse>;
        delete(params: Params$Resource$Groupitems$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Groupitems$Delete, options: MethodOptions | BodyResponseCallback<Schema$EmptyResponse>, callback: BodyResponseCallback<Schema$EmptyResponse>): void;
        delete(params: Params$Resource$Groupitems$Delete, callback: BodyResponseCallback<Schema$EmptyResponse>): void;
        delete(callback: BodyResponseCallback<Schema$EmptyResponse>): void;
        /**
         * Creates a group item.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Groupitems$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Groupitems$Insert, options?: MethodOptions): GaxiosPromise<Schema$GroupItem>;
        insert(params: Params$Resource$Groupitems$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Groupitems$Insert, options: MethodOptions | BodyResponseCallback<Schema$GroupItem>, callback: BodyResponseCallback<Schema$GroupItem>): void;
        insert(params: Params$Resource$Groupitems$Insert, callback: BodyResponseCallback<Schema$GroupItem>): void;
        insert(callback: BodyResponseCallback<Schema$GroupItem>): void;
        /**
         * Returns a collection of group items that match the API request parameters.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Groupitems$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Groupitems$List, options?: MethodOptions): GaxiosPromise<Schema$ListGroupItemsResponse>;
        list(params: Params$Resource$Groupitems$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Groupitems$List, options: MethodOptions | BodyResponseCallback<Schema$ListGroupItemsResponse>, callback: BodyResponseCallback<Schema$ListGroupItemsResponse>): void;
        list(params: Params$Resource$Groupitems$List, callback: BodyResponseCallback<Schema$ListGroupItemsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListGroupItemsResponse>): void;
    }
    export interface Params$Resource$Groupitems$Delete extends StandardParameters {
        /**
         * The `id` parameter specifies the YouTube group item ID of the group item that is being deleted.
         */
        id?: string;
        /**
         * This parameter can only be used in a properly authorized request. **Note:** This parameter is intended exclusively for YouTube content partners that own and manage many different YouTube channels. The `onBehalfOfContentOwner` parameter indicates that the request's authorization credentials identify a YouTube user who is acting on behalf of the content owner specified in the parameter value. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The account that the user authenticates with must be linked to the specified YouTube content owner.
         */
        onBehalfOfContentOwner?: string;
    }
    export interface Params$Resource$Groupitems$Insert extends StandardParameters {
        /**
         * This parameter can only be used in a properly authorized request. **Note:** This parameter is intended exclusively for YouTube content partners that own and manage many different YouTube channels. The `onBehalfOfContentOwner` parameter indicates that the request's authorization credentials identify a YouTube user who is acting on behalf of the content owner specified in the parameter value. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The account that the user authenticates with must be linked to the specified YouTube content owner.
         */
        onBehalfOfContentOwner?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GroupItem;
    }
    export interface Params$Resource$Groupitems$List extends StandardParameters {
        /**
         * The `groupId` parameter specifies the unique ID of the group for which you want to retrieve group items.
         */
        groupId?: string;
        /**
         * This parameter can only be used in a properly authorized request. **Note:** This parameter is intended exclusively for YouTube content partners that own and manage many different YouTube channels. The `onBehalfOfContentOwner` parameter indicates that the request's authorization credentials identify a YouTube user who is acting on behalf of the content owner specified in the parameter value. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The account that the user authenticates with must be linked to the specified YouTube content owner.
         */
        onBehalfOfContentOwner?: string;
    }
    export class Resource$Groups {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Deletes a group.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Groups$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Groups$Delete, options?: MethodOptions): GaxiosPromise<Schema$EmptyResponse>;
        delete(params: Params$Resource$Groups$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Groups$Delete, options: MethodOptions | BodyResponseCallback<Schema$EmptyResponse>, callback: BodyResponseCallback<Schema$EmptyResponse>): void;
        delete(params: Params$Resource$Groups$Delete, callback: BodyResponseCallback<Schema$EmptyResponse>): void;
        delete(callback: BodyResponseCallback<Schema$EmptyResponse>): void;
        /**
         * Creates a group.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        insert(params: Params$Resource$Groups$Insert, options: StreamMethodOptions): GaxiosPromise<Readable>;
        insert(params?: Params$Resource$Groups$Insert, options?: MethodOptions): GaxiosPromise<Schema$Group>;
        insert(params: Params$Resource$Groups$Insert, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        insert(params: Params$Resource$Groups$Insert, options: MethodOptions | BodyResponseCallback<Schema$Group>, callback: BodyResponseCallback<Schema$Group>): void;
        insert(params: Params$Resource$Groups$Insert, callback: BodyResponseCallback<Schema$Group>): void;
        insert(callback: BodyResponseCallback<Schema$Group>): void;
        /**
         * Returns a collection of groups that match the API request parameters. For example, you can retrieve all groups that the authenticated user owns, or you can retrieve one or more groups by their unique IDs.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Groups$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Groups$List, options?: MethodOptions): GaxiosPromise<Schema$ListGroupsResponse>;
        list(params: Params$Resource$Groups$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Groups$List, options: MethodOptions | BodyResponseCallback<Schema$ListGroupsResponse>, callback: BodyResponseCallback<Schema$ListGroupsResponse>): void;
        list(params: Params$Resource$Groups$List, callback: BodyResponseCallback<Schema$ListGroupsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListGroupsResponse>): void;
        /**
         * Modifies a group. For example, you could change a group's title.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        update(params: Params$Resource$Groups$Update, options: StreamMethodOptions): GaxiosPromise<Readable>;
        update(params?: Params$Resource$Groups$Update, options?: MethodOptions): GaxiosPromise<Schema$Group>;
        update(params: Params$Resource$Groups$Update, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        update(params: Params$Resource$Groups$Update, options: MethodOptions | BodyResponseCallback<Schema$Group>, callback: BodyResponseCallback<Schema$Group>): void;
        update(params: Params$Resource$Groups$Update, callback: BodyResponseCallback<Schema$Group>): void;
        update(callback: BodyResponseCallback<Schema$Group>): void;
    }
    export interface Params$Resource$Groups$Delete extends StandardParameters {
        /**
         * The `id` parameter specifies the YouTube group ID of the group that is being deleted.
         */
        id?: string;
        /**
         * This parameter can only be used in a properly authorized request. **Note:** This parameter is intended exclusively for YouTube content partners that own and manage many different YouTube channels. The `onBehalfOfContentOwner` parameter indicates that the request's authorization credentials identify a YouTube user who is acting on behalf of the content owner specified in the parameter value. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The account that the user authenticates with must be linked to the specified YouTube content owner.
         */
        onBehalfOfContentOwner?: string;
    }
    export interface Params$Resource$Groups$Insert extends StandardParameters {
        /**
         * This parameter can only be used in a properly authorized request. **Note:** This parameter is intended exclusively for YouTube content partners that own and manage many different YouTube channels. The `onBehalfOfContentOwner` parameter indicates that the request's authorization credentials identify a YouTube user who is acting on behalf of the content owner specified in the parameter value. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The account that the user authenticates with must be linked to the specified YouTube content owner.
         */
        onBehalfOfContentOwner?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Group;
    }
    export interface Params$Resource$Groups$List extends StandardParameters {
        /**
         * The `id` parameter specifies a comma-separated list of the YouTube group ID(s) for the resource(s) that are being retrieved. Each group must be owned by the authenticated user. In a `group` resource, the `id` property specifies the group's YouTube group ID. Note that if you do not specify a value for the `id` parameter, then you must set the `mine` parameter to `true`.
         */
        id?: string;
        /**
         * This parameter can only be used in a properly authorized request. Set this parameter's value to true to retrieve all groups owned by the authenticated user.
         */
        mine?: boolean;
        /**
         * This parameter can only be used in a properly authorized request. **Note:** This parameter is intended exclusively for YouTube content partners that own and manage many different YouTube channels. The `onBehalfOfContentOwner` parameter indicates that the request's authorization credentials identify a YouTube user who is acting on behalf of the content owner specified in the parameter value. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The account that the user authenticates with must be linked to the specified YouTube content owner.
         */
        onBehalfOfContentOwner?: string;
        /**
         * The `pageToken` parameter identifies a specific page in the result set that should be returned. In an API response, the `nextPageToken` property identifies the next page that can be retrieved.
         */
        pageToken?: string;
    }
    export interface Params$Resource$Groups$Update extends StandardParameters {
        /**
         * This parameter can only be used in a properly authorized request. **Note:** This parameter is intended exclusively for YouTube content partners that own and manage many different YouTube channels. The `onBehalfOfContentOwner` parameter indicates that the request's authorization credentials identify a YouTube user who is acting on behalf of the content owner specified in the parameter value. It allows content owners to authenticate once and get access to all their video and channel data, without having to provide authentication credentials for each individual channel. The account that the user authenticates with must be linked to the specified YouTube content owner.
         */
        onBehalfOfContentOwner?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Group;
    }
    export class Resource$Reports {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Retrieve your YouTube Analytics reports.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        query(params: Params$Resource$Reports$Query, options: StreamMethodOptions): GaxiosPromise<Readable>;
        query(params?: Params$Resource$Reports$Query, options?: MethodOptions): GaxiosPromise<Schema$QueryResponse>;
        query(params: Params$Resource$Reports$Query, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        query(params: Params$Resource$Reports$Query, options: MethodOptions | BodyResponseCallback<Schema$QueryResponse>, callback: BodyResponseCallback<Schema$QueryResponse>): void;
        query(params: Params$Resource$Reports$Query, callback: BodyResponseCallback<Schema$QueryResponse>): void;
        query(callback: BodyResponseCallback<Schema$QueryResponse>): void;
    }
    export interface Params$Resource$Reports$Query extends StandardParameters {
        /**
         * The currency to which financial metrics should be converted. The default is US Dollar (USD). If the result contains no financial metrics, this flag will be ignored. Responds with an error if the specified currency is not recognized.", pattern: [A-Z]{3\}
         */
        currency?: string;
        /**
         * A comma-separated list of YouTube Analytics dimensions, such as `views` or `ageGroup,gender`. See the [Available Reports](/youtube/analytics/v2/available_reports) document for a list of the reports that you can retrieve and the dimensions used for those reports. Also see the [Dimensions](/youtube/analytics/v2/dimsmets/dims) document for definitions of those dimensions." pattern: [0-9a-zA-Z,]+
         */
        dimensions?: string;
        /**
         * The end date for fetching YouTube Analytics data. The value should be in `YYYY-MM-DD` format. required: true, pattern: [0-9]{4\}-[0-9]{2\}-[0-9]{2\}
         */
        endDate?: string;
        /**
         * A list of filters that should be applied when retrieving YouTube Analytics data. The [Available Reports](/youtube/analytics/v2/available_reports) document identifies the dimensions that can be used to filter each report, and the [Dimensions](/youtube/analytics/v2/dimsmets/dims) document defines those dimensions. If a request uses multiple filters, join them together with a semicolon (`;`), and the returned result table will satisfy both filters. For example, a filters parameter value of `video==dMH0bHeiRNg;country==IT` restricts the result set to include data for the given video in Italy.",
         */
        filters?: string;
        /**
         * Identifies the YouTube channel or content owner for which you are retrieving YouTube Analytics data. - To request data for a YouTube user, set the `ids` parameter value to `channel==CHANNEL_ID`, where `CHANNEL_ID` specifies the unique YouTube channel ID. - To request data for a YouTube CMS content owner, set the `ids` parameter value to `contentOwner==OWNER_NAME`, where `OWNER_NAME` is the CMS name of the content owner. required: true, pattern: [a-zA-Z]+==[a-zA-Z0-9_+-]+
         */
        ids?: string;
        /**
         * If set to true historical data (i.e. channel data from before the linking of the channel to the content owner) will be retrieved.",
         */
        includeHistoricalChannelData?: boolean;
        /**
         * The maximum number of rows to include in the response.", minValue: 1
         */
        maxResults?: number;
        /**
         * A comma-separated list of YouTube Analytics metrics, such as `views` or `likes,dislikes`. See the [Available Reports](/youtube/analytics/v2/available_reports) document for a list of the reports that you can retrieve and the metrics available in each report, and see the [Metrics](/youtube/analytics/v2/dimsmets/mets) document for definitions of those metrics. required: true, pattern: [0-9a-zA-Z,]+
         */
        metrics?: string;
        /**
         * A comma-separated list of dimensions or metrics that determine the sort order for YouTube Analytics data. By default the sort order is ascending. The '`-`' prefix causes descending sort order.", pattern: [-0-9a-zA-Z,]+
         */
        sort?: string;
        /**
         * The start date for fetching YouTube Analytics data. The value should be in `YYYY-MM-DD` format. required: true, pattern: "[0-9]{4\}-[0-9]{2\}-[0-9]{2\}
         */
        startDate?: string;
        /**
         * An index of the first entity to retrieve. Use this parameter as a pagination mechanism along with the max-results parameter (one-based, inclusive).", minValue: 1
         */
        startIndex?: number;
    }
    export {};
}
