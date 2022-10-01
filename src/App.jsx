import React,{useState} from 'react';
import { Header } from './Header';
import { Drawer } from './Drawer'
import { TasksList } from './Main';
import './App.css'


export const App = () => {

    const [showDrawer, setShowDrawer] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    return (
        <>

            <main className={` w-[100%] ${darkMode && "dark"}`} >
                <div className={` ${showDrawer && "overflow-hidden"}`}>
                    <Header setShowDrawer={setShowDrawer} showDrawer={showDrawer} darkMode={darkMode} setDarkMode={setDarkMode}/>
                    <Drawer showDrawer={showDrawer} />
                    <div className='dark:bg-[#1f2937] dark:text-white'>
                        <h1 className='uppercase text-center pt-16 font-bold text-xl'>PROJECT'S NAME</h1>
                        <TasksList />
                    </div>

                </div>
            </main>
        </>
    );
}




