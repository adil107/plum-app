import React from 'react'

const Beat = () => {
    return (
        <div>
            <div className="Beat_Wrapper w-full px-5 lg:px-16 lg:max-w-7xl mx-auto">
                <div className="lg:grid lg:grid-cols-2 gap-8 border-b py-20">
                    <div className=" h-full mb-20 flex justify-center lg:block lg:mb-0" data-aos="fade-right">
                        <img src="./assets/images/006.png" alt="Beats" />
                    </div>
                    <div data-aos="fade-left">
                        <p>
                            Maecenas fringilla mattis quam vitae blandit. Duis fermentum, purus vitae semper sollicitudin, lorem risus pretium nisl, consequat molestie arcu lorem sed odio. Ut mattis rutrum enim, vel cursus turpis ullamcorper nec. Sed a sodales metus. Ut id efficitur felis.
                        </p>
                        <p className="mt-5">
                            Nam rhoncus blandit augue nec condimentum. Aliquam sed risus enim. Donec nisl felis, fermentum eget dolor nec, volutpat pharetra leo. Aenean commodo felis sit amet dolor consequat vestibulum. Cras sit amet risus ante.
                        </p>
                    </div>
                </div>

                <div className="lg:grid lg:grid-cols-2 gap-8 border-b py-20">
                    <div className="mb-20 lg:mb-0" data-aos="fade-right">
                        <p>

                            Integer a fringilla augue, sit amet efficitur arcu. Nullam in odio posuere, tincidunt magna id, consectetur ipsum. Praesent elit lorem, tempor in urna id, placerat venenatis felis. Suspendisse potenti. Pellentesque sit amet dui sit amet dui vestibulum cursus. Mauris ultrices nisl in diam fermentum, id venenatis odio egestas.
                        </p>
                        <p className="mt-5">
                            Sed et odio id libero pulvinar pretium vel at libero. Donec tempor placerat elit, vel lobortis nunc pellentesque in. Quisque turpis arcu, cursus ac placerat et, ultricies ut velit. Morbi nibh lacus, efficitur vel varius non, pellentesque sit amet erat.
                        </p>

                        <p className="mt-5">
                            Etiam porta quam at dictum laoreet. Donec vel enim sit amet massa sagittis egestas. Curabitur eget urna tortor. Pellentesque bibendum tortor eu leo mattis, accumsan venenatis nulla imperdiet. Curabitur elementum id augue non lacinia.
                        </p>
                    </div>
                    <div className="h-full flex justify-center lg:block lg:mb-0"
                        data-aos="fade-left">
                        <img src="./assets/images/007.png" alt="Beats" />
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Beat
