import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { TASK_STATUS_CLASS_MAP, TASK_STATUS_TEXT_MAP } from "@/constants";
import { Head } from "@inertiajs/react";

export default function Dashboard({
  myPendingTask,
  totalPendingTask,
  myInProgressTask,
  totalInProgressTask,
  myCompletedTask,
  totalCompletedTask,
  activeTasks,
}) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          Dashboard
        </h2>
      }
    >
      <Head title="Dashboard" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-3 gap-4">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-amber-500 text-2xl font-semibold">
                Pending Task
              </h3>
              <p className="text-lg mt-2">
                <span className="">{myPendingTask} / </span>
                <span className="">{totalPendingTask}</span>
              </p>
            </div>
          </div>
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-blue-500 text-2xl font-semibold">
                Progress Task
              </h3>
              <p className="text-lg mt-2">
                <span className="">{myInProgressTask} / </span>
                <span className="">{totalInProgressTask}</span>
              </p>
            </div>
          </div>

          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="text-green-500 text-2xl font-semibold">
                Complete Task
              </h3>
              <p className="text-lg mt-2">
                <span className="">{myCompletedTask} / </span>
                <span className="">{totalCompletedTask}</span>
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8 mt-4">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <h3 className="my-3 text-emerald-600 text-3xl">Active Tasks</h3>

              <table
                className="w-full text-sm text-left rtl:text-right text-gray-800
                           dark:text-gray-200"
              >
                <thead
                  className="text-xs text-gray-700 uppercase bg-gray-400
                            border-b-2 border-gray-400"
                >
                  <tr>
                    <th className="px-3 py-2">ID</th>
                    <th className="px-3 py-2">Project Name</th>
                    <th className="px-3 py-2">Name</th>
                    <th className="px-3 py-2">Status</th>
                    <th className="px-3 py-2">Due Date</th>
                  </tr>
                </thead>
                <tbody>
                  {activeTasks.data.map((task) => (
                    <tr key={task.id}>
                      <td className="px-3 py-2">{task.id}</td>
                      <td className="px-3 py-2">{task.project.name}</td>
                      <td className="px-3 py-2">{task.name}</td>
                      <td className="px-3 py-4">
                        <span
                          className={
                            "px-2 py-2 rounded text-white " +
                            TASK_STATUS_CLASS_MAP[task.status]
                          }
                        >
                          {TASK_STATUS_TEXT_MAP[task.status]}
                        </span>
                      </td>
                      <td className="px-3 py-2">{task.due_date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
