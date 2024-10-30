import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import TasksTable from "./TasksTable";
import { Head, Link } from "@inertiajs/react";

export default function index({ tasks }) {
  return (
    <AuthenticatedLayout
      header={
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
            Tasks
          </h2>

          <Link
            href={route("task.create")}
            className="bg-emerald-500 py-3 px-3 text-white rounded shadow transition-all hover:bg-emerald-500"
          >
            Add New
          </Link>
        </div>
      }
    >
      <Head title="Tasks" />

      <div className="py-12">
        <TasksTable tasks={tasks} />
      </div>
    </AuthenticatedLayout>
  );
}
