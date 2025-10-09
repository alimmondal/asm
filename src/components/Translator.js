import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
export default function Translator() {
    const [languages, setLanguages] = useState([]);
    const [source, setSource] = useState("auto");
    const [target, setTarget] = useState("en");
    const [text, setText] = useState("");
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [history, setHistory] = useState([]);
    useEffect(() => {
        fetch("https://libretranslate.de/languages")
            .then((r) => r.json())
            .then((data) => setLanguages(data))
            .catch(() => {
            setLanguages([
                { code: "en", name: "English" },
                { code: "es", name: "Spanish" },
                { code: "bn", name: "Bengali" },
            ]);
        });
    }, []);
    const translate = async () => {
        if (!text.trim())
            return;
        setLoading(true);
        setError(null);
        setResult("");
        try {
            const res = await fetch("https://translate.astian.org/translate", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    q: text,
                    source,
                    target,
                    format: "text",
                }),
            });
            console.log({
                q: text,
                source,
                target,
                format: "text",
            });
            if (!res.ok) {
                throw new Error(`HTTP ${res.status}`);
            }
            const data = await res.json();
            const translated = data.translatedText ?? "";
            setResult(translated);
            setHistory((h) => [{ id: Date.now().toString(), src: text, tgt: translated }, ...h].slice(0, 10));
        }
        catch (err) {
            setError(err.message || "Translation failed");
        }
        finally {
            setLoading(false);
        }
    };
    const swapLanguages = () => {
        if (source === "auto")
            return;
        const newSource = target;
        const newTarget = source;
        setSource(newSource);
        setTarget(newTarget);
        setText(result);
        setResult(text);
    };
    return (_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { className: "flex items-end gap-4", children: [_jsxs("div", { className: "flex-1", children: [_jsx("label", { className: "block text-sm font-medium mb-1", children: "From" }), _jsxs("select", { className: "w-full border rounded-md p-2", value: source, onChange: (e) => setSource(e.target.value), children: [_jsx("option", { value: "auto", children: "Detect language" }), languages.map((l) => (_jsxs("option", { value: l.code, children: [l.name, " (", l.code, ")"] }, l.code)))] })] }), _jsx("div", { className: "self-center", children: _jsx("button", { onClick: swapLanguages, className: "px-3 py-2 bg-gray-200 rounded-full hover:bg-gray-300", title: "Swap languages", children: "\u2194" }) }), _jsxs("div", { className: "flex-1", children: [_jsx("label", { className: "block text-sm font-medium mb-1", children: "To" }), _jsx("select", { className: "w-full border rounded-md p-2", value: target, onChange: (e) => setTarget(e.target.value), children: languages.map((l) => (_jsxs("option", { value: l.code, children: [l.name, " (", l.code, ")"] }, l.code))) })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-1", children: "Text" }), _jsx("textarea", { className: "w-full border rounded-md p-2", rows: 4, placeholder: "Type text...", value: text, onChange: (e) => setText(e.target.value) })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-sm font-medium mb-1", children: "Result" }), _jsx("textarea", { className: "w-full border rounded-md p-2 bg-gray-50", rows: 4, readOnly: true, value: loading ? "Translating..." : result })] })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx("button", { onClick: translate, disabled: loading, className: "px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400", children: "Translate" }), _jsx("button", { onClick: () => {
                            setText("");
                            setResult("");
                        }, className: "px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300", children: "Clear" })] }), error && _jsxs("div", { className: "text-red-600", children: ["Error: ", error] }), _jsxs("div", { children: [_jsx("h3", { className: "font-semibold mb-2", children: "Recent translations" }), history.length === 0 ? (_jsx("p", { className: "text-gray-500 text-sm", children: "No history yet" })) : (_jsx("ul", { className: "space-y-1 text-sm", children: history.map((h) => (_jsxs("li", { className: "cursor-pointer hover:bg-gray-100 p-2 rounded", onClick: () => {
                                setText(h.src);
                                setResult(h.tgt);
                            }, children: [_jsx("strong", { children: h.src }), " \u2192 ", _jsx("em", { children: h.tgt })] }, h.id))) }))] })] }));
}
