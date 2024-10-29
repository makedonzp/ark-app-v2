export function initYandexMetrika(id) {
  console.log("Initializing Yandex.Metrika...");
  if (
    typeof window.Ya !== "undefined" &&
    typeof window.Ya.Metrika2 === "function"
  ) {
    console.log("Yandex.Metrika is ready for initialization.");
    window.Ya.Metrika2(id, {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
      ecommerce: "dataLayer",
    });
  } else {
    console.warn("Yandex.Metrika is not loaded");
  }
}

export function trackPageView(url, title) {
  const isFormSubmitted = localStorage.getItem("formSubmitted") === "true";

  console.log("Checking form submission status:", isFormSubmitted);

  if (
    typeof window.Ya !== "undefined" &&
    typeof window.Ya.Metrika2 === "function" &&
    isFormSubmitted &&
    url === "/we-will-connect"
  ) {
    console.log("Tracking page view for:", url);
    window.Ya.Metrika2(98750284, "hit", url, {
      title: title,
      referer: document.referrer,
      params: {
        param1: "value1",
        param2: "value2",
      },
    });
  } else {
    console.warn(
      "Yandex.Metrika is not loaded or form was not submitted or not on /we-will-connect page"
    );
    console.log("Page view not tracked for:", url);
  }
}

export function trackEvent(category, action, label) {
  if (
    typeof window.Ya !== "undefined" &&
    typeof window.Ya.Metrika2 === "function"
  ) {
    window.Ya.Metrika2(98750284, "reachGoal", category, {
      action: action,
      label: label,
    });
    console.log("Event tracked:", category, action, label);
  } else {
    console.warn("Yandex.Metrika is not loaded");
    console.log("Event not tracked:", category, action, label);
  }
}
