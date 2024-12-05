export default function Login(){
    return(
        <div className="grid 
                grid-cols-1
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4 
                gap-10 p-20 h-screen 
                bg-black sm:bg-red-500 md:bg-blue-600 lg:bg-green-600 2xl:bg-slate-600">
            <div className=" h-32 bg-slate-800 sm:bg-red-400 md:bg-blue-500 flex items-center justify-center text-white">#1</div>
            <div className=" h-32 bg-slate-800 sm:bg-red-400 md:bg-blue-500 flex items-center justify-center text-white">#1</div>
            <div className=" h-32 bg-slate-800 sm:bg-red-400 md:bg-blue-500 flex items-center justify-center text-white">#1</div>
            <div className=" h-32 hidden bg-slate-800 sm:bg-red-400 md:bg-blue-500 sm:flex items-center justify-center text-white">#1</div>

        </div>
    )
}