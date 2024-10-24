// metrics.js
export function trackPageView(url, title) {
  ym(98721913, "hit", url, {
    title: title,
    referer: document.referrer,
    params: {
      param1: "value1",
      param2: "value2",
    },
  });
}
