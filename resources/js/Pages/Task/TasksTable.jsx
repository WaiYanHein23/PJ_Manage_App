import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/16/solid";
import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput.jsx";
import TextInput from "@/Components/TextInput.jsx";
import { Link, router } from "@inertiajs/react";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants.jsx";
export default function TasksTable({
  tasks,
  queryParams = null,
  hidetaskColumn = false,
}) {
  queryParams = queryParams || {};
  const searchFieldChanged = (name, value) => {
    if (value) {
      queryParams[name] = value;
    } else {
      delete queryParams[name];
    }
    router.get(route("task.index"), queryParams);
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

    router.get(route("task.index"), queryParams);
  };

  const deleteTask = (task) => {
    if (!window.confirm("Are You Sure to Delete")) {
      return;
    }
    router.delete(route("task.destroy", task.id));
  };
  return (
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
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
                <th className="px-3 py-2">Image</th>
                <th
                  onClick={(e) => sortChanged("name")}
                  className="px-3 py-3  items-center justify-between gap-1 cursor-pointer"
                >
                  Project Name
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
                  onClick={(e) => sortChanged("status")}
                  className="px-3 py-3  items-center justify-between gap-1 cursor-pointer"
                >
                  Status
                  <div>
                    <ChevronUpIcon
                      className={
                        "w-4 " +
                        (queryParams.sort_field === "status" &&
                        queryParams.sort_direction === "asc"
                          ? "text-white"
                          : "")
                      }
                    />
                    <ChevronDownIcon
                      className={
                        "w-4 " +
                        (queryParams.sort_field === "status" &&
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
                <th
                  onClick={(e) => sortChanged("due_date")}
                  className="px-3 py-3  items-center justify-between gap-1 cursor-pointer"
                >
                  Due Date
                  <div>
                    <ChevronUpIcon
                      className={
                        "w-4 " +
                        (queryParams.sort_field === "due_date" &&
                        queryParams.sort_direction === "asc"
                          ? "text-white"
                          : "")
                      }
                    />
                    <ChevronDownIcon
                      className={
                        "w-4 " +
                        (queryParams.sort_field === "due_date" &&
                        queryParams.sort_direction === "desc"
                          ? "text-white"
                          : "")
                      }
                    />
                  </div>
                </th>
                <th className="px-3 py-3">Created By</th>
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
                <th className="px-3 py-2"></th>
                <th className="px-3 py-2">
                  <TextInput
                    className="w-full"
                    placeholder="Task Name"
                    defaultValue={queryParams.name}
                    onBlur={(e) => searchFieldChanged("name", e.target.value)}
                    onKeyPress={(e) => onKeyPress("name", e)}
                  />
                </th>
                <th className="px-3 py-2">
                  <SelectInput
                    className="w-full"
                    defaultValue={queryParams.status}
                    onChange={(e) =>
                      searchFieldChanged("status", e.target.value)
                    }
                  >
                    <option value="">select</option>
                    <option value="pending">Pending</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </SelectInput>
                </th>
                <th className="px-3 py-2"></th>
                <th className="px-3 py-2"></th>
                <th className="px-3 py-2"></th>
                <th className="px-3 py-2 text-right"></th>
                <th className="px-3 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {tasks.data.map((task) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={task.id}
                >
                  <td className="px-3 py-2">{task.id}</td>
                  <td className="px-3 py-2">
                    <img
                      src={task.image_path}
                      alt=""
                      style={{ width: 50, height: 40 }}
                    />
                  </td>
                  <td className="px-3 py-2">{task.project.name}</td>
                  <td className="px-3 py-2">{task.name}</td>
                  <td className="px-3 py-2">
                    <span
                      className={
                        "px-2 py-2 rounded text-white " +
                        TASK_STATUS_CLASS_MAP[task.status]
                      }
                    >
                      {TASK_STATUS_TEXT_MAP[task.status]}
                    </span>
                  </td>
                  <td className="px-3 py-2">{task.created_at}</td>
                  <td className="px-3 py-2">{task.due_date}</td>
                  <td className="px-3 py-2">{task.createdBy.name}</td>
                  <td className="px-3 py-2 text-right">
                    <Link
                      href={route("task.edit", task.id)}
                      className="font-medium
                                  text-blue-600 dark:text-blue-500 hover:underline mx-1"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={(e) => deleteTask(task)}
                      href={route("task.destroy", task.id)}
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
          <Pagination links={tasks.meta.links} />
        </div>
      </div>
    </div>
  );
}
