import React, { useMemo, useState } from 'react';
import PrimaryButton from '../../components/PrimaryButton';
import CarCard from '../../components/CarCard';
import Navbar from '../../components/Navbar';
import sampleCars from '../../data/cars';

export default function Listing() {
	const [query, setQuery] = useState('');
	const [minQty, setMinQty] = useState(0);
	const [pageSize, setPageSize] = useState(6);
	const [page, setPage] = useState(1);

	const filtered = useMemo(() => {
		const q = query.trim().toLowerCase();
		return sampleCars.filter((c) => {
			if (q && !c.name.toLowerCase().includes(q)) return false;
			if (minQty && c.qty < minQty) return false;
			return true;
		});
	}, [query, minQty]);

	const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
	const paged = useMemo(() => {
		const start = (page - 1) * pageSize;
		return filtered.slice(start, start + pageSize);
	}, [filtered, page, pageSize]);

	const gotoPage = (p) => setPage(Math.min(Math.max(1, p), totalPages));

	return (
		<div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12">
				<Navbar
					onExplore={() => { window.history.pushState({}, '', '/listing'); window.dispatchEvent(new PopStateEvent('popstate')); }}
					onOrder={() => { window.history.pushState({}, '', '/order'); window.dispatchEvent(new PopStateEvent('popstate')); }}
					onHome={() => { window.history.pushState({}, '', '/'); window.dispatchEvent(new PopStateEvent('popstate')); }}
				/>
			<div className="max-w-6xl mx-auto px-4">
				<header className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
					<h1 className="text-3xl font-extrabold">Car Listings</h1>
					<div className="flex items-center gap-3">
						<PrimaryButton label="Create Listing" onClick={() => alert('Create')} />
					</div>
				</header>

				<div className="bg-white rounded-2xl shadow p-4 mb-6">
					<div className="flex flex-col md:flex-row md:items-center md:gap-4">
						<div className="flex-1">
							<input
								placeholder="Search models, e.g. Coupe, Sedan"
								className="w-full border border-gray-200 rounded-md px-4 py-2"
								value={query}
								onChange={(e) => { setQuery(e.target.value); setPage(1); }}
							/>
						</div>

						<div className="w-40 mt-3 md:mt-0">
							<select className="w-full border border-gray-200 rounded-md px-3 py-2" value={minQty} onChange={(e) => { setMinQty(Number(e.target.value)); setPage(1); }}>
								<option value={0}>Any quantity</option>
								<option value={1}>1+</option>
								<option value={2}>2+</option>
								<option value={3}>3+</option>
							</select>
						</div>

						<div className="w-36 mt-3 md:mt-0">
							<select className="w-full border border-gray-200 rounded-md px-3 py-2" value={pageSize} onChange={(e) => { setPageSize(Number(e.target.value)); setPage(1); }}>
								<option value={3}>3 / page</option>
								<option value={6}>6 / page</option>
								<option value={9}>9 / page</option>
							</select>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
								{paged.map((c) => (
									<CarCard
										key={c.id}
										image={c.img}
										name={c.name}
										quantity={c.qty}
										onClick={() => {
											// navigate using the car id to avoid ambiguous names
											const url = `/order?carId=${encodeURIComponent(c.id)}`;
											window.history.pushState({}, '', url);
											window.dispatchEvent(new PopStateEvent('popstate'));
										}}
									/>
								))}
				</div>

				<div className="flex items-center justify-between mt-8">
					<div className="text-sm text-gray-600">Showing {filtered.length} results</div>

					<div className="flex items-center gap-2">
						<button className="px-3 py-1 rounded border" onClick={() => gotoPage(page - 1)} disabled={page === 1}>Prev</button>
						{Array.from({ length: totalPages }).map((_, i) => (
							<button key={i} onClick={() => gotoPage(i + 1)} className={`px-3 py-1 rounded ${page === i + 1 ? 'bg-red-600 text-white' : 'border'}`}>
								{i + 1}
							</button>
						))}
						<button className="px-3 py-1 rounded border" onClick={() => gotoPage(page + 1)} disabled={page === totalPages}>Next</button>
					</div>
				</div>
			</div>
		</div>
	);
}
