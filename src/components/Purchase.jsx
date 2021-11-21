import React from 'react'
import { NavLink } from 'react-router-dom'

const Purchase = () => {
    return (
        <div className=" mb-16">
            <div className="Purchase_Wrapper max-w-7xl px-5 sm:px-16 lg:flex">
                <div className=" lg:max-w-md relative ">
                    <div className=" Purchase_1  CenterFlex overflow-hidden">
                        <img src="./assets/images/006.png" alt="" className="transition-all duration-1000 cursor-pointer"/>
                    </div>
                    <div className="mt-12 lg:mt-0 grid grid-cols-4 gap-x-3">
                        <div className="flex justify-center">
                            <img src="assets/images/015--thumbs.png" alt="" className="object-cover opacity-60 hover:opacity-100 cursor-pointer transition-all duration-500" />
                        </div>

                        <div className="flex justify-center">
                            <img src="assets/images/016--thumbs.png" alt="" className="object-cover opacity-60 hover:opacity-100 cursor-pointer transition-all duration-500" />
                        </div>
                        
                        <div className="flex justify-center">
                            <img src="assets/images/017--thumbs.png" alt="" className="object-cover opacity-60 hover:opacity-100 cursor-pointer transition-all duration-500" />
                        </div>

                        <div className="flex justify-center">
                            <img src="assets/images/018--thumbs.png" alt="" className="object-cover opacity-60 hover:opacity-100 cursor-pointer transition-all duration-500" />
                        </div>
                        
                    </div>
                </div>

                <div className="flex-1 pl-6 mt-16 lg:mt-0 ">
                    <div className="Wireless_Headphones">
                        <h1 className="sm:text-2xl text-xl">Wireless On-Ear Headphones</h1>
                        <div className="my-3">
                            <p className="mt-6">
                                Quisque viverra accumsan urna fermentum elementum. Etiam vitae elit at nulla egestas efficitur sit amet eu leo. Maecenas maximus leo sed neque molestie, eget fermentum purus lacinia. Nam quis convallis nulla, rhoncus ullamcorper ante. In quis massa vel erat varius scelerisque a maximus enim.
                                
                            </p>
                            <p className="my-3">
                                Fusce volutpat dolor pellentesque, consequat nibh nec, ultrices urna. Proin id eros scelerisque, posuere dolor laoreet, pretium ligula. Donec auctor eget tellus quis imperdiet. Capitalise on low hanging fruit to identify a ballpark value added activity to beta test.
                            </p>
                            <p>Donec pulvinar quam dolor, vitae semper ligula pretium eu. Phasellus vitae turpis vel nisi vehicula pharetra. Cras ac mauris ut ante mattis lobortis ut non ipsum. Aliquam vitae ligula et odio elementum volutpat. Sed id ipsum ultrices, scelerisque velit at, fermentum augue.</p>
                        </div>

                        <div>
                            <h2 className="text-3xl">$299</h2>
                            <NavLink to="#" className="inline-block">
                            <button className="px-6 py-3 text-sm mt-3 transition-all duration-300 rounded-sm">
                                ADD TO CART
                            </button>
                            </NavLink>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Purchase
