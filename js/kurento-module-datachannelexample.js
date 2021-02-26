require=(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var disguise = kurentoClient.disguise;

var ChecktypeError = kurentoClient.checkType.ChecktypeError;

var Filter = kurentoClient.register.abstracts.Filter;


/**
 * Create an element
 *
 * @classdesc
 *  KmsDetectFaces interface. Documentation about the module
 *
 * @extends module:core/abstracts.Filter
 *
 * @constructor module:datachannelexample.KmsDetectFaces
 */
function KmsDetectFaces(){
  KmsDetectFaces.super_.call(this);
};
inherits(KmsDetectFaces, Filter);


/**
 * @alias module:datachannelexample.KmsDetectFaces.constructorParams
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the parent {@link module:core.MediaPipeline MediaPipeline}
 */
KmsDetectFaces.constructorParams = {
  mediaPipeline: {
    type: 'kurento.MediaPipeline',
    required: true
  }
};

/**
 * @alias module:datachannelexample.KmsDetectFaces.events
 *
 * @extends module:core/abstracts.Filter.events
 */
KmsDetectFaces.events = Filter.events;


/**
 * Checker for {@link module:datachannelexample.KmsDetectFaces}
 *
 * @memberof module:datachannelexample
 *
 * @param {external:String} key
 * @param {module:datachannelexample.KmsDetectFaces} value
 */
function checkKmsDetectFaces(key, value)
{
  if(!(value instanceof KmsDetectFaces))
    throw ChecktypeError(key, KmsDetectFaces, value);
};


module.exports = KmsDetectFaces;

KmsDetectFaces.check = checkKmsDetectFaces;

},{"inherits":"inherits","kurento-client":"kurento-client"}],2:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var disguise = kurentoClient.disguise;

var ChecktypeError = kurentoClient.checkType.ChecktypeError;

var MediaElement = kurentoClient.register.abstracts.MediaElement;


/**
 * Create an element
 *
 * @classdesc
 *  KmsSendData interface. Documentation about the module
 *
 * @extends module:core/abstracts.MediaElement
 *
 * @constructor module:datachannelexample.KmsSendData
 */
function KmsSendData(){
  KmsSendData.super_.call(this);
};
inherits(KmsSendData, MediaElement);


/**
 * @alias module:datachannelexample.KmsSendData.constructorParams
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the parent {@link module:core.MediaPipeline MediaPipeline}
 */
KmsSendData.constructorParams = {
  mediaPipeline: {
    type: 'kurento.MediaPipeline',
    required: true
  }
};

/**
 * @alias module:datachannelexample.KmsSendData.events
 *
 * @extends module:core/abstracts.MediaElement.events
 */
KmsSendData.events = MediaElement.events;


/**
 * Checker for {@link module:datachannelexample.KmsSendData}
 *
 * @memberof module:datachannelexample
 *
 * @param {external:String} key
 * @param {module:datachannelexample.KmsSendData} value
 */
function checkKmsSendData(key, value)
{
  if(!(value instanceof KmsSendData))
    throw ChecktypeError(key, KmsSendData, value);
};


module.exports = KmsSendData;

KmsSendData.check = checkKmsSendData;

},{"inherits":"inherits","kurento-client":"kurento-client"}],3:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var disguise = kurentoClient.disguise;

var ChecktypeError = kurentoClient.checkType.ChecktypeError;

var MediaElement = kurentoClient.register.abstracts.MediaElement;


/**
 * Create an element
 *
 * @classdesc
 *  KmsShowData interface. Documentation about the module
 *
 * @extends module:core/abstracts.MediaElement
 *
 * @constructor module:datachannelexample.KmsShowData
 */
function KmsShowData(){
  KmsShowData.super_.call(this);
};
inherits(KmsShowData, MediaElement);


/**
 * @alias module:datachannelexample.KmsShowData.constructorParams
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the parent {@link module:core.MediaPipeline MediaPipeline}
 */
KmsShowData.constructorParams = {
  mediaPipeline: {
    type: 'kurento.MediaPipeline',
    required: true
  }
};

/**
 * @alias module:datachannelexample.KmsShowData.events
 *
 * @extends module:core/abstracts.MediaElement.events
 */
KmsShowData.events = MediaElement.events;


/**
 * Checker for {@link module:datachannelexample.KmsShowData}
 *
 * @memberof module:datachannelexample
 *
 * @param {external:String} key
 * @param {module:datachannelexample.KmsShowData} value
 */
function checkKmsShowData(key, value)
{
  if(!(value instanceof KmsShowData))
    throw ChecktypeError(key, KmsShowData, value);
};


module.exports = KmsShowData;

KmsShowData.check = checkKmsShowData;

},{"inherits":"inherits","kurento-client":"kurento-client"}],4:[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var disguise = kurentoClient.disguise;

var ChecktypeError = kurentoClient.checkType.ChecktypeError;

var Filter = kurentoClient.register.abstracts.Filter;


/**
 * Create an element
 *
 * @classdesc
 *  KmsShowFaces interface. Documentation about the module
 *
 * @extends module:core/abstracts.Filter
 *
 * @constructor module:datachannelexample.KmsShowFaces
 */
function KmsShowFaces(){
  KmsShowFaces.super_.call(this);
};
inherits(KmsShowFaces, Filter);


/**
 * @alias module:datachannelexample.KmsShowFaces.constructorParams
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the parent {@link module:core.MediaPipeline MediaPipeline}
 */
KmsShowFaces.constructorParams = {
  mediaPipeline: {
    type: 'kurento.MediaPipeline',
    required: true
  }
};

/**
 * @alias module:datachannelexample.KmsShowFaces.events
 *
 * @extends module:core/abstracts.Filter.events
 */
KmsShowFaces.events = Filter.events;


/**
 * Checker for {@link module:datachannelexample.KmsShowFaces}
 *
 * @memberof module:datachannelexample
 *
 * @param {external:String} key
 * @param {module:datachannelexample.KmsShowFaces} value
 */
function checkKmsShowFaces(key, value)
{
  if(!(value instanceof KmsShowFaces))
    throw ChecktypeError(key, KmsShowFaces, value);
};


module.exports = KmsShowFaces;

KmsShowFaces.check = checkKmsShowFaces;

},{"inherits":"inherits","kurento-client":"kurento-client"}],5:[function(require,module,exports){
/**
 * Loader for the kurento-module-datachannelexample package on the browser
 */

require('.');

},{".":"kurento-module-datachannelexample"}],"kurento-module-datachannelexample":[function(require,module,exports){
/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Media API for the Kurento Web SDK
 *
 * @module datachannelexample
 *
 * @copyright 2013-2015 Kurento (http://kurento.org/)
 * @license ALv2
 */

Object.defineProperty(exports, 'name',    {value: 'datachannelexample'});
Object.defineProperty(exports, 'version', {value: '6.16.0'});


var KmsDetectFaces = require('./KmsDetectFaces');
var KmsSendData = require('./KmsSendData');
var KmsShowData = require('./KmsShowData');
var KmsShowFaces = require('./KmsShowFaces');


exports.KmsDetectFaces = KmsDetectFaces;
exports.KmsSendData = KmsSendData;
exports.KmsShowData = KmsShowData;
exports.KmsShowFaces = KmsShowFaces;

},{"./KmsDetectFaces":1,"./KmsSendData":2,"./KmsShowData":3,"./KmsShowFaces":4}]},{},[5]);
