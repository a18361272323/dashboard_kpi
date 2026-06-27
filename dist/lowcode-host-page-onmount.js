// 低开宿主页 onMount — @f5d92e7 (ProvidePlugin fix)
(function() {
  function decodeBase64Utf8(base64) {
    var binary = atob(base64);
    var bytes = Uint8Array.from(binary, function(c) { return c.charCodeAt(0); });
    if (typeof TextDecoder !== 'undefined') return new TextDecoder('utf-8').decode(bytes);
    var escaped = '';
    for (var i = 0; i < bytes.length; i++) escaped += '%' + ('00' + bytes[i].toString(16)).slice(-2);
    return decodeURIComponent(escaped);
  }
  var runtimeWindow = env.getCurrentWindow ? env.getCurrentWindow() : window;
  var doc = runtimeWindow.document;
  var container = doc.getElementsByClassName('xcode-pc-page')[0] || doc.body;
  container.style.width = '100%'; container.style.height = '100%'; container.style.minHeight = '100vh';
  container.style.padding = '0'; container.style.margin = '0'; container.style.overflow = 'hidden';
  var wb = doc.getElementsByClassName('xcode-layout-content procode-render-workbench-content')[0];
  if (wb) wb.style.padding = '0';
  var old = doc.getElementById('dashboard-app'); if (old) old.remove();
  var iframe = doc.createElement('iframe');
  iframe.id = 'dashboard-app';
  iframe.style.width = '100%'; iframe.style.height = '100%'; iframe.style.border = 'none'; iframe.style.display = 'block';
  iframe.srcdoc = decodeBase64Utf8('');
  container.innerHTML = ''; container.appendChild(iframe);
})();
