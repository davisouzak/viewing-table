import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchBar from '../SearchBar/SearchBar'

interface Employees {
	id: number
	name: string
	job: string
	admission_date: string
	phone: string
	image: string
}

const Table: React.FC = () => {
	const [employees, setEmployees] = useState<Employees[]>([])
	const [searchTerm, setSearchTerm] = useState<string>('')

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await axios.get('/db.json')
				setEmployees(response.data.employees)
			} catch (error) {
				console.error('Erro ao buscar dados:', error)
			}
		}

		fetchData()
	}, [])

	const formatDate = (dateString: string) => {
		const date = new Date(dateString)
		const day = String(date.getDate()).padStart(2, '0')
		const mounth = String(date.getMonth() + 1).padStart(2, '0')
		const year = date.getFullYear()
		return `${day}/${mounth}/${year}`
	}

	const formatPhone = (phone: string) => {
		const cleaned = phone.replace(/\D/g, '')
		return cleaned.replace(/(\d{2})(\d{2})(\d{5})(\d{4})/, '+$1 ($2) $3-$4')
	}

	const filteredEmployees = employees.filter((employee) => {
		const searchLower = searchTerm.toLowerCase()
		return (
			employee.name.toLowerCase().includes(searchLower) ||
			employee.job.toLowerCase().includes(searchLower) ||
			formatPhone(employee.phone).toLowerCase().includes(searchLower)
		)
	})

	return (
		<div className='p-5'>
			<div className='text-2xl flex flex-col sm:flex-row justify-between p-5'>
				<h1 className='font-bold mb-4 sm:mb-0'>Funcionarios</h1>

				<div className='w-full sm:flex justify-end'>
					<SearchBar
						searchTerm={searchTerm}
						onSearchChange={setSearchTerm}
					/>
				</div>
			</div>
			<div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
				<table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
					<thead className='text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400'>
						<tr
							style={{
								backgroundColor: '#0500FF',
								color: '#FFFFFF',
								width: 100,
							}}
						>
							<th
								scope='col'
								className='px-6 py-3'
							>
								FOTO
							</th>
							<th
								scope='col'
								className='px-6 py-3'
							>
								NOME
							</th>
							<th
								scope='col'
								className='px-6 py-3 hidden sm:table-cell'
							>
								CARGO
							</th>
							<th
								scope='col'
								className='px-6 py-3 hidden sm:table-cell'
							>
								DATA DE ADMISSÃO
							</th>
							<th
								scope='col'
								className='px-6 py-3 hidden sm:table-cell'
							>
								TELEFONE
							</th>
						</tr>
					</thead>
					<tbody>
						{filteredEmployees.map((employee) => (
							<tr
								key={employee.id}
								className='bg-white border-b text-black'
							>
								<th
									scope='row'
									className='px-6 py-4 font-medium'
								>
									<img
										src={employee.image}
										alt={employee.name}
										className='w-10 h-10 rounded-full'
									/>
								</th>
								<td className='px-6 py-4'>{employee.name}</td>
								<td className='px-6 py-4 hidden sm:table-cell'>
									{employee.job}
								</td>
								<td className='px-6 py-4 hidden sm:table-cell'>
									{formatDate(employee.admission_date)}
								</td>
								<td className='px-6 py-4 hidden sm:table-cell'>
									{formatPhone(employee.phone)}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Table
