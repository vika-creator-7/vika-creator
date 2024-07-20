'use client'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Popup = () => {
	const [visible, setVisible] = useState(false)

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(true)
			document.body.style.overflow = 'hidden'
		}, 5000) //

		return () => {
			clearTimeout(timer)
		} // Очистка таймера при размонтировании компонента
	}, [])

	if (!visible) return null

	return (
		<div className='fixed rounded-2xl top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50'>
			<div className='relative bg-[#e1a421] p-4 rounded shadow-lg w-96'>
				<button
					onClick={() => {
						setVisible(false)
						document.body.style.overflow = 'auto'
					}}
					className='absolute top-2 right-2 text-gray-600 hover:text-gray-900'
				>
					<Image src='/close.png' alt='close' width={25} height={25} />
				</button>
				<h2 className='text-xl font-bold mb-4 '>Отримай подарунок!</h2>
				<p>Придбай курс та отримай подарунок.</p>
			</div>
		</div>
	)
}

export default Popup