(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [{
                name: "index.md",
                title: "Week 13 | Introduction - Riverlife Bible Reading Plan",
                url: "/week-13/",
                escapedPath: "week-13/index.md",
                dir: "/week-13/",
                tocId: "toc_/week-13/",
                documentInfo: ["Week 13",null,["index.md"]]
            },
            
        {
                name: "index.md",
                title: "Week 14 | Introduction - Riverlife Bible Reading Plan",
                url: "/week-14/",
                escapedPath: "week-14/index.md",
                dir: "/week-14/",
                tocId: "toc_/week-14/",
                documentInfo: ["Week 14",null,["index.md"]]
            },
            
        {
                name: "index.md",
                title: "Week 12 | Introduction - Riverlife Bible Reading Plan",
                url: "/week-12/",
                escapedPath: "week-12/index.md",
                dir: "/week-12/",
                tocId: "toc_/week-12/",
                documentInfo: ["Week 12",null,["index.md"]]
            },
            
        {
                name: "index.md",
                title: "Week 11 - Bible Reading Plan",
                url: "/week-11/",
                escapedPath: "week-11/index.md",
                dir: "/week-11/",
                tocId: "toc_/week-11/",
                documentInfo: ["Week 11",null,["index.md"]]
            },
            
        
        
        {
                name: "docs.md",
                title: "Developer Guide",
                url: "/docs",
                escapedPath: "docs.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["RiverLife Bible Reading Plan",null,null]
            },
            
        {
                name: "index.md",
                title: "Coming Soon",
                url: "/week-1/",
                escapedPath: "week-1/index.md",
                dir: "/week-1/",
                tocId: "toc_/week-1/",
                documentInfo: ["Week 1",null,["index.md"]]
            },
            
        {
                name: "index.md",
                title: "Coming Soon",
                url: "/week-10/",
                escapedPath: "week-10/index.md",
                dir: "/week-10/",
                tocId: "toc_/week-10/",
                documentInfo: ["Week 10",null,["index.md"]]
            },
            
        {
                name: "index.md",
                title: "Coming Soon",
                url: "/week-2/",
                escapedPath: "week-2/index.md",
                dir: "/week-2/",
                tocId: "toc_/week-2/",
                documentInfo: ["Week 2",null,["index.md"]]
            },
            
        {
                name: "index.md",
                title: "Coming Soon",
                url: "/week-3/",
                escapedPath: "week-3/index.md",
                dir: "/week-3/",
                tocId: "toc_/week-3/",
                documentInfo: ["Week 3",null,["index.md"]]
            },
            
        {
                name: "index.md",
                title: "Coming Soon",
                url: "/week-4/",
                escapedPath: "week-4/index.md",
                dir: "/week-4/",
                tocId: "toc_/week-4/",
                documentInfo: ["Week 4",null,["index.md"]]
            },
            
        {
                name: "index.md",
                title: "Coming Soon",
                url: "/week-5/",
                escapedPath: "week-5/index.md",
                dir: "/week-5/",
                tocId: "toc_/week-5/",
                documentInfo: ["Week 5",null,["index.md"]]
            },
            
        {
                name: "index.md",
                title: "Coming Soon",
                url: "/week-6/",
                escapedPath: "week-6/index.md",
                dir: "/week-6/",
                tocId: "toc_/week-6/",
                documentInfo: ["Week 6",null,["index.md"]]
            },
            
        {
                name: "index.md",
                title: "Coming Soon",
                url: "/week-7/",
                escapedPath: "week-7/index.md",
                dir: "/week-7/",
                tocId: "toc_/week-7/",
                documentInfo: ["Week 7",null,["index.md"]]
            },
            
        {
                name: "index.md",
                title: "Coming Soon",
                url: "/week-8/",
                escapedPath: "week-8/index.md",
                dir: "/week-8/",
                tocId: "toc_/week-8/",
                documentInfo: ["Week 8",null,["index.md"]]
            },
            
        {
                name: "index.md",
                title: "Coming Soon",
                url: "/week-9/",
                escapedPath: "week-9/index.md",
                dir: "/week-9/",
                tocId: "toc_/week-9/",
                documentInfo: ["Week 9",null,["index.md"]]
            },
            
        {
                name: "README.md",
                title: "Using the Bible Reading Plan",
                url: "/guide/",
                escapedPath: "guide/README.md",
                dir: "/guide/",
                tocId: "toc_/guide/",
                documentInfo: ["Guide",null,null]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()