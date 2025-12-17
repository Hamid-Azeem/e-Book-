// // import React,{useState,useEffect} from 'react'
// // import { Link } from 'react-router-dom'
// // import category from '../Categories'
// // const Main = () => {
// //    const api = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// //    const [data, setData] = useState([]);
// //    const [totalBooks, setTotalBooks] = useState(0);
// //    const [totalCat, setTotalCat] = useState(0);
// //    const [totalUsers, setTotalUsers] = useState(0);
// //    const [totalCategories, setTotalCategories] = useState(0);
// //    const [loading, setLoading] = useState(true);
// //    const [error, setError] = useState('');

// //    useEffect(() => {
// //      setLoading(true);
     
// //      // Fetch books
// //      fetch(`${api}/books`)
// //        .then((res) => {
// //          if (!res.ok) throw new Error('Failed to fetch books');
// //          return res.json();
// //        })
// //        .then((data) => {
// //          setData(data);
// //          setTotalBooks(data.length);
         
// //          // Count unique categories from books
// //          const uniqueCategories = new Set(data.map(book => book.category));
// //          setTotalCategories(uniqueCategories.size);
// //          setTotalCat(uniqueCategories.size);
// //        })
// //        .catch((err) => {
// //          console.error('Error fetching books:', err);
// //          setError('Failed to load books');
// //        });

// //      // Fetch users
// //      fetch(`${api}/getuser`)
// //        .then((res) => {
// //          if (!res.ok) throw new Error('Failed to fetch users');
// //          return res.json();
// //        })
// //        .then((users) => {
// //          setTotalUsers(users.length);
// //        })
// //        .catch((err) => {
// //          console.error('Error fetching users:', err);
// //          // Don't show error, just set 0
// //          setTotalUsers(0);
// //        })
// //        .finally(() => {
// //          setLoading(false);
// //        });
// //    }, []);


// //   return (

