/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace apigeeregistry_v1 {
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
     * Apigee Registry API
     *
     *
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const apigeeregistry = google.apigeeregistry('v1');
     * ```
     */
    export class Apigeeregistry {
        context: APIRequestContext;
        projects: Resource$Projects;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * A top-level description of an API. Produced by producers and are commitments to provide services.
     */
    export interface Schema$Api {
        /**
         * Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.
         */
        annotations?: {
            [key: string]: string;
        } | null;
        /**
         * A user-definable description of the availability of this service. Format: free-form, but we expect single words that describe availability, e.g., "NONE", "TESTING", "PREVIEW", "GENERAL", "DEPRECATED", "SHUTDOWN".
         */
        availability?: string | null;
        /**
         * Output only. Creation timestamp.
         */
        createTime?: string | null;
        /**
         * A detailed description.
         */
        description?: string | null;
        /**
         * Human-meaningful name.
         */
        displayName?: string | null;
        /**
         * Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores, and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * Resource name.
         */
        name?: string | null;
        /**
         * The recommended deployment of the API. Format: `projects/{project\}/locations/{location\}/apis/{api\}/deployments/{deployment\}`
         */
        recommendedDeployment?: string | null;
        /**
         * The recommended version of the API. Format: `projects/{project\}/locations/{location\}/apis/{api\}/versions/{version\}`
         */
        recommendedVersion?: string | null;
        /**
         * Output only. Last update timestamp.
         */
        updateTime?: string | null;
    }
    /**
     * Describes a service running at particular address that provides a particular version of an API. ApiDeployments have revisions which correspond to different configurations of a single deployment in time. Revision identifiers should be updated whenever the served API spec or endpoint address changes.
     */
    export interface Schema$ApiDeployment {
        /**
         * Text briefly describing how to access the endpoint. Changes to this value will not affect the revision.
         */
        accessGuidance?: string | null;
        /**
         * Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.
         */
        annotations?: {
            [key: string]: string;
        } | null;
        /**
         * The full resource name (including revision ID) of the spec of the API being served by the deployment. Changes to this value will update the revision. Format: `projects/{project\}/locations/{location\}/apis/{api\}/versions/{version\}/specs/{spec@revision\}`
         */
        apiSpecRevision?: string | null;
        /**
         * Output only. Creation timestamp; when the deployment resource was created.
         */
        createTime?: string | null;
        /**
         * A detailed description.
         */
        description?: string | null;
        /**
         * Human-meaningful name.
         */
        displayName?: string | null;
        /**
         * The address where the deployment is serving. Changes to this value will update the revision.
         */
        endpointUri?: string | null;
        /**
         * The address of the external channel of the API (e.g., the Developer Portal). Changes to this value will not affect the revision.
         */
        externalChannelUri?: string | null;
        /**
         * Text briefly identifying the intended audience of the API. Changes to this value will not affect the revision.
         */
        intendedAudience?: string | null;
        /**
         * Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * Resource name.
         */
        name?: string | null;
        /**
         * Output only. Revision creation timestamp; when the represented revision was created.
         */
        revisionCreateTime?: string | null;
        /**
         * Output only. Immutable. The revision ID of the deployment. A new revision is committed whenever the deployment contents are changed. The format is an 8-character hexadecimal string.
         */
        revisionId?: string | null;
        /**
         * Output only. Last update timestamp: when the represented revision was last modified.
         */
        revisionUpdateTime?: string | null;
    }
    /**
     * Describes a version of an API in a structured way. ApiSpecs provide formal descriptions that consumers can use to use a version. ApiSpec resources are intended to be fully-resolved descriptions of an ApiVersion. When specs consist of multiple files, these should be bundled together (e.g., in a zip archive) and stored as a unit. Multiple specs can exist to provide representations in different API description formats. Synchronization of these representations would be provided by tooling and background services.
     */
    export interface Schema$ApiSpec {
        /**
         * Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.
         */
        annotations?: {
            [key: string]: string;
        } | null;
        /**
         * Input only. The contents of the spec. Provided by API callers when specs are created or updated. To access the contents of a spec, use GetApiSpecContents.
         */
        contents?: string | null;
        /**
         * Output only. Creation timestamp; when the spec resource was created.
         */
        createTime?: string | null;
        /**
         * A detailed description.
         */
        description?: string | null;
        /**
         * A possibly-hierarchical name used to refer to the spec from other specs.
         */
        filename?: string | null;
        /**
         * Output only. A SHA-256 hash of the spec's contents. If the spec is gzipped, this is the hash of the uncompressed spec.
         */
        hash?: string | null;
        /**
         * Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * A style (format) descriptor for this spec that is specified as a [Media Type](https://en.wikipedia.org/wiki/Media_type). Possible values include `application/vnd.apigee.proto`, `application/vnd.apigee.openapi`, and `application/vnd.apigee.graphql`, with possible suffixes representing compression types. These hypothetical names are defined in the vendor tree defined in RFC6838 (https://tools.ietf.org/html/rfc6838) and are not final. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").
         */
        mimeType?: string | null;
        /**
         * Resource name.
         */
        name?: string | null;
        /**
         * Output only. Revision creation timestamp; when the represented revision was created.
         */
        revisionCreateTime?: string | null;
        /**
         * Output only. Immutable. The revision ID of the spec. A new revision is committed whenever the spec contents are changed. The format is an 8-character hexadecimal string.
         */
        revisionId?: string | null;
        /**
         * Output only. Last update timestamp: when the represented revision was last modified.
         */
        revisionUpdateTime?: string | null;
        /**
         * Output only. The size of the spec file in bytes. If the spec is gzipped, this is the size of the uncompressed spec.
         */
        sizeBytes?: number | null;
        /**
         * The original source URI of the spec (if one exists). This is an external location that can be used for reference purposes but which may not be authoritative since this external resource may change after the spec is retrieved.
         */
        sourceUri?: string | null;
    }
    /**
     * Describes a particular version of an API. ApiVersions are what consumers actually use.
     */
    export interface Schema$ApiVersion {
        /**
         * Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.
         */
        annotations?: {
            [key: string]: string;
        } | null;
        /**
         * Output only. Creation timestamp.
         */
        createTime?: string | null;
        /**
         * A detailed description.
         */
        description?: string | null;
        /**
         * Human-meaningful name.
         */
        displayName?: string | null;
        /**
         * Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with `apigeeregistry.googleapis.com/` and cannot be changed.
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * Resource name.
         */
        name?: string | null;
        /**
         * The primary spec for this version. Format: projects/{project\}/locations/{location\}/apis/{api\}/versions/{version\}/specs/{spec\}
         */
        primarySpec?: string | null;
        /**
         * A user-definable description of the lifecycle phase of this API version. Format: free-form, but we expect single words that describe API maturity, e.g., "CONCEPT", "DESIGN", "DEVELOPMENT", "STAGING", "PRODUCTION", "DEPRECATED", "RETIRED".
         */
        state?: string | null;
        /**
         * Output only. Last update timestamp.
         */
        updateTime?: string | null;
    }
    /**
     * Artifacts of resources. Artifacts are unique (single-value) per resource and are used to store metadata that is too large or numerous to be stored directly on the resource. Since artifacts are stored separately from parent resources, they should generally be used for metadata that is needed infrequently, i.e., not for display in primary views of the resource but perhaps displayed or downloaded upon request. The `ListArtifacts` method allows artifacts to be quickly enumerated and checked for presence without downloading their (potentially-large) contents.
     */
    export interface Schema$Artifact {
        /**
         * Annotations attach non-identifying metadata to resources. Annotation keys and values are less restricted than those of labels, but should be generally used for small values of broad interest. Larger, topic- specific metadata should be stored in Artifacts.
         */
        annotations?: {
            [key: string]: string;
        } | null;
        /**
         * Input only. The contents of the artifact. Provided by API callers when artifacts are created or replaced. To access the contents of an artifact, use GetArtifactContents.
         */
        contents?: string | null;
        /**
         * Output only. Creation timestamp.
         */
        createTime?: string | null;
        /**
         * Output only. A SHA-256 hash of the artifact's contents. If the artifact is gzipped, this is the hash of the uncompressed artifact.
         */
        hash?: string | null;
        /**
         * Labels attach identifying metadata to resources. Identifying metadata can be used to filter list operations. Label keys and values can be no longer than 64 characters (Unicode codepoints), can only contain lowercase letters, numeric characters, underscores and dashes. International characters are allowed. No more than 64 user labels can be associated with one resource (System labels are excluded). See https://goo.gl/xmQnxf for more information and examples of labels. System reserved label keys are prefixed with "registry.googleapis.com/" and cannot be changed.
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * A content type specifier for the artifact. Content type specifiers are Media Types (https://en.wikipedia.org/wiki/Media_type) with a possible "schema" parameter that specifies a schema for the stored information. Content types can specify compression. Currently only GZip compression is supported (indicated with "+gzip").
         */
        mimeType?: string | null;
        /**
         * Resource name.
         */
        name?: string | null;
        /**
         * Output only. The size of the artifact in bytes. If the artifact is gzipped, this is the size of the uncompressed artifact.
         */
        sizeBytes?: number | null;
        /**
         * Output only. Last update timestamp.
         */
        updateTime?: string | null;
    }
    /**
     * Associates `members`, or principals, with a `role`.
     */
    export interface Schema$Binding {
        /**
         * The condition that is associated with this binding. If the condition evaluates to `true`, then this binding applies to the current request. If the condition evaluates to `false`, then this binding does not apply to the current request. However, a different role binding might grant the same role to one or more of the principals in this binding. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        condition?: Schema$Expr;
        /**
         * Specifies the principals requesting access for a Google Cloud resource. `members` can have the following values: * `allUsers`: A special identifier that represents anyone who is on the internet; with or without a Google account. * `allAuthenticatedUsers`: A special identifier that represents anyone who is authenticated with a Google account or a service account. Does not include identities that come from external identity providers (IdPs) through identity federation. * `user:{emailid\}`: An email address that represents a specific Google account. For example, `alice@example.com` . * `serviceAccount:{emailid\}`: An email address that represents a Google service account. For example, `my-other-app@appspot.gserviceaccount.com`. * `serviceAccount:{projectid\}.svc.id.goog[{namespace\}/{kubernetes-sa\}]`: An identifier for a [Kubernetes service account](https://cloud.google.com/kubernetes-engine/docs/how-to/kubernetes-service-accounts). For example, `my-project.svc.id.goog[my-namespace/my-kubernetes-sa]`. * `group:{emailid\}`: An email address that represents a Google group. For example, `admins@example.com`. * `domain:{domain\}`: The G Suite domain (primary) that represents all the users of that domain. For example, `google.com` or `example.com`. * `deleted:user:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a user that has been recently deleted. For example, `alice@example.com?uid=123456789012345678901`. If the user is recovered, this value reverts to `user:{emailid\}` and the recovered user retains the role in the binding. * `deleted:serviceAccount:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a service account that has been recently deleted. For example, `my-other-app@appspot.gserviceaccount.com?uid=123456789012345678901`. If the service account is undeleted, this value reverts to `serviceAccount:{emailid\}` and the undeleted service account retains the role in the binding. * `deleted:group:{emailid\}?uid={uniqueid\}`: An email address (plus unique identifier) representing a Google group that has been recently deleted. For example, `admins@example.com?uid=123456789012345678901`. If the group is recovered, this value reverts to `group:{emailid\}` and the recovered group retains the role in the binding.
         */
        members?: string[] | null;
        /**
         * Role that is assigned to the list of `members`, or principals. For example, `roles/viewer`, `roles/editor`, or `roles/owner`.
         */
        role?: string | null;
    }
    /**
     * Build information of the Instance if it's in `ACTIVE` state.
     */
    export interface Schema$Build {
        /**
         * Output only. Commit ID of the latest commit in the build.
         */
        commitId?: string | null;
        /**
         * Output only. Commit time of the latest commit in the build.
         */
        commitTime?: string | null;
        /**
         * Output only. Path of the open source repository: github.com/apigee/registry.
         */
        repo?: string | null;
    }
    /**
     * The request message for Operations.CancelOperation.
     */
    export interface Schema$CancelOperationRequest {
    }
    /**
     * Available configurations to provision an Instance.
     */
    export interface Schema$Config {
        /**
         * Required. The Customer Managed Encryption Key (CMEK) used for data encryption. The CMEK name should follow the format of `projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)`, where the `location` must match InstanceConfig.location.
         */
        cmekKeyName?: string | null;
        /**
         * Output only. The GCP location where the Instance resides.
         */
        location?: string | null;
    }
    /**
     * A generic empty message that you can re-use to avoid defining duplicated empty messages in your APIs. A typical example is to use it as the request or the response type of an API method. For instance: service Foo { rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty); \}
     */
    export interface Schema$Empty {
    }
    /**
     * Represents a textual expression in the Common Expression Language (CEL) syntax. CEL is a C-like expression language. The syntax and semantics of CEL are documented at https://github.com/google/cel-spec. Example (Comparison): title: "Summary size limit" description: "Determines if a summary is less than 100 chars" expression: "document.summary.size() < 100" Example (Equality): title: "Requestor is owner" description: "Determines if requestor is the document owner" expression: "document.owner == request.auth.claims.email" Example (Logic): title: "Public documents" description: "Determine whether the document should be publicly visible" expression: "document.type != 'private' && document.type != 'internal'" Example (Data Manipulation): title: "Notification string" description: "Create a notification string with a timestamp." expression: "'New message received at ' + string(document.create_time)" The exact variables and functions that may be referenced within an expression are determined by the service that evaluates it. See the service documentation for additional information.
     */
    export interface Schema$Expr {
        /**
         * Optional. Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.
         */
        description?: string | null;
        /**
         * Textual representation of an expression in Common Expression Language syntax.
         */
        expression?: string | null;
        /**
         * Optional. String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.
         */
        location?: string | null;
        /**
         * Optional. Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.
         */
        title?: string | null;
    }
    /**
     * Message that represents an arbitrary HTTP body. It should only be used for payload formats that can't be represented as JSON, such as raw binary or an HTML page. This message can be used both in streaming and non-streaming API methods in the request as well as the response. It can be used as a top-level request field, which is convenient if one wants to extract parameters from either the URL or HTTP template into the request fields and also want access to the raw HTTP body. Example: message GetResourceRequest { // A unique request id. string request_id = 1; // The raw HTTP body is bound to this field. google.api.HttpBody http_body = 2; \} service ResourceService { rpc GetResource(GetResourceRequest) returns (google.api.HttpBody); rpc UpdateResource(google.api.HttpBody) returns (google.protobuf.Empty); \} Example with streaming methods: service CaldavService { rpc GetCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); rpc UpdateCalendar(stream google.api.HttpBody) returns (stream google.api.HttpBody); \} Use of this type only changes how the request and response bodies are handled, all other features will continue to work unchanged.
     */
    export interface Schema$HttpBody {
        /**
         * The HTTP Content-Type header value specifying the content type of the body.
         */
        contentType?: string | null;
        /**
         * The HTTP request/response body as raw binary.
         */
        data?: string | null;
        /**
         * Application specific response metadata. Must be set in the first response for streaming APIs.
         */
        extensions?: Array<{
            [key: string]: any;
        }> | null;
    }
    /**
     * An Instance represents the instance resources of the Registry. Currently, only one instance is allowed for each project.
     */
    export interface Schema$Instance {
        /**
         * Output only. Build info of the Instance if it's in `ACTIVE` state.
         */
        build?: Schema$Build;
        /**
         * Required. Config of the Instance.
         */
        config?: Schema$Config;
        /**
         * Output only. Creation timestamp.
         */
        createTime?: string | null;
        /**
         * Format: `projects/x/locations/x/instance`. Currently only `locations/global` is supported.
         */
        name?: string | null;
        /**
         * Output only. The current state of the Instance.
         */
        state?: string | null;
        /**
         * Output only. Extra information of Instance.State if the state is `FAILED`.
         */
        stateMessage?: string | null;
        /**
         * Output only. Last update timestamp.
         */
        updateTime?: string | null;
    }
    /**
     * Response message for ListApiDeploymentRevisionsResponse.
     */
    export interface Schema$ListApiDeploymentRevisionsResponse {
        /**
         * The revisions of the deployment.
         */
        apiDeployments?: Schema$ApiDeployment[];
        /**
         * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response message for ListApiDeployments.
     */
    export interface Schema$ListApiDeploymentsResponse {
        /**
         * The deployments from the specified publisher.
         */
        apiDeployments?: Schema$ApiDeployment[];
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response message for ListApiSpecRevisionsResponse.
     */
    export interface Schema$ListApiSpecRevisionsResponse {
        /**
         * The revisions of the spec.
         */
        apiSpecs?: Schema$ApiSpec[];
        /**
         * A token that can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response message for ListApiSpecs.
     */
    export interface Schema$ListApiSpecsResponse {
        /**
         * The specs from the specified publisher.
         */
        apiSpecs?: Schema$ApiSpec[];
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response message for ListApis.
     */
    export interface Schema$ListApisResponse {
        /**
         * The APIs from the specified publisher.
         */
        apis?: Schema$Api[];
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response message for ListApiVersions.
     */
    export interface Schema$ListApiVersionsResponse {
        /**
         * The versions from the specified publisher.
         */
        apiVersions?: Schema$ApiVersion[];
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
    }
    /**
     * Response message for ListArtifacts.
     */
    export interface Schema$ListArtifactsResponse {
        /**
         * The artifacts from the specified publisher.
         */
        artifacts?: Schema$Artifact[];
        /**
         * A token, which can be sent as `page_token` to retrieve the next page. If this field is omitted, there are no subsequent pages.
         */
        nextPageToken?: string | null;
    }
    /**
     * The response message for Locations.ListLocations.
     */
    export interface Schema$ListLocationsResponse {
        /**
         * A list of locations that matches the specified filter in the request.
         */
        locations?: Schema$Location[];
        /**
         * The standard List next-page token.
         */
        nextPageToken?: string | null;
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
     * A resource that represents a Google Cloud location.
     */
    export interface Schema$Location {
        /**
         * The friendly name for this location, typically a nearby city name. For example, "Tokyo".
         */
        displayName?: string | null;
        /**
         * Cross-service attributes for the location. For example {"cloud.googleapis.com/region": "us-east1"\}
         */
        labels?: {
            [key: string]: string;
        } | null;
        /**
         * The canonical id for this location. For example: `"us-east1"`.
         */
        locationId?: string | null;
        /**
         * Service-specific metadata. For example the available capacity at the given location.
         */
        metadata?: {
            [key: string]: any;
        } | null;
        /**
         * Resource name for the location, which may vary between implementations. For example: `"projects/example-project/locations/us-east1"`
         */
        name?: string | null;
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
     * Represents the metadata of the long-running operation.
     */
    export interface Schema$OperationMetadata {
        /**
         * API version used to start the operation.
         */
        apiVersion?: string | null;
        /**
         * Identifies whether the user has requested cancellation of the operation. Operations that have successfully been cancelled have Operation.error value with a google.rpc.Status.code of 1, corresponding to `Code.CANCELLED`.
         */
        cancellationRequested?: boolean | null;
        /**
         * The time the operation was created.
         */
        createTime?: string | null;
        /**
         * The time the operation finished running.
         */
        endTime?: string | null;
        /**
         * Human-readable status of the operation, if any.
         */
        statusMessage?: string | null;
        /**
         * Server-defined resource path for the target of the operation.
         */
        target?: string | null;
        /**
         * Name of the verb executed by the operation.
         */
        verb?: string | null;
    }
    /**
     * An Identity and Access Management (IAM) policy, which specifies access controls for Google Cloud resources. A `Policy` is a collection of `bindings`. A `binding` binds one or more `members`, or principals, to a single `role`. Principals can be user accounts, service accounts, Google groups, and domains (such as G Suite). A `role` is a named list of permissions; each `role` can be an IAM predefined role or a user-created custom role. For some types of Google Cloud resources, a `binding` can also specify a `condition`, which is a logical expression that allows access to a resource only if the expression evaluates to `true`. A condition can add constraints based on attributes of the request, the resource, or both. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies). **JSON example:** ``` { "bindings": [ { "role": "roles/resourcemanager.organizationAdmin", "members": [ "user:mike@example.com", "group:admins@example.com", "domain:google.com", "serviceAccount:my-project-id@appspot.gserviceaccount.com" ] \}, { "role": "roles/resourcemanager.organizationViewer", "members": [ "user:eve@example.com" ], "condition": { "title": "expirable access", "description": "Does not grant access after Sep 2020", "expression": "request.time < timestamp('2020-10-01T00:00:00.000Z')", \} \} ], "etag": "BwWWja0YfJA=", "version": 3 \} ``` **YAML example:** ``` bindings: - members: - user:mike@example.com - group:admins@example.com - domain:google.com - serviceAccount:my-project-id@appspot.gserviceaccount.com role: roles/resourcemanager.organizationAdmin - members: - user:eve@example.com role: roles/resourcemanager.organizationViewer condition: title: expirable access description: Does not grant access after Sep 2020 expression: request.time < timestamp('2020-10-01T00:00:00.000Z') etag: BwWWja0YfJA= version: 3 ``` For a description of IAM and its features, see the [IAM documentation](https://cloud.google.com/iam/docs/).
     */
    export interface Schema$Policy {
        /**
         * Associates a list of `members`, or principals, with a `role`. Optionally, may specify a `condition` that determines how and when the `bindings` are applied. Each of the `bindings` must contain at least one principal. The `bindings` in a `Policy` can refer to up to 1,500 principals; up to 250 of these principals can be Google groups. Each occurrence of a principal counts towards these limits. For example, if the `bindings` grant 50 different roles to `user:alice@example.com`, and not to any other principal, then you can add another 1,450 principals to the `bindings` in the `Policy`.
         */
        bindings?: Schema$Binding[];
        /**
         * `etag` is used for optimistic concurrency control as a way to help prevent simultaneous updates of a policy from overwriting each other. It is strongly suggested that systems make use of the `etag` in the read-modify-write cycle to perform policy updates in order to avoid race conditions: An `etag` is returned in the response to `getIamPolicy`, and systems are expected to put that etag in the request to `setIamPolicy` to ensure that their change will be applied to the same version of the policy. **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost.
         */
        etag?: string | null;
        /**
         * Specifies the format of the policy. Valid values are `0`, `1`, and `3`. Requests that specify an invalid value are rejected. Any operation that affects conditional role bindings must specify version `3`. This requirement applies to the following operations: * Getting a policy that includes a conditional role binding * Adding a conditional role binding to a policy * Changing a conditional role binding in a policy * Removing any role binding, with or without a condition, from a policy that includes conditions **Important:** If you use IAM Conditions, you must include the `etag` field whenever you call `setIamPolicy`. If you omit this field, then IAM allows you to overwrite a version `3` policy with a version `1` policy, and all of the conditions in the version `3` policy are lost. If a policy does not include any conditions, operations on that policy may specify any valid version or leave the field unset. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        version?: number | null;
    }
    /**
     * Request message for RollbackApiDeployment.
     */
    export interface Schema$RollbackApiDeploymentRequest {
        /**
         * Required. The revision ID to roll back to. It must be a revision of the same deployment. Example: `c7cfa2a8`
         */
        revisionId?: string | null;
    }
    /**
     * Request message for RollbackApiSpec.
     */
    export interface Schema$RollbackApiSpecRequest {
        /**
         * Required. The revision ID to roll back to. It must be a revision of the same spec. Example: `c7cfa2a8`
         */
        revisionId?: string | null;
    }
    /**
     * Request message for `SetIamPolicy` method.
     */
    export interface Schema$SetIamPolicyRequest {
        /**
         * REQUIRED: The complete policy to be applied to the `resource`. The size of the policy is limited to a few 10s of KB. An empty policy is a valid policy but certain Google Cloud services (such as Projects) might reject them.
         */
        policy?: Schema$Policy;
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
     * Request message for TagApiDeploymentRevision.
     */
    export interface Schema$TagApiDeploymentRevisionRequest {
        /**
         * Required. The tag to apply. The tag should be at most 40 characters, and match `a-z{3,39\}`.
         */
        tag?: string | null;
    }
    /**
     * Request message for TagApiSpecRevision.
     */
    export interface Schema$TagApiSpecRevisionRequest {
        /**
         * Required. The tag to apply. The tag should be at most 40 characters, and match `a-z{3,39\}`.
         */
        tag?: string | null;
    }
    /**
     * Request message for `TestIamPermissions` method.
     */
    export interface Schema$TestIamPermissionsRequest {
        /**
         * The set of permissions to check for the `resource`. Permissions with wildcards (such as `*` or `storage.*`) are not allowed. For more information see [IAM Overview](https://cloud.google.com/iam/docs/overview#permissions).
         */
        permissions?: string[] | null;
    }
    /**
     * Response message for `TestIamPermissions` method.
     */
    export interface Schema$TestIamPermissionsResponse {
        /**
         * A subset of `TestPermissionsRequest.permissions` that the caller is allowed.
         */
        permissions?: string[] | null;
    }
    export class Resource$Projects {
        context: APIRequestContext;
        locations: Resource$Projects$Locations;
        constructor(context: APIRequestContext);
    }
    export class Resource$Projects$Locations {
        context: APIRequestContext;
        apis: Resource$Projects$Locations$Apis;
        artifacts: Resource$Projects$Locations$Artifacts;
        documents: Resource$Projects$Locations$Documents;
        instances: Resource$Projects$Locations$Instances;
        operations: Resource$Projects$Locations$Operations;
        runtime: Resource$Projects$Locations$Runtime;
        constructor(context: APIRequestContext);
        /**
         * Gets information about a location.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Get, options?: MethodOptions): GaxiosPromise<Schema$Location>;
        get(params: Params$Resource$Projects$Locations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Get, options: MethodOptions | BodyResponseCallback<Schema$Location>, callback: BodyResponseCallback<Schema$Location>): void;
        get(params: Params$Resource$Projects$Locations$Get, callback: BodyResponseCallback<Schema$Location>): void;
        get(callback: BodyResponseCallback<Schema$Location>): void;
        /**
         * Lists information about the supported locations for this service.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$List, options?: MethodOptions): GaxiosPromise<Schema$ListLocationsResponse>;
        list(params: Params$Resource$Projects$Locations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$List, options: MethodOptions | BodyResponseCallback<Schema$ListLocationsResponse>, callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
        list(params: Params$Resource$Projects$Locations$List, callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListLocationsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Get extends StandardParameters {
        /**
         * Resource name for the location.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$List extends StandardParameters {
        /**
         * A filter to narrow down results to a preferred subset. The filtering language accepts strings like `"displayName=tokyo"`, and is documented in more detail in [AIP-160](https://google.aip.dev/160).
         */
        filter?: string;
        /**
         * The resource that owns the locations collection, if applicable.
         */
        name?: string;
        /**
         * The maximum number of results to return. If not set, the service selects a default.
         */
        pageSize?: number;
        /**
         * A page token received from the `next_page_token` field in the response. Send that page token to receive the subsequent page.
         */
        pageToken?: string;
    }
    export class Resource$Projects$Locations$Apis {
        context: APIRequestContext;
        artifacts: Resource$Projects$Locations$Apis$Artifacts;
        deployments: Resource$Projects$Locations$Apis$Deployments;
        versions: Resource$Projects$Locations$Apis$Versions;
        constructor(context: APIRequestContext);
        /**
         * Creates a specified API.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Apis$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Apis$Create, options?: MethodOptions): GaxiosPromise<Schema$Api>;
        create(params: Params$Resource$Projects$Locations$Apis$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Apis$Create, options: MethodOptions | BodyResponseCallback<Schema$Api>, callback: BodyResponseCallback<Schema$Api>): void;
        create(params: Params$Resource$Projects$Locations$Apis$Create, callback: BodyResponseCallback<Schema$Api>): void;
        create(callback: BodyResponseCallback<Schema$Api>): void;
        /**
         * Removes a specified API and all of the resources that it owns.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Apis$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Apis$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Locations$Apis$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Apis$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Locations$Apis$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Returns a specified API.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Apis$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Apis$Get, options?: MethodOptions): GaxiosPromise<Schema$Api>;
        get(params: Params$Resource$Projects$Locations$Apis$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Apis$Get, options: MethodOptions | BodyResponseCallback<Schema$Api>, callback: BodyResponseCallback<Schema$Api>): void;
        get(params: Params$Resource$Projects$Locations$Apis$Get, callback: BodyResponseCallback<Schema$Api>): void;
        get(callback: BodyResponseCallback<Schema$Api>): void;
        /**
         * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Getiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getIamPolicy(params?: Params$Resource$Projects$Locations$Apis$Getiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Getiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Returns matching APIs.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Apis$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Apis$List, options?: MethodOptions): GaxiosPromise<Schema$ListApisResponse>;
        list(params: Params$Resource$Projects$Locations$Apis$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Apis$List, options: MethodOptions | BodyResponseCallback<Schema$ListApisResponse>, callback: BodyResponseCallback<Schema$ListApisResponse>): void;
        list(params: Params$Resource$Projects$Locations$Apis$List, callback: BodyResponseCallback<Schema$ListApisResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListApisResponse>): void;
        /**
         * Used to modify a specified API.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Apis$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Apis$Patch, options?: MethodOptions): GaxiosPromise<Schema$Api>;
        patch(params: Params$Resource$Projects$Locations$Apis$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Apis$Patch, options: MethodOptions | BodyResponseCallback<Schema$Api>, callback: BodyResponseCallback<Schema$Api>): void;
        patch(params: Params$Resource$Projects$Locations$Apis$Patch, callback: BodyResponseCallback<Schema$Api>): void;
        patch(callback: BodyResponseCallback<Schema$Api>): void;
        /**
         * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Setiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        setIamPolicy(params?: Params$Resource$Projects$Locations$Apis$Setiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Setiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Testiampermissions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        testIamPermissions(params?: Params$Resource$Projects$Locations$Apis$Testiampermissions, options?: MethodOptions): GaxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Testiampermissions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Apis$Create extends StandardParameters {
        /**
         * Required. The ID to use for the API, which will become the final component of the API's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.
         */
        apiId?: string;
        /**
         * Required. The parent, which owns this collection of APIs. Format: `projects/x/locations/x`
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Api;
    }
    export interface Params$Resource$Projects$Locations$Apis$Delete extends StandardParameters {
        /**
         * If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.)
         */
        force?: boolean;
        /**
         * Required. The name of the API to delete. Format: `projects/x/locations/x/apis/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Get extends StandardParameters {
        /**
         * Required. The name of the API to retrieve. Format: `projects/x/locations/x/apis/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Getiampolicy extends StandardParameters {
        /**
         * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        'options.requestedPolicyVersion'?: number;
        /**
         * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$List extends StandardParameters {
        /**
         * An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.
         */
        filter?: string;
        /**
         * A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"
         */
        orderBy?: string;
        /**
         * The maximum number of APIs to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListApis` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApis` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. The parent, which owns this collection of APIs. Format: `projects/x/locations/x`
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Patch extends StandardParameters {
        /**
         * If set to true, and the API is not found, a new API will be created. In this situation, `update_mask` is ignored.
         */
        allowMissing?: boolean;
        /**
         * Resource name.
         */
        name?: string;
        /**
         * The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If an asterisk "*" is specified, all fields are updated, including fields that are unspecified/default in the request.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Api;
    }
    export interface Params$Resource$Projects$Locations$Apis$Setiampolicy extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SetIamPolicyRequest;
    }
    export interface Params$Resource$Projects$Locations$Apis$Testiampermissions extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TestIamPermissionsRequest;
    }
    export class Resource$Projects$Locations$Apis$Artifacts {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a specified artifact.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Apis$Artifacts$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Apis$Artifacts$Create, options?: MethodOptions): GaxiosPromise<Schema$Artifact>;
        create(params: Params$Resource$Projects$Locations$Apis$Artifacts$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Apis$Artifacts$Create, options: MethodOptions | BodyResponseCallback<Schema$Artifact>, callback: BodyResponseCallback<Schema$Artifact>): void;
        create(params: Params$Resource$Projects$Locations$Apis$Artifacts$Create, callback: BodyResponseCallback<Schema$Artifact>): void;
        create(callback: BodyResponseCallback<Schema$Artifact>): void;
        /**
         * Removes a specified artifact.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Apis$Artifacts$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Apis$Artifacts$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Locations$Apis$Artifacts$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Apis$Artifacts$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Locations$Apis$Artifacts$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Returns a specified artifact.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Apis$Artifacts$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Apis$Artifacts$Get, options?: MethodOptions): GaxiosPromise<Schema$Artifact>;
        get(params: Params$Resource$Projects$Locations$Apis$Artifacts$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Apis$Artifacts$Get, options: MethodOptions | BodyResponseCallback<Schema$Artifact>, callback: BodyResponseCallback<Schema$Artifact>): void;
        get(params: Params$Resource$Projects$Locations$Apis$Artifacts$Get, callback: BodyResponseCallback<Schema$Artifact>): void;
        get(callback: BodyResponseCallback<Schema$Artifact>): void;
        /**
         * Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getContents(params: Params$Resource$Projects$Locations$Apis$Artifacts$Getcontents, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getContents(params?: Params$Resource$Projects$Locations$Apis$Artifacts$Getcontents, options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
        getContents(params: Params$Resource$Projects$Locations$Apis$Artifacts$Getcontents, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getContents(params: Params$Resource$Projects$Locations$Apis$Artifacts$Getcontents, options: MethodOptions | BodyResponseCallback<Schema$HttpBody>, callback: BodyResponseCallback<Schema$HttpBody>): void;
        getContents(params: Params$Resource$Projects$Locations$Apis$Artifacts$Getcontents, callback: BodyResponseCallback<Schema$HttpBody>): void;
        getContents(callback: BodyResponseCallback<Schema$HttpBody>): void;
        /**
         * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Artifacts$Getiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getIamPolicy(params?: Params$Resource$Projects$Locations$Apis$Artifacts$Getiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Artifacts$Getiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Artifacts$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Artifacts$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Returns matching artifacts.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Apis$Artifacts$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Apis$Artifacts$List, options?: MethodOptions): GaxiosPromise<Schema$ListArtifactsResponse>;
        list(params: Params$Resource$Projects$Locations$Apis$Artifacts$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Apis$Artifacts$List, options: MethodOptions | BodyResponseCallback<Schema$ListArtifactsResponse>, callback: BodyResponseCallback<Schema$ListArtifactsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Apis$Artifacts$List, callback: BodyResponseCallback<Schema$ListArtifactsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListArtifactsResponse>): void;
        /**
         * Used to replace a specified artifact.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        replaceArtifact(params: Params$Resource$Projects$Locations$Apis$Artifacts$Replaceartifact, options: StreamMethodOptions): GaxiosPromise<Readable>;
        replaceArtifact(params?: Params$Resource$Projects$Locations$Apis$Artifacts$Replaceartifact, options?: MethodOptions): GaxiosPromise<Schema$Artifact>;
        replaceArtifact(params: Params$Resource$Projects$Locations$Apis$Artifacts$Replaceartifact, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        replaceArtifact(params: Params$Resource$Projects$Locations$Apis$Artifacts$Replaceartifact, options: MethodOptions | BodyResponseCallback<Schema$Artifact>, callback: BodyResponseCallback<Schema$Artifact>): void;
        replaceArtifact(params: Params$Resource$Projects$Locations$Apis$Artifacts$Replaceartifact, callback: BodyResponseCallback<Schema$Artifact>): void;
        replaceArtifact(callback: BodyResponseCallback<Schema$Artifact>): void;
        /**
         * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Artifacts$Setiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        setIamPolicy(params?: Params$Resource$Projects$Locations$Apis$Artifacts$Setiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Artifacts$Setiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Artifacts$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Artifacts$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Artifacts$Testiampermissions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        testIamPermissions(params?: Params$Resource$Projects$Locations$Apis$Artifacts$Testiampermissions, options?: MethodOptions): GaxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Artifacts$Testiampermissions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Artifacts$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Artifacts$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Apis$Artifacts$Create extends StandardParameters {
        /**
         * Required. The ID to use for the artifact, which will become the final component of the artifact's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.
         */
        artifactId?: string;
        /**
         * Required. The parent, which owns this collection of artifacts. Format: `{parent\}`
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Artifact;
    }
    export interface Params$Resource$Projects$Locations$Apis$Artifacts$Delete extends StandardParameters {
        /**
         * Required. The name of the artifact to delete. Format: `{parent\}/artifacts/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Artifacts$Get extends StandardParameters {
        /**
         * Required. The name of the artifact to retrieve. Format: `{parent\}/artifacts/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Artifacts$Getcontents extends StandardParameters {
        /**
         * Required. The name of the artifact whose contents should be retrieved. Format: `{parent\}/artifacts/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Artifacts$Getiampolicy extends StandardParameters {
        /**
         * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        'options.requestedPolicyVersion'?: number;
        /**
         * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Artifacts$List extends StandardParameters {
        /**
         * An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents.
         */
        filter?: string;
        /**
         * A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"
         */
        orderBy?: string;
        /**
         * The maximum number of artifacts to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListArtifacts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListArtifacts` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. The parent, which owns this collection of artifacts. Format: `{parent\}`
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Artifacts$Replaceartifact extends StandardParameters {
        /**
         * Resource name.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Artifact;
    }
    export interface Params$Resource$Projects$Locations$Apis$Artifacts$Setiampolicy extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SetIamPolicyRequest;
    }
    export interface Params$Resource$Projects$Locations$Apis$Artifacts$Testiampermissions extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TestIamPermissionsRequest;
    }
    export class Resource$Projects$Locations$Apis$Deployments {
        context: APIRequestContext;
        artifacts: Resource$Projects$Locations$Apis$Deployments$Artifacts;
        constructor(context: APIRequestContext);
        /**
         * Creates a specified deployment.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Apis$Deployments$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Apis$Deployments$Create, options?: MethodOptions): GaxiosPromise<Schema$ApiDeployment>;
        create(params: Params$Resource$Projects$Locations$Apis$Deployments$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Apis$Deployments$Create, options: MethodOptions | BodyResponseCallback<Schema$ApiDeployment>, callback: BodyResponseCallback<Schema$ApiDeployment>): void;
        create(params: Params$Resource$Projects$Locations$Apis$Deployments$Create, callback: BodyResponseCallback<Schema$ApiDeployment>): void;
        create(callback: BodyResponseCallback<Schema$ApiDeployment>): void;
        /**
         * Removes a specified deployment, all revisions, and all child resources (e.g., artifacts).
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Apis$Deployments$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Apis$Deployments$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Locations$Apis$Deployments$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Apis$Deployments$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Locations$Apis$Deployments$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Deletes a revision of a deployment.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        deleteRevision(params: Params$Resource$Projects$Locations$Apis$Deployments$Deleterevision, options: StreamMethodOptions): GaxiosPromise<Readable>;
        deleteRevision(params?: Params$Resource$Projects$Locations$Apis$Deployments$Deleterevision, options?: MethodOptions): GaxiosPromise<Schema$ApiDeployment>;
        deleteRevision(params: Params$Resource$Projects$Locations$Apis$Deployments$Deleterevision, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        deleteRevision(params: Params$Resource$Projects$Locations$Apis$Deployments$Deleterevision, options: MethodOptions | BodyResponseCallback<Schema$ApiDeployment>, callback: BodyResponseCallback<Schema$ApiDeployment>): void;
        deleteRevision(params: Params$Resource$Projects$Locations$Apis$Deployments$Deleterevision, callback: BodyResponseCallback<Schema$ApiDeployment>): void;
        deleteRevision(callback: BodyResponseCallback<Schema$ApiDeployment>): void;
        /**
         * Returns a specified deployment.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Apis$Deployments$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Apis$Deployments$Get, options?: MethodOptions): GaxiosPromise<Schema$ApiDeployment>;
        get(params: Params$Resource$Projects$Locations$Apis$Deployments$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Apis$Deployments$Get, options: MethodOptions | BodyResponseCallback<Schema$ApiDeployment>, callback: BodyResponseCallback<Schema$ApiDeployment>): void;
        get(params: Params$Resource$Projects$Locations$Apis$Deployments$Get, callback: BodyResponseCallback<Schema$ApiDeployment>): void;
        get(callback: BodyResponseCallback<Schema$ApiDeployment>): void;
        /**
         * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Deployments$Getiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getIamPolicy(params?: Params$Resource$Projects$Locations$Apis$Deployments$Getiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Deployments$Getiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Deployments$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Deployments$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Returns matching deployments.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Apis$Deployments$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Apis$Deployments$List, options?: MethodOptions): GaxiosPromise<Schema$ListApiDeploymentsResponse>;
        list(params: Params$Resource$Projects$Locations$Apis$Deployments$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Apis$Deployments$List, options: MethodOptions | BodyResponseCallback<Schema$ListApiDeploymentsResponse>, callback: BodyResponseCallback<Schema$ListApiDeploymentsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Apis$Deployments$List, callback: BodyResponseCallback<Schema$ListApiDeploymentsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListApiDeploymentsResponse>): void;
        /**
         * Lists all revisions of a deployment. Revisions are returned in descending order of revision creation time.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        listRevisions(params: Params$Resource$Projects$Locations$Apis$Deployments$Listrevisions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        listRevisions(params?: Params$Resource$Projects$Locations$Apis$Deployments$Listrevisions, options?: MethodOptions): GaxiosPromise<Schema$ListApiDeploymentRevisionsResponse>;
        listRevisions(params: Params$Resource$Projects$Locations$Apis$Deployments$Listrevisions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        listRevisions(params: Params$Resource$Projects$Locations$Apis$Deployments$Listrevisions, options: MethodOptions | BodyResponseCallback<Schema$ListApiDeploymentRevisionsResponse>, callback: BodyResponseCallback<Schema$ListApiDeploymentRevisionsResponse>): void;
        listRevisions(params: Params$Resource$Projects$Locations$Apis$Deployments$Listrevisions, callback: BodyResponseCallback<Schema$ListApiDeploymentRevisionsResponse>): void;
        listRevisions(callback: BodyResponseCallback<Schema$ListApiDeploymentRevisionsResponse>): void;
        /**
         * Used to modify a specified deployment.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Apis$Deployments$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Apis$Deployments$Patch, options?: MethodOptions): GaxiosPromise<Schema$ApiDeployment>;
        patch(params: Params$Resource$Projects$Locations$Apis$Deployments$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Apis$Deployments$Patch, options: MethodOptions | BodyResponseCallback<Schema$ApiDeployment>, callback: BodyResponseCallback<Schema$ApiDeployment>): void;
        patch(params: Params$Resource$Projects$Locations$Apis$Deployments$Patch, callback: BodyResponseCallback<Schema$ApiDeployment>): void;
        patch(callback: BodyResponseCallback<Schema$ApiDeployment>): void;
        /**
         * Sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        rollback(params: Params$Resource$Projects$Locations$Apis$Deployments$Rollback, options: StreamMethodOptions): GaxiosPromise<Readable>;
        rollback(params?: Params$Resource$Projects$Locations$Apis$Deployments$Rollback, options?: MethodOptions): GaxiosPromise<Schema$ApiDeployment>;
        rollback(params: Params$Resource$Projects$Locations$Apis$Deployments$Rollback, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        rollback(params: Params$Resource$Projects$Locations$Apis$Deployments$Rollback, options: MethodOptions | BodyResponseCallback<Schema$ApiDeployment>, callback: BodyResponseCallback<Schema$ApiDeployment>): void;
        rollback(params: Params$Resource$Projects$Locations$Apis$Deployments$Rollback, callback: BodyResponseCallback<Schema$ApiDeployment>): void;
        rollback(callback: BodyResponseCallback<Schema$ApiDeployment>): void;
        /**
         * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Deployments$Setiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        setIamPolicy(params?: Params$Resource$Projects$Locations$Apis$Deployments$Setiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Deployments$Setiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Deployments$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Deployments$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Adds a tag to a specified revision of a deployment.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        tagRevision(params: Params$Resource$Projects$Locations$Apis$Deployments$Tagrevision, options: StreamMethodOptions): GaxiosPromise<Readable>;
        tagRevision(params?: Params$Resource$Projects$Locations$Apis$Deployments$Tagrevision, options?: MethodOptions): GaxiosPromise<Schema$ApiDeployment>;
        tagRevision(params: Params$Resource$Projects$Locations$Apis$Deployments$Tagrevision, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        tagRevision(params: Params$Resource$Projects$Locations$Apis$Deployments$Tagrevision, options: MethodOptions | BodyResponseCallback<Schema$ApiDeployment>, callback: BodyResponseCallback<Schema$ApiDeployment>): void;
        tagRevision(params: Params$Resource$Projects$Locations$Apis$Deployments$Tagrevision, callback: BodyResponseCallback<Schema$ApiDeployment>): void;
        tagRevision(callback: BodyResponseCallback<Schema$ApiDeployment>): void;
        /**
         * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Deployments$Testiampermissions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        testIamPermissions(params?: Params$Resource$Projects$Locations$Apis$Deployments$Testiampermissions, options?: MethodOptions): GaxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Deployments$Testiampermissions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Deployments$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Deployments$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Apis$Deployments$Create extends StandardParameters {
        /**
         * Required. The ID to use for the deployment, which will become the final component of the deployment's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.
         */
        apiDeploymentId?: string;
        /**
         * Required. The parent, which owns this collection of deployments. Format: `projects/x/locations/x/apis/x`
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ApiDeployment;
    }
    export interface Params$Resource$Projects$Locations$Apis$Deployments$Delete extends StandardParameters {
        /**
         * If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.)
         */
        force?: boolean;
        /**
         * Required. The name of the deployment to delete. Format: `projects/x/locations/x/apis/x/deployments/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Deployments$Deleterevision extends StandardParameters {
        /**
         * Required. The name of the deployment revision to be deleted, with a revision ID explicitly included. Example: `projects/sample/locations/global/apis/petstore/deployments/prod@c7cfa2a8`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Deployments$Get extends StandardParameters {
        /**
         * Required. The name of the deployment to retrieve. Format: `projects/x/locations/x/apis/x/deployments/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Deployments$Getiampolicy extends StandardParameters {
        /**
         * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        'options.requestedPolicyVersion'?: number;
        /**
         * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Deployments$List extends StandardParameters {
        /**
         * An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.
         */
        filter?: string;
        /**
         * A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"
         */
        orderBy?: string;
        /**
         * The maximum number of deployments to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListApiDeployments` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiDeployments` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. The parent, which owns this collection of deployments. Format: `projects/x/locations/x/apis/x`
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Deployments$Listrevisions extends StandardParameters {
        /**
         * An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.
         */
        filter?: string;
        /**
         * Required. The name of the deployment to list revisions for.
         */
        name?: string;
        /**
         * The maximum number of revisions to return per page.
         */
        pageSize?: number;
        /**
         * The page token, received from a previous ListApiDeploymentRevisions call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Deployments$Patch extends StandardParameters {
        /**
         * If set to true, and the deployment is not found, a new deployment will be created. In this situation, `update_mask` is ignored.
         */
        allowMissing?: boolean;
        /**
         * Resource name.
         */
        name?: string;
        /**
         * The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If an asterisk "*" is specified, all fields are updated, including fields that are unspecified/default in the request.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ApiDeployment;
    }
    export interface Params$Resource$Projects$Locations$Apis$Deployments$Rollback extends StandardParameters {
        /**
         * Required. The deployment being rolled back.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RollbackApiDeploymentRequest;
    }
    export interface Params$Resource$Projects$Locations$Apis$Deployments$Setiampolicy extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SetIamPolicyRequest;
    }
    export interface Params$Resource$Projects$Locations$Apis$Deployments$Tagrevision extends StandardParameters {
        /**
         * Required. The name of the deployment to be tagged, including the revision ID is optional. If a revision is not specified, it will tag the latest revision.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TagApiDeploymentRevisionRequest;
    }
    export interface Params$Resource$Projects$Locations$Apis$Deployments$Testiampermissions extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TestIamPermissionsRequest;
    }
    export class Resource$Projects$Locations$Apis$Deployments$Artifacts {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a specified artifact.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Create, options?: MethodOptions): GaxiosPromise<Schema$Artifact>;
        create(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Create, options: MethodOptions | BodyResponseCallback<Schema$Artifact>, callback: BodyResponseCallback<Schema$Artifact>): void;
        create(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Create, callback: BodyResponseCallback<Schema$Artifact>): void;
        create(callback: BodyResponseCallback<Schema$Artifact>): void;
        /**
         * Removes a specified artifact.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Returns a specified artifact.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Get, options?: MethodOptions): GaxiosPromise<Schema$Artifact>;
        get(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Get, options: MethodOptions | BodyResponseCallback<Schema$Artifact>, callback: BodyResponseCallback<Schema$Artifact>): void;
        get(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Get, callback: BodyResponseCallback<Schema$Artifact>): void;
        get(callback: BodyResponseCallback<Schema$Artifact>): void;
        /**
         * Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getContents(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Getcontents, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getContents(params?: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Getcontents, options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
        getContents(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Getcontents, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getContents(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Getcontents, options: MethodOptions | BodyResponseCallback<Schema$HttpBody>, callback: BodyResponseCallback<Schema$HttpBody>): void;
        getContents(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Getcontents, callback: BodyResponseCallback<Schema$HttpBody>): void;
        getContents(callback: BodyResponseCallback<Schema$HttpBody>): void;
        /**
         * Returns matching artifacts.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$List, options?: MethodOptions): GaxiosPromise<Schema$ListArtifactsResponse>;
        list(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$List, options: MethodOptions | BodyResponseCallback<Schema$ListArtifactsResponse>, callback: BodyResponseCallback<Schema$ListArtifactsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$List, callback: BodyResponseCallback<Schema$ListArtifactsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListArtifactsResponse>): void;
        /**
         * Used to replace a specified artifact.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        replaceArtifact(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Replaceartifact, options: StreamMethodOptions): GaxiosPromise<Readable>;
        replaceArtifact(params?: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Replaceartifact, options?: MethodOptions): GaxiosPromise<Schema$Artifact>;
        replaceArtifact(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Replaceartifact, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        replaceArtifact(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Replaceartifact, options: MethodOptions | BodyResponseCallback<Schema$Artifact>, callback: BodyResponseCallback<Schema$Artifact>): void;
        replaceArtifact(params: Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Replaceartifact, callback: BodyResponseCallback<Schema$Artifact>): void;
        replaceArtifact(callback: BodyResponseCallback<Schema$Artifact>): void;
    }
    export interface Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Create extends StandardParameters {
        /**
         * Required. The ID to use for the artifact, which will become the final component of the artifact's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.
         */
        artifactId?: string;
        /**
         * Required. The parent, which owns this collection of artifacts. Format: `{parent\}`
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Artifact;
    }
    export interface Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Delete extends StandardParameters {
        /**
         * Required. The name of the artifact to delete. Format: `{parent\}/artifacts/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Get extends StandardParameters {
        /**
         * Required. The name of the artifact to retrieve. Format: `{parent\}/artifacts/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Getcontents extends StandardParameters {
        /**
         * Required. The name of the artifact whose contents should be retrieved. Format: `{parent\}/artifacts/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$List extends StandardParameters {
        /**
         * An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents.
         */
        filter?: string;
        /**
         * A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"
         */
        orderBy?: string;
        /**
         * The maximum number of artifacts to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListArtifacts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListArtifacts` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. The parent, which owns this collection of artifacts. Format: `{parent\}`
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Deployments$Artifacts$Replaceartifact extends StandardParameters {
        /**
         * Resource name.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Artifact;
    }
    export class Resource$Projects$Locations$Apis$Versions {
        context: APIRequestContext;
        artifacts: Resource$Projects$Locations$Apis$Versions$Artifacts;
        specs: Resource$Projects$Locations$Apis$Versions$Specs;
        constructor(context: APIRequestContext);
        /**
         * Creates a specified version.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Apis$Versions$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Apis$Versions$Create, options?: MethodOptions): GaxiosPromise<Schema$ApiVersion>;
        create(params: Params$Resource$Projects$Locations$Apis$Versions$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Apis$Versions$Create, options: MethodOptions | BodyResponseCallback<Schema$ApiVersion>, callback: BodyResponseCallback<Schema$ApiVersion>): void;
        create(params: Params$Resource$Projects$Locations$Apis$Versions$Create, callback: BodyResponseCallback<Schema$ApiVersion>): void;
        create(callback: BodyResponseCallback<Schema$ApiVersion>): void;
        /**
         * Removes a specified version and all of the resources that it owns.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Apis$Versions$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Apis$Versions$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Locations$Apis$Versions$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Apis$Versions$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Locations$Apis$Versions$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Returns a specified version.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Apis$Versions$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Apis$Versions$Get, options?: MethodOptions): GaxiosPromise<Schema$ApiVersion>;
        get(params: Params$Resource$Projects$Locations$Apis$Versions$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Apis$Versions$Get, options: MethodOptions | BodyResponseCallback<Schema$ApiVersion>, callback: BodyResponseCallback<Schema$ApiVersion>): void;
        get(params: Params$Resource$Projects$Locations$Apis$Versions$Get, callback: BodyResponseCallback<Schema$ApiVersion>): void;
        get(callback: BodyResponseCallback<Schema$ApiVersion>): void;
        /**
         * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Getiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getIamPolicy(params?: Params$Resource$Projects$Locations$Apis$Versions$Getiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Getiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Returns matching versions.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Apis$Versions$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Apis$Versions$List, options?: MethodOptions): GaxiosPromise<Schema$ListApiVersionsResponse>;
        list(params: Params$Resource$Projects$Locations$Apis$Versions$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Apis$Versions$List, options: MethodOptions | BodyResponseCallback<Schema$ListApiVersionsResponse>, callback: BodyResponseCallback<Schema$ListApiVersionsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Apis$Versions$List, callback: BodyResponseCallback<Schema$ListApiVersionsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListApiVersionsResponse>): void;
        /**
         * Used to modify a specified version.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Apis$Versions$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Apis$Versions$Patch, options?: MethodOptions): GaxiosPromise<Schema$ApiVersion>;
        patch(params: Params$Resource$Projects$Locations$Apis$Versions$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Apis$Versions$Patch, options: MethodOptions | BodyResponseCallback<Schema$ApiVersion>, callback: BodyResponseCallback<Schema$ApiVersion>): void;
        patch(params: Params$Resource$Projects$Locations$Apis$Versions$Patch, callback: BodyResponseCallback<Schema$ApiVersion>): void;
        patch(callback: BodyResponseCallback<Schema$ApiVersion>): void;
        /**
         * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Setiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        setIamPolicy(params?: Params$Resource$Projects$Locations$Apis$Versions$Setiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Setiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Versions$Testiampermissions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        testIamPermissions(params?: Params$Resource$Projects$Locations$Apis$Versions$Testiampermissions, options?: MethodOptions): GaxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Versions$Testiampermissions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Versions$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Versions$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Create extends StandardParameters {
        /**
         * Required. The ID to use for the version, which will become the final component of the version's resource name. This value should be 1-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.
         */
        apiVersionId?: string;
        /**
         * Required. The parent, which owns this collection of versions. Format: `projects/x/locations/x/apis/x`
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ApiVersion;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Delete extends StandardParameters {
        /**
         * If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.)
         */
        force?: boolean;
        /**
         * Required. The name of the version to delete. Format: `projects/x/locations/x/apis/x/versions/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Get extends StandardParameters {
        /**
         * Required. The name of the version to retrieve. Format: `projects/x/locations/x/apis/x/versions/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Getiampolicy extends StandardParameters {
        /**
         * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        'options.requestedPolicyVersion'?: number;
        /**
         * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$List extends StandardParameters {
        /**
         * An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.
         */
        filter?: string;
        /**
         * A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"
         */
        orderBy?: string;
        /**
         * The maximum number of versions to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListApiVersions` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiVersions` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. The parent, which owns this collection of versions. Format: `projects/x/locations/x/apis/x`
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Patch extends StandardParameters {
        /**
         * If set to true, and the version is not found, a new version will be created. In this situation, `update_mask` is ignored.
         */
        allowMissing?: boolean;
        /**
         * Resource name.
         */
        name?: string;
        /**
         * The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If an asterisk "*" is specified, all fields are updated, including fields that are unspecified/default in the request.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ApiVersion;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Setiampolicy extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SetIamPolicyRequest;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Testiampermissions extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TestIamPermissionsRequest;
    }
    export class Resource$Projects$Locations$Apis$Versions$Artifacts {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a specified artifact.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Create, options?: MethodOptions): GaxiosPromise<Schema$Artifact>;
        create(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Create, options: MethodOptions | BodyResponseCallback<Schema$Artifact>, callback: BodyResponseCallback<Schema$Artifact>): void;
        create(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Create, callback: BodyResponseCallback<Schema$Artifact>): void;
        create(callback: BodyResponseCallback<Schema$Artifact>): void;
        /**
         * Removes a specified artifact.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Returns a specified artifact.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Get, options?: MethodOptions): GaxiosPromise<Schema$Artifact>;
        get(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Get, options: MethodOptions | BodyResponseCallback<Schema$Artifact>, callback: BodyResponseCallback<Schema$Artifact>): void;
        get(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Get, callback: BodyResponseCallback<Schema$Artifact>): void;
        get(callback: BodyResponseCallback<Schema$Artifact>): void;
        /**
         * Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getContents(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Getcontents, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getContents(params?: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Getcontents, options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
        getContents(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Getcontents, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getContents(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Getcontents, options: MethodOptions | BodyResponseCallback<Schema$HttpBody>, callback: BodyResponseCallback<Schema$HttpBody>): void;
        getContents(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Getcontents, callback: BodyResponseCallback<Schema$HttpBody>): void;
        getContents(callback: BodyResponseCallback<Schema$HttpBody>): void;
        /**
         * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Getiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getIamPolicy(params?: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Getiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Getiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Returns matching artifacts.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$List, options?: MethodOptions): GaxiosPromise<Schema$ListArtifactsResponse>;
        list(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$List, options: MethodOptions | BodyResponseCallback<Schema$ListArtifactsResponse>, callback: BodyResponseCallback<Schema$ListArtifactsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$List, callback: BodyResponseCallback<Schema$ListArtifactsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListArtifactsResponse>): void;
        /**
         * Used to replace a specified artifact.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        replaceArtifact(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Replaceartifact, options: StreamMethodOptions): GaxiosPromise<Readable>;
        replaceArtifact(params?: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Replaceartifact, options?: MethodOptions): GaxiosPromise<Schema$Artifact>;
        replaceArtifact(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Replaceartifact, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        replaceArtifact(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Replaceartifact, options: MethodOptions | BodyResponseCallback<Schema$Artifact>, callback: BodyResponseCallback<Schema$Artifact>): void;
        replaceArtifact(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Replaceartifact, callback: BodyResponseCallback<Schema$Artifact>): void;
        replaceArtifact(callback: BodyResponseCallback<Schema$Artifact>): void;
        /**
         * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Setiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        setIamPolicy(params?: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Setiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Setiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Testiampermissions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        testIamPermissions(params?: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Testiampermissions, options?: MethodOptions): GaxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Testiampermissions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Create extends StandardParameters {
        /**
         * Required. The ID to use for the artifact, which will become the final component of the artifact's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.
         */
        artifactId?: string;
        /**
         * Required. The parent, which owns this collection of artifacts. Format: `{parent\}`
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Artifact;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Delete extends StandardParameters {
        /**
         * Required. The name of the artifact to delete. Format: `{parent\}/artifacts/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Get extends StandardParameters {
        /**
         * Required. The name of the artifact to retrieve. Format: `{parent\}/artifacts/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Getcontents extends StandardParameters {
        /**
         * Required. The name of the artifact whose contents should be retrieved. Format: `{parent\}/artifacts/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Getiampolicy extends StandardParameters {
        /**
         * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        'options.requestedPolicyVersion'?: number;
        /**
         * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Artifacts$List extends StandardParameters {
        /**
         * An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents.
         */
        filter?: string;
        /**
         * A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"
         */
        orderBy?: string;
        /**
         * The maximum number of artifacts to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListArtifacts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListArtifacts` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. The parent, which owns this collection of artifacts. Format: `{parent\}`
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Replaceartifact extends StandardParameters {
        /**
         * Resource name.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Artifact;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Setiampolicy extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SetIamPolicyRequest;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Artifacts$Testiampermissions extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TestIamPermissionsRequest;
    }
    export class Resource$Projects$Locations$Apis$Versions$Specs {
        context: APIRequestContext;
        artifacts: Resource$Projects$Locations$Apis$Versions$Specs$Artifacts;
        constructor(context: APIRequestContext);
        /**
         * Creates a specified spec.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Apis$Versions$Specs$Create, options?: MethodOptions): GaxiosPromise<Schema$ApiSpec>;
        create(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Create, options: MethodOptions | BodyResponseCallback<Schema$ApiSpec>, callback: BodyResponseCallback<Schema$ApiSpec>): void;
        create(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Create, callback: BodyResponseCallback<Schema$ApiSpec>): void;
        create(callback: BodyResponseCallback<Schema$ApiSpec>): void;
        /**
         * Removes a specified spec, all revisions, and all child resources (e.g., artifacts).
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Apis$Versions$Specs$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Deletes a revision of a spec.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        deleteRevision(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Deleterevision, options: StreamMethodOptions): GaxiosPromise<Readable>;
        deleteRevision(params?: Params$Resource$Projects$Locations$Apis$Versions$Specs$Deleterevision, options?: MethodOptions): GaxiosPromise<Schema$ApiSpec>;
        deleteRevision(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Deleterevision, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        deleteRevision(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Deleterevision, options: MethodOptions | BodyResponseCallback<Schema$ApiSpec>, callback: BodyResponseCallback<Schema$ApiSpec>): void;
        deleteRevision(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Deleterevision, callback: BodyResponseCallback<Schema$ApiSpec>): void;
        deleteRevision(callback: BodyResponseCallback<Schema$ApiSpec>): void;
        /**
         * Returns a specified spec.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Apis$Versions$Specs$Get, options?: MethodOptions): GaxiosPromise<Schema$ApiSpec>;
        get(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Get, options: MethodOptions | BodyResponseCallback<Schema$ApiSpec>, callback: BodyResponseCallback<Schema$ApiSpec>): void;
        get(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Get, callback: BodyResponseCallback<Schema$ApiSpec>): void;
        get(callback: BodyResponseCallback<Schema$ApiSpec>): void;
        /**
         * Returns the contents of a specified spec. If specs are stored with GZip compression, the default behavior is to return the spec uncompressed (the mime_type response field indicates the exact format returned).
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getContents(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Getcontents, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getContents(params?: Params$Resource$Projects$Locations$Apis$Versions$Specs$Getcontents, options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
        getContents(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Getcontents, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getContents(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Getcontents, options: MethodOptions | BodyResponseCallback<Schema$HttpBody>, callback: BodyResponseCallback<Schema$HttpBody>): void;
        getContents(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Getcontents, callback: BodyResponseCallback<Schema$HttpBody>): void;
        getContents(callback: BodyResponseCallback<Schema$HttpBody>): void;
        /**
         * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Getiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getIamPolicy(params?: Params$Resource$Projects$Locations$Apis$Versions$Specs$Getiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Getiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Returns matching specs.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Apis$Versions$Specs$List, options?: MethodOptions): GaxiosPromise<Schema$ListApiSpecsResponse>;
        list(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$List, options: MethodOptions | BodyResponseCallback<Schema$ListApiSpecsResponse>, callback: BodyResponseCallback<Schema$ListApiSpecsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$List, callback: BodyResponseCallback<Schema$ListApiSpecsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListApiSpecsResponse>): void;
        /**
         * Lists all revisions of a spec. Revisions are returned in descending order of revision creation time.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        listRevisions(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Listrevisions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        listRevisions(params?: Params$Resource$Projects$Locations$Apis$Versions$Specs$Listrevisions, options?: MethodOptions): GaxiosPromise<Schema$ListApiSpecRevisionsResponse>;
        listRevisions(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Listrevisions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        listRevisions(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Listrevisions, options: MethodOptions | BodyResponseCallback<Schema$ListApiSpecRevisionsResponse>, callback: BodyResponseCallback<Schema$ListApiSpecRevisionsResponse>): void;
        listRevisions(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Listrevisions, callback: BodyResponseCallback<Schema$ListApiSpecRevisionsResponse>): void;
        listRevisions(callback: BodyResponseCallback<Schema$ListApiSpecRevisionsResponse>): void;
        /**
         * Used to modify a specified spec.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        patch(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Patch, options: StreamMethodOptions): GaxiosPromise<Readable>;
        patch(params?: Params$Resource$Projects$Locations$Apis$Versions$Specs$Patch, options?: MethodOptions): GaxiosPromise<Schema$ApiSpec>;
        patch(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Patch, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        patch(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Patch, options: MethodOptions | BodyResponseCallback<Schema$ApiSpec>, callback: BodyResponseCallback<Schema$ApiSpec>): void;
        patch(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Patch, callback: BodyResponseCallback<Schema$ApiSpec>): void;
        patch(callback: BodyResponseCallback<Schema$ApiSpec>): void;
        /**
         * Sets the current revision to a specified prior revision. Note that this creates a new revision with a new revision ID.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        rollback(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Rollback, options: StreamMethodOptions): GaxiosPromise<Readable>;
        rollback(params?: Params$Resource$Projects$Locations$Apis$Versions$Specs$Rollback, options?: MethodOptions): GaxiosPromise<Schema$ApiSpec>;
        rollback(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Rollback, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        rollback(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Rollback, options: MethodOptions | BodyResponseCallback<Schema$ApiSpec>, callback: BodyResponseCallback<Schema$ApiSpec>): void;
        rollback(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Rollback, callback: BodyResponseCallback<Schema$ApiSpec>): void;
        rollback(callback: BodyResponseCallback<Schema$ApiSpec>): void;
        /**
         * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Setiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        setIamPolicy(params?: Params$Resource$Projects$Locations$Apis$Versions$Specs$Setiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Setiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Adds a tag to a specified revision of a spec.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        tagRevision(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Tagrevision, options: StreamMethodOptions): GaxiosPromise<Readable>;
        tagRevision(params?: Params$Resource$Projects$Locations$Apis$Versions$Specs$Tagrevision, options?: MethodOptions): GaxiosPromise<Schema$ApiSpec>;
        tagRevision(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Tagrevision, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        tagRevision(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Tagrevision, options: MethodOptions | BodyResponseCallback<Schema$ApiSpec>, callback: BodyResponseCallback<Schema$ApiSpec>): void;
        tagRevision(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Tagrevision, callback: BodyResponseCallback<Schema$ApiSpec>): void;
        tagRevision(callback: BodyResponseCallback<Schema$ApiSpec>): void;
        /**
         * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Testiampermissions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        testIamPermissions(params?: Params$Resource$Projects$Locations$Apis$Versions$Specs$Testiampermissions, options?: MethodOptions): GaxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Testiampermissions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Specs$Create extends StandardParameters {
        /**
         * Required. The ID to use for the spec, which will become the final component of the spec's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.
         */
        apiSpecId?: string;
        /**
         * Required. The parent, which owns this collection of specs. Format: `projects/x/locations/x/apis/x/versions/x`
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ApiSpec;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Specs$Delete extends StandardParameters {
        /**
         * If set to true, any child resources will also be deleted. (Otherwise, the request will only work if there are no child resources.)
         */
        force?: boolean;
        /**
         * Required. The name of the spec to delete. Format: `projects/x/locations/x/apis/x/versions/x/specs/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Specs$Deleterevision extends StandardParameters {
        /**
         * Required. The name of the spec revision to be deleted, with a revision ID explicitly included. Example: `projects/sample/locations/global/apis/petstore/versions/1.0.0/specs/openapi.yaml@c7cfa2a8`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Specs$Get extends StandardParameters {
        /**
         * Required. The name of the spec to retrieve. Format: `projects/x/locations/x/apis/x/versions/x/specs/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Specs$Getcontents extends StandardParameters {
        /**
         * Required. The name of the spec whose contents should be retrieved. Format: `projects/x/locations/x/apis/x/versions/x/specs/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Specs$Getiampolicy extends StandardParameters {
        /**
         * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        'options.requestedPolicyVersion'?: number;
        /**
         * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Specs$List extends StandardParameters {
        /**
         * An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents.
         */
        filter?: string;
        /**
         * A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"
         */
        orderBy?: string;
        /**
         * The maximum number of specs to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListApiSpecs` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListApiSpecs` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. The parent, which owns this collection of specs. Format: `projects/x/locations/x/apis/x/versions/x`
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Specs$Listrevisions extends StandardParameters {
        /**
         * An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields.
         */
        filter?: string;
        /**
         * Required. The name of the spec to list revisions for.
         */
        name?: string;
        /**
         * The maximum number of revisions to return per page.
         */
        pageSize?: number;
        /**
         * The page token, received from a previous ListApiSpecRevisions call. Provide this to retrieve the subsequent page.
         */
        pageToken?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Specs$Patch extends StandardParameters {
        /**
         * If set to true, and the spec is not found, a new spec will be created. In this situation, `update_mask` is ignored.
         */
        allowMissing?: boolean;
        /**
         * Resource name.
         */
        name?: string;
        /**
         * The list of fields to be updated. If omitted, all fields are updated that are set in the request message (fields set to default values are ignored). If an asterisk "*" is specified, all fields are updated, including fields that are unspecified/default in the request.
         */
        updateMask?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$ApiSpec;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Specs$Rollback extends StandardParameters {
        /**
         * Required. The spec being rolled back.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$RollbackApiSpecRequest;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Specs$Setiampolicy extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SetIamPolicyRequest;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Specs$Tagrevision extends StandardParameters {
        /**
         * Required. The name of the spec to be tagged, including the revision ID is optional. If a revision is not specified, it will tag the latest revision.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TagApiSpecRevisionRequest;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Specs$Testiampermissions extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TestIamPermissionsRequest;
    }
    export class Resource$Projects$Locations$Apis$Versions$Specs$Artifacts {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a specified artifact.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Create, options?: MethodOptions): GaxiosPromise<Schema$Artifact>;
        create(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Create, options: MethodOptions | BodyResponseCallback<Schema$Artifact>, callback: BodyResponseCallback<Schema$Artifact>): void;
        create(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Create, callback: BodyResponseCallback<Schema$Artifact>): void;
        create(callback: BodyResponseCallback<Schema$Artifact>): void;
        /**
         * Removes a specified artifact.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Returns a specified artifact.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Get, options?: MethodOptions): GaxiosPromise<Schema$Artifact>;
        get(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Get, options: MethodOptions | BodyResponseCallback<Schema$Artifact>, callback: BodyResponseCallback<Schema$Artifact>): void;
        get(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Get, callback: BodyResponseCallback<Schema$Artifact>): void;
        get(callback: BodyResponseCallback<Schema$Artifact>): void;
        /**
         * Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getContents(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Getcontents, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getContents(params?: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Getcontents, options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
        getContents(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Getcontents, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getContents(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Getcontents, options: MethodOptions | BodyResponseCallback<Schema$HttpBody>, callback: BodyResponseCallback<Schema$HttpBody>): void;
        getContents(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Getcontents, callback: BodyResponseCallback<Schema$HttpBody>): void;
        getContents(callback: BodyResponseCallback<Schema$HttpBody>): void;
        /**
         * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Getiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getIamPolicy(params?: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Getiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Getiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Returns matching artifacts.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$List, options?: MethodOptions): GaxiosPromise<Schema$ListArtifactsResponse>;
        list(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$List, options: MethodOptions | BodyResponseCallback<Schema$ListArtifactsResponse>, callback: BodyResponseCallback<Schema$ListArtifactsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$List, callback: BodyResponseCallback<Schema$ListArtifactsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListArtifactsResponse>): void;
        /**
         * Used to replace a specified artifact.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        replaceArtifact(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Replaceartifact, options: StreamMethodOptions): GaxiosPromise<Readable>;
        replaceArtifact(params?: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Replaceartifact, options?: MethodOptions): GaxiosPromise<Schema$Artifact>;
        replaceArtifact(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Replaceartifact, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        replaceArtifact(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Replaceartifact, options: MethodOptions | BodyResponseCallback<Schema$Artifact>, callback: BodyResponseCallback<Schema$Artifact>): void;
        replaceArtifact(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Replaceartifact, callback: BodyResponseCallback<Schema$Artifact>): void;
        replaceArtifact(callback: BodyResponseCallback<Schema$Artifact>): void;
        /**
         * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Setiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        setIamPolicy(params?: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Setiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Setiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Testiampermissions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        testIamPermissions(params?: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Testiampermissions, options?: MethodOptions): GaxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Testiampermissions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Create extends StandardParameters {
        /**
         * Required. The ID to use for the artifact, which will become the final component of the artifact's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.
         */
        artifactId?: string;
        /**
         * Required. The parent, which owns this collection of artifacts. Format: `{parent\}`
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Artifact;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Delete extends StandardParameters {
        /**
         * Required. The name of the artifact to delete. Format: `{parent\}/artifacts/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Get extends StandardParameters {
        /**
         * Required. The name of the artifact to retrieve. Format: `{parent\}/artifacts/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Getcontents extends StandardParameters {
        /**
         * Required. The name of the artifact whose contents should be retrieved. Format: `{parent\}/artifacts/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Getiampolicy extends StandardParameters {
        /**
         * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        'options.requestedPolicyVersion'?: number;
        /**
         * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$List extends StandardParameters {
        /**
         * An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents.
         */
        filter?: string;
        /**
         * A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"
         */
        orderBy?: string;
        /**
         * The maximum number of artifacts to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListArtifacts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListArtifacts` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. The parent, which owns this collection of artifacts. Format: `{parent\}`
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Replaceartifact extends StandardParameters {
        /**
         * Resource name.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Artifact;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Setiampolicy extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SetIamPolicyRequest;
    }
    export interface Params$Resource$Projects$Locations$Apis$Versions$Specs$Artifacts$Testiampermissions extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TestIamPermissionsRequest;
    }
    export class Resource$Projects$Locations$Artifacts {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Creates a specified artifact.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Artifacts$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Artifacts$Create, options?: MethodOptions): GaxiosPromise<Schema$Artifact>;
        create(params: Params$Resource$Projects$Locations$Artifacts$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Artifacts$Create, options: MethodOptions | BodyResponseCallback<Schema$Artifact>, callback: BodyResponseCallback<Schema$Artifact>): void;
        create(params: Params$Resource$Projects$Locations$Artifacts$Create, callback: BodyResponseCallback<Schema$Artifact>): void;
        create(callback: BodyResponseCallback<Schema$Artifact>): void;
        /**
         * Removes a specified artifact.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Artifacts$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Artifacts$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Locations$Artifacts$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Artifacts$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Locations$Artifacts$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Returns a specified artifact.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Artifacts$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Artifacts$Get, options?: MethodOptions): GaxiosPromise<Schema$Artifact>;
        get(params: Params$Resource$Projects$Locations$Artifacts$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Artifacts$Get, options: MethodOptions | BodyResponseCallback<Schema$Artifact>, callback: BodyResponseCallback<Schema$Artifact>): void;
        get(params: Params$Resource$Projects$Locations$Artifacts$Get, callback: BodyResponseCallback<Schema$Artifact>): void;
        get(callback: BodyResponseCallback<Schema$Artifact>): void;
        /**
         * Returns the contents of a specified artifact. If artifacts are stored with GZip compression, the default behavior is to return the artifact uncompressed (the mime_type response field indicates the exact format returned).
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getContents(params: Params$Resource$Projects$Locations$Artifacts$Getcontents, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getContents(params?: Params$Resource$Projects$Locations$Artifacts$Getcontents, options?: MethodOptions): GaxiosPromise<Schema$HttpBody>;
        getContents(params: Params$Resource$Projects$Locations$Artifacts$Getcontents, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getContents(params: Params$Resource$Projects$Locations$Artifacts$Getcontents, options: MethodOptions | BodyResponseCallback<Schema$HttpBody>, callback: BodyResponseCallback<Schema$HttpBody>): void;
        getContents(params: Params$Resource$Projects$Locations$Artifacts$Getcontents, callback: BodyResponseCallback<Schema$HttpBody>): void;
        getContents(callback: BodyResponseCallback<Schema$HttpBody>): void;
        /**
         * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getIamPolicy(params: Params$Resource$Projects$Locations$Artifacts$Getiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getIamPolicy(params?: Params$Resource$Projects$Locations$Artifacts$Getiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Locations$Artifacts$Getiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Artifacts$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Artifacts$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Returns matching artifacts.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Artifacts$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Artifacts$List, options?: MethodOptions): GaxiosPromise<Schema$ListArtifactsResponse>;
        list(params: Params$Resource$Projects$Locations$Artifacts$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Artifacts$List, options: MethodOptions | BodyResponseCallback<Schema$ListArtifactsResponse>, callback: BodyResponseCallback<Schema$ListArtifactsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Artifacts$List, callback: BodyResponseCallback<Schema$ListArtifactsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListArtifactsResponse>): void;
        /**
         * Used to replace a specified artifact.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        replaceArtifact(params: Params$Resource$Projects$Locations$Artifacts$Replaceartifact, options: StreamMethodOptions): GaxiosPromise<Readable>;
        replaceArtifact(params?: Params$Resource$Projects$Locations$Artifacts$Replaceartifact, options?: MethodOptions): GaxiosPromise<Schema$Artifact>;
        replaceArtifact(params: Params$Resource$Projects$Locations$Artifacts$Replaceartifact, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        replaceArtifact(params: Params$Resource$Projects$Locations$Artifacts$Replaceartifact, options: MethodOptions | BodyResponseCallback<Schema$Artifact>, callback: BodyResponseCallback<Schema$Artifact>): void;
        replaceArtifact(params: Params$Resource$Projects$Locations$Artifacts$Replaceartifact, callback: BodyResponseCallback<Schema$Artifact>): void;
        replaceArtifact(callback: BodyResponseCallback<Schema$Artifact>): void;
        /**
         * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        setIamPolicy(params: Params$Resource$Projects$Locations$Artifacts$Setiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        setIamPolicy(params?: Params$Resource$Projects$Locations$Artifacts$Setiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Locations$Artifacts$Setiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Artifacts$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Artifacts$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        testIamPermissions(params: Params$Resource$Projects$Locations$Artifacts$Testiampermissions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        testIamPermissions(params?: Params$Resource$Projects$Locations$Artifacts$Testiampermissions, options?: MethodOptions): GaxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Locations$Artifacts$Testiampermissions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Artifacts$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Artifacts$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Artifacts$Create extends StandardParameters {
        /**
         * Required. The ID to use for the artifact, which will become the final component of the artifact's resource name. This value should be 4-63 characters, and valid characters are /a-z-/. Following AIP-162, IDs must not have the form of a UUID.
         */
        artifactId?: string;
        /**
         * Required. The parent, which owns this collection of artifacts. Format: `{parent\}`
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Artifact;
    }
    export interface Params$Resource$Projects$Locations$Artifacts$Delete extends StandardParameters {
        /**
         * Required. The name of the artifact to delete. Format: `{parent\}/artifacts/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Artifacts$Get extends StandardParameters {
        /**
         * Required. The name of the artifact to retrieve. Format: `{parent\}/artifacts/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Artifacts$Getcontents extends StandardParameters {
        /**
         * Required. The name of the artifact whose contents should be retrieved. Format: `{parent\}/artifacts/x`
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Artifacts$Getiampolicy extends StandardParameters {
        /**
         * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        'options.requestedPolicyVersion'?: number;
        /**
         * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
    }
    export interface Params$Resource$Projects$Locations$Artifacts$List extends StandardParameters {
        /**
         * An expression that can be used to filter the list. Filters use the Common Expression Language and can refer to all message fields except contents.
         */
        filter?: string;
        /**
         * A comma-separated list of fields, e.g. "foo,bar" Fields can be sorted in descending order using the "desc" identifier, e.g. "foo desc,bar"
         */
        orderBy?: string;
        /**
         * The maximum number of artifacts to return. The service may return fewer than this value. If unspecified, at most 50 values will be returned. The maximum is 1000; values above 1000 will be coerced to 1000.
         */
        pageSize?: number;
        /**
         * A page token, received from a previous `ListArtifacts` call. Provide this to retrieve the subsequent page. When paginating, all other parameters provided to `ListArtifacts` must match the call that provided the page token.
         */
        pageToken?: string;
        /**
         * Required. The parent, which owns this collection of artifacts. Format: `{parent\}`
         */
        parent?: string;
    }
    export interface Params$Resource$Projects$Locations$Artifacts$Replaceartifact extends StandardParameters {
        /**
         * Resource name.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Artifact;
    }
    export interface Params$Resource$Projects$Locations$Artifacts$Setiampolicy extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SetIamPolicyRequest;
    }
    export interface Params$Resource$Projects$Locations$Artifacts$Testiampermissions extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TestIamPermissionsRequest;
    }
    export class Resource$Projects$Locations$Documents {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getIamPolicy(params: Params$Resource$Projects$Locations$Documents$Getiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getIamPolicy(params?: Params$Resource$Projects$Locations$Documents$Getiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Locations$Documents$Getiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Documents$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Documents$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        setIamPolicy(params: Params$Resource$Projects$Locations$Documents$Setiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        setIamPolicy(params?: Params$Resource$Projects$Locations$Documents$Setiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Locations$Documents$Setiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Documents$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Documents$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        testIamPermissions(params: Params$Resource$Projects$Locations$Documents$Testiampermissions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        testIamPermissions(params?: Params$Resource$Projects$Locations$Documents$Testiampermissions, options?: MethodOptions): GaxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Locations$Documents$Testiampermissions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Documents$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Documents$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Documents$Getiampolicy extends StandardParameters {
        /**
         * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        'options.requestedPolicyVersion'?: number;
        /**
         * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
    }
    export interface Params$Resource$Projects$Locations$Documents$Setiampolicy extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SetIamPolicyRequest;
    }
    export interface Params$Resource$Projects$Locations$Documents$Testiampermissions extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TestIamPermissionsRequest;
    }
    export class Resource$Projects$Locations$Instances {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Provisions instance resources for the Registry.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        create(params: Params$Resource$Projects$Locations$Instances$Create, options: StreamMethodOptions): GaxiosPromise<Readable>;
        create(params?: Params$Resource$Projects$Locations$Instances$Create, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        create(params: Params$Resource$Projects$Locations$Instances$Create, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        create(params: Params$Resource$Projects$Locations$Instances$Create, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        create(params: Params$Resource$Projects$Locations$Instances$Create, callback: BodyResponseCallback<Schema$Operation>): void;
        create(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Deletes the Registry instance.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Instances$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Instances$Delete, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        delete(params: Params$Resource$Projects$Locations$Instances$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Instances$Delete, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(params: Params$Resource$Projects$Locations$Instances$Delete, callback: BodyResponseCallback<Schema$Operation>): void;
        delete(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Gets details of a single Instance.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Instances$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Instances$Get, options?: MethodOptions): GaxiosPromise<Schema$Instance>;
        get(params: Params$Resource$Projects$Locations$Instances$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Instances$Get, options: MethodOptions | BodyResponseCallback<Schema$Instance>, callback: BodyResponseCallback<Schema$Instance>): void;
        get(params: Params$Resource$Projects$Locations$Instances$Get, callback: BodyResponseCallback<Schema$Instance>): void;
        get(callback: BodyResponseCallback<Schema$Instance>): void;
        /**
         * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getIamPolicy(params: Params$Resource$Projects$Locations$Instances$Getiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getIamPolicy(params?: Params$Resource$Projects$Locations$Instances$Getiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Locations$Instances$Getiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Instances$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Instances$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        setIamPolicy(params: Params$Resource$Projects$Locations$Instances$Setiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        setIamPolicy(params?: Params$Resource$Projects$Locations$Instances$Setiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Locations$Instances$Setiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Instances$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Instances$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        testIamPermissions(params: Params$Resource$Projects$Locations$Instances$Testiampermissions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        testIamPermissions(params?: Params$Resource$Projects$Locations$Instances$Testiampermissions, options?: MethodOptions): GaxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Locations$Instances$Testiampermissions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Instances$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Instances$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Instances$Create extends StandardParameters {
        /**
         * Required. Identifier to assign to the Instance. Must be unique within scope of the parent resource.
         */
        instanceId?: string;
        /**
         * Required. Parent resource of the Instance, of the form: `projects/x/locations/x`
         */
        parent?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$Instance;
    }
    export interface Params$Resource$Projects$Locations$Instances$Delete extends StandardParameters {
        /**
         * Required. The name of the Instance to delete. Format: `projects/x/locations/x/instances/x`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Instances$Get extends StandardParameters {
        /**
         * Required. The name of the Instance to retrieve. Format: `projects/x/locations/x/instances/x`.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Instances$Getiampolicy extends StandardParameters {
        /**
         * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        'options.requestedPolicyVersion'?: number;
        /**
         * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
    }
    export interface Params$Resource$Projects$Locations$Instances$Setiampolicy extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SetIamPolicyRequest;
    }
    export interface Params$Resource$Projects$Locations$Instances$Testiampermissions extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TestIamPermissionsRequest;
    }
    export class Resource$Projects$Locations$Operations {
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
        cancel(params: Params$Resource$Projects$Locations$Operations$Cancel, options: StreamMethodOptions): GaxiosPromise<Readable>;
        cancel(params?: Params$Resource$Projects$Locations$Operations$Cancel, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        cancel(params: Params$Resource$Projects$Locations$Operations$Cancel, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        cancel(params: Params$Resource$Projects$Locations$Operations$Cancel, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        cancel(params: Params$Resource$Projects$Locations$Operations$Cancel, callback: BodyResponseCallback<Schema$Empty>): void;
        cancel(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Deletes a long-running operation. This method indicates that the client is no longer interested in the operation result. It does not cancel the operation. If the server doesn't support this method, it returns `google.rpc.Code.UNIMPLEMENTED`.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        delete(params: Params$Resource$Projects$Locations$Operations$Delete, options: StreamMethodOptions): GaxiosPromise<Readable>;
        delete(params?: Params$Resource$Projects$Locations$Operations$Delete, options?: MethodOptions): GaxiosPromise<Schema$Empty>;
        delete(params: Params$Resource$Projects$Locations$Operations$Delete, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        delete(params: Params$Resource$Projects$Locations$Operations$Delete, options: MethodOptions | BodyResponseCallback<Schema$Empty>, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(params: Params$Resource$Projects$Locations$Operations$Delete, callback: BodyResponseCallback<Schema$Empty>): void;
        delete(callback: BodyResponseCallback<Schema$Empty>): void;
        /**
         * Gets the latest state of a long-running operation. Clients can use this method to poll the operation result at intervals as recommended by the API service.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Projects$Locations$Operations$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Projects$Locations$Operations$Get, options?: MethodOptions): GaxiosPromise<Schema$Operation>;
        get(params: Params$Resource$Projects$Locations$Operations$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Projects$Locations$Operations$Get, options: MethodOptions | BodyResponseCallback<Schema$Operation>, callback: BodyResponseCallback<Schema$Operation>): void;
        get(params: Params$Resource$Projects$Locations$Operations$Get, callback: BodyResponseCallback<Schema$Operation>): void;
        get(callback: BodyResponseCallback<Schema$Operation>): void;
        /**
         * Lists operations that match the specified filter in the request. If the server doesn't support this method, it returns `UNIMPLEMENTED`.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Projects$Locations$Operations$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Projects$Locations$Operations$List, options?: MethodOptions): GaxiosPromise<Schema$ListOperationsResponse>;
        list(params: Params$Resource$Projects$Locations$Operations$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Projects$Locations$Operations$List, options: MethodOptions | BodyResponseCallback<Schema$ListOperationsResponse>, callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
        list(params: Params$Resource$Projects$Locations$Operations$List, callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
        list(callback: BodyResponseCallback<Schema$ListOperationsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Operations$Cancel extends StandardParameters {
        /**
         * The name of the operation resource to be cancelled.
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$CancelOperationRequest;
    }
    export interface Params$Resource$Projects$Locations$Operations$Delete extends StandardParameters {
        /**
         * The name of the operation resource to be deleted.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Operations$Get extends StandardParameters {
        /**
         * The name of the operation resource.
         */
        name?: string;
    }
    export interface Params$Resource$Projects$Locations$Operations$List extends StandardParameters {
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
    export class Resource$Projects$Locations$Runtime {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets the access control policy for a resource. Returns an empty policy if the resource exists and does not have a policy set.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        getIamPolicy(params: Params$Resource$Projects$Locations$Runtime$Getiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        getIamPolicy(params?: Params$Resource$Projects$Locations$Runtime$Getiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        getIamPolicy(params: Params$Resource$Projects$Locations$Runtime$Getiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Runtime$Getiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(params: Params$Resource$Projects$Locations$Runtime$Getiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        getIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Sets the access control policy on the specified resource. Replaces any existing policy. Can return `NOT_FOUND`, `INVALID_ARGUMENT`, and `PERMISSION_DENIED` errors.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        setIamPolicy(params: Params$Resource$Projects$Locations$Runtime$Setiampolicy, options: StreamMethodOptions): GaxiosPromise<Readable>;
        setIamPolicy(params?: Params$Resource$Projects$Locations$Runtime$Setiampolicy, options?: MethodOptions): GaxiosPromise<Schema$Policy>;
        setIamPolicy(params: Params$Resource$Projects$Locations$Runtime$Setiampolicy, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Runtime$Setiampolicy, options: MethodOptions | BodyResponseCallback<Schema$Policy>, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(params: Params$Resource$Projects$Locations$Runtime$Setiampolicy, callback: BodyResponseCallback<Schema$Policy>): void;
        setIamPolicy(callback: BodyResponseCallback<Schema$Policy>): void;
        /**
         * Returns permissions that a caller has on the specified resource. If the resource does not exist, this will return an empty set of permissions, not a `NOT_FOUND` error. Note: This operation is designed to be used for building permission-aware UIs and command-line tools, not for authorization checking. This operation may "fail open" without warning.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        testIamPermissions(params: Params$Resource$Projects$Locations$Runtime$Testiampermissions, options: StreamMethodOptions): GaxiosPromise<Readable>;
        testIamPermissions(params?: Params$Resource$Projects$Locations$Runtime$Testiampermissions, options?: MethodOptions): GaxiosPromise<Schema$TestIamPermissionsResponse>;
        testIamPermissions(params: Params$Resource$Projects$Locations$Runtime$Testiampermissions, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Runtime$Testiampermissions, options: MethodOptions | BodyResponseCallback<Schema$TestIamPermissionsResponse>, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(params: Params$Resource$Projects$Locations$Runtime$Testiampermissions, callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
        testIamPermissions(callback: BodyResponseCallback<Schema$TestIamPermissionsResponse>): void;
    }
    export interface Params$Resource$Projects$Locations$Runtime$Getiampolicy extends StandardParameters {
        /**
         * Optional. The maximum policy version that will be used to format the policy. Valid values are 0, 1, and 3. Requests specifying an invalid value will be rejected. Requests for policies with any conditional role bindings must specify version 3. Policies with no conditional role bindings may specify any valid value or leave the field unset. The policy in the response might use the policy version that you specified, or it might use a lower policy version. For example, if you specify version 3, but the policy has no conditional role bindings, the response uses version 1. To learn which resources support conditions in their IAM policies, see the [IAM documentation](https://cloud.google.com/iam/help/conditions/resource-policies).
         */
        'options.requestedPolicyVersion'?: number;
        /**
         * REQUIRED: The resource for which the policy is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
    }
    export interface Params$Resource$Projects$Locations$Runtime$Setiampolicy extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy is being specified. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$SetIamPolicyRequest;
    }
    export interface Params$Resource$Projects$Locations$Runtime$Testiampermissions extends StandardParameters {
        /**
         * REQUIRED: The resource for which the policy detail is being requested. See [Resource names](https://cloud.google.com/apis/design/resource_names) for the appropriate value for this field.
         */
        resource?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$TestIamPermissionsRequest;
    }
    export {};
}
