
import { ErrorMessage, Field } from "formik";
import React from "react";

const InputField = ({ type, placeholder, value, onChange, name, onBlur }) => {
    return (
        <div>
            <Field
                type={type}
                name={name}
                placeholder={placeholder}
                className="w-full p-4 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 outline-none"
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
            <ErrorMessage name={name} component="div" className="text-red-500 text-xs" />
        </div>
    );
};

export default InputField;