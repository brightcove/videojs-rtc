# VideoJS RTC

This is a plugin for [VideoJS](github/zencoder:videojs) which uses WebRTC to allow you to chat
with someone else while you are watching a video.

There is a [demo](http://videojs-rtc.appspot.com/html/demo.html) available.

## Usage
After you include the `videojsrtc.js` file in your html
```<script src="videojsrtc.js"></script>```

You'll want to enable it on your video.

```javascript
var video = videojs('#myvideo');
video.videojsRtc({});
```

And now you have a videochat window if your browser supports webRTC and userMedia.
If it doesn't support it, it will gracefully hide the plugin.

## To talk to others
Just grab the room key, give it to a friend along with the URL and have them
enter the key into the textbox and then hit 'Join Room'.

## TODO
Stop using AppRTC and switch to a webRTC library so that we could enable video
chat, perhaps with multiple people even, but also to be able to sync up the
`play` and `pause` events between the people that chat over the webRTC data
channel.

## AppRTC

The backend code (running on google's appengine) was taken from the
[AppRTC](http://apprtc.appspot.com) project which was
build by the Firefox and Chrome teams to have a simple chat app.
I modified the [code](https://code.google.com/p/webrtc-samples/source/browse/trunk/apprtc/) to send
the channel key up to the parent via a postMessage so that it could be embeddable in an iframe.
AppRTC is licensed under the [New BSD License](http://opensource.org/licenses/BSD-3-Clause)

# License
[Apache 2.0](LICENSE)
