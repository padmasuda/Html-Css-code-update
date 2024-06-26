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
exports.AuthPlus = exports.firebaseml_v2beta = exports.firebaseml_v1beta2 = exports.firebaseml_v1 = exports.auth = exports.firebaseml = exports.VERSIONS = void 0;
/*! THIS FILE IS AUTO-GENERATED */
const googleapis_common_1 = require("googleapis-common");
const v1_1 = require("./v1");
Object.defineProperty(exports, "firebaseml_v1", { enumerable: true, get: function () { return v1_1.firebaseml_v1; } });
const v1beta2_1 = require("./v1beta2");
Object.defineProperty(exports, "firebaseml_v1beta2", { enumerable: true, get: function () { return v1beta2_1.firebaseml_v1beta2; } });
const v2beta_1 = require("./v2beta");
Object.defineProperty(exports, "firebaseml_v2beta", { enumerable: true, get: function () { return v2beta_1.firebaseml_v2beta; } });
exports.VERSIONS = {
    v1: v1_1.firebaseml_v1.Firebaseml,
    v1beta2: v1beta2_1.firebaseml_v1beta2.Firebaseml,
    v2beta: v2beta_1.firebaseml_v2beta.Firebaseml,
};
function firebaseml(versionOrOptions) {
    return (0, googleapis_common_1.getAPI)('firebaseml', versionOrOptions, exports.VERSIONS, this);
}
exports.firebaseml = firebaseml;
const auth = new googleapis_common_1.AuthPlus();
exports.auth = auth;
var googleapis_common_2 = require("googleapis-common");
Object.defineProperty(exports, "AuthPlus", { enumerable: true, get: function () { return googleapis_common_2.AuthPlus; } });
