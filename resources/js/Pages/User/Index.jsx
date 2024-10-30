import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput.jsx";
import TextInput from "@/Components/TextInput.jsx";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";

export default function index({ users, queryParams = null, success }) {
  queryParams = queryParams || {};
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    router.get(route("user.index"), queryParams);
  };

  const onKeyPress = (name, e) => {
    if (e.key !== "Enter") return;
    searchFieldChanged(name, e.target.value);
  };

  const sortChanged = (name) => {
    if (name === queryParams.sort_field) {
      if (queryParams.sort_direction == "asc") {
        queryParams.sort_direction == "desc";
      } else {
        queryParams.sort_direction == "asc";
      }
    } else {
      queryParams.sort_field = name;
      queryParams.sort_direction = "asc";
    }

    router.get(route("user.index"), queryParams);
  };

  const deleteUser = (user) => {
    if (!window.confirm("Are You Sure to Delete")) {
      return;
    }
    router.delete(route("user.destroy", user.id));
  };

  return (
    <AuthenticatedLayout
      header={
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
            Users
          </h2>
          <Link
            href={route("user.create")}
            className="bg-emerald-500 py-3 px-3 text-white rounded shadow transition-all hover:bg-emerald-500"
          >
            Add New
          </Link>
        </div>
      }
    >
      <Head title="users" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800 mb-4">
            {success && (
              <div className="bg-emerald-500 py-2 px-4 text-white text-center">
                {success}
              </div>
            )}
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <table
                className="w-full text-sm text-left rtl:text-right text-gray-800
                           dark:text-gray-200"
              >
                <thead
                  className="text-xs text-gray-700 uppercase bg-gray-400
                            border-b-2 border-gray-400"
                >
                  <tr className="text-nowrap">
                    <th
                      onClick={(e) => sortChanged("id")}
                      className="px-3 py-2  items-center justify-between gap-1 cursor-pointer"
                    >
                      ID
                      <div>
                        <ChevronUpIcon
                          className={
                            " w-4 " +
                            (queryParams.sort_field === "id" &&
                            queryParams.sort_direction === "asc"
                              ? "text-white"
                              : "")
                          }
                        />
                        <ChevronDownIcon
                          className={
                            " w-4 " +
                            (queryParams.sort_field === "id" &&
                            queryParams.sort_direction === "desc"
                              ? "text-white"
                              : "")
                          }
                        />
                      </div>
                    </th>

                    <th
                      onClick={(e) => sortChanged("name")}
                      className="px-3 py-3  items-center justify-between gap-1 cursor-pointer"
                    >
                      Name
                      <div>
                        <ChevronUpIcon
                          className={
                            "w-4 " +
                            (queryParams.sort_field === "name" &&
                            queryParams.sort_direction === "asc"
                              ? "text-white"
                              : "")
                          }
                        />
                        <ChevronDownIcon
                          className={
                            "w-4 " +
                            (queryParams.sort_field === "name" &&
                            queryParams.sort_direction === "desc"
                              ? "text-white"
                              : "")
                          }
                        />
                      </div>
                    </th>

                    <th
                      onClick={(e) => sortChanged("email")}
                      className="px-3 py-3  items-center justify-between gap-1 cursor-pointer"
                    >
                      Email
                      <div>
                        <ChevronUpIcon
                          className={
                            "w-4 " +
                            (queryParams.sort_field === "email" &&
                            queryParams.sort_direction === "asc"
                              ? "text-white"
                              : "")
                          }
                        />
                        <ChevronDownIcon
                          className={
                            "w-4 " +
                            (queryParams.sort_field === "email" &&
                            queryParams.sort_direction === "desc"
                              ? "text-white"
                              : "")
                          }
                        />
                      </div>
                    </th>

                    <th
                      onClick={(e) => sortChanged("created_at")}
                      className="px-3 py-3  items-center justify-between gap-1 cursor-pointer"
                    >
                      Created Date
                      <div>
                        <ChevronUpIcon
                          className={
                            "w-4 " +
                            (queryParams.sort_field === "created_at" &&
                            queryParams.sort_direction === "asc"
                              ? "text-white"
                              : "")
                          }
                        />
                        <ChevronDownIcon
                          className={
                            "w-4 " +
                            (queryParams.sort_field === "created_at" &&
                            queryParams.sort_direction === "desc"
                              ? "text-white"
                              : "")
                          }
                        />
                      </div>
                    </th>
                    <th className="px-3 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <hr />

                <thead
                  className="text-xs text-gray-700 uppercase bg-gray-400
                            border-b-2 border-gray-400"
                >
                  <tr className="text-nowrap">
                    <th className="px-3 py-2"></th>
                    <th className="px-3 py-2">
                      <TextInput
                        className="w-52"
                        placeholder="user Name"
                        defaultValue={queryParams.name}
                        onBlur={(e) =>
                          searchFieldChanged("name", e.target.value)
                        }
                        onKeyPress={(e) => onKeyPress("name", e)}
                      />
                    </th>

                    <th className="px-3 py-2">
                      <TextInput
                        className="w-52"
                        placeholder="User Email"
                        defaultValue={queryParams.email}
                        onBlur={(e) =>
                          searchFieldChanged("email", e.target.value)
                        }
                        onKeyPress={(e) => onKeyPress("email", e)}
                      />
                    </th>

                    <th className="px-3 py-2"></th>
                    <th className="px-3 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  {users.data.map((user) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                      key={user.id}
                    >
                      <td className="px-3 py-2">{user.id}</td>

                      <th className="px-3 py-2 text-white text-nowrap hover:underline">
                        {user.name}{" "}
                      </th>

                      <th className="px-3 py-2 text-white text-nowrap hover:underline">
                        {user.email}{" "}
                      </th>

                      <td className="px-3 py-2">{user.created_at}</td>
                      <td className="px-3 py-2 text-right">
                        <Link
                          href={route("user.edit", user.id)}
                          className="font-medium
                                  text-blue-600 dark:text-blue-500 hover:underline mx-1"
                        >
                          Edit
                        </Link>

                        <button
                          onClick={(e) => deleteUser(user)}
                          href={route("user.destroy", user.id)}
                          className="font-medium
                                  text-red-600 dark:text-red-500 hover:underline mx-1"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination links={users.meta.links} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
