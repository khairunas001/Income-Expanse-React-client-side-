import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Swal from 'sweetalert2'

const InputForm = () => {

    const[name, setName]=useState('')
    const[total,SetTotal]=useState(0)
    const URL = 'http://localhost:3000'

    const incomeHandler = () =>{
        axios ({
            method:'POST',
            url: `${URL}/incomes`,
            data:{
                name,total: +total
            }
        })
            .then(result =>{
                console.log(result.data)
                Swal.fire({
                    title: "Mantap Dapet Cuan",
                    text: "Dapet Pendapatan",
                    icon: "success"
                  });
            })
            .catch(err =>{
                console.log(err)
            })
    }

    const expenseHandler = () =>{
        axios ({
            method:'POST',
            url: `${URL}/expenses`,
            data:{
                name,total: +total
            }
        })
            .then(result =>{
                console.log(result.data)
                Swal.fire({
                    title: "Foya Foya Dong",
                    text: "Malah nambah pengeluaran",
                    icon: "success"
                  });
            })
            .catch(err =>{
                console.log(err)
            })
    }
    return(
        <div className='input-form'>
            <div className='form-item' onChange={(e) => setName(e.target.value)}>
                <label>
                    Transaction Name : 
                </label>
                <input type='text' placeholder='Nama Transaksi'></input>
            </div>
            <div className='form-item' onChange={(e) => SetTotal(e.target.value)}>
                <label>
                    Total : 
                </label>
                <input type='text' placeholder='Jumlah Transaksi'></input>
            </div>
            <div className='submit-form'>
                <button onClick={() => incomeHandler()}>
                    Add Income
                </button>
                <button onClick={() => expenseHandler()}>
                    Add Expanse
                </button>
            </div>
        </div>
    )
}

export default InputForm