import { type ReactNode } from 'react'


export default function Responses({children}: {children: ReactNode}){
    return(
        <div className="mx-auto mt-4 w-full max-w-4xl">
        <div className="relative mx-auto mt-4 max-w-2xl overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
          
            
                        {children}
            </table>
        </div>
        </div>
    )
}