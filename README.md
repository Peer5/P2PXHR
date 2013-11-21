P2PXHR
======

P2PXHR is a framework that seamlessly power-ups your xhr requests through an on-the-fly peer-to-peer network created from your site's visitors. <br>
It seamlessly chooses between your servers and other peers to get the response. <br>
It is intended to make your content delivery better by making your content deliver when your servers are loaded.  
Built on top of [WebRTC][1]. 


Demos
===============

Two demo apps are included under [/demos](//github.com/ebidel/idb.filesystem.js/tree/master/demos). 

The [image request]()
sends an xhr request for receiving an image from the network. 
The [file downloader]() 
sends an xhr request for receiving a larger file. It indicates the amount of data transferred from peers and regular HTTP. In case no additional peers are downloading the file at the moment, open another tab in incognito mode to see the peer-to-peer magic in action.  

You can check out our anonymous file sharing solution for another live implementations of our API:
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

This means you can simply search and replace XMLHttpRequest with peer5.Request() in your code, and you are all set with peer-assisted requests.



Supported Browsers
==================

* Chrome 26+
* Firefox 23+
* Opera 12

These is derived from the [WebRTC][1] supported browsers
[1]: http://en.wikipedia.org/wiki/WebRTC