// //       <div id="main-content" className="h-full w-full bg-gray-50 relative overflow-y-auto">
// //          <main>
// //             <div className="pt-6 px-4">
// //                {error && (
// //                  <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
// //                    {error}
// //                  </div>
// //                )}
// //                <div className="w-full grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-4">
// //                   <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
// //                      <div className="flex items-center justify-between mb-4">
// //                         <div className="flex-shrink-0">
// //                            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{loading ? '-' : totalBooks}</span>
// //                            <h3 className="text-base font-normal text-gray-500">Total Books</h3>
// //                         </div>
// //                         <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
// //                            {totalBooks > 0 ? '✓' : '0'}
// //                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// //                               <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule={"evenodd"} ></path>
// //                            </svg>
// //                         </div>
// //                      </div>
// //                      <div id="main-chart"></div>
// //                   </div>
// //                   <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8  2xl:col-span-2">
// //                      <div className="flex items-center justify-between mb-4">
// //                         <div className="flex-shrink-0">
// //                            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{loading ? '-' : totalCategories}</span>
// //                            <h3 className="text-base font-normal text-gray-500">Total Categories</h3>
// //                         </div>
// //                         <div className="flex items-center justify-end flex-1 text-green-500 text-base font-bold">
// //                            {totalCategories > 0 ? '✓' : '0'}
// //                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// //                               <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule={"evenodd"} ></path>
// //                            </svg>
// //                         </div>
// //                      </div>
// //                      <div id="main-chart"></div>
// //                   </div>
// //                   <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8">
// //                      <div className="flex items-center justify-between mb-4">
// //                         <div className="flex-shrink-0">
// //                            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{loading ? '-' : totalUsers}</span>
// //                            <h3 className="text-base font-normal text-gray-500">Total Users</h3>
// //                         </div>
// //                         <div className="flex items-center justify-end flex-1 text-blue-500 text-base font-bold">
// //                            {totalUsers > 0 ? '✓' : '0'}
// //                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// //                               <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L9 5.414V17a1 1 0 102 0V5.414l6.293 6.293a1 1 0 001.414-1.414l-7-7z"></path>
// //                            </svg>
// //                         </div>
// //                      </div>
// //                      <div id="users-chart"></div>
// //                   </div>
// //                </div>
// //                <div className="mt-4 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
// //                   <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
// //                      <div className="flex items-center">
// //                         <div className="flex-shrink-0">
// //                            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{totalBooks > 0 ? totalBooks : '0'}</span>
// //                            <h3 className="text-base font-normal text-gray-500">Books in Database</h3>
// //                         </div>
// //                         <div className="ml-5 w-0 flex items-center justify-end flex-1 text-green-500 text-base font-bold">
// //                            {totalBooks > 0 ? '100%' : '0%'}
// //                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// //                               <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule={"evenodd"} ></path>
// //                            </svg>
// //                         </div>
// //                      </div>
// //                   </div>
// //                   <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
// //                      <div className="flex items-center">
// //                         <div className="flex-shrink-0">
// //                            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{totalUsers}</span>
// //                            <h3 className="text-base font-normal text-gray-500">Registered Users</h3>
// //                         </div>
// //                         <div className="ml-5 w-0 flex items-center justify-end flex-1 text-blue-500 text-base font-bold">
// //                            {totalUsers > 0 ? totalUsers : '0'}
// //                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// //                               <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule={"evenodd"} ></path>
// //                            </svg>
// //                         </div>
// //                      </div>
// //                   </div>
// //                   <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
// //                      <div className="flex items-center">
// //                         <div className="flex-shrink-0">
// //                            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">{totalCategories}</span>
// //                            <h3 className="text-base font-normal text-gray-500">Categories Used</h3>
// //                         </div>
// //                         <div className="ml-5 w-0 flex items-center justify-end flex-1 text-purple-500 text-base font-bold">
// //                            {totalCategories > 0 ? '✓' : '0'}
// //                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// //                               <path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule={"evenodd"} ></path>
// //                            </svg>
// //                         </div>
// //                      </div>
// //                   </div>
// //                   <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
// //                      <div className="flex items-center">
// //                         <div className="flex-shrink-0">
// //                            <span className="text-2xl sm:text-3xl leading-none font-bold text-gray-900">385</span>
// //                            <h3 className="text-base font-normal text-gray-500">User signups this week</h3>
// //                         </div>
// //                         <div className="ml-5 w-0 flex items-center justify-end flex-1 text-red-500 text-base font-bold">
// //                            -2.7%
// //                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// //                               <path fillRule="evenodd" d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z" clipRule={"evenodd"} ></path>
// //                            </svg>
// //                         </div>
// //                      </div>
// //                   </div>
// //                </div>
// //                <div className="grid grid-cols-1 2xl:grid-cols-2 xl:gap-4 my-4">
// //                   <div className="bg-white shadow rounded-lg mb-4 p-4 sm:p-6 h-full">
// //                      <div className="flex items-center justify-between mb-4">
// //                         <h3 className="text-xl font-bold leading-none text-gray-900">Latest Customers</h3>
// //                         <a href="#" className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2">
// //                         View all
// //                         </a>
// //                      </div>
// //                      <div className="flow-root">
// //                         <ul role="list" className="divide-y divide-gray-200">
// //                            <li className="py-3 sm:py-4">
// //                               <div className="flex items-center space-x-4">
// //                                  <div className="flex-shrink-0">
// //                                     <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/neil-sims.png" alt="Neil image" />
// //                                  </div>
// //                                  <div className="flex-1 min-w-0">
// //                                     <p className="text-sm font-medium text-gray-900 truncate">
// //                                        Neil Sims
// //                                     </p>
// //                                     <p className="text-sm text-gray-500 truncate">
// //                                        <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="17727a767e7b57607e7973646372653974787a">[email&#160;protected]</a>
// //                                     </p>
// //                                  </div>
// //                                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
// //                                     $320
// //                                  </div>
// //                               </div>
// //                            </li>
// //                            <li className="py-3 sm:py-4">
// //                               <div className="flex items-center space-x-4">
// //                                  <div className="flex-shrink-0">
// //                                     <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/bonnie-green.png" alt="Neil image" />
// //                                  </div>
// //                                  <div className="flex-1 min-w-0">
// //                                     <p className="text-sm font-medium text-gray-900 truncate">
// //                                        Bonnie Green
// //                                     </p>
// //                                     <p className="text-sm text-gray-500 truncate">
// //                                        <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="d4b1b9b5bdb894a3bdbab0a7a0b1a6fab7bbb9">[email&#160;protected]</a>
// //                                     </p>
// //                                  </div>
// //                                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
// //                                     $3467
// //                                  </div>
// //                               </div>
// //                            </li>
// //                            <li className="py-3 sm:py-4">
// //                               <div className="flex items-center space-x-4">
// //                                  <div className="flex-shrink-0">
// //                                     <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/michael-gough.png" alt="Neil image" />
// //                                  </div>
// //                                  <div className="flex-1 min-w-0">
// //                                     <p className="text-sm font-medium text-gray-900 truncate">
// //                                        Michael Gough
// //                                     </p>
// //                                     <p className="text-sm text-gray-500 truncate">
// //                                        <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="57323a363e3b17203e3933242332257934383a">[email&#160;protected]</a>
// //                                     </p>
// //                                  </div>
// //                                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
// //                                     $67
// //                                  </div>
// //                               </div>
// //                            </li>
// //                            <li className="py-3 sm:py-4">
// //                               <div className="flex items-center space-x-4">
// //                                  <div className="flex-shrink-0">
// //                                     <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/thomas-lean.png" alt="Neil image" />
// //                                  </div>
// //                                  <div className="flex-1 min-w-0">
// //                                     <p className="text-sm font-medium text-gray-900 truncate">
// //                                        Thomes Lean
// //                                     </p>
// //                                     <p className="text-sm text-gray-500 truncate">
// //                                        <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="284d45494144685f41464c5b5c4d5a064b4745">[email&#160;protected]</a>
// //                                     </p>
// //                                  </div>
// //                                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
// //                                     $2367
// //                                  </div>
// //                               </div>
// //                            </li>
// //                            <li className="pt-3 sm:pt-4 pb-0">
// //                               <div className="flex items-center space-x-4">
// //                                  <div className="flex-shrink-0">
// //                                     <img className="h-8 w-8 rounded-full" src="https://demo.themesberg.com/windster/images/users/lana-byrd.png" alt="Neil image" />
// //                                  </div>
// //                                  <div className="flex-1 min-w-0">
// //                                     <p className="text-sm font-medium text-gray-900 truncate">
// //                                        Lana Byrd
// //                                     </p>
// //                                     <p className="text-sm text-gray-500 truncate">
// //                                        <a href="/cdn-cgi/l/email-protection" className="__cf_email__" data-cfemail="a2c7cfc3cbcee2d5cbccc6d1d6c7d08cc1cdcf">[email&#160;protected]</a>
// //                                     </p>
// //                                  </div>
// //                                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
// //                                     $367
// //                                  </div>
// //                               </div>
// //                            </li>
// //                         </ul>
// //                      </div>
// //                   </div>
// //                   <div className="bg-white shadow rounded-lg p-4 sm:p-6 xl:p-8 ">
// //                      <h3 className="text-xl leading-none font-bold text-gray-900 mb-10">Acquisition Overview</h3>
// //                      <div className="block w-full overflow-x-auto">
// //                         <table className="items-center w-full bg-transparent border-collapse">
// //                            <thead>
// //                               <tr>
// //                                  <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Top Channels</th>
// //                                  <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap">Users</th>
// //                                  <th className="px-4 bg-gray-50 text-gray-700 align-middle py-3 text-xs font-semibold text-left uppercase border-l-0 border-r-0 whitespace-nowrap min-w-140-px"></th>
// //                               </tr>
// //                            </thead>
// //                            <tbody className="divide-y divide-gray-100">
// //                               <tr className="text-gray-500">
// //                                  <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Organic Search</th>
// //                                  <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">5,649</td>
// //                                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
// //                                     <div className="flex items-center">
// //                                        <span className="mr-2 text-xs font-medium">30%</span>
// //                                        <div className="relative w-full">
// //                                           <div className="w-full bg-gray-200 rounded-sm h-2">
// //                                              <div className="bg-cyan-600 h-2 rounded-sm" style={{width:" 30%"}}></div>
// //                                           </div>
// //                                        </div>
// //                                     </div>
// //                                  </td>
// //                               </tr>
// //                               <tr className="text-gray-500">
// //                                  <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Referral</th>
// //                                  <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">4,025</td>
// //                                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
// //                                     <div className="flex items-center">
// //                                        <span className="mr-2 text-xs font-medium">24%</span>
// //                                        <div className="relative w-full">
// //                                           <div className="w-full bg-gray-200 rounded-sm h-2">
// //                                              <div className="bg-orange-300 h-2 rounded-sm" style={{width:" 24%"}}></div>
// //                                           </div>
// //                                        </div>
// //                                     </div>
// //                                  </td>
// //                               </tr>
// //                               <tr className="text-gray-500">
// //                                  <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Direct</th>
// //                                  <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">3,105</td>
// //                                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
// //                                     <div className="flex items-center">
// //                                        <span className="mr-2 text-xs font-medium">18%</span>
// //                                        <div className="relative w-full">
// //                                           <div className="w-full bg-gray-200 rounded-sm h-2">
// //                                              <div className="bg-teal-400 h-2 rounded-sm" style={{width:"18%"}}></div>
// //                                           </div>
// //                                        </div>
// //                                     </div>
// //                                  </td>
// //                               </tr>
// //                               <tr className="text-gray-500">
// //                                  <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Social</th>
// //                                  <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">1251</td>
// //                                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
// //                                     <div className="flex items-center">
// //                                        <span className="mr-2 text-xs font-medium">12%</span>
// //                                        <div className="relative w-full">
// //                                           <div className="w-full bg-gray-200 rounded-sm h-2">
// //                                              <div className="bg-pink-600 h-2 rounded-sm" style={{width:" 12%"}}></div>
// //                                           </div>
// //                                        </div>
// //                                     </div>
// //                                  </td>
// //                               </tr>
// //                               <tr className="text-gray-500">
// //                                  <th className="border-t-0 px-4 align-middle text-sm font-normal whitespace-nowrap p-4 text-left">Other</th>
// //                                  <td className="border-t-0 px-4 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4">734</td>
// //                                  <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
// //                                     <div className="flex items-center">
// //                                        <span className="mr-2 text-xs font-medium">9%</span>
// //                                        <div className="relative w-full">
// //                                           <div className="w-full bg-gray-200 rounded-sm h-2">
// //                                              <div className="bg-indigo-600 h-2 rounded-sm" style={{width:" 9%"}}></div>
// //                                           </div>
// //                                        </div>
// //                                     </div>
// //                                  </td>
// //                               </tr>
// //                               <tr className="text-gray-500">
// //                                  <th className="border-t-0 align-middle text-sm font-normal whitespace-nowrap p-4 pb-0 text-left">Email</th>
// //                                  <td className="border-t-0 align-middle text-xs font-medium text-gray-900 whitespace-nowrap p-4 pb-0">456</td>
// //                                  <td className="border-t-0 align-middle text-xs whitespace-nowrap p-4 pb-0">
// //                                     <div className="flex items-center">
// //                                        <span className="mr-2 text-xs font-medium">7%</span>
// //                                        <div className="relative w-full">
// //                                           <div className="w-full bg-gray-200 rounded-sm h-2">
// //                                              <div className="bg-purple-500 h-2 rounded-sm" style={{width:"7%"}}></div>
// //                                           </div>
// //                                        </div>
// //                                     </div>
// //                                  </td>
// //                               </tr>
// //                            </tbody>
// //                         </table>
// //                      </div>
// //                   </div>
// //                </div>
// //             </div>
// //          </main>
// //          <footer className="bg-white md:flex md:items-center md:justify-between shadow rounded-lg p-4 md:p-6 xl:p-8 my-6 mx-4">
// //             <ul className="flex items-center flex-wrap mb-6 md:mb-0">
// //                <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Terms and conditions</a></li>
// //                <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Privacy Policy</a></li>
// //                <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Licensing</a></li>
// //                <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline mr-4 md:mr-6">Cookie Policy</a></li>
// //                <li><a href="#" className="text-sm font-normal text-gray-500 hover:underline">Contact</a></li>
// //             </ul>
// //             <div className="flex sm:justify-center space-x-6">
// //                <a href="#" className="text-gray-500 hover:text-gray-900">
// //                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// //                      <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule={"evenodd"}  />
// //                   </svg>
// //                </a>
// //                <a href="#" className="text-gray-500 hover:text-gray-900">
// //                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// //                      <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule={"evenodd"}  />
// //                   </svg>
// //                </a>
// //                <a href="#" className="text-gray-500 hover:text-gray-900">
// //                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// //                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
// //                   </svg>
// //                </a>
// //                <a href="#" className="text-gray-500 hover:text-gray-900">
// //                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// //                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule={"evenodd"}  />
// //                   </svg>
// //                </a>
// //                <a href="#" className="text-gray-500 hover:text-gray-900">
// //                   <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
// //                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z" clipRule={"evenodd"}  />
// //                   </svg>
// //                </a>
// //             </div>
// //          </footer>
// //          <p className="text-center text-sm text-gray-500 my-10">
// //             &copy; 2024-2029 <Link to={'/'} className="hover:underline" >Book Store</Link>. All rights reserved.
// //          </p>
// //       </div> 
// //   )
// // }

