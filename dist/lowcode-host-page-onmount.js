var mountId = "dashboard-app-host";
var frameId = "dashboard-app-frame";
var srcdocBase64 = "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9InpoLUNOIj4KICA8aGVhZD4KICAgIDxtZXRhIGNoYXJzZXQ9IlVURi04IiAvPgogICAgPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAiIC8+CiAgICA8dGl0bGU+5pWw5o2u5aSn5bGPPC90aXRsZT4KICA8L2hlYWQ+CiAgPGJvZHk+CiAgICA8ZGl2IGlkPSJhcHAiPjwvZGl2PgogICAgPHNjcmlwdCB0eXBlPSJtb2R1bGUiPgogICAgICBjb25zdCBhc3NldE1hbmlmZXN0VXJsID0gImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9hMTgzNjEyNzIzMjMvZGFzaGJvYXJkX2twaUB2MS4wLjEvZGlzdC9taWNyb2Zyb250ZW5kLWFzc2V0cy5kaXJlY3QuanNvbiI7CiAgICAgIGNvbnN0IGFwcFJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgiYXBwIik7CgogICAgICBmdW5jdGlvbiByZXNvbHZlQXNzZXRVcmwodmFsdWUpIHsKICAgICAgICByZXR1cm4gbmV3IFVSTCh2YWx1ZSwgYXNzZXRNYW5pZmVzdFVybCkuaHJlZjsKICAgICAgfQoKICAgICAgZnVuY3Rpb24gYXBwZW5kU3R5bGVzaGVldCh1cmwpIHsKICAgICAgICBjb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgibGluayIpOwogICAgICAgIGxpbmsucmVsID0gInN0eWxlc2hlZXQiOwogICAgICAgIGxpbmsuY3Jvc3NPcmlnaW4gPSAiYW5vbnltb3VzIjsKICAgICAgICBsaW5rLmhyZWYgPSByZXNvbHZlQXNzZXRVcmwodXJsKTsKICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspOwogICAgICB9CgogICAgICBmdW5jdGlvbiBhcHBlbmRNb2R1bGVTY3JpcHQodXJsKSB7CiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgic2NyaXB0Iik7CiAgICAgICAgc2NyaXB0LnR5cGUgPSAibW9kdWxlIjsKICAgICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSAiYW5vbnltb3VzIjsKICAgICAgICBzY3JpcHQuc3JjID0gcmVzb2x2ZUFzc2V0VXJsKHVybCk7CiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpOwogICAgICB9CgogICAgICBmdW5jdGlvbiByZWFkQXNzZXRMaXN0KG1hbmlmZXN0LCBrZXkpIHsKICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShtYW5pZmVzdFtrZXldKSkgcmV0dXJuIG1hbmlmZXN0W2tleV07CiAgICAgICAgaWYgKG1hbmlmZXN0LmFzc2V0cyAmJiBBcnJheS5pc0FycmF5KG1hbmlmZXN0LmFzc2V0c1trZXldKSkgcmV0dXJuIG1hbmlmZXN0LmFzc2V0c1trZXldOwogICAgICAgIHJldHVybiBbXTsKICAgICAgfQoKICAgICAgZmV0Y2goYXNzZXRNYW5pZmVzdFVybCwgeyBjYWNoZTogIm5vLWNhY2hlIiB9KQogICAgICAgIC50aGVuKChyZXNwb25zZSkgPT4gewogICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKCJhc3NldCBtYW5pZmVzdCAiICsgcmVzcG9uc2Uuc3RhdHVzKTsKICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7CiAgICAgICAgfSkKICAgICAgICAudGhlbigobWFuaWZlc3QpID0+IHsKICAgICAgICAgIHJlYWRBc3NldExpc3QobWFuaWZlc3QsICJjc3MiKS5mb3JFYWNoKGFwcGVuZFN0eWxlc2hlZXQpOwogICAgICAgICAgcmVhZEFzc2V0TGlzdChtYW5pZmVzdCwgImpzIikuZm9yRWFjaChhcHBlbmRNb2R1bGVTY3JpcHQpOwogICAgICAgIH0pCiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gewogICAgICAgICAgYXBwUm9vdC50ZXh0Q29udGVudCA9ICJNaWNyb2Zyb250ZW5kIGFzc2V0IG1hbmlmZXN0IGxvYWQgZmFpbGVkOiAiICsgZXJyb3IubWVzc2FnZTsKICAgICAgICAgIGFwcFJvb3Quc3R5bGUucGFkZGluZyA9ICIxNnB4IjsKICAgICAgICAgIGFwcFJvb3Quc3R5bGUuZm9udEZhbWlseSA9ICJzeXN0ZW0tdWksIHNhbnMtc2VyaWYiOwogICAgICAgICAgYXBwUm9vdC5zdHlsZS5jb2xvciA9ICIjYjQyMzE4IjsKICAgICAgICB9KTsKICAgIDwvc2NyaXB0PgogIDwvYm9keT4KPC9odG1sPgo=";

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
