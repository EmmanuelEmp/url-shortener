import * as React from 'react';
import { UrlData } from '../../interface/UrlData';
import { Link } from 'react-router-dom';
import { serverUrl } from '../../helpers/Constant';
import axios from 'axios';

interface IDataTableProps {
    data: UrlData[];
    updateReloadState: () => void;
}

const DataTable: React.FunctionComponent<IDataTableProps> = (props) => {
    const {data, updateReloadState} = props;
    console.log("Data in DataTable is :", data)
    const copyToClipboard = async(url:string) => {
        try {
            await navigator.clipboard.writeText(`${serverUrl}/short/${url}`)
            alert(`URL copied: ${serverUrl}/short/${url}`)
        } catch (error) {
            console.log(error)
        }
    }
    const deleteUrl = async(id: string) => {
        const response = await axios.delete(`${serverUrl}/short/${id}`);
        updateReloadState();
        console.log(response)
    } 
    const renderTableData = () => {
        return data.map((item) => {
            return (
                <tr key={item._id} className='border-b text-white bg-gray-600 hover:bg-white hover:text-gray-800'>
                    <td className='px-6 py-3 break-words'>
                        <Link to={item.fullUrl} target='_blank' rel="noreferer noopener">
                            {item.fullUrl}
                        </Link>
                    </td>
                    <td className='px-6 py-3 break-words'>
                        <Link to={`${serverUrl}/short/${item.shortUrl}`} target='_blank' rel= "noreferer noopener">
                            {item.shortUrl}
                        </Link>
                    </td>
                    <td className='px-6 py-3'>{item.clicks}</td>
                    <td className='px-6 py-3'>
                        <div className='flex content-center'>
                            <div className='cursor-pointer px-2'
                            onClick={() => copyToClipboard(item.shortUrl)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z" />
                                </svg>      
                            </div>   
                            <div className='cursor-pointer px-2'
                            onClick={() => deleteUrl(item._id)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 fill-red-500">
                                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                                </svg>
                            </div>     
                        </div>
                    </td>
                </tr>
            )
        })
    };
   
    return (
    <div className='container mx-auto pt-2 pb-10'>
        <div className='relative overflow-x-auto shadow-sm sm:rounded-lg'>
            <table className='w-full table-fixed text-sm text-left rtl: text-right text-gray-500'>
                <thead className='text-md uppercase text-gray-50 bg-gray-700'>
                    <tr>
                        <th scope='col' className='px-6 py-3 w-6/12'>
                         FullUrl
                        </th>
                        <th scope='col' className='px-6 py-3 w-3/12'>
                         ShortUrl
                        </th>
                        <th scope='col' className='px-6 py-3 '>
                        Clicks
                        </th>
                        <th scope='col' className='px-6 py-3'>
                        Action
                        </th>
                    </tr>
                </thead>
                <tbody>{renderTableData()}</tbody>
            </table>
        </div>
    </div>
  )
};

export default DataTable;
