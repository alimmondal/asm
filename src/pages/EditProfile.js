import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, TextInput } from "flowbite-react";
const EditProfile = () => {
    // const data = useLoaderData();
    // console.log(data);
    // const [name, setName] = useState(shoe.title);
    // const [age, setAge] = useState(shoe.price);
    // const [mobile, setMobile] = useState(shoe.brand);
    // const [email, setEmail] = useState(shoe.description);
    // const [image_url, setImageURL] = useState(shoe.image_url);
    const handleSubmit = async (e) => {
        e.preventDefault();
        // const form = e.target;
        // const name = form.name.value;
        // const age = form.age.value;
        // const mobile = form.mobile.value;
        // const userData = { name, age, mobile, email: data?.email };
        // console.log(userData);
        // await fetch(`http://localhost:5000/user/${data?.email}`, {
        //   method: "PATCH",
        //   headers: {
        //     "Content-type": "application/json",
        //   },
        //   body: JSON.stringify(data),
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     // console.log(data);
        //     if (data) {
        //       toast.success("User updated successfully");
        //     }
        //   });
    };
    return (_jsxs("div", { className: "max-w-lg mx-auto w-full p-2", children: [_jsx("h1", { className: "text-5xl font-bold text-center", children: "Edit Profile" }), _jsx("div", { className: "my-16", children: _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("div", { className: "mt-2", children: _jsx(TextInput, { type: "text", name: "name", placeholder: "Name" }) }), _jsx("div", { className: "mt-2", children: _jsx(TextInput, { type: "email", name: "email", disabled: true }) }), _jsx("div", { className: "mt-2", children: _jsx(TextInput, { type: "number", name: "age", placeholder: "age" }) }), _jsx("div", { className: "mt-2", children: _jsx(TextInput, { type: "text", name: "mobile", placeholder: "Mobile" }) }), _jsx("div", { className: "mt-2 flex justify-center items-center", children: _jsx(Button, { type: "submit", gradientDuoTone: "purpleToPink", children: "Update profile" }) })] }) })] }));
};
export default EditProfile;
