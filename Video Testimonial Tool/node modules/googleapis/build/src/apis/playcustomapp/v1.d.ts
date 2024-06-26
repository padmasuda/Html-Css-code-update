/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace playcustomapp_v1 {
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
     * Google Play Custom App Publishing API
     *
     * API to create and publish custom Android apps
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const playcustomapp = google.playcustomapp('v1');
     * ```
     */
    export class Playcustomapp {
        context: APIRequestContext;
        accounts: Resource$Accounts;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * This resource represents a custom app.
     */
    export interface Schema$CustomApp {
        /**
         * Default listing language in BCP 47 format.
         */
        languageCode?: string | null;
        /**
         * Organizations to which the custom app should be made available. If the request contains any organizations, then the app will be restricted to only these organizations. To support the organization linked to the developer account, the organization ID should be provided explicitly together with other organizations. If no organizations are provided, then the app is only available to the organization linked to the developer account.
         */
        organizations?: Schema$Organization[];
        /**
         * Output only. Package name of the created Android app. Only present in the API response.
         */
        packageName?: string | null;
        /**
         * Title for the Android app.
         */
        title?: string | null;
    }
    /**
     * Represents an organization that can access a custom app.
     */
    export interface Schema$Organization {
        /**
         * Required. ID of the organization.
         */
        organizationId?: string | null;
        /**
         * Optional. A human-readable name of the organization, to help recognize the organization.
         */
        organizationName?: string | null;
    }
    export class Resource$Accounts {
        context: APIRequestContext;
        customApps: Resource$Accounts$Customapps;
        constructor(context: APIRequestContext);
    }
    export class Resource$Accounts$Customapps {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a new custom app.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Accounts$Customapps$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Accounts$Customapps$Create, options?: MethodOptions): GaxiosPromise<Schema$CustomApp>;
        create(params: Params$Resource$Accounts$Customapps$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Accounts$Customapps$Create, options: MethodOptions | BodyResponseCallback<Schema$CustomApp>, callback: BodyResponseCallback<Schema$CustomApp>): void;
        create(params: Params$Resource$Accounts$Customapps$Create, callback: BodyResponseCallback<Schema$CustomApp>): void;
        create(callback: BodyResponseCallback<Schema$CustomApp>): void;
    }
    export interface Params$Resource$Accounts$Customapps$Create extends StandardParameters {
        /**
         * Developer account ID.
         */
        account?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CustomApp;
        /**
         * Media metadata
         */
        media?: {
            /**
             * Media mime-type
             */
            mimeType?: string;
            /**
             * Media body contents
             */
            body?: any;
        };
    }
    export {};
}
