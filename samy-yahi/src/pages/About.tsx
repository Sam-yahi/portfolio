import imageAbout from '../assets/images/About.jpg'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"
import TetrisReveal from "../assets/components/TetrisReveal"

export const About = () => {
  return (
    <div>
      <h1 className='text-3xl font-bold text-left mt-10'>About Me</h1>
      <div className='flex flex-col md:flex-row  mt-4 border-2 border-gray-300 rounded-lg p-4 justify-between '>
       <div className='flex flex-col  w-4/5'>
              <p className='text-lg text-left  text-gray-300  rounded-lg  '>
              I am a passionate web developer with a strong interest in building innovative and user-friendly web applications. I have experience working with various technologies and frameworks, and I am always eager to learn and improve my skills. My goal is to create impactful digital experiences that make a difference.
              </p>
              <div className=' AboutCards flex flex-col w-4/5 mt-4'>
                <div className="card mt-4 p-4 bg-gray-800 rounded-lg m-2 flex flex-col">

                          <Accordion >
                                    <AccordionItem value="shipping">
                                      <AccordionTrigger className=" rounded-lg p-2 flex justify-between items-center w-full">
                                        <h3 className='text-lg text-white  p-2 rounded-lg'>Formation</h3>
                                      </AccordionTrigger>
                                      <AccordionContent>
                                        <h3 className='text-lg text-gold'>University of Boumerdes(2021-2023) - web developement and computer graphics :</h3>
                                        <ul className='text-lg text-white list-disc list-inside'>
                                          <li>CMS </li>
                                          <li>Relevant Coursework: Data Structures, Algorithms, Web Development</li>
                                          <li>Graphic and Motion Design</li>
                                        </ul>
                                      </AccordionContent>
                                    </AccordionItem>
                          </Accordion>

                </div>
              </div>

              <div className=' AboutCards flex flex-col w-4/5 mt-4'>
                <div className="card mt-4 p-4 bg-gray-800 rounded-lg m-2 flex flex-col">

                          <Accordion >
                                    <AccordionItem value="shipping">
                                      <AccordionTrigger className=" rounded-lg p-2 flex justify-between items-center w-full">
                                        <h3 className='text-lg text-white  p-2 rounded-lg'>Experience</h3>
                                      </AccordionTrigger>
                                      <AccordionContent>
                                        <h3 className='text-lg text-gold'>Web Developer & UI UX Designer Intern (2023-03/2023-06) - Ayrade</h3>
                                        <ul className='text-lg text-white list-disc list-inside'>
                                          <li>Designed and developed responsive web applications using modern frameworks</li>
                                          <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
                                          <li>Created wireframes and prototypes to visualize and test user interface concepts</li>
                                        </ul>
                                      </AccordionContent>
                                    </AccordionItem>
                          </Accordion>

                </div>
              </div>

              <div className=' AboutCards flex flex-col w-4/5 mt-4'>
                <div className="card mt-4 p-4 bg-gray-800 rounded-lg m-2 flex flex-col">

                          <Accordion >
                                    <AccordionItem value="shipping">
                                      <AccordionTrigger className=" rounded-lg p-2 flex justify-between items-center w-full">
                                        <h3 className='text-lg text-white  p-2 rounded-lg'>Clubs</h3>
                                      </AccordionTrigger>
                                      <AccordionContent>
                                        <h3 className='text-lg text-gold'>Google Developers Group Boumerdes(2022-2023) - Design team member :</h3>
                                        <ul className='text-lg text-white list-disc list-inside'>
                                          <li>Participated in organizing events and workshops for the Google Developers Group</li>
                                          <li>Created visual assets for promotional materials</li>
                                          <li>Collaborated with team members to brainstorm and develop creative solutions</li>
                                        </ul>
                                      </AccordionContent>
                                    </AccordionItem>
                          </Accordion>

                </div>
              </div>
       </div>
       <div className = 'rounded-lg flex flex-col items-center justify-center'>
                <div className='rounded-lg flex flex-col items-center justify-center'>
                      <TetrisReveal
                        src={imageAbout}
                        size={320}
                        className="border-2 border-gray-300 rounded-lg"
                      />
              </div>
       </div>
      </div>
      
    </div>
  )
}
