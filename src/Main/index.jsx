import AddIcon from '@mui/icons-material/Add';
import '../App.css'
import { Task } from './Task';


export const TasksList = () => {
    return (
        <>
               <a href={`/addproject`}>
                    <bottom className='p-8 rounded inline-flex items-center gap-4   justify-start ml-10 mt-5 text-2xl hover:cursor-pointer'>
                <AddIcon className=' border-2 rounded-full border-black dark:border-white' />
                Add task
            </bottom>
                 </a>
          
            <div className='grid px-7 gap-6 py-7'>
                <div className=' font-bold text-xl justify-self-end '>
                    Inbox
                </div>
                <div className='space-x-8  justify-self-end'>
                    <span className='p-1 hover:cursor-pointer  hover:border-2 rounded-md hover:border-gray-300'>
                        All
                    </span>
                    <span className='p-1 hover:cursor-pointer  hover:border-2 rounded-md hover:border-gray-300'>
                        Active
                    </span>
                    <span className='p-1 hover:cursor-pointer  hover:border-2 rounded-md hover:border-gray-300'>
                        Completed
                    </span>
                </div>
                <ul className='space-y-16 py-10'>
                    <li><Task /></li>
                    <li><Task /></li>
                    <li><Task /></li>

                </ul>
            </div>





        </>
    );
}

