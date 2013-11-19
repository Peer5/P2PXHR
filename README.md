P2PXhr
======

P2PXhr is a framework for p2p data sharing using xhr requests. <br>
Seamlessly chooses between your servers and other peers to get the response. <br>
Build on top of [WebRTC][1]. 

Demo
===============

Two demo apps are included under [/demos](//github.com/ebidel/idb.filesystem.js/tree/master/demos). 

The [image request](http://html5-demos.appspot.com/static/filesystem/idb.filesystem.js/demos/basic/index.html)
sends an xhr request for receiving an image from the network. 
The [file downloader](http://html5-demos.appspot.com/static/filesystem/idb.filesystem.js/demos/playground/index.html) sends an xhr request for receiving a larger file, while displaying a simple progress bar to the user. 

You can check out full live implementation of our API at our anonymous file sharing :
<a href="http://sharefest.me">
  <img src="" title="Demo app screenshot" alt="Demo app screenshot">
</a>

Getting started
===============


Basic example of creating a new xhr request using p2pxhr:

    var request = new peer5.Request();
    request.open('GET', 'http://path/to/a/big/file.json');
    request.onload = function(e) {
      console.log(this.response);
      ...
    };
    request.send();

Compared to a regular xhr request:

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

You can easily convert any existing XHR request you have in your code with a peer-assisted XHR request.


Supported Browsers
==================

* Chrome 26+
* Firefox 23+
* Opera 12

These is derived from the [WebRTC][1] supported browsers
[1]: http://en.wikipedia.org/wiki/WebRTC

P2PXhr is a JavaScript library that seamlessly empowers your xhr requests through an on-the-fly peer-to-peer network created from your site's visitors. 
It is intended to make content delivery faster by making realtime decision to deliver content, either from your servers or other peers. 

