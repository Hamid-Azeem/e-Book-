import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const Register = () => {
	const api = import.meta.env.VITE_API_URL || 'http://localhost:3000';
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setMessage('');

		const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
		const password = form.password.value;

		if (!name || !email || !password) {
			setMessage('❌ All fields are required');
			setLoading(false);
			return;
		}

		if (password.length < 6) {
			setMessage('❌ Password must be at least 6 characters');
			setLoading(false);
			return;
		}

		const user = {
            name: name,
			email: email,
			password: password
		};

		try {
			const response = await fetch(`${api}/register`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(user)
			});

			const data = await response.json();

			if (data.isCreated) {
				setMessage('✅ Account created successfully! Redirecting to login...');
				console.log('User registered:', data);
				setTimeout(() => {
					navigate('/login');
				}, 1500);
			} else {
				setMessage('❌ ' + (data.message || 'Failed to create account'));
				console.log('Registration error:', data);
			}
		} catch (error) {
			setMessage('❌ Error: ' + error.message);
			console.error('Registration error:', error);
		} finally {
			setLoading(false);
		}
    }
  return (
	<>
	


    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
	<div className="relative py-3 sm:max-w-xl sm:mx-auto">
		<div
			className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl">
		</div>
		<div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
			<div className="max-w-md mx-auto">
				<div>
					<h1 className="text-2xl font-semibold">Register Now</h1>
				</div>
				<div className="divide-y divide-gray-200">
					<form onSubmit={(e) => handleSubmit(e)} className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
						<div className="relative">
							<input 
								autoComplete="off" 
								id="name" 
								name="name" 
								type="text" 
								className="border-none outline-none focus:outline-none peer placeholder-transparent transition-all ease-in duration-100 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:borer-rose-600 p-5" 
								placeholder="Name"
								required
							/>
							<label 
								htmlFor="name" 
								className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
							>
								Name
							</label>
						</div>
                        <div className="relative">
							<input 
								autoComplete="off" 
								id="email" 
								name="email" 
								type="email" 
								className="border-none outline-none focus:outline-none peer placeholder-transparent transition-all ease-in duration-100 h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:borer-rose-600 p-5" 
								placeholder="Email address"
								required
							/>
							<label 
								htmlFor="email" 
								className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
							>
								Email Address
							</label>
						</div>
						<div className="relative">
							<input  
								autoComplete="off" 
								id="password" 
								name="password" 
								type="password" 
								className="peer focus:outline-transparent placeholder-transparent h-10 w-full outline-none transition-all ease-in border-none duration-100 focus:outline-none selection:outline-none text-gray-900 border-b-4 border-blue-800 p-5" 
								placeholder="Password"
								required
							/>
							<label 
								htmlFor="password" 
								className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
							>
								Password
							</label>
						</div>
						<div className="relative">
							<button 
								type='submit' 
								disabled={loading}
								className="bg-blue-500 text-white rounded-md px-2 py-1 disabled:bg-gray-400 disabled:cursor-not-allowed"
							>
								{loading ? 'Creating Account...' : 'Sign Up'}
							</button>
						</div>
					</form>
					{message && (
						<div className={`p-3 rounded mt-4 ${message.includes('✅') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
							{message}
						</div>
					)}
				</div>
			</div>
		</div>
	</div>
</div>
</>
  )
}

export default Register