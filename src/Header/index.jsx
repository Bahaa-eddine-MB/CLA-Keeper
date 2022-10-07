import MenuIcon from '@mui/icons-material/Menu'
import '../App.css'
import WbSunnyIcon from '@mui/icons-material/WbSunny'
import AddIcon from '@mui/icons-material/Add';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useDispatch, useSelector } from 'react-redux'
import { setDrawer, setDarkMode } from '../redux/mySlice';

export const Header = () => {
    const dispatch = useDispatch()
    const darkMode = useSelector((state) => state.drawer.dark)

    return (
        <nav className=' flex justify-between bg-purple-500 p-4 text-white'>
            <div className='flex'>
                <MenuIcon className='mx-2 hover:cursor-pointer' onClick={() => {
                    dispatch(setDrawer())
                }} />
                <h1 className='uppercase ml-5 font-bold  '>Keeper</h1>
            </div>
            <div className=' flex gap-5 px-5 items-center'>
                <AddIcon className=' border-2 rounded border-white  hover:cursor-pointer ' />
                <PersonOutlineIcon className='hover:cursor-pointer' />
                <span className={`hover:cursor-pointer hover:animate-pulse ${darkMode && "hidden"}`} onClick={() => { dispatch(setDarkMode()) }}>
                    <WbSunnyIcon />
                </span>
                <span className={`hover:cursor-pointer hover:animate-pulse ${!darkMode && "hidden"}`} onClick={() => { dispatch(setDarkMode()) }}>
                    <DarkModeIcon />

                </span>

            </div>
        </nav>
    );
}