// // export default Main




// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import category from '../Categories'

// const Main = () => {
//   const api = import.meta.env.VITE_API_URL || 'http://localhost:3000';

//   const [data, setData] = useState([]);
//   const [totalBooks, setTotalBooks] = useState(0);
//   const [totalCat, setTotalCat] = useState(0);
//   const [totalUsers, setTotalUsers] = useState(0);
//   const [totalCategories, setTotalCategories] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     setLoading(true);

//     // Fetch books
//     fetch(`${api}/books`)
//       .then((res) => {
//         if (!res.ok) throw new Error('Failed to fetch books');
//         return res.json();
//       })
//       .then((data) => {
//         setData(data);
//         setTotalBooks(data.length);

//         // Count unique categories from books
//         const uniqueCategories = new Set(data.map(book => book.category));
//         setTotalCategories(uniqueCategories.size);
//         setTotalCat(uniqueCategories.size);
//       })
//       .catch((err) => {
//         console.error('Error fetching books:', err);
//         setError('Failed to load books');
//       });

//     // Fetch users
//     fetch(`${api}/getuser`)
//       .then((res) => {
//         if (!res.ok) throw new Error('Failed to fetch users');
//         return res.json();
//       })
//       .then((users) => {
//         setTotalUsers(users.length);
//       })
//       .catch((err) => {
//         console.error('Error fetching users:', err);
//         // Don't show error, just set 0
//         setTotalUsers(0);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);


