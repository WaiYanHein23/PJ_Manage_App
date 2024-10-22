import Pagination from "@/Components/Pagination";
import SelectInput from "@/Components/SelectInput.jsx";
import TextInput from "@/Components/TextInput.jsx";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { PROJECT_STATUS_CLASS_MAP, PROJECT_STATUS_TEXT_MAP } from "@/constants.jsx";
import { Head, Link, router } from "@inertiajs/react";

export default function index({projects, queryParams=null}){
  queryParams=queryParams || {}
  const searchFieldChanged=(name,value)=>{
    if(value){
      queryParams[name]=value
    }else{
      delete queryParams[name]
    }
    router.get(route("project.index"),queryParams);
  };

const onKeyPress=(name,e)=>{
  if(e.key !== 'Enter') return;
  searchFieldChanged(name,e.target.value);
}

const sortChanged=(name)=>{
  if(name === queryParams.sort_field){
    if(queryParams.sort_direction == "asc"){
      queryParams.sort_direction == "desc";
    }else{
      queryParams.sort_direction == "asc"
    }
  }else{
    queryParams.sort_field=name;
    queryParams.sort_direction='asc';
  }

  router.get(route("project.index"),queryParams);

};

return (

  <AuthenticatedLayout
  header={
    <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
        Projects
    </h2>
}
  >
     <Head title="Projects" />

    <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                           <table className="w-full text-sm text-left rtl:text-right text-gray-500
                           dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-400
                            border-b-2 border-gray-400">
                              <tr className="text-nowrap">
                                <th onClick={(e)=> sortChanged('id')} className="px-3 py-2">ID</th>
                                <th className="px-3 py-2">Image</th>
                                <th onClick={(e)=> sortChanged('name')} className="px-3 py-2">Name</th>
                                <th onClick={(e)=> sortChanged('status')} className="px-3 py-2">Status</th>
                                <th onClick={(e)=> sortChanged('created_at')} className="px-3 py-2">Created Date</th>
                                <th onClick={(e)=> sortChanged('due_date')} className="px-3 py-2">Due Date</th>
                                <th className="px-3 py-2">Created By</th>
                                <th className="px-3 py-2 text-right">Actions</th>

                              </tr>
                            </thead>

                            <thead className="text-xs text-gray-700 uppercase bg-gray-400
                            border-b-2 border-gray-400">
                              <tr className="text-nowrap">
                                <th className="px-3 py-2"></th>
                                <th className="px-3 py-2"></th>
                                <th className="px-3 py-2">
                                  <TextInput className="w-full" placeholder="Project Name"
                                  defaultValue={queryParams.name}
                                  onBlur={e => searchFieldChanged('name',e.target.value)}
                                  onKeyPress={e => onKeyPress('name', e)}
                                  />
                                </th>
                                <th className="px-3 py-2">
                                  <SelectInput className="w-full"
                                   defaultValue={queryParams.status}
                                  onChange={e => searchFieldChanged('status', e.target.value)}
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

                              </tr>
                            </thead>
                            <tbody>
                              {projects.data.map((project)=>(
                                 <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={project.id}>
                                 <td className="px-3 py-2">{project.id}</td>
                                 <td className="px-3 py-2">
                                  <img src={project.image_path} alt="" style={{width:60}}  />
                                 </td>
                                 <td className="px-3 py-2">{project.name}</td>
                                 <td className="px-3 py-2">
                                 <span className={"px-2 py-2 rounded text-white " + PROJECT_STATUS_CLASS_MAP[project.status] }>
                                 {PROJECT_STATUS_TEXT_MAP[project.status]}
                                 </span>
                                  </td>
                                 <td className="px-3 py-2">{project.created_at}</td>
                                 <td className="px-3 py-2">{project.due_date}</td>
                                 <td className="px-3 py-2">{project.createdBy.name}</td>
                                 <td className="px-3 py-2 text-right">
                                  <Link href={route("project.edit",project.id)} className="font-medium
                                  text-blue-600 dark:text-blue-500 hover:underline mx-1">Edit</Link>

                                  <Link href={route("project.destroy",project.id)} className="font-medium
                                  text-red-600 dark:text-red-500 hover:underline mx-1">Delete</Link>
                                 </td>
                               </tr>
                              ))}

                            </tbody>
                           </table>
                           <Pagination links={projects.meta.links}  />
                        </div>
                    </div>
                </div>
            </div>

  </AuthenticatedLayout>
)
}