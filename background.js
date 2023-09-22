chrome.contextMenus.create({
    id: "Subdomain",
    title: "Subdomain",
    contexts: ["selection", "page"]
});
chrome.contextMenus.onClicked.addListener(function(info, tab){
    if (info.menuItemId === "Subdomain") {
        var boop = new URL(tab.url).hostname.replace(/^www?./, '');
        chrome.tabs.create({ url: `https://subdomainfinder.c99.nl/#${boop}`});
    };
});