//   return (
//     <div className="h-full w-full bg-gray-50/50 min-h-screen relative overflow-y-auto pt-4">
//       <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
//           <p className="text-sm text-gray-500 mt-1">Welcome back, here is what's happening with your store today.</p>
//         </div>

//         {error && (
//           <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl flex items-center">
//             <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
//             {error}
//           </div>
//         )}

//         {/* Primary Stats Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
//           {/* Card 1: Books */}
//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
//             <div className="flex justify-between items-start">
//               <div>
//                 <p className="text-sm font-medium text-gray-500 mb-1">Total Books</p>
//                 <h3 className="text-3xl font-bold text-gray-900">{loading ? '-' : totalBooks}</h3>
//               </div>
//               <div className="p-3 bg-blue-50 rounded-xl">
//                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
//               </div>
//             </div>
//             <div className="mt-4 flex items-center text-sm">
//               <span className="text-green-500 font-bold flex items-center bg-green-50 px-2 py-0.5 rounded-full">
//                  {totalBooks > 0 ? '+' : ''}{totalBooks}
//                  <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
//               </span>
//               <span className="text-gray-400 ml-2">since last month</span>
//             </div>
//             <div id="main-chart" className="mt-2"></div>
//           </div>

//           {/* Card 2: Categories */}
//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
//             <div className="flex justify-between items-start">
//               <div>
//                 <p className="text-sm font-medium text-gray-500 mb-1">Total Categories</p>
//                 <h3 className="text-3xl font-bold text-gray-900">{loading ? '-' : totalCategories}</h3>
//               </div>
//               <div className="p-3 bg-purple-50 rounded-xl">
//                 <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
//               </div>
//             </div>
//             <div className="mt-4 flex items-center text-sm">
//                <span className="text-green-500 font-bold flex items-center bg-green-50 px-2 py-0.5 rounded-full">
//                  {totalCategories > 0 ? '+' : ''}3
//                  <svg className="w-3 h-3 ml-1" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
//               </span>
//               <span className="text-gray-400 ml-2">new added</span>
//             </div>
//              <div id="main-chart" className="mt-2"></div>
//           </div>

