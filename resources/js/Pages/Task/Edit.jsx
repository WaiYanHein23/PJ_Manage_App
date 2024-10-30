import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextAreaInput from "@/Components/TextAreaInput";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, useForm } from "@inertiajs/react";
import { Link } from "@inertiajs/react";
import { data } from "autoprefixer";
export default function Create({ task, projects, users }) {
  const { data, setData, post, errors, reset } = useForm({
    project_id: task.project_id || "",
    image: "",
    name: task.name || "",
    status: task.status || "",
    description: task.description || "",
    due_date: task.due_date || "",
    priority: task.priority || "",
    assigned_user_id: task.assigned_user_id || "",
    _method: "PUT",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    post(route("task.update", task.id));
  };
  return (
    <AuthenticatedLayout
      header={
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
            Edit Task
          </h2>
        </div>
      }
    >
      <Head title="tasks" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6 w-50 text-gray-900 dark:text-gray-100">
              <form
                onSubmit={onSubmit}
                className="p-4 sm:p-8 bg-white dark:bg-gray-500 rounded shadow sm:rounded-lg"
              >
                <div className="mb-3 w-20 h-18">
                  {task.image_path && (
                    <img src={task.image_path} alt="" className="w-50" />
                  )}
                </div>
                <div>
                  <InputLabel htmlFor="task_project" value=" Project" />

                  <SelectInput
                    id="task_project"
                    name="project_id"
                    value={data.project_id}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("project_id", e.target.value)}
                  >
                    <option value="">Please Choose</option>
                    {projects.data.map((project) => (
                      <option value={project.id} key={project.id}>
                        {project.name}
                      </option>
                    ))}
                  </SelectInput>
                  <InputError message={errors.project_id} className="mt-2" />
                </div>

                <div className="mt-4">
                  <InputLabel htmlFor="task_image_path" value="Task Image" />
                  <TextInput
                    id="task_image_path"
                    type="file"
                    name="image"
                    className="mt-1 block w-full"
                    onChange={(e) => setData("image", e.target.files[0])}
                  />
                  <InputError message={errors.image} className="mt-2" />
                </div>

                <div className="mt-4">
                  <InputLabel htmlFor="task_name" value="Task Name" />
                  <TextInput
                    id="task_name"
                    type="text"
                    name="name"
                    value={data.name}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("name", e.target.value)}
                  />
                  <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-4">
                  <InputLabel
                    htmlFor="task_description"
                    value="Task Description"
                  />
                  <TextAreaInput
                    id="task_description"
                    type="text"
                    name="description"
                    value={data.description}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("description", e.target.value)}
                  />
                  <InputError message={errors.description} className="mt-2" />
                </div>

                <div className="mt-4">
                  <InputLabel htmlFor="task_due_date" value="Task DeadLines" />
                  <TextInput
                    id="task_due_date"
                    type="date"
                    name="due_date"
                    value={data.due_date}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("due_date", e.target.value)}
                  />
                  <InputError message={errors.due_date} className="mt-2" />
                </div>

                <div className="mt-4">
                  <InputLabel htmlFor="task_status" value="Task Status" />

                  <SelectInput
                    id="task_status"
                    name="status"
                    value={data.status}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("status", e.target.value)}
                  >
                    <option value="">Please Choose</option>
                    <option value="pending">Pending</option>
                    <option value="in_progress">In Progress</option>
                    <option value="completed">Completed</option>
                  </SelectInput>
                  <InputError message={errors.task_status} className="mt-2" />
                </div>

                <div className="mt-4">
                  <InputLabel htmlFor="task_priority" value="Task Priority" />

                  <SelectInput
                    id="task_priority"
                    name="priority"
                    value={data.priority}
                    className="mt-1 block w-full"
                    onChange={(e) => setData("priority", e.target.value)}
                  >
                    <option value="">Please Choose</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </SelectInput>
                  <InputError message={errors.priority} className="mt-2" />
                </div>

                <div className="mt-4">
                  <InputLabel htmlFor="assigned_uer" value="Assigned User" />

                  <SelectInput
                    id="assigned_uer"
                    name="assigned_user_id"
                    value={data.assigned_user_id}
                    className="mt-1 block w-full"
                    onChange={(e) =>
                      setData("assigned_user_id", e.target.value)
                    }
                  >
                    <option value="">Please Choose</option>
                    {users.data.map((user) => (
                      <option value={user.id} key={user.id}>
                        {user.name}
                      </option>
                    ))}
                  </SelectInput>
                  <InputError
                    message={errors.assigned_user_id}
                    className="mt-2"
                  />
                </div>

                <div className="mt-4 text-right">
                  <Link
                    href={route("task.index")}
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
