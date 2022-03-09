type IFooterProps = {
    className?: string
}
const Footer = (props: IFooterProps) => {
    const { className } = props
    return (
        <div
            className={`pl-6 pr-4 py-4 bg-[#232529] flex  items-center justify-between ${className}`}>
            <div className="flex items-center">
                <div className="relative w-8 h-8 rounded-full before:absolute before:w-2 before:h-2 before:bg-green-500 before:rounded-full before:right-0 before:bottom-0 before:ring-1 before:ring-white">
                    <img
                        className="rounded-full"
                        src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                        alt=""
                    />
                </div>
                <div className="flex flex-col pl-3">
                    <div className="text-sm text-gray-50">Jane Doeson</div>
                    <span className="text-xs text-[#acacb0] font-light tracking-tight">
                        janedoeson@gmail.com
                    </span>
                </div>
            </div>
            <button className="text-gray-400 bg-gray-700 rounded focus:outline-none focus:ring-1 focus:ring-gray-500 focus:text-white">
                <svg
                    className="w-4 h-4 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M15.25 10.75L12 14.25L8.75 10.75"></path>
                </svg>
            </button>
        </div>
    )
}

export default Footer