//           {/* Card 3: Users */}
//           <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
//             <div className="flex justify-between items-start">
//               <div>
//                 <p className="text-sm font-medium text-gray-500 mb-1">Total Users</p>
//                 <h3 className="text-3xl font-bold text-gray-900">{loading ? '-' : totalUsers}</h3>
//               </div>
//               <div className="p-3 bg-orange-50 rounded-xl">
//                 <svg className="w-6 h-6 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
//               </div>
//             </div>
//             <div className="mt-4 flex items-center text-sm">
//                <span className="text-blue-500 font-bold flex items-center bg-blue-50 px-2 py-0.5 rounded-full">
//                  Active
//               </span>
//               <span className="text-gray-400 ml-2">currently registered</span>
//             </div>
//             <div id="users-chart" className="mt-2"></div>
//           </div>
//         </div>

//         {/* Secondary Stats Row (KPIs) */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
//             <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
//                 <div>
//                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Inventory</p>
//                    <p className="text-lg font-bold text-gray-900 mt-1">{totalBooks > 0 ? totalBooks : '0'} Items</p>
//                 </div>
//                 <div className="h-10 w-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 font-bold text-xs">100%</div>
//             </div>
//              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
//                 <div>
//                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Members</p>
//                    <p className="text-lg font-bold text-gray-900 mt-1">{totalUsers} Registered</p>
//                 </div>
//                  <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs">
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
//                  </div>
//             </div>
//              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
//                 <div>
//                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Variety</p>
//                    <p className="text-lg font-bold text-gray-900 mt-1">{totalCategories} Genres</p>
//                 </div>
//                 <div className="h-10 w-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 font-bold text-xs">
//                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
//                 </div>
//             </div>
//              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex items-center justify-between">
//                 <div>
//                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">This Week</p>
//                    <p className="text-lg font-bold text-gray-900 mt-1">385 Signups</p>
//                 </div>
//                 <div className="h-10 w-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 font-bold text-xs">-2.7%</div>
//             </div>
//         </div>

