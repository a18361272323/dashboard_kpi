var mountId = "dashboard-app-host";
var frameId = "dashboard-app-frame";
var srcdocBase64 = "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9InpoLUNOIj4KICA8aGVhZD4KICAgIDxtZXRhIGNoYXJzZXQ9IlVURi04IiAvPgogICAgPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAiIC8+CiAgICA8dGl0bGU+5pWw5o2u5aSn5bGPPC90aXRsZT4KICA8L2hlYWQ+CiAgPGJvZHk+CiAgICA8ZGl2IGlkPSJhcHAiPjwvZGl2PgogICAgPHNjcmlwdCB0eXBlPSJtb2R1bGUiPgogICAgICBjb25zdCBhc3NldE1hbmlmZXN0VXJsID0gImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9hMTgzNjEyNzIzMjMvZGFzaGJvYXJkX2twaUA5NTRiZmQ3L2Rpc3QvbWljcm9mcm9udGVuZC1hc3NldHMuZGlyZWN0Lmpzb24iOwogICAgICBjb25zdCBhcHBSb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoImFwcCIpOwoKICAgICAgZnVuY3Rpb24gcmVzb2x2ZUFzc2V0VXJsKHZhbHVlKSB7CiAgICAgICAgcmV0dXJuIG5ldyBVUkwodmFsdWUsIGFzc2V0TWFuaWZlc3RVcmwpLmhyZWY7CiAgICAgIH0KCiAgICAgIGZ1bmN0aW9uIGFwcGVuZFN0eWxlc2hlZXQodXJsKSB7CiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoImxpbmsiKTsKICAgICAgICBsaW5rLnJlbCA9ICJzdHlsZXNoZWV0IjsKICAgICAgICBsaW5rLmNyb3NzT3JpZ2luID0gImFub255bW91cyI7CiAgICAgICAgbGluay5ocmVmID0gcmVzb2x2ZUFzc2V0VXJsKHVybCk7CiAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTsKICAgICAgfQoKICAgICAgZnVuY3Rpb24gYXBwZW5kTW9kdWxlU2NyaXB0KHVybCkgewogICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoInNjcmlwdCIpOwogICAgICAgIHNjcmlwdC50eXBlID0gIm1vZHVsZSI7CiAgICAgICAgc2NyaXB0LmNyb3NzT3JpZ2luID0gImFub255bW91cyI7CiAgICAgICAgc2NyaXB0LnNyYyA9IHJlc29sdmVBc3NldFVybCh1cmwpOwogICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTsKICAgICAgfQoKICAgICAgZnVuY3Rpb24gcmVhZEFzc2V0TGlzdChtYW5pZmVzdCwga2V5KSB7CiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkobWFuaWZlc3Rba2V5XSkpIHJldHVybiBtYW5pZmVzdFtrZXldOwogICAgICAgIGlmIChtYW5pZmVzdC5hc3NldHMgJiYgQXJyYXkuaXNBcnJheShtYW5pZmVzdC5hc3NldHNba2V5XSkpIHJldHVybiBtYW5pZmVzdC5hc3NldHNba2V5XTsKICAgICAgICByZXR1cm4gW107CiAgICAgIH0KCiAgICAgIGZldGNoKGFzc2V0TWFuaWZlc3RVcmwsIHsgY2FjaGU6ICJuby1jYWNoZSIgfSkKICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHsKICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcigiYXNzZXQgbWFuaWZlc3QgIiArIHJlc3BvbnNlLnN0YXR1cyk7CiAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpOwogICAgICAgIH0pCiAgICAgICAgLnRoZW4oKG1hbmlmZXN0KSA9PiB7CiAgICAgICAgICByZWFkQXNzZXRMaXN0KG1hbmlmZXN0LCAiY3NzIikuZm9yRWFjaChhcHBlbmRTdHlsZXNoZWV0KTsKICAgICAgICAgIHJlYWRBc3NldExpc3QobWFuaWZlc3QsICJqcyIpLmZvckVhY2goYXBwZW5kTW9kdWxlU2NyaXB0KTsKICAgICAgICB9KQogICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHsKICAgICAgICAgIGFwcFJvb3QudGV4dENvbnRlbnQgPSAiTWljcm9mcm9udGVuZCBhc3NldCBtYW5pZmVzdCBsb2FkIGZhaWxlZDogIiArIGVycm9yLm1lc3NhZ2U7CiAgICAgICAgICBhcHBSb290LnN0eWxlLnBhZGRpbmcgPSAiMTZweCI7CiAgICAgICAgICBhcHBSb290LnN0eWxlLmZvbnRGYW1pbHkgPSAic3lzdGVtLXVpLCBzYW5zLXNlcmlmIjsKICAgICAgICAgIGFwcFJvb3Quc3R5bGUuY29sb3IgPSAiI2I0MjMxOCI7CiAgICAgICAgfSk7CiAgICA8L3NjcmlwdD4KICA8L2JvZHk+CjwvaHRtbD4K";

function decodeBase64Utf8(base64) {
  var binary = atob(base64);
  var bytes = Uint8Array.from(binary, function (char) {
    return char.charCodeAt(0);
  });
  if (typeof TextDecoder !== "undefined") {
    return new TextDecoder("utf-8").decode(bytes);
  }
  var escaped = "";
  for (var i = 0; i < bytes.length; i += 1) {
    escaped += "%" + ("00" + bytes[i].toString(16)).slice(-2);
  }
  return decodeURIComponent(escaped);
}

var runtimeWindow = (typeof env !== "undefined" && env && typeof env.getCurrentWindow === "function")
  ? env.getCurrentWindow()
  : window;
var doc = runtimeWindow.document;

var container = doc.getElementsByClassName("xcode-pc-page")[0] || doc.body;
var workbench = doc.getElementsByClassName("xcode-layout-content procode-render-workbench-content")[0];

container.style.width = "100%";
container.style.height = "100%";
container.style.minHeight = "100vh";
container.style.padding = "0";
container.style.margin = "0";
container.style.overflow = "hidden";

if (workbench) {
  workbench.style.padding = "0";
}

var host = doc.getElementById(mountId);
if (!host) {
  host = doc.createElement("div");
  host.id = mountId;
  host.style.width = "100%";
  host.style.height = "100%";
  host.style.minHeight = "100vh";
  host.style.overflow = "hidden";
  host.style.position = "relative";
  container.appendChild(host);
}

var oldFrame = doc.getElementById(frameId);
if (oldFrame && oldFrame.parentNode) {
  oldFrame.parentNode.removeChild(oldFrame);
}

var iframe = doc.createElement("iframe");
iframe.id = frameId;
iframe.title = "数据大屏";
iframe.frameBorder = "0";
iframe.setAttribute("data-lowcode-microfrontend", "srcdoc");
iframe.style.width = "100%";
iframe.style.height = "100%";
iframe.style.border = "0";
iframe.style.display = "block";
iframe.srcdoc = decodeBase64Utf8(srcdocBase64);

host.appendChild(iframe);

return { mounted: true, type: "iframe-srcdoc-microfrontend", target: frameId };
