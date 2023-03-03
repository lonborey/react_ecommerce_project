import axios from "axios";
import {useEffect, useState} from 'react'
import NavBar from '../../componants/Navbar'
import Footer from '../../componants/Footer'

const Customer = () => {
    useEffect(()=>{
        getList();
    },[])

const [list, setList] = useState([]) 

const getList = () => {
    axios({
        url: "http://localhost:8000/api/customer",
        method: 'GET',
        //data: {}
        }).then(res => {
            setList(res.data.list)
            console.log(res.data)
        }).catch(error =>{
            console.log(error)
    })
}

    return ( 
        <>
        <NavBar/>


            

            {/* <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="p-1.5 w-full inline-block align-middle">
                        <div className="overflow-hidden border rounded-lg">
                        <h1 className="text-center text-xl mt-5 p-4"> Customer </h1>
                            <table className="min-w-full divide-y divide-gray-200">                            
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">ID</th>
                                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">First Name</th>
                                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Last Name</th>
                                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "> Gender </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "> Date of Birth </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "> Tel </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "> Email </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "> Status </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "> Create at </th>
                                        <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase ">Edit</th>
                                        <th scope="col" className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase ">Delete</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200">
                                    {list.map((item, index) =>{
                                    return(
                                        <tr key={index}>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"> {item.customer_id} </td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"> {item.firstname} </td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"> {item.lastname} </td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"> {item.gender} </td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"> {item.birthdate} </td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"> {item.tel} </td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"> {item.email} </td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"> {item.is_active} </td>
                                            <td className="px-6 py-4 text-sm font-medium text-gray-800 whitespace-nowrap"> {item.create_at} </td>
                                            <td className="px-6 py-4 text-sm font-medium text-blue-500 whitespace-nowrap"> Edit </td>
                                            <td className="px-6 py-4 text-sm font-medium text-red-500 whitespace-nowrap"> Delete </td>
                                        </tr>
                                    )
                                })}                                
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div> */}
            

            <section class="text-gray-600 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-col text-center w-full mb-20">
                <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Customer</h1>
                <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Biodiesel artisan direct trade mumblecore 3 wolf moon twee</p>
                </div>
                <div class="lg:w-3/3 w-full mx-auto overflow-auto">
                <table class="table-auto w-full text-left whitespace-no-wrap">
                    <thead>
                    <tr>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl font-bold">ID</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 font-bold">Firs Name</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 font-bold">Last Name</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 font-bold">Gender</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 font-bold">Date of Birth</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 font-bold">Contact</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 font-bold">Email</th>
                        <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 font-bold">Active</th>
                        <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br font-bold">Action</th>
                        <th class="w-10 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tr rounded-br font-bold"></th>
                    </tr>
                    </thead>
                    <tbody>
                        {list.map((item, index)=>{
                            return(
                                <tr key={index}>
                                    <td class="px-4 py-3">{item.customer_id}</td>
                                    <td class="px-4 py-3">{item.firstname}</td>
                                    <td class="px-4 py-3">{item.lastname}</td>
                                    <td class="px-4 py-3">{item.gender}</td>
                                    <td class="px-4 py-3">{item.birthdate}</td>
                                    <td class="px-4 py-3">{item.tel}</td>
                                    <td class="px-4 py-3">{item.email}</td>
                                    <td class="px-4 py-3 text-lg text-gray-900">{item.is_active}</td>
                                    <td class="w-10 text-center">
                                        <button class="rounded-full text-blue-300 bg-blue-500 text-white w-20 h-8">Edit</button>
                                    </td>
                                    <td class="w-10 text-center">
                                        <button class="rounded-full text-white bg-red-800 w-20 h-8">Delete</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                </div>
            </div>
            </section>


        <Footer/>
        </>
     );
}
 
export default Customer;