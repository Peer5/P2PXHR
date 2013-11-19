P2PXhr
======

a framework for p2p data sharing using xhr requests. 
Seamlessly chooses between your servers and other peers to get the response. 
Build on top of [WebRTC][1]. 

Demo
===============

Two demo apps are included under [/demos](//github.com/ebidel/idb.filesystem.js/tree/master/demos). 
The [basic demo](http://html5-demos.appspot.com/static/filesystem/idb.filesystem.js/demos/basic/index.html)
allows you add files to the app by drag and drop from the desktop. The second demo 
is a slightly modified version of filer.js's [playground app](http://html5-demos.appspot.com/static/filesystem/idb.filesystem.js/demos/playground/index.html). What's exciting is that the same app now works in other browsers besides Chrome!

<a href="http://html5-demos.appspot.com/static/filesystem/idb.filesystem.js/demos/basic/index.html">
  <img src="https://raw.github.com/ebidel/idb.filesystem.js/master/demos/playground/images/demo_screenshot.png" title="Demo app screenshot" alt="Demo app screenshot">
</a>

Getting started
===============


Basic example of opening creating a new xhr request using p2pxhr:

var request = new peer5.Request();
request.open('GET', 'http://path/to/a/big/file.json');
request.onload = function(e){
  console.log(this.response);
  ...
};

request.send();

compared to a regular xhr request:

var xhr = new XMLHttpRequest(); // (taken from html5rocks.com)
xhr.open('GET', '/path/to/image.png', true);
xhr.responseType = 'blob';

xhr.onload = function(e) {
  if (this.status == 200) {
    // Note: .response instead of .responseText
    var blob = new Blob([this.response], {type: 'image/png'});
    ...
  }
};
xhr.send();                                                



Unlisted browsers and/or versions (e.g. earlier versions of Firefox) that
support IndexedDB will likely work; I just haven't tested them.

[1]: http://dev.w3.org/2009/dap/file-system/pub/FileSystem/
[2]: https://developer.mozilla.org/en/IndexedDB

P2PXhr is a JavaScript library that seamlessly empowers your xhr requests through an on-the-fly peer-to-peer network created from your site's visitors. 
It is intended to make content delivery faster by making realtime decision to deliver content, either from your servers or other peers. 

The library works by using [WebRTC][1]  

