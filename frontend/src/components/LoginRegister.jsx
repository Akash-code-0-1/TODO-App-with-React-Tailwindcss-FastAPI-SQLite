import React, { useState } from "react";
import API from "../api/axios";

export default function LoginRegister({ setIsAuthenticated }) {
    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState({ username: "", email: "", password: "" });
    const [loading, setLoading] = useState(false);

    const toggleForm = () => {
        setIsLogin(!isLogin);
        setForm({ username: "", email: "", password: "" });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        console.log("Submitting form:", form);

        try {
            if (isLogin) {
                const res = await API.post(
                    "/login",
                    new URLSearchParams({
                        username: form.email,     // FastAPI expects 'username' field, even if it's email
                        password: form.password,
                    }),
                    {
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded",
                        },
                    }
                );

                console.log("Login success:", res.data);
                localStorage.setItem("token", res.data.access_token);
                setIsAuthenticated(true);
            }
            else {
                // ✅ Register mode — use normal JSON
                const res = await API.post("/register", {
                    username: form.username,
                    email: form.email,
                    password: form.password,
                });
                console.log("Registration success:", res.data);
                alert("Registration successful! Please login.");
                toggleForm();
            }
        } catch (err) {
            console.error("Registration/login error:", err);
            alert(
                JSON.stringify(
                    err.response?.data || { error: "Unknown error" },
                    null,
                )
            );
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="max-w-md mx-auto mt-20 bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-6 text-center">
                {isLogin ? "Login" : "Register"}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                    <input
                        type="text"
                        placeholder="Username"
                        value={form.username}
                        onChange={(e) => setForm({ ...form, username: e.target.value })}
                        required
                        className="w-full px-3 py-2 border rounded"
                    />
                )}
                <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full px-3 py-2 border rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    required
                    className="w-full px-3 py-2 border rounded"
                />
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                    {loading ? "Please wait..." : isLogin ? "Login" : "Register"}
                </button>
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
                {isLogin ? (
                    <>
                        Don't have an account?{" "}
                        <button
                            onClick={toggleForm}
                            className="text-blue-600 hover:underline"
                            type="button"
                        >
                            Register here
                        </button>
                    </>
                ) : (
                    <>
                        Already have an account?{" "}
                        <button
                            onClick={toggleForm}
                            className="text-blue-600 hover:underline"
                            type="button"
                        >
                            Login here
                        </button>
                    </>
                )}
            </p>
        </div>
    );
}
