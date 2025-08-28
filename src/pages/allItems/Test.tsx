// @ts-ignore
import FlipPage from "react-flip-page";

function Test() {
  return (
    <div className="flex justify-center py-10">
      <FlipPage
        orientation="horizontal"
        pageBackground="#fff"
        showHint
        width={500}
        height={700}
      >
        <article>
          <h1>Right Form of Verbs</h1>
          <p>Intro text...</p>
        </article>
        <article>
          <h2>Rule 1</h2>
          <p>Always, regularly, daily... → Present Indefinite</p>
        </article>
        <article>
          <h2>Rule 2</h2>
          <p>Now, at this moment... → Present Continuous</p>
        </article>
      </FlipPage>
    </div>
  );
}
export default Test;

// import React from "react";
// import HTMLFlipBook from "react-pageflip";

// const Test: React.FC = () => {
//   const FlipBook = HTMLFlipBook as any;
//   return (
//     <div className="flex justify-center py-10">
//       <FlipBook
//         width={500}
//         height={700}
//         className="shadow-2xl rounded"
//         style={{ margin: "0 auto" }}
//         showCover={true}
//         size="stretch"
//         minWidth={315}
//         maxWidth={1000}
//         minHeight={400}
//         maxHeight={1536}
//         drawShadow={true}
//         flippingTime={800}
//         usePortrait={true}
//         startPage={0}
//         autoSize={true}
//         clickEventForward={true}
//       >
//         {/* Page 1 */}
//         <div className="p-5 bg-white">
//           <h1 className="text-2xl font-bold">Right Form of Verbs</h1>
//           <p>Welcome to the rules and exercises of verbs...</p>
//         </div>

//         {/* Page 2 */}
//         <div className="p-5 bg-white">
//           <h2 className="font-bold">Rule 1</h2>
//           <p>Always, regularly, daily... → Present Indefinite</p>
//         </div>

//         {/* Page 3 */}
//         <div className="p-5 bg-white">
//           <h2 className="font-bold">Rule 2</h2>
//           <p>Now, at this moment... → Present Continuous</p>
//         </div>
//         <div className="p-5 bg-white">
//           <h2 className="font-bold">Rule 2</h2>
//           <p>Now, at this moment... → Present Continuous</p>
//         </div>
//         <div className="p-5 bg-white">
//           <h2 className="font-bold">Rule 2</h2>
//           <p>Now, at this moment... → Present Continuous</p>
//         </div>
//         <div className="p-5 bg-white">
//           <h2 className="font-bold">Rule 2</h2>
//           <p>Now, at this moment... → Present Continuous</p>
//         </div>
//       </FlipBook>
//     </div>
//   );
// };

// export default Test;
