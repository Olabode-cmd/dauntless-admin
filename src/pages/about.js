import React from "react";
import { useTheme } from 'next-themes'
import { FiSunrise, FiMoon, FiMenu } from 'react-icons/fi'
import { AiFillAndroid, AiFillApple, AiOutlineCheck } from "react-icons/ai";
import Navbar from '../components/navbar';
import Footer from '../components/footer'

function About () {
    const { theme, setTheme } = useTheme()
    return (
        <div>
            <Navbar />

            <section className="bg-slate-100 dark:bg-slate-900">
                <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
                    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
                        <h1 className="text-5xl font-bold leading-none sm:text-6xl dark:text-slate-100 text-zinc-900">
                            <span className="text-yellow-400">Dauntless</span>
                        </h1>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 text-zinc-900 dark:text-slate-400">About Us</p>
                    </div>
                    <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-112 xl:h-112 2xl:h-128">
                        <img src="images/statistics.gif" alt="" className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 rounded" />
                    </div>
                </div>
            </section>

            <section className="dark:bg-coolGray-800 dark:text-coolGray-100 mb-8">
                <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl text-zinc-900 dark:text-slate-200">About Dauntless</h2>
                        {/* <p className="max-w-3xl mx-auto mt-4 text-xl text-center text-yellow-400">Dauntless is </p> */}
                    </div>
                    <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                        <div>
                            <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-coolGray-50">Ad vix debet docendi</h3>
                            <p className="mt-3 text-lg dark:text-coolGray-400">Ne dicta praesent ocurreret has, diam theophrastus at pro. Eos etiam regione ut, persius eripuit quo id. Sit te euismod tacimates.</p>
                            <div className="mt-12 space-y-12">
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-yellow-400 dark:text-slate-200">
                                            <AiOutlineCheck size={"20px"} />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-coolGray-50">Per ei quaeque sensibus</h4>
                                        <p className="mt-2 dark:text-coolGray-400">Ex usu illum iudico molestie. Pro ne agam facete mediocritatem, ridens labore facete mea ei. Pro id apeirian dignissim.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-yellow-400 dark:text-slate-200">
                                            <AiOutlineCheck size={"20px"} />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-coolGray-50">Cu imperdiet posidonium sed</h4>
                                        <p className="mt-2 dark:text-coolGray-400">Amet utinam aliquando ut mea, malis admodum ocurreret nec et, elit tibique cu nec. Nec ex maluisset inciderint, ex quis.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="flex-shrink-0">
                                        <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-yellow-400 dark:text-slate-200">
                                            <AiOutlineCheck size={"20px"} />
                                        </div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-medium leading-6 dark:text-coolGray-50">Nulla omittam sadipscing mel ne</h4>
                                        <p className="mt-2 dark:text-coolGray-400">At sed possim oporteat probatus, justo graece ne nec, minim commodo legimus ut vix. Ut eos iudico quando soleat, nam modus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div aria-hidden="true" className="mt-10 lg:mt-0">
                            <img src="https://source.unsplash.com/random/360x480" alt="image" className="mx-auto rounded-lg shadow-lg dark:bg-coolGray-500" />
                        </div>
                    </div>
                    <div>
                        <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                            <div className="lg:col-start-2">
                                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-coolGray-50">Eam nibh gloriatur ex</h3>
                                <p className="mt-3 text-lg dark:text-coolGray-400">Per odio fabellas consulatu cu. Utroque detracto mel ea, quo te latine theophrastus. Ea his tale nibh dissentias, mei exerci tamquam euripidis cu.</p>
                                <div className="mt-12 space-y-12">
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-yellow-400 dark:text-slate-200">
                                                <AiOutlineCheck size={"20px"} />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 dark:text-coolGray-50">Cibo augue offendit has ad</h4>
                                            <p className="mt-2 dark:text-coolGray-400">An per velit appellantur, ut utinam minimum nominavi sit, odio nostro habemus ne nec. Ne sonet regione contentiones est.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-yellow-400 dark:text-slate-200">
                                                <AiOutlineCheck size={"20px"} />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 dark:text-coolGray-50">At eum ferri luptatum lobortis</h4>
                                            <p className="mt-2 dark:text-coolGray-400">Te per quidam maiorum ocurreret, etiam delicatissimi usu ad. Ne has quod periculis. Te sit primis iisque efficiantur.</p>
                                        </div>
                                    </div>
                                    <div className="flex">
                                        <div className="flex-shrink-0">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-yellow-400 dark:text-slate-200">
                                                <AiOutlineCheck size={"20px"} />
                                            </div>
                                        </div>
                                        <div className="ml-4">
                                            <h4 className="text-lg font-medium leading-6 dark:text-coolGray-50">Dicunt verterem evertitur eu sea</h4>
                                            <p className="mt-2 dark:text-coolGray-400">Audire principes rationibus eam an, autem nominavi luptatum per te. Sumo fabulas vim eu, sonet saperet eleifend ut vix.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
                                <img src="https://source.unsplash.com/random/361x481" alt="" className="mx-auto rounded-lg shadow-lg dark:bg-coolGray-500" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}

export default About