//         {/* Content Grid */}
//         <div className="grid grid-cols-1 2xl:grid-cols-2 gap-8">
          
//           {/* Latest Customers */}
//           <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 h-full">
//             <div className="flex items-center justify-between mb-6">
//               <h3 className="text-lg font-bold text-gray-900">Latest Customers</h3>
//               <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors">
//                 View all
//               </a>
//             </div>
//             <div className="flow-root">
//               <ul role="list" className="divide-y divide-gray-100">
//                 {[
//                   { name: "Neil Sims", email: "email@example.com", amount: "$320", img: "https://demo.themesberg.com/windster/images/users/neil-sims.png" },
//                   { name: "Bonnie Green", email: "email@example.com", amount: "$3467", img: "https://demo.themesberg.com/windster/images/users/bonnie-green.png" },
//                   { name: "Michael Gough", email: "email@example.com", amount: "$67", img: "https://demo.themesberg.com/windster/images/users/michael-gough.png" },
//                   { name: "Thomas Lean", email: "email@example.com", amount: "$2367", img: "https://demo.themesberg.com/windster/images/users/thomas-lean.png" },
//                   { name: "Lana Byrd", email: "email@example.com", amount: "$367", img: "https://demo.themesberg.com/windster/images/users/lana-byrd.png" }
//                 ].map((user, idx) => (
//                   <li key={idx} className="py-4 hover:bg-gray-50 rounded-lg px-2 transition-colors -mx-2">
//                     <div className="flex items-center space-x-4">
//                       <div className="flex-shrink-0">
//                         <img className="h-10 w-10 rounded-full ring-2 ring-gray-100" src={user.img} alt={user.name} />
//                       </div>
//                       <div className="flex-1 min-w-0">
//                         <p className="text-sm font-semibold text-gray-900 truncate">{user.name}</p>
//                         <p className="text-xs text-gray-500 truncate">{user.email}</p>
//                       </div>
//                       <div className="inline-flex items-center text-sm font-bold text-gray-900">
//                         {user.amount}
//                       </div>
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* Acquisition Overview */}
//           <div className="bg-white shadow-sm border border-gray-100 rounded-2xl p-6 h-full">
//             <h3 className="text-lg font-bold text-gray-900 mb-6">Acquisition Overview</h3>
//             <div className="block w-full overflow-x-auto">
//               <table className="items-center w-full bg-transparent border-collapse">
//                 <thead>
//                   <tr>
//                     <th className="px-4 py-3 bg-gray-50 text-gray-500 align-middle text-xs font-semibold text-left uppercase rounded-l-lg whitespace-nowrap">Top Channels</th>
//                     <th className="px-4 py-3 bg-gray-50 text-gray-500 align-middle text-xs font-semibold text-left uppercase whitespace-nowrap">Users</th>
//                     <th className="px-4 py-3 bg-gray-50 text-gray-500 align-middle text-xs font-semibold text-left uppercase rounded-r-lg whitespace-nowrap w-full">Performance</th>
//                   </tr>
//                 </thead>
//                 <tbody className="divide-y divide-gray-100">
//                   {[
//                     { channel: "Organic Search", users: "5,649", pct: 30, color: "bg-cyan-500" },
//                     { channel: "Referral", users: "4,025", pct: 24, color: "bg-orange-400" },
//                     { channel: "Direct", users: "3,105", pct: 18, color: "bg-teal-500" },
//                     { channel: "Social", users: "1,251", pct: 12, color: "bg-pink-500" },
//                     { channel: "Other", users: "734", pct: 9, color: "bg-indigo-500" },
//                     { channel: "Email", users: "456", pct: 7, color: "bg-purple-500" }
//                   ].map((row, idx) => (
//                     <tr key={idx} className="hover:bg-gray-50 transition-colors">
//                       <th className="border-t-0 px-4 align-middle text-sm font-medium text-gray-900 whitespace-nowrap p-4 text-left">{row.channel}</th>
//                       <td className="border-t-0 px-4 align-middle text-sm text-gray-500 whitespace-nowrap p-4">{row.users}</td>
//                       <td className="border-t-0 px-4 align-middle text-xs whitespace-nowrap p-4">
//                         <div className="flex items-center">
//                           <span className="mr-3 text-xs font-medium text-gray-500 w-6 text-right">{row.pct}%</span>
//                           <div className="relative w-full">
//                             <div className="w-full bg-gray-100 rounded-full h-1.5">
//                               <div className={`${row.color} h-1.5 rounded-full`} style={{ width: `${row.pct}%` }}></div>
//                             </div>
//                           </div>
//                         </div>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <footer className="mt-12 border-t border-gray-200 pt-8">
//            <div className="flex flex-col md:flex-row items-center justify-between">
//               <p className="text-sm text-gray-500">
//                 &copy; {new Date().getFullYear()} <Link to={'/'} className="font-semibold text-blue-600 hover:text-blue-500">Book Store</Link>. All rights reserved.
//               </p>
//               <div className="flex space-x-6 mt-4 md:mt-0">
//                   {/* Social Icons (Standardized) */}
//                   {[1, 2, 3, 4, 5].map((_, i) => (
//                     <a key={i} href="#" className="text-gray-400 hover:text-gray-600 transition-colors">
//                         <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
//                             <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
//                         </svg>
//                     </a>
//                   ))}
//               </div>
//            </div>
//            <div className="flex justify-center mt-4 space-x-6">
//               <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Privacy Policy</a>
//               <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Terms of Service</a>
//               <a href="#" className="text-sm text-gray-500 hover:text-gray-900">Contact Support</a>
//            </div>
//         </footer>

