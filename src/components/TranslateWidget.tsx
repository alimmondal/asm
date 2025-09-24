import { useEffect } from "react";

// TranslateWidget
export default function TranslateWidget() {
  useEffect(() => {
    // Ensure google translate script is loaded
    const script = document.createElement("script");
    script.src =
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);

    // Expose init function globally
    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement(
        { pageLanguage: "en" },
        "google_translate_element"
      );
    };
  }, []);

  return <div id="google_translate_element" />;
}
