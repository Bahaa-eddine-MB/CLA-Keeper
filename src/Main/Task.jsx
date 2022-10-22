import DeleteIcon from '@mui/icons-material/Delete';
import SyncIcon from '@mui/icons-material/Sync';
import DoneIcon from '@mui/icons-material/Done';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import '../App.css'
import axios from 'axios'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from 'react';
import PauseIcon from '@mui/icons-material/Pause';
import { useDispatch } from 'react-redux'
import { removeTask, markComplete, markUnComplete, startTimer, pauseTimer } from '../redux/TaskSlice';

const api = axios.create({
    baseURL: 'http://localhost:3500/Tasks'
})



export const Task = ({ name, description, projectid, index, completed, remainingTime, duration, isRunning }) => {

    const [timeleft, setTimeleft] = useState(remainingTime * 60)
    const [isRun, setisRun] = useState(isRunning)
    var temp = timeleft
    const dispatch = useDispatch()
    const handleRemoveTask = async () => {
        const task = {
            id: index,
            projectId: projectid,
            time: remainingTime
        }
        await dispatch(removeTask(task));

    }

    const handleUncompletTask = async () => {
        const task = {
            id: index,
            duration: duration
        }
        await dispatch(markUnComplete(task));

    }

    const handlestartTimer = async () => {
        const task = {
            id: index,
            temp: temp
        }
        await dispatch(startTimer(task));

    }
    const handlepauseTimer = async () => {
        const task = {
            id: index,
            temp: temp
        }
        await dispatch(pauseTimer(task));

    }

    useEffect(() => {
        if (isRun) {
            if (timeleft != 0) {
                temp = timeleft - 1
                setTimeout(function () {
                    //   dispatch(updateTime(index))
                    //   api.patch(`/${index}`, { remainingTime: temp / 60, remainingSeconds: temp })
                    setTimeleft(temp)
                }
                    , 1000);
             

            }
        }
        if (timeleft == 0) {
            api.patch(`/${index}`, { completed: true, isRunning: false, remainingTime: 0, remainingSeconds: 0 })

        }


    })



    return (

        <>

            <div className={` ${completed && "p-5 border-[3px] rounded-md  border-green-500 "}  ${!completed && " p-5 border-[3px] rounded-md  border-orange-400 relative"}`}>
                <h4 className='text-center text-2xl font-bold'>{name}</h4>

                <hr className={`${completed && "hidden"} ${!completed && " mt-5  border-[10px] bg-blue-600 border-blue-600 rounded-full dark:border-orange-400 dark:bg-orange-400"}`} />
                <p className='mt-6 text-gray-500'>{description}</p>
                <div className='flex justify-between mt-4 text-gray-700'>
                    <div>
                        <DeleteIcon className='hover:cursor-pointer' onClick={async () => {
                            await handleRemoveTask()
                        }} />
                    </div>
                    <div>
                        <span className={`${completed && "hidden"}  ${!completed && 'hover:cursor-pointer'} `} onClick={async () => {
                            await dispatch(markComplete(index))
                            setisRun(false)
                        }
                        }>
                            <DoneIcon />
                        </span>
                        <SyncIcon className='hover:cursor-pointer' onClick={async () => {
                            setTimeleft(duration * 60)
                            setisRun(true)
                            await handleUncompletTask()
                        }} />
                    </div>

                </div>




                <div className={` ${completed && "hidden"} ${!completed && 'absolute left-1/2 translate-x-[-50%] bottom-0 translate-y-[50%]  rounded-full shadow-lg '}`}>


                    <div className=' h-14 w-14  bg-white rounded-full'>
                        <CircularProgressbar value={((duration - (timeleft / 60)) * 100) / duration} styles={buildStyles({

                            rotation: 0,
                            strokeLinecap: 'butt',
                            pathTransitionDuration: 0.25,
                            pathColor: `#4169e1`,
                            trailColor: '#d6d6d6',
                            backgroundColor: '#4169e1',
                        })} />

                    </div>
                    <div className='transition  absolute left-1/2  translate-x-[-50%] bottom-0 translate-y-[-50%] rounded-full  bg-white'>

                        <button className=' text-blue-600   dark:text-orange-400'>
                            <div className={`${!isRunning && "transition"}  ${isRun && "hidden transition"}`}>
                                <PlayArrowIcon onClick={async () => {
                                    setisRun(true)
                                    await handlestartTimer()
                                }} />
                            </div>

                            <div className={`${isRunning && "transition"} ${!isRun && "hidden transition"}`}>
                                <PauseIcon onClick={async () => {
                                    setisRun(false)
                                    await handlepauseTimer()
                                }} />
                            </div>

                        </button>

                    </div>


                </div>

            </div>


        </>


    );
}




