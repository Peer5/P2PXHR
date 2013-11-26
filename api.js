/*
var peer5_options =
{
    downloadMode:”hybrid” or "p2p" or "http". default “hybrid”;
}
 */
peer5.Request =  function(peer5_options){
    peer5.Request.prototype = {
        /*
        id - either http url for uploading/downloading to/from a server,
        or a swarmId for p2p only case
        or alias untill there’s a swarmId in the upload p2p case
        method: “GET” / “POST”
        e.g: peer5Request.open(“GET”,”images.google.com/img1.jpg”)
         */
        open: function(method, id) {},

        /*
        Warning: Not implemented
        e.g: (“range”,”5-10”)
         */
        setRequestHeader:function(header, value) {},

        /*
        sends the request and activates the peer5 process
        e.g: peer5Request.send()
         */
        send: function() {},

        /*
        Warning:Not implemented
        Available only when state >= 2
        content-length,content-range, content-disposition,last-modified
        see http://en.wikipedia.org/wiki/List_of_HTTP_header_fields#Responses
         */
        getResponseHeader:function(){},

        /*
        This method cancels the download, clears all connections, memory and objects
        offline storage remains
        options =
        {
            leaveSwarm:true or false. default false;
        }
        For example:
        to pause: keeps the connections, keeps the memory/objects, keeps offline storage call abort()
        to stop: terminates connections, memory/objects call abort({leaveSwarm:true})
        to resume in either case create a new request for the same swarmId/url.
        This method triggers the events onabort(),onloadend()
         */
        abort: function() {},


        /* -- EVENTS --
        These events are null and the user needs to set “listen” to them.
         */

        /*
        Warning: not implemented
         */
        onreadystatechange: function(e) {},

        /*
         Warning: not implemented
         */
        onloadstart: function(e) {},

        /*
        called each time a p2p block is received and verified or bubbles up xhr’s onprogress
        e.loaded - amount of bytes loaded so far in the request
        e.target.lastTotalLoaded - e.loaded from the last onprogress
        e.lengthComputable - whether the total request size is available in this event, i.e true or false
        e.total - file size, available only when e.lengthComputable = true.
        not implemented - blob-url, or reference to memory blob;
         */
        onprogress: function(e) {},

        /*
        When request was aborted, e.g: envoking abort()
         */
        onabort: function(e) {},

        /*
        onerror is called when there was an error in the request which prevents it to continue.
        size of asset is too large
        browser unsupported
        CORS error
        HTTP errors
        e.errorNum - number of error see table x.x TBD
        e.errorDescription - description of the error (not sure about this one yet)
         */
        onerror:function(e) {},

        /*
        When request was successfully completed
        e.currentTarget.response (this.response) - contains a reference to the data or blob-url
        e.fileInfo - A fileInfo object, see object description in table x.x TBD
        fileInfo:
        {
            swarmId
        }
        */
        onload:function(e) {},

        /*
        Warning: not implemented
        When a ‘timeout attribute’ amount of time has passed before the request could complete
         */
        ontimeout:function(e) {},

        /*
        When request was completed (with or without success)
         */
        onloadend:function(e) {},

        /*
        Advanced event to monitor swarm and p2p status.
        e.swarmHealth =
        {
            leechers:#;
            seeders:#;
            completedDownloads:#
        } - number of leechers,seeders currently in the swarm, and number of total completedDownloads in the swarm.
        e.activePeerConnections - number of peers the client is connected to
        */
        onswarmstatechange:function(e){}
    }
}


/*  --  Advanced options and methods    --  */


    /*
    Warning: not impelemented
    only the options that are specified will be overwritten
    options:
    {
        inMemory:true or false; if set to true, Peer5 will not use any available disk but only RAM. Suitable for small files mostly. default false.
        spaceReqPrompt:true or false; - if set to true, when needed will request authorization to use diskspace, else size limit, firefox = 250MB, chrome = 10% free diskspace. default true.
        downLinkLimit:#; in bytes/seconds
        upLinkLimit:#; in bytes/seconds
    }
    */
    peer5.setGlobalOptions = function(options) {};


    /*
    Warning: not implemented
    Resource =
    {
        fileSize
        swarmId
        name?
        numOfBlocks
        numOfBlocksDownloaded
        status? (play,pause,stop)
    }
    resourceId - Either swarmId or url used when creating the resource
    */
    peer5.removeResource(resourceId)

    /*
    Warning: not implemented
    resources =
    {
        resourceId:Resource
    }
     cb(resources)
     */
    peer5.getAllLocalResources(cb)

    /*
    Warning: not implemented
    resourceId - Either swarmId or url used when creating the resource
    cb(resources) - only 1 resourceId in the resources object
     */
    peer5.getLocalResource(resourceId,cb)
