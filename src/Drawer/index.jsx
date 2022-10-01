import AddIcon from '@mui/icons-material/Add';
import '../App.css'
import { useSelector} from 'react-redux'

export const Drawer = ({showDrawer}) => {

    return (
        <>
        
            <div className={`absolute z-50 w-full  left-0 bg-[rgba(0,0,0,0.4)] ${!showDrawer && " h-0 w-0"}`}>
                <div className={`w-1/4  h-full bg-white ${!showDrawer && "w-0"}`}>
                    {showDrawer &&
                        <Content />}
                </div>
            </div>

        </>


    );
}

const Content = () => {



    return (
        <>

            <div className=' p-3'>
                 <a href={`/addproject`}>
                      <div className='bg-blue-100 p-8 rounded flex items-center gap-4 w-11/12 mx-auto justify-center text-2xl hover:cursor-pointer'>
                        <AddIcon className=' border-2 rounded-full border-black' />
                        Add Project
                    </div>
                 </a>
                {/* <Link to="/addproject">
                  
                </Link> */}



                <div className=' bg-blue-100 mt-3 p-3 rounded uppercase font-bold hover:cursor-pointer'>
                    Stats

                </div>
                <div className='flex justify-center text-gray-400 font-bold p-4'>
                    Projects
                </div>
                <ul className='space-y-4 p-2'>
                  
                    <li className=' hover:bg-blue-100 py-3 px-2 hover:cursor-pointer'>Project 1</li>
                    <li className=' hover:bg-blue-100 py-3 px-2 hover:cursor-pointer'>Project 2</li>
                    <li className=' hover:bg-blue-100 py-3 px-2 hover:cursor-pointer'>Project 3</li>
                    <li className=' hover:bg-blue-100 py-3 px-2 hover:cursor-pointer'>Project 4</li>
                    <li className=' hover:bg-blue-100 py-3 px-2 hover:cursor-pointer'>Project 1</li>
                    <li className=' hover:bg-blue-100 py-3 px-2 hover:cursor-pointer'>Project 2</li>
                    <li className=' hover:bg-blue-100 py-3 px-2 hover:cursor-pointer'>Project 3</li>
                    <li className=' hover:bg-blue-100 py-3 px-2 hover:cursor-pointer'>Project 4</li>
                    <li className=' hover:bg-blue-100 py-3 px-2 hover:cursor-pointer'>Project 1</li>
                    <li className=' hover:bg-blue-100 py-3 px-2 hover:cursor-pointer'>Project 2</li>
                    <li className=' hover:bg-blue-100 py-3 px-2 hover:cursor-pointer'>Project 3</li>
                    <li className=' hover:bg-blue-100 py-3 px-2 hover:cursor-pointer'>Project 4</li>

                </ul>
            </div>
        </>
    );
}

export default Content;

