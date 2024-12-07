/* eslint-disable react/prop-types */
function CoverSection({ onShowAddNote }) {
    return (
        <section className="h-[80vh] w-full flex flex-row px-40 pt-24 justify-between items-center mb-12">
            <div className="w-[35%] h-full flex flex-col justify-between items-start pb-28 pt-12">
                <h1 className="font-bold text-7xl">Collect Your Thoughts.</h1>
                <div className="flex justify-between items-center w-full">
                    <div className="relative">
                        <button onClick={onShowAddNote} className="p-4 bg-black text-white font-semibold text-xl border-2 border-black hover:bg-white hover:text-black transition-all ease-in-out duration-300">Create Notes</button>
                        <div className="w-full h-full border-2 border-black absolute -z-10 -bottom-2 -right-2"></div>
                    </div>
                    <p className="max-w-[50%] text-lg font-medium">Take notes the simple way for free. Forever.</p>
                </div>
            </div>
            <img src="./assets/cover.svg" alt="" className="h-full w-auto object-cover" />
        </section>
    )
}

export default CoverSection