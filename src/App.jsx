
import { Header } from './Header';
import { Drawer } from './Drawer'
import { TasksList } from './Main';
import './App.css'
import { useSelector } from 'react-redux'
import data from './db.json'
import { Route, Routes } from 'react-router-dom'
import { AddTask } from './Main/AddTask';
import { AddProject } from './Drawer/AddProject';





export const App = () => {
    const displayProject = useSelector((state) => state.drawer.projectId)
    const showDrawer = useSelector((state) => state.drawer.drawer)
    const darkMode = useSelector((state) => state.drawer.dark)
    return (
        <>

            <main className={` w-[100%]  ${darkMode && " dark "}`} >
                <div className={` ${showDrawer && "overflow-hidden h-[100vh]"}`}>
                    <Header />
                    <Drawer />
                    <div className='dark:bg-[#1f2937] dark:text-white dark:min-h-[92.5vh]'>

                        <Routes>
                            <Route path={`/${data.Projects[displayProject - 1].slug}`} element={<TasksList />} />
                            <Route path={`/${data.Projects[displayProject - 1].slug}/add-task`} element={<AddTask />} />
                            <Route path={`/add-project`} element={<AddProject />} />
                        </Routes>
                    </div>

                </div>
            </main>
        </>
    );
}




