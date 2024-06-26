/// <reference types="node" />
import { OAuth2Client, JWT, Compute, UserRefreshClient, BaseExternalAccountClient, GaxiosPromise, GoogleConfigurable, MethodOptions, StreamMethodOptions, GlobalOptions, GoogleAuth, BodyResponseCallback, APIRequestContext } from 'googleapis-common';
import { Readable } from 'stream';
export declare namespace smartdevicemanagement_v1 {
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
     * Smart Device Management API
     *
     * Allow select enterprise partners to access, control, and manage Google and Nest devices programmatically.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const smartdevicemanagement = google.smartdevicemanagement('v1');
     * ```
     */
    export class Smartdevicemanagement {
        context: APIRequestContext;
        enterprises: Resource$Enterprises;
        constructor(options: GlobalOptions, google?: GoogleConfigurable);
    }
    /**
     * Device resource represents an instance of enterprise managed device in the property.
     */
    export interface Schema$GoogleHomeEnterpriseSdmV1Device {
        /**
         * Required. The resource name of the device. For example: "enterprises/XYZ/devices/123".
         */
        name?: string | null;
        /**
         * Assignee details of the device.
         */
        parentRelations?: Schema$GoogleHomeEnterpriseSdmV1ParentRelation[];
        /**
         * Output only. Device traits.
         */
        traits?: {
            [key: string]: any;
        } | null;
        /**
         * Output only. Type of the device for general display purposes. For example: "THERMOSTAT". The device type should not be used to deduce or infer functionality of the actual device it is assigned to. Instead, use the returned traits for the device.
         */
        type?: string | null;
    }
    /**
     * Request message for SmartDeviceManagementService.ExecuteDeviceCommand
     */
    export interface Schema$GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest {
        /**
         * The command name to execute, represented by the fully qualified protobuf message name.
         */
        command?: string | null;
        /**
         * The command message to execute, represented as a Struct.
         */
        params?: {
            [key: string]: any;
        } | null;
    }
    /**
     * Response message for SmartDeviceManagementService.ExecuteDeviceCommand
     */
    export interface Schema$GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse {
        /**
         * The results of executing the command.
         */
        results?: {
            [key: string]: any;
        } | null;
    }
    /**
     * Response message for SmartDeviceManagementService.ListDevices
     */
    export interface Schema$GoogleHomeEnterpriseSdmV1ListDevicesResponse {
        /**
         * The list of devices.
         */
        devices?: Schema$GoogleHomeEnterpriseSdmV1Device[];
    }
    /**
     * Response message for SmartDeviceManagementService.ListRooms
     */
    export interface Schema$GoogleHomeEnterpriseSdmV1ListRoomsResponse {
        /**
         * The list of rooms.
         */
        rooms?: Schema$GoogleHomeEnterpriseSdmV1Room[];
    }
    /**
     * Response message for SmartDeviceManagementService.ListStructures
     */
    export interface Schema$GoogleHomeEnterpriseSdmV1ListStructuresResponse {
        /**
         * The list of structures.
         */
        structures?: Schema$GoogleHomeEnterpriseSdmV1Structure[];
    }
    /**
     * Represents device relationships, for instance, structure/room to which the device is assigned to.
     */
    export interface Schema$GoogleHomeEnterpriseSdmV1ParentRelation {
        /**
         * Output only. The custom name of the relation -- e.g., structure/room where the device is assigned to.
         */
        displayName?: string | null;
        /**
         * Output only. The name of the relation -- e.g., structure/room where the device is assigned to. For example: "enterprises/XYZ/structures/ABC" or "enterprises/XYZ/structures/ABC/rooms/123"
         */
        parent?: string | null;
    }
    /**
     * Room resource represents an instance of sub-space within a structure such as rooms in a hotel suite or rental apartment.
     */
    export interface Schema$GoogleHomeEnterpriseSdmV1Room {
        /**
         * Output only. The resource name of the room. For example: "enterprises/XYZ/structures/ABC/rooms/123".
         */
        name?: string | null;
        /**
         * Room traits.
         */
        traits?: {
            [key: string]: any;
        } | null;
    }
    /**
     * Structure resource represents an instance of enterprise managed home or hotel room.
     */
    export interface Schema$GoogleHomeEnterpriseSdmV1Structure {
        /**
         * Output only. The resource name of the structure. For example: "enterprises/XYZ/structures/ABC".
         */
        name?: string | null;
        /**
         * Structure traits.
         */
        traits?: {
            [key: string]: any;
        } | null;
    }
    export class Resource$Enterprises {
        context: APIRequestContext;
        devices: Resource$Enterprises$Devices;
        structures: Resource$Enterprises$Structures;
        constructor(context: APIRequestContext);
    }
    export class Resource$Enterprises$Devices {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Executes a command to device managed by the enterprise.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        executeCommand(params: Params$Resource$Enterprises$Devices$Executecommand, options: StreamMethodOptions): GaxiosPromise<Readable>;
        executeCommand(params?: Params$Resource$Enterprises$Devices$Executecommand, options?: MethodOptions): GaxiosPromise<Schema$GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse>;
        executeCommand(params: Params$Resource$Enterprises$Devices$Executecommand, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        executeCommand(params: Params$Resource$Enterprises$Devices$Executecommand, options: MethodOptions | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse>, callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse>): void;
        executeCommand(params: Params$Resource$Enterprises$Devices$Executecommand, callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse>): void;
        executeCommand(callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandResponse>): void;
        /**
         * Gets a device managed by the enterprise.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Enterprises$Devices$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Enterprises$Devices$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleHomeEnterpriseSdmV1Device>;
        get(params: Params$Resource$Enterprises$Devices$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Enterprises$Devices$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Device>, callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Device>): void;
        get(params: Params$Resource$Enterprises$Devices$Get, callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Device>): void;
        get(callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Device>): void;
        /**
         * Lists devices managed by the enterprise.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Enterprises$Devices$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Enterprises$Devices$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleHomeEnterpriseSdmV1ListDevicesResponse>;
        list(params: Params$Resource$Enterprises$Devices$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Enterprises$Devices$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListDevicesResponse>, callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListDevicesResponse>): void;
        list(params: Params$Resource$Enterprises$Devices$List, callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListDevicesResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListDevicesResponse>): void;
    }
    export interface Params$Resource$Enterprises$Devices$Executecommand extends StandardParameters {
        /**
         * The name of the device requested. For example: "enterprises/XYZ/devices/123"
         */
        name?: string;
        /**
         * Request body metadata
         */
        requestBody?: Schema$GoogleHomeEnterpriseSdmV1ExecuteDeviceCommandRequest;
    }
    export interface Params$Resource$Enterprises$Devices$Get extends StandardParameters {
        /**
         * The name of the device requested. For example: "enterprises/XYZ/devices/123"
         */
        name?: string;
    }
    export interface Params$Resource$Enterprises$Devices$List extends StandardParameters {
        /**
         * Optional filter to list devices. Filters can be done on: Device custom name (substring match): 'customName=wing'
         */
        filter?: string;
        /**
         * The parent enterprise to list devices under. E.g. "enterprises/XYZ".
         */
        parent?: string;
    }
    export class Resource$Enterprises$Structures {
        context: APIRequestContext;
        rooms: Resource$Enterprises$Structures$Rooms;
        constructor(context: APIRequestContext);
        /**
         * Gets a structure managed by the enterprise.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Enterprises$Structures$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Enterprises$Structures$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleHomeEnterpriseSdmV1Structure>;
        get(params: Params$Resource$Enterprises$Structures$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Enterprises$Structures$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Structure>, callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Structure>): void;
        get(params: Params$Resource$Enterprises$Structures$Get, callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Structure>): void;
        get(callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Structure>): void;
        /**
         * Lists structures managed by the enterprise.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Enterprises$Structures$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Enterprises$Structures$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleHomeEnterpriseSdmV1ListStructuresResponse>;
        list(params: Params$Resource$Enterprises$Structures$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Enterprises$Structures$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListStructuresResponse>, callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListStructuresResponse>): void;
        list(params: Params$Resource$Enterprises$Structures$List, callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListStructuresResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListStructuresResponse>): void;
    }
    export interface Params$Resource$Enterprises$Structures$Get extends StandardParameters {
        /**
         * The name of the structure requested. For example: "enterprises/XYZ/structures/ABC".
         */
        name?: string;
    }
    export interface Params$Resource$Enterprises$Structures$List extends StandardParameters {
        /**
         * Optional filter to list structures.
         */
        filter?: string;
        /**
         * The parent enterprise to list structures under. E.g. "enterprises/XYZ".
         */
        parent?: string;
    }
    export class Resource$Enterprises$Structures$Rooms {
        context: APIRequestContext;
        constructor(context: APIRequestContext);
        /**
         * Gets a room managed by the enterprise.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        get(params: Params$Resource$Enterprises$Structures$Rooms$Get, options: StreamMethodOptions): GaxiosPromise<Readable>;
        get(params?: Params$Resource$Enterprises$Structures$Rooms$Get, options?: MethodOptions): GaxiosPromise<Schema$GoogleHomeEnterpriseSdmV1Room>;
        get(params: Params$Resource$Enterprises$Structures$Rooms$Get, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        get(params: Params$Resource$Enterprises$Structures$Rooms$Get, options: MethodOptions | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Room>, callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Room>): void;
        get(params: Params$Resource$Enterprises$Structures$Rooms$Get, callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Room>): void;
        get(callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1Room>): void;
        /**
         * Lists rooms managed by the enterprise.
         *
         * @param params - Parameters for request
         * @param options - Optionally override request options, such as `url`, `method`, and `encoding`.
         * @param callback - Optional callback that handles the response.
         * @returns A promise if used with async/await, or void if used with a callback.
         */
        list(params: Params$Resource$Enterprises$Structures$Rooms$List, options: StreamMethodOptions): GaxiosPromise<Readable>;
        list(params?: Params$Resource$Enterprises$Structures$Rooms$List, options?: MethodOptions): GaxiosPromise<Schema$GoogleHomeEnterpriseSdmV1ListRoomsResponse>;
        list(params: Params$Resource$Enterprises$Structures$Rooms$List, options: StreamMethodOptions | BodyResponseCallback<Readable>, callback: BodyResponseCallback<Readable>): void;
        list(params: Params$Resource$Enterprises$Structures$Rooms$List, options: MethodOptions | BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListRoomsResponse>, callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListRoomsResponse>): void;
        list(params: Params$Resource$Enterprises$Structures$Rooms$List, callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListRoomsResponse>): void;
        list(callback: BodyResponseCallback<Schema$GoogleHomeEnterpriseSdmV1ListRoomsResponse>): void;
    }
    export interface Params$Resource$Enterprises$Structures$Rooms$Get extends StandardParameters {
        /**
         * The name of the room requested. For example: "enterprises/XYZ/structures/ABC/rooms/123".
         */
        name?: string;
    }
    export interface Params$Resource$Enterprises$Structures$Rooms$List extends StandardParameters {
        /**
         * The parent resource name of the rooms requested. For example: "enterprises/XYZ/structures/ABC".
         */
        parent?: string;
    }
    export {};
}
