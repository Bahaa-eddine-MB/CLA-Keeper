import AddIcon from '@mui/icons-material/Add';
import '../App.css'
import { Task } from './Task';
import { useSelector, useDispatch } from 'react-redux'
import { setAll, setActive, setCompleted } from '../redux/mySlice'
import { useEffect, useState } from 'react';
import data from '../db.json'
import {Link } from 'react-router-dom'



export const TasksList = () => {
    const displayProject = useSelector((state) => state.drawer.projectId)
    const [myTask, setTask] = useState([])
    const [showLoading, setShowloading] = useState(true)
    const temp1 = window.location.pathname.slice(1,window.location.pathname.length).split('-') 
    const prId = temp1[temp1.length -1]
    // eslint-disable-next-line react-hooks/exhaustive-deps
    var temp = []
    console.log(prId)
    // console.log(data)
    useEffect(() => {

        // eslint-disable-next-line array-callback-return, react-hooks/exhaustive-deps, eqeqeq
        temp = data.Tasks.filter(task => task.projectId == prId)
        // data.Tasks.map((task) => {
        //     // eslint-disable-next-line eqeqeq
        //     if (task.projectId == displayProject) {
        //         temp.push(task)
        //     }

        // })
        console.log(temp)
        setTask(temp)
        setTimeout(function () {
            setShowloading(false)
        }
            , 1000);
    }, [])

    // useEffect(()=>{

    // }, [prId])
    const filter = useSelector((state) => state.drawer.filter)
    const dispatch = useDispatch()



    return (
        <> <h1 className='uppercase text-center pt-16 font-bold text-xl'>{
            data.Projects[displayProject - 1].name
        }</h1>
                <Link to={`/${data.Projects[displayProject - 1].slug}/add-task`} reloadDocument>
                    <button className='p-8 rounded inline-flex items-center gap-4   justify-start ml-10 mt-5 text-2xl hover:cursor-pointer'>
                        <AddIcon className=' border-2 rounded-full border-black dark:border-white' />
                        Add task
                    </button>
                </Link>


            <div className='grid px-7 gap-6 py-7'>
                <div className=' font-bold text-xl justify-self-end '>
                    Inbox
                </div>
                <div className='space-x-8  justify-self-end'>
                    <span onClick={() => {
                        dispatch(setAll())
                    }} className={`p-1 hover:cursor-pointer  hover:border-2 rounded-md hover:border-gray-300 ${filter === "all" && "border-2 rounded-md border-gray-300"}`}>
                        All
                    </span>
                    <span onClick={() => {

                        dispatch(setActive())
                    }} className={`p-1 hover:cursor-pointer  hover:border-2 rounded-md hover:border-gray-300 ${filter === "active" && "border-2 rounded-md border-gray-300"}`}>
                        Active
                    </span>
                    <span onClick={() => {

                        dispatch(setCompleted())
                    }} className={`p-1 hover:cursor-pointer  hover:border-2 rounded-md hover:border-gray-300 ${filter === "completed" && "border-2 rounded-md border-gray-300"}`}>
                        Completed
                    </span>
                </div>
                <span className={`${!showLoading && "hidden"} ${showLoading && "p-3 py-1  justify-self-end dark:bg-slate-400  border-2 border-slate-700 dark:border-gray-600 rounded-md"}`}>
                    <p className='dark:text-white '>Loading ...</p>
                 
                </span>
                <ul className={`${showLoading && 'hidden'} ${!showLoading && 'space-y-16 py-10'}`}>

                    {
                        myTask.filter((task) => {
                            if (filter === "all") {
                                return true
                            }
                            else if (filter === "completed") {
                                return task.completed
                            }
                            else if (filter === "active") {
                                return task.isRunning
                            }
                            else return false
                        }).map(((task, i) => {
                            return (
                                <li key={i}><Task name={task.name} description={task.description} projectid={task.projectId} index={task.id} completed={task.completed}  remainingTime={task.remainingTime} duration={task.duration} isRunning={task.isRunning} /></li>
                            )

                        }))



                    }


                </ul>
            </div>
         




        </>
    );
}

