import React from "react";

type TableData = {
  singular: string;
  plural?: string;
  foreignPlural?: string;
  englishPlural?: string;
};

// ---------- PAGE 33 ----------
const table1: TableData[] = [
  { singular: "bus", plural: "buses" },
  { singular: "bunch", plural: "bunches" },
  { singular: "bush", plural: "bushes" },
  { singular: "patch", plural: "patches" },
  { singular: "fox", plural: "foxes" },
];

const table2: TableData[] = [
  { singular: "calf", plural: "calves" },
  { singular: "half", plural: "halves" },
  { singular: "hoof", plural: "hooves" },
  { singular: "knife", plural: "knives" },
  { singular: "life", plural: "lives" },
];

// ---------- PAGE 34 ----------
const table3: TableData[] = [
  { singular: "proof", plural: "proofs" },
  { singular: "roof", plural: "roofs" },
  { singular: "relief", plural: "reliefs" },
  { singular: "belief", plural: "beliefs" },
];

const table4: TableData[] = [
  { singular: "breath", plural: "breaths" },
  { singular: "cloth", plural: "cloths" },
  { singular: "wreath", plural: "wreaths" },
];

const table5: TableData[] = [
  { singular: "man", plural: "men" },
  { singular: "child", plural: "children" },
  { singular: "woman", plural: "women" },
  { singular: "ox", plural: "oxen" },
  { singular: "mouse", plural: "mice" },
  { singular: "foot", plural: "feet" },
  { singular: "louse", plural: "lice" },
  { singular: "goose", plural: "geese" },
  { singular: "tooth", plural: "teeth" },
];

const table6: TableData[] = [
  { singular: "amoeba", foreignPlural: "amoebae", englishPlural: "amoebas" },
  { singular: "antenna", foreignPlural: "antennae", englishPlural: "antennas" },
  { singular: "formula", foreignPlural: "formulae", englishPlural: "formulas" },
];

// ---------- PAGE 35 ----------
const table7: TableData[] = [
  { singular: "nebula", foreignPlural: "nebulae", englishPlural: "nebulas" },
  { singular: "apex", foreignPlural: "apices", englishPlural: "apexes" },
  { singular: "index", foreignPlural: "indices", englishPlural: "indexes" },
  { singular: "analysis", foreignPlural: "analyses" },
  { singular: "hypothesis", foreignPlural: "hypotheses" },
  { singular: "synopsis", foreignPlural: "synopses" },
  { singular: "thesis", foreignPlural: "theses" },
  { singular: "criterion", foreignPlural: "criteria" },
  { singular: "bacterium", foreignPlural: "bacteria" },
  {
    singular: "memorandum",
    foreignPlural: "memoranda",
    englishPlural: "memorandums",
  },
  { singular: "bacillus", foreignPlural: "bacilli" },
  { singular: "fungus", foreignPlural: "fungi", englishPlural: "funguses" },
  { singular: "stimulus", foreignPlural: "stimuli" },
  {
    singular: "syllabus",
    foreignPlural: "syllabi",
    englishPlural: "syllabuses",
  },
  { singular: "radius", foreignPlural: "radii" },
  { singular: "terminus", foreignPlural: "termini" },
];

const table8: TableData[] = [
  { singular: "veto", plural: "vetoes" },
  { singular: "hero", plural: "heroes" },
  { singular: "potato", plural: "potatoes" },
  { singular: "tomato", plural: "tomatoes" },
];

const table9: TableData[] = [
  { singular: "father-in-law", plural: "fathers-in-law" },
  { singular: "mother-in-law", plural: "mothers-in-law" },
  { singular: "brother-in-law", plural: "brothers-in-law" },
  { singular: "passer-by", plural: "passers-by" },
];

// ---------- TABLE COMPONENT ----------
const TableSection = ({
  title,
  headers,
  data,
}: {
  title: string;
  headers: string[];
  data: TableData[];
}) => (
  <div className="mb-10">
    <h2 className="text-lg font-semibold mb-3 text-gray-800">{title}</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 rounded-lg text-sm">
        <thead className="bg-gray-100">
          <tr>
            {headers.map((header) => (
              <th
                key={header}
                className="border px-4 py-2 text-left text-gray-700 font-medium"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="hover:bg-gray-50">
              {headers.includes("Foreign plural") ? (
                <>
                  <td className="border px-4 py-2">{row.singular}</td>
                  <td className="border px-4 py-2">
                    {row.foreignPlural || "—"}
                  </td>
                  <td className="border px-4 py-2">
                    {row.englishPlural || "—"}
                  </td>
                </>
              ) : (
                <>
                  <td className="border px-4 py-2">{row.singular}</td>
                  <td className="border px-4 py-2">{row.plural}</td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const PluralForms: React.FC = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto text-gray-300">
      <h1 className="text-2xl font-bold text-center mb-6 text-blue-700">
        English Pluralisation Tables (Page 33–35)
      </h1>

      {/* PAGE 33 */}
      <TableSection
        title="1. Words ending with s, ch, sh, tch, x → add 'es'"
        headers={["Singular", "Plural"]}
        data={table1}
      />
      <TableSection
        title="2. Words ending with f or fe → change to 'ves'"
        headers={["Singular", "Plural"]}
        data={table2}
      />

      {/* PAGE 34 */}
      <TableSection
        title="3. Only 's' is added"
        headers={["Singular", "Plural"]}
        data={table3}
      />
      <TableSection
        title="4. Nouns ending with -th"
        headers={["Singular", "Plural"]}
        data={table4}
      />
      <TableSection
        title="5. Old English plural forms"
        headers={["Singular", "Plural"]}
        data={table5}
      />
      <TableSection
        title="6. Latin and Greek nouns (Part 1)"
        headers={["Singular", "Foreign plural", "English plural"]}
        data={table6}
      />

      {/* PAGE 35 */}
      <TableSection
        title="7. Latin and Greek nouns (Part 2)"
        headers={["Singular", "Foreign plural", "English plural"]}
        data={table7}
      />
      <TableSection
        title="8. Words ending with consonant + 'o' → add 'es'"
        headers={["Singular", "Plural"]}
        data={table8}
      />
      <TableSection
        title="9. Hyphenated compound nouns → plural on main word"
        headers={["Singular", "Plural"]}
        data={table9}
      />
    </div>
  );
};

export default PluralForms;
