import { useState } from "react";
import "./App.css";
function App() {
  const [firstName, setFirstName] = useState("");
  const [secondName, setSecondName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const submitFunc = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setFirstName("");
      setSecondName("");
      setEmail("");
      setPassword("");
      setLoading(false);
    }, 3000);
  };
  return (
    <>
      <div className="flex items-center justify-center w-full h-screen bg-blue-400">
        <form className="max-w-lg w-full space-y-4 bg-white rounded p-8">
          <h1 className="text-4xl font-bold font-serif mb-8">Sign Up</h1>

          <div className="text-left">
            <label className="text-2xl">
              First Name
              <input
                type="text"
                id="firstName"
                className="block w-full px-3 py-2 text-slate-900 bg-blue-200 border border-red-500 rounded outline-sky-600 my-4"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
          </div>
          <div className="text-left">
            <label className="text-2xl">
              Second Name
              <input
                type="text"
                id="secondName"
                className="block w-full px-3 py-2 text-slate-900 bg-blue-200 border border-red-500 rounded outline-sky-600 my-4"
                value={secondName}
                onChange={(e) => setSecondName(e.target.value)}
              />
            </label>
          </div>
          <div className="text-left">
            <label className="text-2xl">
              Email
              <input
                type="text"
                id="email"
                className="block w-full px-3 py-2 text-slate-900 bg-blue-200 border border-red-500 rounded outline-sky-600 my-4"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
          <div className="text-left">
            <label className="text-2xl">
              Password
              <input
                type="text"
                id="password"
                className="block w-full px-3 py-2 text-slate-900 bg-blue-200 border border-red-500 rounded outline-sky-600 my-4"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
          </div>
          <button
            onClick={submitFunc}
            className="h-12 px-4 py-2 rounded flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 transition duration-300 ease-in-out text-white text-2xl w-full "
          >
            {loading && (
              <div className="ml-2 animate-spin inline-block w-5 h-5 rounded-full border-t "></div>
            )}
            Sign Up
          </button>
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 flex items-center justify-between"
            role="alert"
          >
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
                width="16"
                height="16"
              >
                <path
                  fillRule="evenodd"
                  d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span>Sorry, something went wrong please try again.</span>
            </div>
            <button
              type="button"
              className="text-red-800 rounded-lg inline-flex items-center justify-center h-8 w-8 "
              aria-label="Close"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
          <div
            aria-live="assertive"
            className="pointer-events-none inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
          >
            <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="flex items-start p-4">
                <div className="flex-shrink-0">
                  <svg
                    className="h-6 w-6 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div className="ml-3 w-0 flex-1 pt-0.5">
                  <p className="text-sm font-medium text-slate-900">
                    Successful
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    Your request has been updated.
                  </p>
                </div>
                <div className="ml-4 flex flex-shrink-0">
                  <button
                    type="button"
                    className="inline-flex rounded-md bg-white text-slate-400 hover:text-slate-500 focus:outline-none"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
App;
