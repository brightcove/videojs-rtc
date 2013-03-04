# VideoJS RTC

This is a plugin for [VideoJS](github/zencoder:videojs) which uses WebRTC to allow you to chat
with someone else while you are watching a video.

There is a [demo](http://videojs-rtc.appspot.com/html/demo.html) available.

## AppRTC

The backend code (running on google's appengine) was taken from the
[AppRTC](http://apprtc.appspot.com) project which was
build by the Firefox and Chrome teams to have a simple chat app.
I modified the [code](https://code.google.com/p/webrtc-samples/source/browse/trunk/apprtc/) to send
the channel key up to the parent via a postMessage so that it could be embeddable in an iframe.
AppRTC is licensed under the [New BSD License](http://opensource.org/licenses/BSD-3-Clause)

# License
[Apache 2.0](LICENSE)
