import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants";
import { Head } from "@inertiajs/react";
import TasksTable from "../Task/TasksTable";

export default function Show({ project, tasks, queryParams }) {
  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
          {`Project "${project.name}"`}
        </h2>
      }
    >
      <Head title={`Project "${project.name}"`} />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="h-52 w-72 mb-4">
              <img
                src={project.image_path}
                alt=""
                srcset=""
                className="w-full h-60 object-cover"
              />
            </div>
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <div className="grid gap-1 grid-cols-2 mt-2">
                <div>
                  <div>
                    <label htmlFor="" className="font-bold text-lg">
                      ID - {project.id}
                    </label>
                  </div>
                  <div>
                    <label htmlFor="" className="font-bold text-lg">
                      Name - {project.name}
                    </label>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="" className="font-bold text-lg">
                      Status -{" "}
                      <span
                        className={
                          "px-2 py-2 rounded text-white " +
                          PROJECT_STATUS_CLASS_MAP[project.status]
                        }
                      >
                        {PROJECT_STATUS_TEXT_MAP[project.status]}
                      </span>
                    </label>
                  </div>

                  <div className="mt-2">
                    <label htmlFor="" className="font-bold text-lg">
                      Created By - {project.createdBy.name}
                    </label>
                  </div>
                </div>

                <div>
                  <div className="mt-2">
                    <label htmlFor="" className="font-bold text-lg">
                      Due Date
                    </label>
                    <p className="mt-1 text-white">{project.due_date}</p>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="" className="font-bold text-lg">
                      Create Date
                    </label>
                    <p className="mt-1 text-white">{project.created_at}</p>
                  </div>
                  <div className="mt-2">
                    <label htmlFor="" className="font-bold text-lg">
                      Updated By
                    </label>
                    <p className="mt-1 text-white">{project.updatedBy.name}</p>
                  </div>
                </div>
              </div>
              <div className="mt-2 border border-separate p-1">
                <label htmlFor="" className="font-bold text-lg">
                  Description
                </label>
                <p className="mt-1 text-white ">{project.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pb-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
            <div className="p-6 text-gray-900 dark:text-gray-100">
              <TasksTable tasks={tasks} queryParams={queryParams} />
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
