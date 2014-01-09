P2PXHR
======

P2PXHR is a framework that seamlessly power-ups your xhr requests through an on-the-fly peer-to-peer network created from your site's visitors. <br>
It seamlessly chooses between your servers and other peers to get the response. <br>
It is intended to make your content delivery better by making your content deliver when your servers are loaded.  
Built on top of [WebRTC][1]. 


Demos
===============

Two demo apps are included under [/demos](//github.com/peer5/P2PXHR/tree/master/demos).

The [image request](https://github.com/Peer5/P2PXHR/blob/master/demos/images.html)
sends an xhr request for receiving an image from the network. Check out the live demo [here](http://ec2-54-215-66-22.us-west-1.compute.amazonaws.com/examples/imgUsingAPI.html).<br/>
The [file downloader](https://github.com/Peer5/P2PXHR/blob/master/demos/files.html)
sends an xhr request for receiving a larger file. It indicates the amount of data transferred from peers and regular HTTP. In case no additional peers are downloading the file at the moment, open another tab in incognito mode to see the peer-to-peer magic in action. 
Check out the live demo [here](http://ec2-54-215-66-22.us-west-1.compute.amazonaws.com/examples/fdUsingAPI.html).

Getting started
===============
Basic example of creating a new assisted xhr request using p2pxhr:

    var request = new peer5.Request();
    request.open('GET', 'http://path/to/a/big/file.json');
    request.onload = function(e) {
      console.log(this.response);
      ...
    };
    request.send();

This means you can simply search and replace XMLHttpRequest with peer5.Request() in your code, and you are all set with peer-assisted requests.


Uploading a.k.a seeding
=======================
TBD


Supported Browsers
==================

Desktop
* Chrome 26+
* Firefox 23+
* Opera 18

Android:
* Chrome 29+
* Firefox 24+
* Opera 12


Derived from the [WebRTC][1] supported browsers
[1]: http://en.wikipedia.org/wiki/WebRTC


