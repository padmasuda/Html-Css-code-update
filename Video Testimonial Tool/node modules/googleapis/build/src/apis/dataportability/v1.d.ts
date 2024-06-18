/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace dataportability_v1 {
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
     * Data Portability API
     *
     * The Data Portability API lets you build applications that request authorization from a user to move a copy of data from Google services into your application. This enables data portability and facilitates switching services.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const dataportability = google.dataportability('v1');
     * ```
     */
    export class Dataportability {
        context: APIRequestContext;
        archiveJobs: Resource$Archivejobs;
        authorization: Resource$Authorization;
        portabilityArchive: Resource$Portabilityarchive;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
     */
    export interface Schema$Empty {
    }
    /**
     * Request to kick off an Archive job.
     */
    export interface Schema$InitiatePortabilityArchiveRequest {
        /**
         * The resources from which you're exporting data. These values have a 1:1 correspondence with the OAuth scopes.
         */
        resources?: string[] | null;
    }
    /**
     * Response from initiating an Archive job.
     */
    export interface Schema$InitiatePortabilityArchiveResponse {
        /**
         * The archive job ID that is initiated in the API. This can be used to get the state of the job.
         */
        archiveJobId?: string | null;
    }
    /**
     * Resource that contains the state of an Archive job.
     */
    export interface Schema$PortabilityArchiveState {
        /**
         * The resource name of ArchiveJob's PortabilityArchiveState singleton. The format is: archiveJobs/{archive_job\}/portabilityArchiveState. archive_job is the job ID provided in the request.
         */
        name?: string | null;
        /**
         * Resource that represents the state of the Archive job.
         */
        state?: string | null;
        /**
         * If the state is complete, this method returns the signed URLs of the objects in the Cloud Storage bucket.
         */
        urls?: string[] | null;
    }
    /**
     * Request to reset exhausted OAuth scopes.
     */
    export interface Schema$ResetAuthorizationRequest {
    }
    /**
     * Request to retry a failed Portability Archive job.
     */
    export interface Schema$RetryPortabilityArchiveRequest {
    }
    /**
     * Response from retrying a Portability Archive.
     */
    export interface Schema$RetryPortabilityArchiveResponse {
        /**
         * The archive job ID that is initiated by the retry endpoint. This can be used to get the state of the new job.
         */
        archiveJobId?: string | null;
    }
    export class Resource$Archivejobs {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Retrieves the state of an Archive job for the Portability API.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getPortabilityArchiveState(params: Params$Resource$Archivejobs$Getportabilityarchivestate, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getPortabilityArchiveState(params?: Params$Resource$Archivejobs$Getportabilityarchivestate, options?: MethodOptions): GaxiosPromise<Schema$PortabilityArchiveState>;
        getPortabilityArchiveState(params: Params$Resource$Archivejobs$Getportabilityarchivestate, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getPortabilityArchiveState(params: Params$Resource$Archivejobs$Getportabilityarchivestate, options: MethodOptions | BodyResponseCallback<Schema$PortabilityArchiveState>, callback: BodyResponseCallback<Schema$PortabilityArchiveState>): void;
        getPortabilityArchiveState(params: Params$Resource$Archivejobs$Getportabilityarchivestate, callback: BodyResponseCallback<Schema$PortabilityArchiveState>): void;
        getPortabilityArchiveState(callback: BodyResponseCallback<Schema$PortabilityArchiveState>): void;
        /**
         * Retries a failed Portability Archive job.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        retry(params: Params$Resource$Archivejobs$Retry, options: StreamMethodOptions): GaxiosPromise<Readable>;
        retry(params?: Params$Resource$Archivejobs$Retry, options?: MethodOptions): GaxiosPromise<Schema$RetryPortabilityArchiveResponse>;
        retry(params: Params$Resource$Archivejobs$Retry, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        retry(params: Params$Resource$Archivejobs$Retry, options: MethodOptions | BodyResponseCallback<Schema$RetryPortabilityArchiveResponse>, callback: BodyResponseCallback<Schema$RetryPortabilityArchiveResponse>): void;
        retry(params: Params$Resource$Archivejobs$Retry, callback: BodyResponseCallback<Schema$RetryPortabilityArchiveResponse>): void;
        retry(callback: BodyResponseCallback<Schema$RetryPortabilityArchiveResponse>): void;
    }
    export interface Params$Resource$Archivejobs$Getportabilityarchivestate extends StandardParameters {
        /**
         * Required. The archive job ID that is returned when you request the state of the job. The format is: archiveJobs/{archive_job\}/portabilityArchiveState. archive_job is the job ID returned by the InitiatePortabilityArchiveResponse.
         */
        name?: string;
    }
    export interface Params$Resource$Archivejobs$Retry extends StandardParameters {
        /**
         * Required. The Archive job ID you're retrying. This is returned by the InitiatePortabilityArchiveResponse. Retrying is only executed if the initial job failed.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RetryPortabilityArchiveRequest;
    }
    export class Resource$Authorization {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Revokes OAuth tokens and resets exhausted scopes for a user/project pair. This method allows you to initiate a request after a new consent is granted. This method also indicates that previous archives can be garbage collected. You should call this method when all jobs are complete and all archives are downloaded. Do not call it only when you start a new job.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        reset(params: Params$Resource$Authorization$Reset, options: StreamMethodOptions): GaxiosPromise<Readable>;
        reset(params?: Params$Resource$Authorization$Reset, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        reset(params: Params$Resource$Authorization$Reset, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        reset(params: Params$Resource$Authorization$Reset, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        reset(params: Params$Resource$Authorization$Reset, callback: BodyResponseCallback<Schema$Empty>): void;
        reset(callback: BodyResponseCallback<Schema$Empty>): void;
    }
    export interface Params$Resource$Authorization$Reset extends StandardParameters {
        /**
         * Request body metadata
         */
        requestBody?: Schema$ResetAuthorizationRequest;
    }
    export class Resource$Portabilityarchive {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Initiates a new Archive job for the Portability API.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        initiate(params: Params$Resource$Portabilityarchive$Initiate, options: StreamMethodOptions): GaxiosPromise<Readable>;
        initiate(params?: Params$Resource$Portabilityarchive$Initiate, options?: MethodOptions): GaxiosPromise<Schema$InitiatePortabilityArchiveResponse>;
        initiate(params: Params$Resource$Portabilityarchive$Initiate, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        initiate(params: Params$Resource$Portabilityarchive$Initiate, options: MethodOptions | BodyResponseCallback<Schema$InitiatePortabilityArchiveResponse>, callback: BodyResponseCallback<Schema$InitiatePortabilityArchiveResponse>): void;
        initiate(params: Params$Resource$Portabilityarchive$Initiate, callback: BodyResponseCallback<Schema$InitiatePortabilityArchiveResponse>): void;
        initiate(callback: BodyResponseCallback<Schema$InitiatePortabilityArchiveResponse>): void;
    }
    export interface Params$Resource$Portabilityarchive$Initiate extends StandardParameters {
        /**
         * Request body metadata
         */
        requestBody?: Schema$InitiatePortabilityArchiveRequest;
    }
    export {};
}
