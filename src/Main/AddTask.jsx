import '../App.css'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import axios from 'axios'
import data from '../db.json'
import { duration } from '@mui/material'
import { Link } from 'react-router-dom'


const api = axios.create({
    baseURL: `http://localhost:3500/Tasks`
})
const api2 = axios.create({
    baseURL: `http://localhost:3500/Projects`
})


export const AddTask = () => {


    const darkMode = useSelector((state) => state.drawer.dark)
    const [taskName, setTaskName] = useState("")
    const [taskDes, setTaskDes] = useState("")
    const [taskDuration, setTaskDuration] = useState(0)
    const displayProject = useSelector((state) => state.drawer.projectId)


    return (
        <>
            <main className={`${darkMode && 'dark'}`}>
                <div className=' text-center font-bold  text-3xl py-14 dark:bg-[#1f2937] dark:text-white '>

                    Add a Task to {data.Projects[displayProject - 1].name}
                </div>
                <div className='flex justify-center py-10 h-[81.2vh]  dark:bg-[#1f2937] dark:text-white'>
                    <form className='space-y-10 w-[80vh]'>
                        <label >
                            <div className='mb-4 text-start'>
                                Task's Name:

                            </div>
                            <input type="text" name="name" className="mb-8 border-2 rounded-lg block w-full bg-gray-50 p-3  text-sm font-medium text-gray-900 border-gray-300 dark:text-black"
                                onChange={(e) => {
                                    setTaskName(e.target.value)
                                }
                                }
                            />
                        </label>
                        <label>
                            <div className='mb-4 text-sart'>
                                Tasks's duration in mins:

                            </div>
                            <input type="number" name="duration" className="border-2 rounded-lg block w-full bg-gray-50 p-3 mb-8 text-sm font-medium text-gray-900 border-gray-300 dark:text-black"
                                onChange={(e) => {
                                    setTaskDuration(e.target.value)
                                }
                                }
                            />
                        </label>
                        <label>
                            <div className='mb-4 text-start'>
                                Description:

                            </div>
                            <textarea rows={5} type="text" name="duration" className=" border-2 rounded-lg block w-full bg-gray-50 p-3 mb-8 text-sm font-medium text-gray-900 border-gray-300 dark:text-black"
                                onChange={(e) => {
                                    setTaskDes(e.target.value)
                                }

                                }
                            />
                        </label>
                        <Link  to={`/${data.Projects[displayProject - 1].slug}`}>
                            <button className='font-bold dark:bg-gray-50 border dark:border-gray-300 dark:text-gray-900 text-sm rounded-lg dark:focus:ring-blue-500 dark:focus:border-blue-500 block w-full p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500'
                                onClick={async () => {
                                    if (taskName != "" && taskDes != "" && taskDuration != 0) {
                                        await api.post('/', {
                                            id: data.Tasks.length + 1,
                                            name: taskName,
                                            description: taskDes,
                                            duration: taskDuration,
                                            projectId: displayProject,
                                            isRunning: true,
                                            remainingTime: taskDuration,
                                            remainingSeconds: taskDuration * 60,
                                            completed: false,
                                            isDeleted: false
                                        })
                                        await api2.post('/', {
                                            trackedTime: data.Projects[1].trackedTime + duration

                                        })

                                    }
                                }
                                }
                            >
                                Create
                            </button>
                        </Link>

                    </form>
                </div>
            </main>


        </>
    );
}

