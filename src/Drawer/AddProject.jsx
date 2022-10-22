import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import data from '../db.json'
import { Link } from 'react-router-dom'
import { setDisplayProject } from '../redux/mySlice'
import { addNewProject } from '../redux/ProjectSlice'



export const AddProject = () => {
    const darkMode = useSelector((state) => state.drawer.dark)
    const [projectName, setProjectName] = useState("")
    const dispatch = useDispatch()
    const id = data.Projects.length + 1
    const handleAddProject = async () => {
        const project = {
            name: projectName,
            id: id,
            slug: projectName.toLowerCase()
                .trim()
                .replace(/[^\w\s-]/g, '')
                .replace(/[\s_-]+/g, '-')
                .replace(/^-+|-+$/g, '') + "-" + id,
            trackedTime: 0,
        }
        await dispatch(addNewProject(project));

    }



    return (
        <>
            <main className={`${darkMode && 'dark'}`}>
                <div className='flex justify-center items-center h-[100vh] dark:bg-[#1f2937] dark:text-white'>
                    <form className='space-y-10 w-[80vh]'>
                        <label>
                            <div className='mb-5 text-center'>
                                Project's Name :
                            </div>
                            <input type="text" name="name" className="border-2 rounded-lg block w-full bg-gray-50 p-3 mb-2 text-sm font-medium text-gray-900 border-gray-300 dark:text-black"
                                onChange={(e) => {
                                    setProjectName(e.target.value)
                                }
                                }
                            />
                        </label>
                        {/* <Link to={`/${projectName.toLowerCase()
                            .trim()
                            .replace(/[^\w\s-]/g, '')
                            .replace(/[\s_-]+/g, '-')
                            .replace(/^-+|-+$/g, '') + '-' + id}`}> */}
                        <button className={'dark:bg-gray-50 border dark:border-gray-300 dark:text-gray-900 text-sm rounded-lg dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'}
                            onClick={async () => {
                                if (projectName != "") {
                                    dispatch(setDisplayProject(data.Projects.length + 1))
                                    await handleAddProject()
                                }


                            }
                            }
                        >
                            Create
                        </button>

                        {/* </Link> */}

                    </form>
                </div>
            </main>


        </>
    );
}

