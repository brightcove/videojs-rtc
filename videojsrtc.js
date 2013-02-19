videojs.plugin('videojsRtc', function(options) {

  var
    iframe = document.createElement('iframe'),
    wrapper = document.createDocumentFragment(),
    wrapperDiv = document.createElement('div'),
    prop,
    div;

  iframe.src = 'https://videojs-rtc.appspot.com/html/webrtc.html';
  iframe.height = 350;
  iframe.width = 600;

  for (prop in this) {
    div = this[prop]
    if (div instanceof HTMLDivElement) {
      break;
    } 
  }

  if (!(div instanceof HTMLDivElement)) {
    return;
  }

  div.parentElement.replaceChild(wrapperDiv, div);
  wrapper.appendChild(div);
  wrapper.appendChild(iframe);
  wrapperDiv.appendChild(wrapper);
});
