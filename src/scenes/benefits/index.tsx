import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import {SelectedPage} from "@/shared/types.ts";
import {motion} from "framer-motion";


type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};
const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section
            id='benefits'
            className='mx-auto min-h-full w-5/6 py-20'
        >
            <motion.div

                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
            >
                <h1 className='basis-3/5 font-montserat text-3xl font-bold'></h1>
                <div>
                    brlklsd
                </div>
            </motion.div>
        </section>
    );
};
export default Benefits;