//       </main>
//     </div>
//   )
// }

// export default Main





import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import categoryItems from '../Categories'

const Main = () => {
  const api = import.meta.env.VITE_API_URL || 'http://localhost:3000';

  const [totalBooks, setTotalBooks] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalCategories, setTotalCategories] = useState(categoryItems.length);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);

    Promise.all([
      fetch(`${api}/books`).then(res => res.ok ? res.json() : Promise.reject('Failed to fetch books')),
      fetch(`${api}/getuser`).then(res => res.ok ? res.json() : Promise.reject('Failed to fetch users'))
    ])
    .then(([booksData, usersData]) => {
      setTotalBooks(booksData.length);
      setTotalUsers(usersData.length);
      setLoading(false);
    })
    .catch(err => {
      console.error(err);
      setError('Failed to load dashboard data');
      setLoading(false);
    });
  }, []);

  return (
    <div className="w-full">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-500">Welcome back! Here is what's happening today.</p>
      </div>

      {error && (
        <div className="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded-lg" role="alert">
          {error}
        </div>
      )}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center justify-between hover:shadow-md transition-shadow">
           <div>
              <p className="text-sm font-medium text-gray-500">Total Books</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-1">{loading ? '...' : totalBooks}</h3>
           </div>
           <div className="p-3 bg-blue-50 rounded-lg">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
           </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center justify-between hover:shadow-md transition-shadow">
           <div>
              <p className="text-sm font-medium text-gray-500">Total Categories</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-1">{totalCategories}</h3>
           </div>
           <div className="p-3 bg-purple-50 rounded-lg">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"></path></svg>
           </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex items-center justify-between hover:shadow-md transition-shadow">
           <div>
              <p className="text-sm font-medium text-gray-500">Registered Users</p>
              <h3 className="text-3xl font-bold text-gray-900 mt-1">{loading ? '...' : totalUsers}</h3>
           </div>
           <div className="p-3 bg-green-50 rounded-lg">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Main