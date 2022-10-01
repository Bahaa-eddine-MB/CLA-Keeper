import '../App.css'

export const AddProject = () => {
    return (
        <>
        <main className='dark'>
            <div className='flex justify-center items-center h-[100vh] dark:bg-[#1f2937] dark:text-white'>
            <form  className='space-y-10 w-[80vh]'>
                <label>
                    <div className='mb-5 text-center'>
                        Project's Name:

                    </div>
                    <input type="text" name="name" className="border-2 rounded-lg block w-full bg-gray-50 p-3 mb-2 text-sm font-medium text-gray-900 border-gray-300 dark:text-black" />
                </label>
                <input type="submit" value="Create" className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500' />
            </form>  
        </div>   
        </main>
     
          
        </>
    );
}

