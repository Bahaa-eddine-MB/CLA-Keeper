import DeleteIcon from '@mui/icons-material/Delete';
import SyncIcon from '@mui/icons-material/Sync';
import DoneIcon from '@mui/icons-material/Done';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import '../App.css'
import axios from 'axios'



const api = axios.create({
    baseURL: 'http://localhost:3500/Tasks'

})


export const Task = ({ name, description, index, completed, isDeleted }) => {
    // const displayProject = useSelector((state) => state.drawer.displayProject)

    //  api.get('/').then(res => {
    //   data =  res.data[displayProject].Tasks
    // })



    // useEffect(() => {

    //     const updateTask = async () => {
    //           await api.patch(`/${index}`, { completed : false , isRunning : true})
    //     }

    // },[])


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
                                await api.patch(`/${index}`, { isDeleted: true })
                            }} />
                        </div>
                        <div>
                            <span className={`${completed && "hidden"}  ${!completed && 'hover:cursor-pointer'} `} onClick={async () => {
                                //  console.log(index);
                                await api.patch(`/${index}`, { completed: true, isRunning: false })
                            }
                            }>
                                <DoneIcon />
                            </span>
                            <SyncIcon className='hover:cursor-pointer' onClick={async () => {
                                //   console.log(index);

                                await api.patch(`/${index}`, { completed: false, isRunning: true, })
                            }} />
                        </div>

                    </div>
                    <div className={` ${completed && "hidden"} ${!completed && 'absolute left-1/2 translate-x-[-50%] bottom-0 translate-y-[50%] border-4 rounded-full shadow-lg bg-white'}`}>
                        <button className=' text-blue-600  bg-white p-3 rounded-full dark:text-orange-400'>
                            <PlayArrowIcon />
                        </button>
                    </div>

                </div>

            </div>

        </>


    );
}




