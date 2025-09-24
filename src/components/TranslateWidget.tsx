const TranslateWidget = () => {
  return (
    <div>
      <div className="">
        <p className="text-center pb-6">Translate any Language</p>
      </div>
      <div className="text-center border py-4 border-blue-500 rounded-lg ">
        <a
          className="p-8 text-blue-600 "
          href="https://translate.google.com/?sl=en&tl=bn&op=translate"
        >
          Choose a word
        </a>
      </div>
    </div>
  );
};

export default TranslateWidget;

// import { useEffect } from "react";

// // TranslateWidget
// export default function TranslateWidget() {
//   useEffect(() => {
//     // Ensure google translate script is loaded
//     const script = document.createElement("script");
//     script.src =
//       "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
//     script.async = true;
//     document.body.appendChild(script);

//     // Expose init function globally
//     (window as any).googleTranslateElementInit = () => {
//       new (window as any).google.translate.TranslateElement(
//         { pageLanguage: "en" },
//         "google_translate_element"
//       );
//     };
//   }, []);

//   return <div id="google_translate_element" />;
// }
