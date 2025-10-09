import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import queryString from "query-string";
const SearchBar = () => {
    const navigate = useNavigate();
    const { register, handleSubmit, reset, formState: {}, } = useForm({
        defaultValues: {
            searchTerm: "",
        },
    });
    const onSubmit = (data) => {
        if (!data.searchTerm)
            return navigate("/");
        const url = queryString.stringifyUrl({
            url: "/search",
            query: {
                searchTerm: data.searchTerm,
            },
        }, { skipNull: true });
        navigate(url);
        reset();
    };
    return (_jsxs("div", { className: "flex items-center", children: [_jsx("input", { ...register("searchTerm"), autoComplete: "off", placeholder: "Explore e-learning", type: "text", className: "p-2 border border-gray-300 rounded-md focus:outline-none focus:border-[0.5px] focus:border-slate-500 md:w-80" }), _jsx("button", { onClick: handleSubmit(onSubmit), className: "bg-white hover:opacity-80 text-black p-2 rounded-md", children: "Search" })] }));
};
export default SearchBar;
