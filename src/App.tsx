import Navbar from '@/scenes/navbar';
import {useState} from "react";
import {SelectedPage} from "@/shared/types.ts";




function App() {
    const [selectedPage, useSelectedPage] = useState<SelectedPage>(SelectedPage.Home)

  return (
    <div className='app bg-gray-20'>
        <Navbar
            selectedPage={selectedPage}
            setSelectedPage={selectedPage}
        />
    </div>
  )
}

export default App
