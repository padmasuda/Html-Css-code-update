/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace adexperiencereport_v1 {
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
     * Ad Experience Report API
     *
     * Views Ad Experience Report data, and gets a list of sites that have a significant number of annoying ads.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const adexperiencereport = google.adexperiencereport('v1');
     * ```
     */
    export class Adexperiencereport {
        context: APIRequestContext;
        sites: Resource$Sites;
        violatingSites: Resource$Violatingsites;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * A site's Ad Experience Report summary on a single platform.
     */
    export interface Schema$PlatformSummary {
        /**
         * The site's Ad Experience Report status on this platform.
         */
        betterAdsStatus?: string | null;
        /**
         * The time at which [enforcement](https://support.google.com/webtools/answer/7308033) against the site began or will begin on this platform. Not set when the filter_status is OFF.
         */
        enforcementTime?: string | null;
        /**
         * The site's [enforcement status](https://support.google.com/webtools/answer/7308033) on this platform.
         */
        filterStatus?: string | null;
        /**
         * The time at which the site's status last changed on this platform.
         */
        lastChangeTime?: string | null;
        /**
         * The site's regions on this platform. No longer populated, because there is no longer any semantic difference between sites in different regions.
         */
        region?: string[] | null;
        /**
         * A link to the full Ad Experience Report for the site on this platform.. Not set in ViolatingSitesResponse. Note that you must complete the [Search Console verification process](https://support.google.com/webmasters/answer/9008080) for the site before you can access the full report.
         */
        reportUrl?: string | null;
        /**
         * Whether the site is currently under review on this platform.
         */
        underReview?: boolean | null;
    }
    /**
     * Response message for GetSiteSummary.
     */
    export interface Schema$SiteSummaryResponse {
        /**
         * The site's Ad Experience Report summary on desktop.
         */
        desktopSummary?: Schema$PlatformSummary;
        /**
         * The site's Ad Experience Report summary on mobile.
         */
        mobileSummary?: Schema$PlatformSummary;
        /**
         * The name of the reviewed site, e.g. `google.com`.
         */
        reviewedSite?: string | null;
    }
    /**
     * Response message for ListViolatingSites.
     */
    export interface Schema$ViolatingSitesResponse {
        /**
         * The list of violating sites.
         */
        violatingSites?: Schema$SiteSummaryResponse[];
    }
    export class Resource$Sites {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets a site's Ad Experience Report summary.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Sites$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Sites$Get, options?: MethodOptions): GaxiosPromise<Schema$SiteSummaryResponse>;
        get(params: Params$Resource$Sites$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Sites$Get, options: MethodOptions | BodyResponseCallback<Schema$SiteSummaryResponse>, callback: BodyResponseCallback<Schema$SiteSummaryResponse>): void;
        get(params: Params$Resource$Sites$Get, callback: BodyResponseCallback<Schema$SiteSummaryResponse>): void;
        get(callback: BodyResponseCallback<Schema$SiteSummaryResponse>): void;
    }
    export interface Params$Resource$Sites$Get extends StandardParameters {
        /**
         * Required. The name of the site whose summary to get, e.g. `sites/http%3A%2F%2Fwww.google.com%2F`. Format: `sites/{site\}`
         */
        name?: string;
    }
    export class Resource$Violatingsites {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Lists sites that are failing in the Ad Experience Report on at least one platform.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Violatingsites$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Violatingsites$List, options?: MethodOptions): GaxiosPromise<Schema$ViolatingSitesResponse>;
        list(params: Params$Resource$Violatingsites$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Violatingsites$List, options: MethodOptions | BodyResponseCallback<Schema$ViolatingSitesResponse>, callback: BodyResponseCallback<Schema$ViolatingSitesResponse>): void;
        list(params: Params$Resource$Violatingsites$List, callback: BodyResponseCallback<Schema$ViolatingSitesResponse>): void;
        list(callback: BodyResponseCallback<Schema$ViolatingSitesResponse>): void;
    }
    export interface Params$Resource$Violatingsites$List extends StandardParameters {
    }
    export {};
}
