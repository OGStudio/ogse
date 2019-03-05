FEATURE index.html/Impl
// Update `base64code` argument value each time `Run` is hit.
// Topic: How can I add or update a query string parameter?
// Source: https://stackoverflow.com/a/41542008
if ("URLSearchParams" in window)
{
    var params = new URLSearchParams(window.location.search);
    params.set("base64code", script);
    var newRelativePathQuery =
        window.location.pathname + "?" + params.toString();
    history.pushState(null, "", newRelativePathQuery);
}
