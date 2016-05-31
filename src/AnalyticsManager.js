/**
 * Created by jedi on 27-Mar-16.
 */
var ImplAmplitude = require('./impl/ImplAmplitude');

var AnalyticsManager = function ()
{
    'use strict';
    this._impl = null;
};

AnalyticsManager.prototype.constructor = AnalyticsManager;
module.exports = AnalyticsManager;

AnalyticsManager.prototype.init = function(config)
{
    'use strict';
    this._config = config;
    this.createImplementation();
};

AnalyticsManager.prototype.createImplementation = function()
{
    'use strict';
    console.log('-------------- Analytics create implementation  -----------------');
    if(this._config.provider === AnalyticsManager.Providers.AMPLITUDE) {
        console.log('-------------- Analytics create Amplitude implementation  -----------------');
        this._impl = new ImplAmplitude(this._config);
    }
    if(this._impl !== null) {
        console.log('-------------- Analytics init implementation  -----------------');
        this._impl.init();
    }
};

AnalyticsManager.prototype.logEvent = function(eventName, params)
{
    'use strict';
    this._impl.logEvent(eventName, params);
};

AnalyticsManager.Providers = {
    AMPLITUDE : 'analyticsProvider.amplitude'
};

Object.freeze(AnalyticsManager.Providers);
