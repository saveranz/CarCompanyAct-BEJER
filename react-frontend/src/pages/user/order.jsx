import React, { useEffect, useState } from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import Navbar from '../../components/Navbar';
import sampleCars from '../../data/cars';


export default function Order() {
	const [selectedId, setSelectedId] = useState(null);
	const [selectedName, setSelectedName] = useState('');

	useEffect(() => {
		const params = new URLSearchParams(window.location.search || '');
		const carId = params.get('carId');
		if (carId) {
			const id = Number(carId);
			setSelectedId(id);
			const found = sampleCars.find((c) => c.id === id);
			if (found) setSelectedName(found.name);
		}
	}, []);

	useEffect(() => {
		if (selectedId == null && sampleCars.length > 0) {
			setSelectedId(sampleCars[0].id);
			setSelectedName(sampleCars[0].name);
		}
	}, [selectedId]);

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
			<Navbar
				onExplore={() => { window.history.pushState({}, '', '/listing'); window.dispatchEvent(new PopStateEvent('popstate')); }}
				onOrder={() => { window.history.pushState({}, '', '/order'); window.dispatchEvent(new PopStateEvent('popstate')); }}
				onHome={() => { window.history.pushState({}, '', '/'); window.dispatchEvent(new PopStateEvent('popstate')); }}
			/>
			<div className="max-w-3xl mx-auto px-4">
				<h1 className="text-3xl font-extrabold mb-6">Place an Order</h1>
				<div className="bg-white rounded-2xl shadow-lg p-6">
					<label className="block mb-3">
						<span className="text-gray-700">Select Car</span>
						<select className="mt-1 block w-full rounded-md border-gray-200" value={selectedId ?? ''} onChange={(e) => {
							const id = Number(e.target.value);
							setSelectedId(id);
							const found = sampleCars.find((c) => c.id === id);
							setSelectedName(found ? found.name : '');
						}}>
							{sampleCars.map((c) => (
								<option key={c.id} value={c.id}>{c.name}</option>
							))}
						</select>
					</label>
+
					<div className="mb-4 text-sm text-gray-600">Selected: <strong>{selectedName}</strong></div>

					<label className="block mb-3">
						<span className="text-gray-700">Full name</span>
						<input className="mt-1 block w-full rounded-md border-gray-200" />
					</label>

					<label className="block mb-6">
						<span className="text-gray-700">Contact</span>
						<input className="mt-1 block w-full rounded-md border-gray-200" />
					</label>

					<PrimaryButton label="Place Order" variant="primary" onClick={() => alert(`Order placed for ${selected} (demo)`)} />
				</div>
			</div>
		</div>
	);
}
