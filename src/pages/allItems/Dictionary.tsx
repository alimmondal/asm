import TranslateWidget from "../../components/TranslateWidget";
import Translator from "../../components/Translator";

const Dictionary = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h2 className="text-xl font-semibold mb-4">Dictionary</h2>
      <Translator />
    </div>
  );
};

export default Dictionary;
