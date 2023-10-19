
type ResponsItemProps = {
    id: string
    title: string
    category: string
    price: number
    questionId: string
    onDelete?: (id: string) => void
  

}

export default function ResponseItem( props: ResponsItemProps){
    const {id, title, category, price, questionId , onDelete} = props

    function handleDelete() {
        onDelete?.(id) // Calls the onDelete function if it exists, passing the id as an argument
      }
    
    return(
            <tr className="border-b bg-white dark:border-gray-700 dark:bg-gray-800">
                <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {id}
                    </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {title}</td>
                <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {category}</td>
                <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                    {price}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
                {questionId}
             </td>
                    {onDelete ? (
        <td className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white">
          <button   
            onClick={handleDelete} // Call the handleDelete function when the button is clicked
            className="text-red-300"
          >
            Slett
          </button>
        </td>
      ) : null}
            </tr>
           
    )
}