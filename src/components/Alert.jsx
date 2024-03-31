const Alert = ( {text, type}) => {
  return (
    <div className="absolute top-10 right-0 left-0 flex justify-center items-center">
        <div className={`
        ${type === 'danger' ? 'bg-red-800' : 'bg-blue-800'} 
        p-2 text-indigo-100 lg:rounded-full flex lg:inline-flex items-center rounded-xl`} 
        role="alert">
            <p className=
            {`${type === 'danger' ? 'bg-red-500' : 'bg-blue-800'} 
            flex rounded-full uppercase px-2 py-1 font-semibold mr-3 text-xs`}
            >{type === 'danger' ? 'Failed' : 'Success'}</p>
            <p className="mr-2 text-left">{text}</p>
        </div>
    </div>
  )
}

export default Alert