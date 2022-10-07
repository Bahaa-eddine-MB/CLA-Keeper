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


const api = axios.create({
    baseURL: 'http://localhost:3500/Tasks'

})



export const Task = ({ name, description, index, completed, isDeleted, remainingTime, duration, isRunning }) => {
    // const displayProject = useSelector((state) => state.drawer.displayProject)

    //  api.get('/').then(res => {
    //   data =  res.data[displayProject].Tasks
    // })

    const [timeleft, setTimeleft] = useState(remainingTime * 60)
    const [isRun, setisRun] = useState(isRunning)
    var temp = timeleft

    useEffect(() => {

        if (isDeleted == false) {
            if (isRun) {
             //   console.log(timeleft);
                if (timeleft != 0) {
                    temp = timeleft - 1
                    setTimeout(function () {
                        //        api.patch(`/${index}`, { remainingTime: temp / 60, remainingSeconds: temp })
                        setTimeleft(temp)
                    }
                        , 1000);


                }
            }
            if (timeleft == 0) {
                api.patch(`/${index}`, { completed: true, isRunning: false, remainingTime: 0, remainingSeconds: 0 })

            }
        }

    })
    // useEffect(() => {
    //     if (isDeleted == false && isRun && timeleft !=0 ) {
    //                 setTimeout(function () {
    //              //       api.patch(`/${index}`, { remainingTime: temp / 60, remainingSeconds: temp })
    //                     console.log('dooone');
    //                 }
    //                     , 5000);
    //     }
    // })


    return (

        <>

            <div className={` ${isDeleted && 'hidden'} `}>
                <div className={` ${completed && "p-5 border-[3px] rounded-md  border-green-500 "}  ${!completed && " p-5 border-[3px] rounded-md  border-orange-400 relative"}`}>
                    <h4 className='text-center text-2xl font-bold'>{name}</h4>

                    <hr className={`${completed && "hidden"} ${!completed && " mt-5  border-[10px] bg-blue-600 border-blue-600 rounded-full dark:border-orange-400 dark:bg-orange-400"}`} />
                    <p className='mt-6 text-gray-500'>{description}</p>
                    <div className='flex justify-between mt-4 text-gray-700'>
                        <div>
                            <DeleteIcon className='hover:cursor-pointer' onClick={async () => {
                                await api.patch(`/${index}`, { isDeleted: true ,isRunning : false})
                            }} />
                        </div>
                        <div>
                            <span className={`${completed && "hidden"}  ${!completed && 'hover:cursor-pointer'} `} onClick={async () => {
                                api.patch(`/${index}`, { completed: true, isRunning: false, remainingTime: 0, remainingSeconds: 0 })
                                setisRun(false)
                            }
                            }>
                                <DoneIcon />
                            </span>
                            <SyncIcon className='hover:cursor-pointer' onClick={async () => {
                                setTimeleft(duration * 60)
                                setisRun(true)
                                await api.patch(`/${index}`, { completed: false, isRunning: true, remainingTime: duration, remainingSeconds: duration * 60 })
                            }} />
                        </div>

                    </div>




                    <div className={` ${completed && "hidden"} ${!completed && 'absolute left-1/2 translate-x-[-50%] bottom-0 translate-y-[50%]  rounded-full shadow-lg '}`}>


                        <div className=' h-14 w-14  bg-white rounded-full'>
                            <CircularProgressbar value={((duration - (timeleft / 60)) * 100) / duration} styles={buildStyles({

                                rotation: 0.25,
                                strokeLinecap: 'butt',
                                pathTransitionDuration: 0.5,
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

                                        await api.patch(`/${index}`, { isRunning: true,remainingTime: temp / 60, remainingSeconds: temp })
                                    }} />
                                </div>

                                <div className={`${isRunning && "transition"} ${!isRun && "hidden transition"}`}>
                                    <PauseIcon onClick={async () => {
                                        setisRun(false)
                                        await api.patch(`/${index}`, { isRunning: false,remainingTime: temp / 60, remainingSeconds: temp })
                                    }} />
                                </div>

                            </button>

                        </div>


                    </div>

                </div>

            </div>

        </>


    );
}




