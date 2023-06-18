import { useState } from "react";

const TestForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Burada form verilerini işleyebilirsiniz
    console.log("Gönderilen Veriler:", { name, email, password });
  };

  return (
    <div className="bg-white dark:bg-gray-800">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Hesap Düzenleme Formu</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-gray-700 dark:text-white"
            >
              Adınız:
            </label>
            <input
              type="text"
              id="name"
              className="w-full border-gray-300 dark:bg-gray-900 dark:text-white dark:border-gray-700"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-gray-700 dark:text-white"
            >
              E-posta:
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 dark:bg-gray-900 dark:text-white dark:border-gray-700"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-gray-700 dark:text-white"
            >
              Şifre:
            </label>
            <input
              type="password"
              id="password"
              className="w-full border-gray-300 dark:bg-gray-900 dark:text-white dark:border-gray-700"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 dark:bg-indigo-600 dark:hover:bg-indigo-700"
            >
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TestForm;
