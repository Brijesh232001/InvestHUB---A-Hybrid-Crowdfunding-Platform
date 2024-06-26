import React from 'react'
import Head from 'next/head';
import Image from 'next/image';

const loading = () => {
  return (
    <>
    <div className="flex justify-center items-center h-screen">
			<Head>
				<title>Loading...</title>
			</Head>
			<div className="animate-spin">
				<Image
					src="/images/icon_loading.png"
					alt="Loading Spinner"
					width={300}
					height={300}
				/>
			</div>
		</div>
    </>
  )
}

export default loading
