/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace oslogin_v1beta {
    export interface Options extends GlobalOptions {
        version: 'v1beta';
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
     * Cloud OS Login API
     *
     * You can use OS Login to manage access to your VM instances using IAM roles.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const oslogin = google.oslogin('v1beta');
     * ```
     */
    export class Oslogin {
        context: APIRequestContext;
        users: Resource$Users;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
     */
    export interface Schema$Empty {
    }
    /**
     * A response message for importing an SSH public key.
     */
    export interface Schema$ImportSshPublicKeyResponse {
        /**
         * Detailed information about import results.
         */
        details?: string | null;
        /**
         * The login profile information for the user.
         */
        loginProfile?: Schema$LoginProfile;
    }
    /**
     * The user profile information used for logging in to a virtual machine on Google Compute Engine.
     */
    export interface Schema$LoginProfile {
        /**
         * Required. A unique user ID.
         */
        name?: string | null;
        /**
         * The list of POSIX accounts associated with the user.
         */
        posixAccounts?: Schema$PosixAccount[];
        /**
         * The registered security key credentials for a user.
         */
        securityKeys?: Schema$SecurityKey[];
        /**
         * A map from SSH public key fingerprint to the associated key object.
         */
        sshPublicKeys?: {
            [key: string]: Schema$SshPublicKey;
        } | null;
    }
    /**
     * The POSIX account information associated with a Google account.
     */
    export interface Schema$PosixAccount {
        /**
         * Output only. A POSIX account identifier.
         */
        accountId?: string | null;
        /**
         * The GECOS (user information) entry for this account.
         */
        gecos?: string | null;
        /**
         * The default group ID.
         */
        gid?: string | null;
        /**
         * The path to the home directory for this account.
         */
        homeDirectory?: string | null;
        /**
         * Output only. The canonical resource name.
         */
        name?: string | null;
        /**
         * The operating system type where this account applies.
         */
        operatingSystemType?: string | null;
        /**
         * Only one POSIX account can be marked as primary.
         */
        primary?: boolean | null;
        /**
         * The path to the logic shell for this account.
         */
        shell?: string | null;
        /**
         * System identifier for which account the username or uid applies to. By default, the empty value is used.
         */
        systemId?: string | null;
        /**
         * The user ID.
         */
        uid?: string | null;
        /**
         * The username of the POSIX account.
         */
        username?: string | null;
    }
    /**
     * The credential information for a Google registered security key.
     */
    export interface Schema$SecurityKey {
        /**
         * The security key nickname explicitly set by the user.
         */
        deviceNickname?: string | null;
        /**
         * Hardware-backed private key text in SSH format.
         */
        privateKey?: string | null;
        /**
         * Public key text in SSH format, defined by [RFC4253]("https://www.ietf.org/rfc/rfc4253.txt") section 6.6.
         */
        publicKey?: string | null;
        /**
         * The U2F protocol type.
         */
        universalTwoFactor?: Schema$UniversalTwoFactor;
        /**
         * The Web Authentication protocol type.
         */
        webAuthn?: Schema$WebAuthn;
    }
    export interface Schema$SignSshPublicKeyRequest {
        /**
         * The SSH public key to sign.
         */
        sshPublicKey?: string | null;
    }
    export interface Schema$SignSshPublicKeyResponse {
        /**
         * The signed SSH public key to use in the SSH handshake.
         */
        signedSshPublicKey?: string | null;
    }
    /**
     * The SSH public key information associated with a Google account.
     */
    export interface Schema$SshPublicKey {
        /**
         * An expiration time in microseconds since epoch.
         */
        expirationTimeUsec?: string | null;
        /**
         * Output only. The SHA-256 fingerprint of the SSH public key.
         */
        fingerprint?: string | null;
        /**
         * Public key text in SSH format, defined by RFC4253 section 6.6.
         */
        key?: string | null;
        /**
         * Output only. The canonical resource name.
         */
        name?: string | null;
    }
    /**
     * Security key information specific to the U2F protocol.
     */
    export interface Schema$UniversalTwoFactor {
        /**
         * Application ID for the U2F protocol.
         */
        appId?: string | null;
    }
    /**
     * Security key information specific to the Web Authentication protocol.
     */
    export interface Schema$WebAuthn {
        /**
         * Relying party ID for Web Authentication.
         */
        rpId?: string | null;
    }
    export class Resource$Users {
        context: APIRequestContext;
        projects: Resource$Users$Projects;
        sshPublicKeys: Resource$Users$Sshpublickeys;
        constructor(context: APIRequestContext);
        /**
         * Retrieves the profile information used for logging in to a virtual machine on Google Compute Engine.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getLoginProfile(params: Params$Resource$Users$Getloginprofile, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getLoginProfile(params?: Params$Resource$Users$Getloginprofile, options?: MethodOptions): GaxiosPromise<Schema$LoginProfile>;
        getLoginProfile(params: Params$Resource$Users$Getloginprofile, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getLoginProfile(params: Params$Resource$Users$Getloginprofile, options: MethodOptions | BodyResponseCallback<Schema$LoginProfile>, callback: BodyResponseCallback<Schema$LoginProfile>): void;
        getLoginProfile(params: Params$Resource$Users$Getloginprofile, callback: BodyResponseCallback<Schema$LoginProfile>): void;
        getLoginProfile(callback: BodyResponseCallback<Schema$LoginProfile>): void;
        /**
         * Adds an SSH public key and returns the profile information. Default POSIX account information is set when no username and UID exist as part of the login profile.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        importSshPublicKey(params: Params$Resource$Users$Importsshpublickey, options: StreamMethodOptions): GaxiosPromise<Readable>;
        importSshPublicKey(params?: Params$Resource$Users$Importsshpublickey, options?: MethodOptions): GaxiosPromise<Schema$ImportSshPublicKeyResponse>;
        importSshPublicKey(params: Params$Resource$Users$Importsshpublickey, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        importSshPublicKey(params: Params$Resource$Users$Importsshpublickey, options: MethodOptions | BodyResponseCallback<Schema$ImportSshPublicKeyResponse>, callback: BodyResponseCallback<Schema$ImportSshPublicKeyResponse>): void;
        importSshPublicKey(params: Params$Resource$Users$Importsshpublickey, callback: BodyResponseCallback<Schema$ImportSshPublicKeyResponse>): void;
        importSshPublicKey(callback: BodyResponseCallback<Schema$ImportSshPublicKeyResponse>): void;
    }
    export interface Params$Resource$Users$Getloginprofile extends StandardParameters {
        /**
         * Required. The unique ID for the user in format `users/{user\}`.
         */
        name?: string;
        /**
         * The project ID of the Google Cloud Platform project.
         */
        projectId?: string;
        /**
         * A system ID for filtering the results of the request.
         */
        systemId?: string;
        /**
         * The view configures whether to retrieve security keys information.
         */
        view?: string;
    }
    export interface Params$Resource$Users$Importsshpublickey extends StandardParameters {
        /**
         * The unique ID for the user in format `users/{user\}`.
         */
        parent?: string;
        /**
         * The project ID of the Google Cloud Platform project.
         */
        projectId?: string;
        /**
         * Optional. The regions to which to assert that the key was written. If unspecified, defaults to all regions. Regions are listed at https://cloud.google.com/about/locations#region.
         */
        regions?: string[];
        /**
         * The view configures whether to retrieve security keys information.
         */
        view?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SshPublicKey;
    }
    export class Resource$Users$Projects {
        context: APIRequestContext;
        locations: Resource$Users$Projects$Locations;
        zones: Resource$Users$Projects$Zones;
        constructor(context: APIRequestContext);
        /**
         * Deletes a POSIX account.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Users$Projects$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Users$Projects$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Users$Projects$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Users$Projects$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Users$Projects$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
    }
    export interface Params$Resource$Users$Projects$Delete extends StandardParameters {
        /**
         * Required. A reference to the POSIX account to update. POSIX accounts are identified by the project ID they are associated with. A reference to the POSIX account is in format `users/{user\}/projects/{project\}`.
         */
        name?: string;
    }
    export class Resource$Users$Projects$Locations {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Signs an SSH public key for a user to authenticate to an instance.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        signSshPublicKey(params: Params$Resource$Users$Projects$Locations$Signsshpublickey, options: StreamMethodOptions): GaxiosPromise<Readable>;
        signSshPublicKey(params?: Params$Resource$Users$Projects$Locations$Signsshpublickey, options?: MethodOptions): GaxiosPromise<Schema$SignSshPublicKeyResponse>;
        signSshPublicKey(params: Params$Resource$Users$Projects$Locations$Signsshpublickey, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        signSshPublicKey(params: Params$Resource$Users$Projects$Locations$Signsshpublickey, options: MethodOptions | BodyResponseCallback<Schema$SignSshPublicKeyResponse>, callback: BodyResponseCallback<Schema$SignSshPublicKeyResponse>): void;
        signSshPublicKey(params: Params$Resource$Users$Projects$Locations$Signsshpublickey, callback: BodyResponseCallback<Schema$SignSshPublicKeyResponse>): void;
        signSshPublicKey(callback: BodyResponseCallback<Schema$SignSshPublicKeyResponse>): void;
    }
    export interface Params$Resource$Users$Projects$Locations$Signsshpublickey extends StandardParameters {
        /**
         * The parent project and zone for the signing request. This is needed to properly ensure per-organization ISS processing and potentially to provide for the possibility of zone-specific certificates used in the signing process.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SignSshPublicKeyRequest;
    }
    export class Resource$Users$Projects$Zones {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Signs an SSH public key for a user to authenticate to an instance.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        signSshPublicKey(params: Params$Resource$Users$Projects$Zones$Signsshpublickey, options: StreamMethodOptions): GaxiosPromise<Readable>;
        signSshPublicKey(params?: Params$Resource$Users$Projects$Zones$Signsshpublickey, options?: MethodOptions): GaxiosPromise<Schema$SignSshPublicKeyResponse>;
        signSshPublicKey(params: Params$Resource$Users$Projects$Zones$Signsshpublickey, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        signSshPublicKey(params: Params$Resource$Users$Projects$Zones$Signsshpublickey, options: MethodOptions | BodyResponseCallback<Schema$SignSshPublicKeyResponse>, callback: BodyResponseCallback<Schema$SignSshPublicKeyResponse>): void;
        signSshPublicKey(params: Params$Resource$Users$Projects$Zones$Signsshpublickey, callback: BodyResponseCallback<Schema$SignSshPublicKeyResponse>): void;
        signSshPublicKey(callback: BodyResponseCallback<Schema$SignSshPublicKeyResponse>): void;
    }
    export interface Params$Resource$Users$Projects$Zones$Signsshpublickey extends StandardParameters {
        /**
         * The parent project and zone for the signing request. This is needed to properly ensure per-organization ISS processing and potentially to provide for the possibility of zone-specific certificates used in the signing process.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SignSshPublicKeyRequest;
    }
    export class Resource$Users$Sshpublickeys {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Create an SSH public key
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Users$Sshpublickeys$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Users$Sshpublickeys$Create, options?: MethodOptions): GaxiosPromise<Schema$SshPublicKey>;
        create(params: Params$Resource$Users$Sshpublickeys$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Users$Sshpublickeys$Create, options: MethodOptions | BodyResponseCallback<Schema$SshPublicKey>, callback: BodyResponseCallback<Schema$SshPublicKey>): void;
        create(params: Params$Resource$Users$Sshpublickeys$Create, callback: BodyResponseCallback<Schema$SshPublicKey>): void;
        create(callback: BodyResponseCallback<Schema$SshPublicKey>): void;
        /**
         * Deletes an SSH public key.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Users$Sshpublickeys$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Users$Sshpublickeys$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Users$Sshpublickeys$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Users$Sshpublickeys$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Users$Sshpublickeys$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Retrieves an SSH public key.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Users$Sshpublickeys$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Users$Sshpublickeys$Get, options?: MethodOptions): GaxiosPromise<Schema$SshPublicKey>;
        get(params: Params$Resource$Users$Sshpublickeys$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Users$Sshpublickeys$Get, options: MethodOptions | BodyResponseCallback<Schema$SshPublicKey>, callback: BodyResponseCallback<Schema$SshPublicKey>): void;
        get(params: Params$Resource$Users$Sshpublickeys$Get, callback: BodyResponseCallback<Schema$SshPublicKey>): void;
        get(callback: BodyResponseCallback<Schema$SshPublicKey>): void;
        /**
         * Updates an SSH public key and returns the profile information. This method supports patch semantics.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Users$Sshpublickeys$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Users$Sshpublickeys$Patch, options?: MethodOptions): GaxiosPromise<Schema$SshPublicKey>;
        patch(params: Params$Resource$Users$Sshpublickeys$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Users$Sshpublickeys$Patch, options: MethodOptions | BodyResponseCallback<Schema$SshPublicKey>, callback: BodyResponseCallback<Schema$SshPublicKey>): void;
        patch(params: Params$Resource$Users$Sshpublickeys$Patch, callback: BodyResponseCallback<Schema$SshPublicKey>): void;
        patch(callback: BodyResponseCallback<Schema$SshPublicKey>): void;
    }
    export interface Params$Resource$Users$Sshpublickeys$Create extends StandardParameters {
        /**
         * Required. The unique ID for the user in format `users/{user\}`.
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SshPublicKey;
    }
    export interface Params$Resource$Users$Sshpublickeys$Delete extends StandardParameters {
        /**
         * Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user\}/sshPublicKeys/{fingerprint\}`.
         */
        name?: string;
    }
    export interface Params$Resource$Users$Sshpublickeys$Get extends StandardParameters {
        /**
         * Required. The fingerprint of the public key to retrieve. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user\}/sshPublicKeys/{fingerprint\}`.
         */
        name?: string;
    }
    export interface Params$Resource$Users$Sshpublickeys$Patch extends StandardParameters {
        /**
         * Required. The fingerprint of the public key to update. Public keys are identified by their SHA-256 fingerprint. The fingerprint of the public key is in format `users/{user\}/sshPublicKeys/{fingerprint\}`.
         */
        name?: string;
        /**
         * Mask to control which fields get updated. Updates all if not present.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SshPublicKey;
    }
    export {};
}
