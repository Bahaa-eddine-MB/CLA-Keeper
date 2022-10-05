import AddIcon from '@mui/icons-material/Add';
import '../App.css'
import { useSelector, useDispatch } from 'react-redux'
import { setDisplayProject } from '../redux/mySlice';
import data from '../db.json'
import { Link} from 'react-router-dom';



export const Drawer = () => {
    const showDrawer = useSelector((state) => state.drawer.drawer)

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
    const dispatch = useDispatch()




    return (
        <>

            <div className=' p-3'>


                <Link to="/add-project">
                    <div className='bg-blue-100 p-8 rounded flex items-center gap-4 w-11/12 mx-auto justify-center text-2xl hover:cursor-pointer'>
                        <AddIcon className=' border-2 rounded-full border-black' />
                        Add Project
                    </div>
                </Link>



                <div className=' bg-blue-100 mt-3 p-3 rounded uppercase font-bold hover:cursor-pointer'>
                    Stats

                </div>
                <div className='flex justify-center text-gray-400 font-bold p-4'>
                    Projects
                </div>
                <ul className='space-y-4 p-2 overflow-y-auto h-[63vh]'>
                    {
                        data.Projects.map(((project, i) => {
                            return (
                                <>
                                    <li key={i} className=' hover:bg-blue-100 py-3 px-2 hover:cursor-pointer' onClick={() => {
                                        window.location.pathname = `/${project.slug}`
                                        dispatch(setDisplayProject(project.id));    
                                    }}>
                                       
                                        {project.name}
                                       


                                    </li>
                                </>
                            )

                        }))
                    }



                </ul>
            </div>
        </>
    );
}

export default Content;

