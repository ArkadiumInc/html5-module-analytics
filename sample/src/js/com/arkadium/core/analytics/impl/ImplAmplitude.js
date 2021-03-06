/**
 * Created by jedi on 27-May-16.
 */

var ImplAmplitude = function (config)
{
    'use strict';
    this._appId = config.amplitude.appId;
};

ImplAmplitude.prototype.constructor = ImplAmplitude;
module.exports = ImplAmplitude;

ImplAmplitude.prototype.init = function()
{
    // This initialization code was taken from Amplitude Dashboard. Amplutude provides it for developers
    console.log('-------------- Amplitude Analytics initialiation -----------------');
    (function(e,t){var n=e.amplitude||{_q:[]};var r=t.createElement("script");r.type="text/javascript";
        r.async=true;r.src="https://d24n15hnbwhuhn.cloudfront.net/libs/amplitude-2.9.1-min.gz.js";
        r.onload=function(){e.amplitude.runQueuedFunctions()};var i=t.getElementsByTagName("script")[0];
        i.parentNode.insertBefore(r,i);var s=function(){this._q=[];return this};function o(e){
            s.prototype[e]=function(){this._q.push([e].concat(Array.prototype.slice.call(arguments,0)));
                return this}}var a=["add","append","clearAll","prepend","set","setOnce","unset"];for(var c=0;c<a.length;c++){
            o(a[c])}n.Identify=s;var u=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","setGlobalUserProperties","identify","clearUserProperties"];
        function p(e){function t(t){e[t]=function(){e._q.push([t].concat(Array.prototype.slice.call(arguments,0)));
        }}for(var n=0;n<u.length;n++){t(u[n])}}p(n);e.amplitude=n})(window,document);

    amplitude.init(this._appId);
};

ImplAmplitude.prototype.logEvent = function(eventName, params)
{
    'use strict';
    console.log('-------------- Amplitude Analytics event ----------------- name='+eventName+', params='+params);
    amplitude.logEvent(eventName, params);
};
