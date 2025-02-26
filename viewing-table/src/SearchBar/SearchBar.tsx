export default function SearchBar() {
	return (
		<div className='w-full max-w-sm min-w-[200px]'>
			<div className='relative'>
				<input
					className='w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-28 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow'
					placeholder='Pesquisar'
				/>
				<button
					className='absolute top-1 right-1 flex items-center rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white'
					type='button'
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 24 24'
						fill='#94A3B8'
						className='w-4 h-4 mr-2'
					>
						<path d='M10 2a8 8 0 105.293 14.707l4.5 4.5a1 1 0 001.414-1.414l-4.5-4.5A8 8 0 0010 2zM4 10a6 6 0 1112 0 6 6 0 01-12 0z' />
					</svg>
				</button>
			</div>
		</div>
	)
}
