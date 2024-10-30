import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import { data } from "autoprefixer";
export default function Create({ user }) {
  const { data, setData, post, errors, reset } = useForm({
    name: user.name || "",
    email: user.email || "",
    password: "",
    password_confirmation: "",
    _method: "PUT",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    post(route("user.update", user.id));
  };
  return (
    <AuthenticatedLayout
      header={
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
            Edit User
          </h2>
        </div>
      }
    >
      <Head title="Users" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6 w-50 text-gray-900 dark:text-gray-100">
              <form
                onSubmit={onSubmit}
                className="p-4 sm:p-8 bg-white dark:bg-gray-500 rounded shadow sm:rounded-lg"
              >
                <div className="mt-4">
                  <InputLabel htmlFor="User_name" value="User Name" />
                  <TextInput
                    id="name"
                    type="text"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("name", e.target.value)}
                  />
                  <InputError message={errors.name} className="mt-2" />
                </div>
                <div className="mt-4">
                  <InputLabel htmlFor="User_email" value=" Email" />
                  <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("email", e.target.value)}
                  />
                  <InputError message={errors.email} className="mt-2" />
                </div>
                <div className="mt-4">
                  <InputLabel htmlFor="user_password" value=" Password" />
                  <TextInput
                    id="password"
                    type="password"
                    name="password"
                    value={data.user_password}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("password", e.target.value)}
                  />
                  <InputError message={errors.password} className="mt-2" />
                </div>
                <div className="mt-4">
                  <InputLabel
                    htmlFor="password_confirmation"
                    value="Password Confirmation"
                  />
                  <TextInput
                    id="password_confirmation"
                    type="password"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    className="mt-1 block w-full"
                    onChange={(e) =>
                      setData("password_confirmation", e.target.value)
                    }
                  />
                  <InputError
                    message={errors.password_confirm}
                    className="mt-2"
                  />
                </div>
                <div className="mt-4 text-right">
                  <Link
                    href={route("user.index")}
                    className="inline-block bg-red-800 py-1 px-2  rounded shadow-sm transition-all hover:bg-gray-600 mr-6"
                  >
                    Cancel
                  </Link>
                  <button className="bg-emerald-700 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-400">
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
