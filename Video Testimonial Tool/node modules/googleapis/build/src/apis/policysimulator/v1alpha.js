"use strict";
// Copyright 2020 Google LLC
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
Object.defineProperty(exports, "__esModule", { value: true });
exports.policysimulator_v1alpha = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable no-irregular-whitespace */
const googleapis_common_1 = require("googleapis-common");
var policysimulator_v1alpha;
(function (policysimulator_v1alpha) {
    /**
     * Policy Simulator API
     *
     *  Policy Simulator is a collection of endpoints for creating, running, and viewing a Replay. A `Replay` is a type of simulation that lets you see how your members&#39; access to resources might change if you changed your IAM policy. During a `Replay`, Policy Simulator re-evaluates, or replays, past access attempts under both the current policy and your proposed policy, and compares those results to determine how your members&#39; access might change under the proposed policy.
     *
     * @example
     * ```js
     * const {google} = require('googleapis');
     * const policysimulator = google.policysimulator('v1alpha');
     * ```
     */
    class Policysimulator {
        constructor(options, google) {
            this.context = {
                _options: options || {},
                google,
            };
            this.folders = new Resource$Folders(this.context);
            this.operations = new Resource$Operations(this.context);
            this.organizations = new Resource$Organizations(this.context);
            this.projects = new Resource$Projects(this.context);
        }
    }
    policysimulator_v1alpha.Policysimulator = Policysimulator;
    class Resource$Folders {
        constructor(context) {
            this.context = context;
            this.locations = new Resource$Folders$Locations(this.context);
        }
    }
    policysimulator_v1alpha.Resource$Folders = Resource$Folders;
    class Resource$Folders$Locations {
        constructor(context) {
            this.context = context;
            this.orgPolicyViolationsPreviews =
                new Resource$Folders$Locations$Orgpolicyviolationspreviews(this.context);
            this.replays = new Resource$Folders$Locations$Replays(this.context);
        }
    }
    policysimulator_v1alpha.Resource$Folders$Locations = Resource$Folders$Locations;
    class Resource$Folders$Locations$Orgpolicyviolationspreviews {
        constructor(context) {
            this.context = context;
            this.operations =
                new Resource$Folders$Locations$Orgpolicyviolationspreviews$Operations(this.context);
        }
    }
    policysimulator_v1alpha.Resource$Folders$Locations$Orgpolicyviolationspreviews = Resource$Folders$Locations$Orgpolicyviolationspreviews;
    class Resource$Folders$Locations$Orgpolicyviolationspreviews$Operations {
        constructor(context) {
            this.context = context;
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params =
                    {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://policysimulator.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context: this.context,
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            }
            else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
    }
    policysimulator_v1alpha.Resource$Folders$Locations$Orgpolicyviolationspreviews$Operations = Resource$Folders$Locations$Orgpolicyviolationspreviews$Operations;
    class Resource$Folders$Locations$Replays {
        constructor(context) {
            this.context = context;
            this.operations = new Resource$Folders$Locations$Replays$Operations(this.context);
        }
    }
    policysimulator_v1alpha.Resource$Folders$Locations$Replays = Resource$Folders$Locations$Replays;
    class Resource$Folders$Locations$Replays$Operations {
        constructor(context) {
            this.context = context;
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://policysimulator.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context: this.context,
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            }
            else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params =
                    {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://policysimulator.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context: this.context,
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            }
            else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
    }
    policysimulator_v1alpha.Resource$Folders$Locations$Replays$Operations = Resource$Folders$Locations$Replays$Operations;
    class Resource$Operations {
        constructor(context) {
            this.context = context;
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://policysimulator.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context: this.context,
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            }
            else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback || {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params = {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://policysimulator.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context: this.context,
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            }
            else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
    }
    policysimulator_v1alpha.Resource$Operations = Resource$Operations;
    class Resource$Organizations {
        constructor(context) {
            this.context = context;
            this.locations = new Resource$Organizations$Locations(this.context);
        }
    }
    policysimulator_v1alpha.Resource$Organizations = Resource$Organizations;
    class Resource$Organizations$Locations {
        constructor(context) {
            this.context = context;
            this.orgPolicyViolationsPreviews =
                new Resource$Organizations$Locations$Orgpolicyviolationspreviews(this.context);
            this.replays = new Resource$Organizations$Locations$Replays(this.context);
        }
    }
    policysimulator_v1alpha.Resource$Organizations$Locations = Resource$Organizations$Locations;
    class Resource$Organizations$Locations$Orgpolicyviolationspreviews {
        constructor(context) {
            this.context = context;
            this.operations =
                new Resource$Organizations$Locations$Orgpolicyviolationspreviews$Operations(this.context);
        }
    }
    policysimulator_v1alpha.Resource$Organizations$Locations$Orgpolicyviolationspreviews = Resource$Organizations$Locations$Orgpolicyviolationspreviews;
    class Resource$Organizations$Locations$Orgpolicyviolationspreviews$Operations {
        constructor(context) {
            this.context = context;
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params =
                    {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://policysimulator.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context: this.context,
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            }
            else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
    }
    policysimulator_v1alpha.Resource$Organizations$Locations$Orgpolicyviolationspreviews$Operations = Resource$Organizations$Locations$Orgpolicyviolationspreviews$Operations;
    class Resource$Organizations$Locations$Replays {
        constructor(context) {
            this.context = context;
            this.operations = new Resource$Organizations$Locations$Replays$Operations(this.context);
        }
    }
    policysimulator_v1alpha.Resource$Organizations$Locations$Replays = Resource$Organizations$Locations$Replays;
    class Resource$Organizations$Locations$Replays$Operations {
        constructor(context) {
            this.context = context;
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params =
                    {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://policysimulator.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context: this.context,
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            }
            else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params =
                    {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://policysimulator.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context: this.context,
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            }
            else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
    }
    policysimulator_v1alpha.Resource$Organizations$Locations$Replays$Operations = Resource$Organizations$Locations$Replays$Operations;
    class Resource$Projects {
        constructor(context) {
            this.context = context;
            this.locations = new Resource$Projects$Locations(this.context);
        }
    }
    policysimulator_v1alpha.Resource$Projects = Resource$Projects;
    class Resource$Projects$Locations {
        constructor(context) {
            this.context = context;
            this.orgPolicyViolationsPreviews =
                new Resource$Projects$Locations$Orgpolicyviolationspreviews(this.context);
            this.replays = new Resource$Projects$Locations$Replays(this.context);
        }
    }
    policysimulator_v1alpha.Resource$Projects$Locations = Resource$Projects$Locations;
    class Resource$Projects$Locations$Orgpolicyviolationspreviews {
        constructor(context) {
            this.context = context;
            this.operations =
                new Resource$Projects$Locations$Orgpolicyviolationspreviews$Operations(this.context);
        }
    }
    policysimulator_v1alpha.Resource$Projects$Locations$Orgpolicyviolationspreviews = Resource$Projects$Locations$Orgpolicyviolationspreviews;
    class Resource$Projects$Locations$Orgpolicyviolationspreviews$Operations {
        constructor(context) {
            this.context = context;
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params =
                    {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://policysimulator.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context: this.context,
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            }
            else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
    }
    policysimulator_v1alpha.Resource$Projects$Locations$Orgpolicyviolationspreviews$Operations = Resource$Projects$Locations$Orgpolicyviolationspreviews$Operations;
    class Resource$Projects$Locations$Replays {
        constructor(context) {
            this.context = context;
            this.operations = new Resource$Projects$Locations$Replays$Operations(this.context);
        }
    }
    policysimulator_v1alpha.Resource$Projects$Locations$Replays = Resource$Projects$Locations$Replays;
    class Resource$Projects$Locations$Replays$Operations {
        constructor(context) {
            this.context = context;
        }
        get(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params =
                    {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://policysimulator.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context: this.context,
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            }
            else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
        list(paramsOrCallback, optionsOrCallback, callback) {
            let params = (paramsOrCallback ||
                {});
            let options = (optionsOrCallback || {});
            if (typeof paramsOrCallback === 'function') {
                callback = paramsOrCallback;
                params =
                    {};
                options = {};
            }
            if (typeof optionsOrCallback === 'function') {
                callback = optionsOrCallback;
                options = {};
            }
            const rootUrl = options.rootUrl || 'https://policysimulator.googleapis.com/';
            const parameters = {
                options: Object.assign({
                    url: (rootUrl + '/v1alpha/{+name}').replace(/([^:]\/)\/+/g, '$1'),
                    method: 'GET',
                }, options),
                params,
                requiredParams: ['name'],
                pathParams: ['name'],
                context: this.context,
            };
            if (callback) {
                (0, googleapis_common_1.createAPIRequest)(parameters, callback);
            }
            else {
                return (0, googleapis_common_1.createAPIRequest)(parameters);
            }
        }
    }
    policysimulator_v1alpha.Resource$Projects$Locations$Replays$Operations = Resource$Projects$Locations$Replays$Operations;
})(policysimulator_v1alpha || (exports.policysimulator_v1alpha = policysimulator_v1alpha = {}));
