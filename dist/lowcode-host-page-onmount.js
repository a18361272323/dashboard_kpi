// 低开宿主页 onMount — 粘贴到 页面渲染完成 → 执行 JS
// 模型: MOUJn1fQ9M | srcdoc 同域
(function() {
  function decodeBase64Utf8(base64) {
    var binary = atob(base64);
    var bytes = Uint8Array.from(binary, function(c) { return c.charCodeAt(0); });
    if (typeof TextDecoder !== 'undefined') {
      return new TextDecoder('utf-8').decode(bytes);
    }
    var escaped = '';
    for (var i = 0; i < bytes.length; i++) {
      escaped += '%' + ('00' + bytes[i].toString(16)).slice(-2);
    }
    return decodeURIComponent(escaped);
  }

  var runtimeWindow = env.getCurrentWindow ? env.getCurrentWindow() : window;
  var doc = runtimeWindow.document;
  var container = doc.getElementsByClassName('xcode-pc-page')[0] || doc.body;
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.minHeight = '100vh';
  container.style.padding = '0';
  container.style.margin = '0';
  container.style.overflow = 'hidden';
  var wb = doc.getElementsByClassName('xcode-layout-content procode-render-workbench-content')[0];
  if (wb) wb.style.padding = '0';
  var old = doc.getElementById('dashboard-app');
  if (old) old.remove();
  var decoded = decodeBase64Utf8('PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9InpoLUNOIj4KPGhlYWQ+CjxtZXRhIGNoYXJzZXQ9IlVURi04IiAvPgo8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9MTkyMCIgLz4KPHRpdGxlPuaVsOaNruWkp+WxjzwvdGl0bGU+CjxzdHlsZT4qe21hcmdpbjowO3BhZGRpbmc6MDtib3gtc2l6aW5nOmJvcmRlci1ib3h9aHRtbCxib2R5LCNhcHB7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtvdmVyZmxvdzpoaWRkZW59PC9zdHlsZT4KPC9oZWFkPgo8Ym9keT4KPGRpdiBpZD0iYXBwIj48L2Rpdj4KPHNjcmlwdD4KKGZ1bmN0aW9uKCl7CiAgdmFyIE09J2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9hMTgzNjEyNzIzMjMvZGFzaGJvYXJkX2twaUBhYTdlODQwL2Rpc3QvbWljcm9mcm9udGVuZC1hc3NldHMuZGlyZWN0Lmpzb24nOwogIHZhciBCPSdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvYTE4MzYxMjcyMzIzL2Rhc2hib2FyZF9rcGlAYWE3ZTg0MC9kaXN0Lyc7CiAgZnVuY3Rpb24gTCh1LHQpewogICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHIsail7CiAgICAgIGlmKHQpewogICAgICAgIHZhciBzPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpOwogICAgICAgIHMuc3JjPXU7cy5vbmxvYWQ9cjtzLm9uZXJyb3I9ZnVuY3Rpb24oKXtqKG5ldyBFcnJvcignc2NyaXB0ICcrdSkpfTsKICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHMpOwogICAgICB9ZWxzZXsKICAgICAgICB2YXIgbD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7CiAgICAgICAgbC5yZWw9J3N0eWxlc2hlZXQnO2wuaHJlZj11O2wub25sb2FkPXI7bC5vbmVycm9yPWZ1bmN0aW9uKCl7aihuZXcgRXJyb3IoJ2NzcyAnK3UpKX07CiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsKTsKICAgICAgfQogICAgfSk7CiAgfQogIGZldGNoKE0se2NhY2hlOiduby1jYWNoZSd9KS50aGVuKGZ1bmN0aW9uKHIpe3JldHVybiByLmpzb24oKX0pLnRoZW4oZnVuY3Rpb24obSl7CiAgICB2YXIgY3NzPShBcnJheS5pc0FycmF5KG0uY3NzKT9tLmNzczpbXSkubWFwKGZ1bmN0aW9uKHUpe3JldHVybiBMKEIrdSwwKX0pOwogICAgcmV0dXJuIFByb21pc2UuYWxsKGNzcyk7CiAgfSkudGhlbihmdW5jdGlvbigpewogICAgdmFyIGpzPShBcnJheS5pc0FycmF5KG0uanMpP20uanM6W10pLm1hcChmdW5jdGlvbih1KXtyZXR1cm4gTChCK3UsMSl9KTsKICAgIHJldHVybiBQcm9taXNlLmFsbChqcyk7CiAgfSkuY2F0Y2goZnVuY3Rpb24oZSl7CiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykudGV4dENvbnRlbnQ9J0xvYWQgZmFpbGVkOiAnK2UubWVzc2FnZTsKICB9KTsKfSkoKTsKPC9zY3JpcHQ+CjwvYm9keT4KPC9odG1sPgo=');
  var iframe = doc.createElement('iframe');
  iframe.id = 'dashboard-app';
  iframe.style.width = '100%';
  iframe.style.height = '100%';
  iframe.style.border = 'none';
  iframe.style.display = 'block';
  iframe.srcdoc = decoded;
  container.innerHTML = '';
  container.appendChild(iframe);
})();
