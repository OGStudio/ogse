FEATURE index.html/Impl
// Update `base64script` argument value each time `Run` is hit.
// NOTE Using URLSearchParams' toString() function doesn't work
// NOTE because toString() converts valid Base64 `=` to invalid `%3D`
// NOTE So, this is not applicable: https://stackoverflow.com/a/41542008
var path = window.location.pathname + "?base64script=" + script
history.pushState(null, "", path);
